"use client"

import React, { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-40px shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName.trim()}`}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      // Updated transition to include opacity and be simpler for a 'straight' stack
      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s, opacity 0.5s",
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  // Removed itemScale, itemScale, baseScale, rotationAmount
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  // Removed scaleDuration
  blurAmount?: number;
  opacityAmount?: number; // ✨ New prop for opacity control
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  // Removed itemScale, baseScale, rotationAmount
  itemStackDistance = 45,
  stackPosition = "25%",
  scaleEndPosition = "8%",
  // Removed scaleDuration
  blurAmount = 5,
  opacityAmount = 0.2, // ✨ Default for new opacity effect
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef<Map<number, any>>(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? (document.querySelector(".scroll-stack-end") as HTMLElement | null)
      : (scrollerRef.current?.querySelector(".scroll-stack-end") as HTMLElement | null);

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    // Determine which card is currently the 'top' card (the one at the stacking position)
    let topCardIndex = 0;
    for (let j = 0; j < cardsRef.current.length; j++) {
      const jCardTop = getElementOffset(cardsRef.current[j]);
      const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
      if (scrollTop >= jTriggerStart) {
        topCardIndex = j;
      } else {
        // Since the cards are in order, we can break early
        break;
      }
    }


    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s, opacity 0.5s";
      const cardTop = getElementOffset(card);

      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      // ✨ Straight stack: Scale and rotation are fixed (or removed)
      const scale = 1; 
      const rotation = 0;
      let opacity = 1; 
      let blur = 0;

      // Logic for blur
      if (blurAmount) {
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      // ✨ New logic for opacity
      if (opacityAmount) {
        if (i < topCardIndex) {
            const depthInStack = topCardIndex - i;
            // Opacity decreases by opacityAmount for each card below the top one, minimum 0.1
            opacity = Math.max(0.1, 1 - depthInStack * opacityAmount);
        }
      }


      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        // Pinning to the stack position
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        // After the pinning section ends
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: scale, // Fixed at 1 for straight stack
        rotation: rotation, // Fixed at 0 for straight stack
        blur: Math.round(blur * 100) / 100,
        opacity: Math.round(opacity * 1000) / 1000, // ✨ New opacity value
      };
      
      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.25 ||
        // Only checking scale if we were going to use it, but keeping structure simplified
        Math.abs(lastTransform.scale - newTransform.scale) > 0.008 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.25 ||
        Math.abs(lastTransform.opacity - newTransform.opacity) > 0.005 || // ✨ Check for opacity change
        Math.abs(lastTransform.blur - newTransform.blur) > 0.25;

      if (hasChanged) {
        // Apply transform and filter/opacity
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";
        card.style.transform = transform;
        card.style.filter = filter;
        card.style.opacity = `${newTransform.opacity}`; // ✨ Apply opacity
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
    isUpdatingRef.current = false;
  }, [
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    blurAmount,
    opacityAmount, // ✨ Added to dependencies
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  // Lenis always stays live and active
  const setupLenis = useCallback(() => {
    if (lenisRef.current) lenisRef.current.destroy();
    let lenis;
    if (useWindowScroll) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1.1,
        lerp: 0.093,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });
      lenis.on("scroll", updateCardTransforms);
      lenisRef.current = lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: "vertical",
        wheelMultiplier: 1.1,
        lerp: 0.093,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });
      lenis.on("scroll", updateCardTransforms);
      lenisRef.current = lenis;
    }
    // Kick off the animation loop, never stopped until unmount
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
  }, [updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;
    // Always update cards list on every render
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []),
    ) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter, opacity"; // ✨ Added opacity
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.perspective = "1000px";
      card.style.webkitPerspective = "1000px";
      card.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s, opacity 0.5s"; // ✨ Added opacity
    });
    setupLenis();
    updateCardTransforms();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    children,
    itemDistance,
    // REMOVED: itemScale, baseScale, rotationAmount, scaleDuration, etc.
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    blurAmount,
    opacityAmount, // ✅ CORRECTED: Included new prop
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]); // ✅ Dependency array is now stable

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-outer scroll-stack relative overflow-y-auto ${className}`}
      style={{ overscrollBehavior: "none" }}
    >
      <div className="scroll-stack-inner">{children}</div>
      <div className="scroll-stack-end" aria-hidden="true" style={{ height: "50vh" }} />
    </div>
  );
};

export default ScrollStack;
