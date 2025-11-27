(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnhancedScrollIndicator",
    ()=>EnhancedScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function EnhancedScrollIndicator() {
    _s();
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedScrollIndicator.useEffect": ()=>{
            const updateScrollProgress = {
                "EnhancedScrollIndicator.useEffect.updateScrollProgress": ()=>{
                    // Calculate how far down the page the user has scrolled
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = scrollTop / docHeight;
                    setScrollProgress(scrollPercent);
                    // Show indicator only after scrolling a bit
                    setIsVisible(scrollTop > 100);
                }
            }["EnhancedScrollIndicator.useEffect.updateScrollProgress"];
            // Add scroll event listener
            window.addEventListener("scroll", updateScrollProgress);
            // Initial calculation
            updateScrollProgress();
            // Clean up event listener
            return ({
                "EnhancedScrollIndicator.useEffect": ()=>window.removeEventListener("scroll", updateScrollProgress)
            })["EnhancedScrollIndicator.useEffect"];
        }
    }["EnhancedScrollIndicator.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    // Format the percentage for display
    const progressPercentage = Math.min(Math.round(scrollProgress * 100), 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-16 sm:bottom-20 right-3 sm:right-6 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm cursor-pointer hover:bg-zinc-700/80 transition-colors",
                    onClick: scrollToTop,
                    role: "button",
                    "aria-label": "Scroll to top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-10 h-10 sm:w-12 sm:h-12 absolute top-0 left-0 -rotate-90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "20",
                                    cy: "20",
                                    r: "18",
                                    fill: "none",
                                    stroke: "#27272a",
                                    strokeWidth: "2",
                                    className: "sm:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "24",
                                    cy: "24",
                                    r: "20",
                                    fill: "none",
                                    stroke: "#27272a",
                                    strokeWidth: "2",
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "20",
                                    cy: "20",
                                    r: "18",
                                    fill: "none",
                                    stroke: "url(#gradient)",
                                    strokeWidth: "2",
                                    strokeDasharray: `${2 * Math.PI * 18}`,
                                    strokeDashoffset: `${2 * Math.PI * 18 * (1 - scrollProgress)}`,
                                    strokeLinecap: "round",
                                    className: "sm:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "24",
                                    cy: "24",
                                    r: "20",
                                    fill: "none",
                                    stroke: "url(#gradient)",
                                    strokeWidth: "2",
                                    strokeDasharray: `${2 * Math.PI * 20}`,
                                    strokeDashoffset: `${2 * Math.PI * 20 * (1 - scrollProgress)}`,
                                    strokeLinecap: "round",
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "gradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#06b6d4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#3b82f6"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronUp, {
                                className: "h-4 w-4 sm:h-5 sm:w-5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 sm:mt-2 text-xs font-medium bg-zinc-800/80 backdrop-blur-sm text-white px-2 py-1 rounded-md",
                    children: [
                        progressPercentage,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-scroll-indicator.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(EnhancedScrollIndicator, "FejIHpCXBB29KNLTJCmJijLQ/x8=");
_c = EnhancedScrollIndicator;
var _c;
__turbopack_context__.k.register(_c, "EnhancedScrollIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/hooks/use-intersection-observer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIntersectionObserver",
    ()=>useIntersectionObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px", freezeOnceVisible = true } = {}) {
    _s();
    const [isIntersecting, setIsIntersecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            const node = ref.current;
            if (!node) return;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": ([entry])=>{
                    // Update state when observer callback fires
                    setIsIntersecting(entry.isIntersecting);
                    if (entry.isIntersecting && freezeOnceVisible) {
                        observer.unobserve(node);
                    }
                }
            }["useIntersectionObserver.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(node);
            return ({
                "useIntersectionObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        threshold,
        rootMargin,
        freezeOnceVisible
    ]);
    return {
        ref,
        isIntersecting
    };
}
_s(useIntersectionObserver, "Baus38e0sSJ5YDzK4Y3Ak3yCHhg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/animated-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedSection",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$hooks$2f$use$2d$intersection$2d$observer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/hooks/use-intersection-observer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$contexts$2f$animation$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/contexts/animation-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedSection({ children, animation = "fade-up", delay = 0, className, threshold = 0.1, rootMargin = "-50px", id, forceAnimate = false }) {
    _s();
    const { ref, isIntersecting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$hooks$2f$use$2d$intersection$2d$observer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntersectionObserver"])({
        threshold,
        rootMargin,
        freezeOnceVisible: true
    });
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$contexts$2f$animation$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const shouldAnimate = settings.enabled || forceAnimate;
    // Calculate actual delay based on settings
    const actualDelay = delay * settings.delay / 100;
    // Calculate transform values based on intensity
    const getTransformValue = (baseValue)=>{
        return baseValue * settings.intensity;
    };
    const getAnimationClasses = ()=>{
        // If animations are disabled, return empty classes
        if (!shouldAnimate) {
            return "";
        }
        const baseClasses = `transition-all duration-${settings.duration} ${settings.easing}`;
        const delayClass = actualDelay ? `delay-${actualDelay}` : "";
        if (!isIntersecting) {
            switch(animation){
                case "fade-up":
                    return `${baseClasses} opacity-0 translate-y-[${getTransformValue(10)}px]`;
                case "fade-in":
                    return `${baseClasses} opacity-0`;
                case "slide-left":
                    return `${baseClasses} opacity-0 -translate-x-[${getTransformValue(10)}px]`;
                case "slide-right":
                    return `${baseClasses} opacity-0 translate-x-[${getTransformValue(10)}px]`;
                case "zoom-in":
                    return `${baseClasses} opacity-0 scale-[${1 - getTransformValue(0.05)}]`;
                case "bounce":
                    return `${baseClasses} opacity-0 -translate-y-[${getTransformValue(4)}px]`;
                default:
                    return `${baseClasses} opacity-0`;
            }
        }
        return `${baseClasses} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    };
    // Generate inline styles for custom duration and easing
    const getAnimationStyles = ()=>{
        if (!shouldAnimate) {
            return {};
        }
        return {
            transitionDuration: `${settings.duration}ms`,
            transitionTimingFunction: settings.easing,
            transitionDelay: actualDelay ? `${actualDelay}ms` : undefined,
            transform: !isIntersecting ? getTransformStyle() : "translate3d(0, 0, 0) scale(1)",
            opacity: isIntersecting ? 1 : 0
        };
    };
    const getTransformStyle = ()=>{
        if (!isIntersecting) {
            switch(animation){
                case "fade-up":
                    return `translate3d(0, ${getTransformValue(10)}px, 0)`;
                case "fade-in":
                    return "translate3d(0, 0, 0)";
                case "slide-left":
                    return `translate3d(-${getTransformValue(10)}px, 0, 0)`;
                case "slide-right":
                    return `translate3d(${getTransformValue(10)}px, 0, 0)`;
                case "zoom-in":
                    return `translate3d(0, 0, 0) scale(${1 - getTransformValue(0.05)})`;
                case "bounce":
                    return `translate3d(0, -${getTransformValue(4)}px, 0)`;
                default:
                    return "translate3d(0, 0, 0)";
            }
        }
        return "translate3d(0, 0, 0) scale(1)";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        style: getAnimationStyles(),
        id: id,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/animated-section.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(AnimatedSection, "Iou0r9h42qJKstmMYRedTmanni0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$hooks$2f$use$2d$intersection$2d$observer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntersectionObserver"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$contexts$2f$animation$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = AnimatedSection;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border bg-card text-card-foreground shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = 'Card';
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = 'CardHeader';
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-2xl font-semibold leading-none tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = 'CardTitle';
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = 'CardDescription';
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = 'CardFooter';
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'class-variance-authority'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/badge.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/social-links.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLinks",
    ()=>SocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function SocialLinks({ socialLinks }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center gap-2 sm:gap-3 my-2 sm:my-3",
        children: socialLinks.map((link, index)=>{
            const IconComponent = LucideIcons[link.icon];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.url,
                className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors",
                "aria-label": link.platform,
                children: IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                    className: "w-3 h-3 sm:w-4 sm:h-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/social-links.tsx",
                    lineNumber: 26,
                    columnNumber: 31
                }, this)
            }, index, false, {
                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/social-links.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/social-links.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SocialLinks;
var _c;
__turbopack_context__.k.register(_c, "SocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-tabs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Tabs = TabsPrimitive.Root;
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsPrimitive.List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-9 items-center justify-center rounded-lg bg-zinc-800/50 p-1 text-zinc-400", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsPrimitive.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white data-[state=active]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsPrimitive.Content, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/tabs.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/data/portfolio-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"meta":{"title":"Jane Doe | Product Designer","description":"Portfolio website showcasing product design work and skills"},"personal":{"name":"Jane Doe","title":"Product Designer","location":"San Francisco, CA","avatar":"/confident-professional.png","email":"jane.doe@example.com","phone":"+1 (415) 555-2671","workingHours":"Monday - Friday, 9am - 5pm PST","availableForWork":true,"badges":["UI/UX","Product Design","Prototyping"],"social":[{"platform":"GitHub","url":"#","icon":"Github"},{"platform":"LinkedIn","url":"#","icon":"Linkedin"},{"platform":"Twitter","url":"#","icon":"Twitter"},{"platform":"Instagram","url":"#","icon":"Instagram"}]},"about":{"bio":"I create user-centered digital experiences that solve real problems. Passionate about accessibility and ethical design with over 5 years of experience in product design and user experience research.","focus":["Creating intuitive and accessible digital products","Leading design teams and establishing design systems","Conducting user research to inform product decisions"],"languages":[{"name":"English","proficiency":"Native","level":100,"flag":"🇺🇸"},{"name":"Spanish","proficiency":"Fluent","level":80,"flag":"🇪🇸"},{"name":"French","proficiency":"Intermediate","level":60,"flag":"🇫🇷"},{"name":"German","proficiency":"Basic","level":30,"flag":"🇩🇪"}],"interests":["Design Systems","Accessibility","Typography","Motion Design","Photography"]},"navigation":[{"label":"Home","href":"/"},{"label":"Experience","href":"#experience"},{"label":"Credentials","href":"#credentials"},{"label":"Skills","href":"#skills"},{"label":"Projects","href":"#projects"}],"experience":[{"title":"Senior Product Designer","company":"TechCorp Inc.","period":"2021 - Present","description":"Lead the design of flagship products, managing a team of 3 designers. Implemented a design system that reduced design inconsistencies by 60% and improved development time by 40%. Conducted user research and usability testing to inform product decisions.","achievements":["Redesigned the main dashboard, increasing user engagement by 35%","Led the design for 3 major feature launches, contributing to a 25% increase in user retention","Established design processes that improved team collaboration and product quality"],"technologies":["Figma","Adobe XD","Prototyping","User Research"]},{"title":"UX Designer","company":"Design Studio X","period":"2018 - 2021","description":"Collaborated with cross-functional teams to design intuitive and engaging user experiences for various client projects. Created wireframes, prototypes, and high-fidelity designs for web and mobile applications.","achievements":["Designed interfaces for 12+ client projects across fintech, healthcare, and e-commerce","Improved conversion rates by an average of 22% through data-driven design iterations","Mentored junior designers and facilitated design thinking workshops"],"technologies":["Sketch","InVision","User Testing","Information Architecture"]},{"title":"UI/UX Intern","company":"Creative Solutions","period":"2017 - 2018","description":"Assisted the design team in creating visual assets and interface components. Participated in brainstorming sessions and contributed to the design of marketing websites and mobile applications.","achievements":["Redesigned the company website, improving mobile responsiveness","Created a component library that streamlined the design process","Conducted competitive analysis for 5 client projects"],"technologies":["Adobe Creative Suite","HTML/CSS","Wireframing"]}],"credentials":{"certifications":[{"name":"Certified UX Professional","issuer":"Nielsen Norman Group","date":"2022","logo":"/nng-logo.png"},{"name":"Professional Product Designer","issuer":"Interaction Design Foundation","date":"2021","logo":"/generic-military-logo.png"},{"name":"Design Leadership Certification","issuer":"IDEO","date":"2020","logo":"/ideo-logo.png"}],"education":[{"degree":"Master of Fine Arts in Design","institution":"Rhode Island School of Design","year":"2015-2017","logo":"/generic-art-school-logo.png"},{"degree":"Bachelor of Arts in Visual Communication","institution":"California Institute of the Arts","year":"2011-2015","logo":"/calarts-logo.png"}],"skills":["UI Design","UX Research","Design Systems","Wireframing","Prototyping","User Testing","Accessibility","Design Thinking"]},"technicalSkills":{"design":["Figma","Sketch","Adobe XD","Illustrator","Photoshop","InVision","Principle","Framer"],"development":["HTML/CSS","JavaScript","React","Tailwind","SCSS","Git","Responsive Design"],"uxMethods":["User Research","Usability Testing","Wireframing","Prototyping","Information Architecture","User Flows"],"softSkills":["Team Leadership","Project Management","Client Communication","Mentoring","Presentations"]}});}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProjects",
    ()=>getAllProjects,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getRelatedProjects",
    ()=>getRelatedProjects,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 1,
        slug: "job-finder-app",
        title: "Job Finder App",
        category: "Mobile App",
        shortDescription: "A modern job search application designed to connect job seekers with employers efficiently.",
        description: [
            "The Job Finder App is a comprehensive mobile application designed to streamline the job search process. It provides an intuitive interface for job seekers to discover opportunities that match their skills and preferences.",
            "The app features a smart matching algorithm that analyzes user profiles and job requirements to suggest the most relevant positions. Users can easily filter jobs by location, industry, experience level, and salary range.",
            "For employers, the platform offers tools to post job listings, review applications, and communicate with potential candidates directly through the app."
        ],
        features: [
            "Personalized job recommendations based on user skills and preferences",
            "Real-time notifications for new job postings and application updates",
            "In-app messaging system for direct communication between employers and candidates",
            "Resume builder with templates and formatting tools",
            "Interview scheduling and calendar integration",
            "Detailed analytics for job seekers to track their application progress"
        ],
        technologies: [
            "React Native",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
            "Firebase"
        ],
        coverImage: "/job-finder-cover.png",
        thumbnailImage: "/modern-finance-app.png",
        gallery: [
            {
                url: "/job-finder-screen1.png",
                caption: "Home Screen with Job Recommendations"
            },
            {
                url: "/job-finder-screen2.png",
                caption: "Job Detail View"
            },
            {
                url: "/job-finder-screen3.png",
                caption: "User Profile and Skills"
            },
            {
                url: "/job-finder-screen4.png",
                caption: "Application Tracking Dashboard"
            }
        ],
        timeline: "3 months (Q2 2023)",
        role: "Lead Product Designer",
        liveUrl: "https://example.com/job-finder",
        githubUrl: "https://github.com/example/job-finder",
        relatedProjects: [
            {
                slug: "finance-dashboard",
                title: "Finance Dashboard",
                category: "Web Application",
                image: "/modern-finance-overview.png"
            },
            {
                slug: "ecommerce-redesign",
                title: "E-Commerce Redesign",
                category: "UX Case Study",
                image: "/modern-apparel-storefront.png"
            }
        ]
    },
    {
        id: 2,
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        category: "Web Application",
        shortDescription: "A comprehensive financial management dashboard for tracking investments, expenses, and financial goals.",
        description: [
            "The Finance Dashboard is a powerful web application designed to help users manage their personal finances in one centralized location. It provides real-time insights into spending patterns, investment performance, and progress toward financial goals.",
            "The dashboard features interactive charts and visualizations that make complex financial data easy to understand at a glance. Users can connect multiple accounts, categorize transactions automatically, and receive personalized recommendations to improve their financial health.",
            "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive financial information."
        ],
        features: [
            "Account aggregation from multiple financial institutions",
            "Automated transaction categorization and tagging",
            "Budget creation and expense tracking",
            "Investment portfolio analysis and performance metrics",
            "Goal setting with progress tracking",
            "Customizable reports and data exports",
            "Financial insights and recommendations"
        ],
        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Chart.js",
            "Plaid API",
            "PostgreSQL",
            "Vercel"
        ],
        coverImage: "/finance-dashboard-cover.png",
        thumbnailImage: "/modern-finance-overview.png",
        gallery: [
            {
                url: "/finance-dashboard-screen1.png",
                caption: "Main Dashboard Overview"
            },
            {
                url: "/finance-dashboard-screen2.png",
                caption: "Expense Analysis"
            },
            {
                url: "/finance-dashboard-screen3.png",
                caption: "Investment Portfolio"
            },
            {
                url: "/finance-dashboard-screen4.png",
                caption: "Financial Goals Tracker"
            }
        ],
        timeline: "4 months (Q3-Q4 2022)",
        role: "UX/UI Designer & Frontend Developer",
        liveUrl: "https://example.com/finance-dashboard",
        githubUrl: "https://github.com/example/finance-dashboard",
        relatedProjects: [
            {
                slug: "job-finder-app",
                title: "Job Finder App",
                category: "Mobile App",
                image: "/modern-finance-app.png"
            },
            {
                slug: "ecommerce-redesign",
                title: "E-Commerce Redesign",
                category: "UX Case Study",
                image: "/modern-apparel-storefront.png"
            }
        ]
    },
    {
        id: 3,
        slug: "ecommerce-redesign",
        title: "E-Commerce Redesign",
        category: "UX Case Study",
        shortDescription: "A complete redesign of an e-commerce platform focused on improving user experience and conversion rates.",
        description: [
            "This project involved a comprehensive redesign of an established e-commerce platform that was struggling with user engagement and conversion rates. The goal was to create a more intuitive, visually appealing shopping experience that would drive sales and customer satisfaction.",
            "The redesign process began with extensive user research, including interviews, surveys, and usability testing of the existing platform. This research revealed key pain points in the customer journey, such as a complicated checkout process and difficulty finding products.",
            "Based on these insights, I developed a new information architecture and user flow that simplified navigation and streamlined the purchase process. The visual design was updated with a clean, modern aesthetic that highlighted product imagery and created a consistent brand experience across all touchpoints."
        ],
        features: [
            "Simplified product navigation and filtering system",
            "Redesigned product detail pages with enhanced imagery and information",
            "Streamlined checkout process reducing steps by 40%",
            "Personalized product recommendations based on browsing history",
            "Mobile-first responsive design",
            "Improved search functionality with predictive suggestions",
            "Enhanced wishlist and saved items functionality"
        ],
        technologies: [
            "Figma",
            "Adobe XD",
            "HTML/CSS",
            "JavaScript",
            "Shopify",
            "Hotjar",
            "Google Analytics"
        ],
        coverImage: "/ecommerce-redesign-cover.png",
        thumbnailImage: "/modern-apparel-storefront.png",
        gallery: [
            {
                url: "/ecommerce-redesign-screen1.png",
                caption: "Homepage Design"
            },
            {
                url: "/ecommerce-redesign-screen2.png",
                caption: "Product Category Page"
            },
            {
                url: "/ecommerce-redesign-screen3.png",
                caption: "Product Detail Page"
            },
            {
                url: "/ecommerce-redesign-screen4.png",
                caption: "Checkout Process"
            }
        ],
        client: "Fashion Retailer Inc.",
        timeline: "6 months (Q1-Q2 2022)",
        role: "Lead UX Designer",
        liveUrl: "https://example.com/fashion-retailer",
        relatedProjects: [
            {
                slug: "job-finder-app",
                title: "Job Finder App",
                category: "Mobile App",
                image: "/modern-finance-app.png"
            },
            {
                slug: "finance-dashboard",
                title: "Finance Dashboard",
                category: "Web Application",
                image: "/modern-finance-overview.png"
            }
        ]
    }
];
;
function getAllProjects() {
    return projects;
}
function getProjectBySlug(slug) {
    return projects.find((project)=>project.slug === slug);
}
function getRelatedProjects(currentSlug, limit = 2) {
    const currentProject = getProjectBySlug(currentSlug);
    if (!currentProject || !currentProject.relatedProjects) {
        // If no related projects defined, return random projects
        return projects.filter((project)=>project.slug !== currentSlug).slice(0, limit).map((project)=>({
                slug: project.slug,
                title: project.title,
                category: project.category,
                image: project.thumbnailImage
            }));
    }
    return currentProject.relatedProjects.slice(0, limit);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/data.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data,
    "getAboutInfo",
    ()=>getAboutInfo,
    "getCredentialsInfo",
    ()=>getCredentialsInfo,
    "getExperienceInfo",
    ()=>getExperienceInfo,
    "getMetaInfo",
    ()=>getMetaInfo,
    "getNavItems",
    ()=>getNavItems,
    "getPersonalInfo",
    ()=>getPersonalInfo,
    "getTechnicalSkillsInfo",
    ()=>getTechnicalSkillsInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$data$2f$portfolio$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/data/portfolio-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/projects.ts [app-client] (ecmascript)");
;
;
const data = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$data$2f$portfolio$2d$data$2e$json__$28$json$29$__["default"];
;
function getNavItems() {
    return data.navigation;
}
function getPersonalInfo() {
    return data.personal;
}
function getAboutInfo() {
    return data.about;
}
function getExperienceInfo() {
    return data.experience;
}
function getCredentialsInfo() {
    return data.credentials;
}
function getTechnicalSkillsInfo() {
    return data.technicalSkills;
}
function getMetaInfo() {
    return data.meta;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnhancedProfile",
    ()=>EnhancedProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$social$2d$links$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/social-links.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/ui/tabs.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/data.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function EnhancedProfile() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("about");
    const personalInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPersonalInfo"])();
    const aboutInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAboutInfo"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 flex flex-col items-center border-b border-zinc-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-col items-center w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-cyan-400/20 ring-4 ring-zinc-800/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: personalInfo.avatar || "/placeholder.svg",
                                        alt: personalInfo.name,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl sm:text-2xl font-bold",
                                            children: personalInfo.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-cyan-400 mb-1",
                                            children: personalInfo.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center text-xs text-zinc-400 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPin, {
                                                    className: "w-3 h-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: personalInfo.location
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 justify-center mb-4",
                            children: personalInfo.badges.map((badge, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "bg-zinc-800/50 hover:bg-zinc-700",
                                    children: badge
                                }, index, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$social$2d$links$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLinks"], {
                            socialLinks: personalInfo.social
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "about",
                    className: "w-full",
                    onValueChange: setActiveTab,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-zinc-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "w-full bg-transparent border-b border-zinc-800 rounded-none h-auto p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "about",
                                        className: `flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${activeTab === "about" ? "border-cyan-400 text-cyan-400" : "border-transparent text-zinc-400"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(User, {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            "About"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "contact",
                                        className: `flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${activeTab === "contact" ? "border-cyan-400 text-cyan-400" : "border-transparent text-zinc-400"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            "Contact"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "about",
                            className: "p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium text-zinc-400 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(User, {
                                                    className: "w-4 h-4 mr-2 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                "About Me"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: aboutInfo.bio
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium text-zinc-400 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Briefcase, {
                                                    className: "w-4 h-4 mr-2 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                "Professional Focus"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: aboutInfo.focus.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 mr-2",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium text-zinc-400 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Languages, {
                                                    className: "w-4 h-4 mr-2 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                "Languages"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: aboutInfo.languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: language.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-400",
                                                                    children: language.proficiency
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full",
                                                                style: {
                                                                    width: `${language.level}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "contact",
                            className: "p-4 sm:p-6 space-y-4 focus:outline-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                                className: "w-5 h-5 mr-3 text-cyan-400 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${personalInfo.email}`,
                                                        className: "text-sm text-zinc-400 hover:text-cyan-400 transition-colors break-all",
                                                        children: personalInfo.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Phone, {
                                                className: "w-5 h-5 mr-3 text-cyan-400 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${personalInfo.phone}`,
                                                        className: "text-sm text-zinc-400 hover:text-cyan-400 transition-colors",
                                                        children: personalInfo.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPin, {
                                                className: "w-5 h-5 mr-3 text-cyan-400 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-zinc-400",
                                                        children: personalInfo.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Clock, {
                                                className: "w-5 h-5 mr-3 text-cyan-400 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium",
                                                        children: "Working Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-zinc-400",
                                                        children: personalInfo.workingHours
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 sm:p-4 border-t border-zinc-800 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2 h-2 ${personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"} rounded-full mr-2`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-zinc-400",
                                children: personalInfo.availableForWork ? "Available for new projects" : "Not available for new projects"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/enhanced-profile.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(EnhancedProfile, "AtKoGZKFIADagL64SsmDpLs629I=");
_c = EnhancedProfile;
var _c;
__turbopack_context__.k.register(_c, "EnhancedProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioHeader",
    ()=>PortfolioHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/lib/data.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PortfolioHeader() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNavItems"])();
    const personalInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPersonalInfo"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHeader.useEffect": ()=>{
            const handleScroll = {
                "PortfolioHeader.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                    // Determine active section based on scroll position
                    const sections = navItems.filter({
                        "PortfolioHeader.useEffect.handleScroll.sections": (item)=>item.href.startsWith("#")
                    }["PortfolioHeader.useEffect.handleScroll.sections"]).map({
                        "PortfolioHeader.useEffect.handleScroll.sections": (item)=>item.href.substring(1)
                    }["PortfolioHeader.useEffect.handleScroll.sections"]);
                    // Find the current section in view
                    for (const section of sections.reverse()){
                        // Check from bottom to top
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            if (rect.top <= 150) {
                                // If section is at or above 150px from viewport top
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                    // If scrolled to top, set Home as active
                    if (window.scrollY < 100) {
                        setActiveSection("");
                    }
                }
            }["PortfolioHeader.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "PortfolioHeader.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["PortfolioHeader.useEffect"];
        }
    }["PortfolioHeader.useEffect"], [
        navItems
    ]);
    const toggleMobileMenu = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105",
                                children: [
                                    personalInfo.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-400 text-sm ml-2 hidden sm:inline-block transition-all duration-300 group-hover:text-zinc-300",
                                children: [
                                    "/ ",
                                    personalInfo.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center space-x-1",
                        children: navItems.map((item)=>{
                            const isActive = item.href === "/" ? activeSection === "" : activeSection === item.href.substring(1);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 text-sm relative group transition-all duration-300", isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 bg-cyan-500/0 rounded-md group-hover:bg-cyan-500/10 transition-all duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4/5", isActive && "w-4/5")
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-zinc-400 hover:text-white transition-colors duration-300 relative overflow-hidden group",
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                    lineNumber: 108,
                                    columnNumber: 61
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                    lineNumber: 108,
                                    columnNumber: 79
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 scale-0 rounded-full bg-zinc-700/50 group-hover:scale-100 transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 bg-black/95 z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-500", mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col space-y-4",
                    children: navItems.map((item, index)=>{
                        const isActive = item.href === "/" ? activeSection === "" : activeSection === item.href.substring(1);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-4 text-lg border-b border-zinc-800 relative group transition-all duration-300", isActive ? "text-cyan-400 border-cyan-400/30" : "text-zinc-300 hover:text-white hover:pl-5"),
                            onClick: ()=>setMobileMenuOpen(false),
                            style: {
                                transitionDelay: `${index * 50}ms`,
                                transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                                opacity: mobileMenuOpen ? 1 : 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bootcamp$2f$week$2d$6$2f$digital$2d$twin$2d$workshop$2f$portfolio$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1/2 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 transition-all duration-300 group-hover:w-1", isActive && "w-1")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/portfolio-header.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(PortfolioHeader, "0H1h2zTNdKgYLNHSbnDm5s7+6FE=");
_c = PortfolioHeader;
var _c;
__turbopack_context__.k.register(_c, "PortfolioHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bootcamp_week-6_digital-twin-workshop_portfolio-website_7b019af5._.js.map