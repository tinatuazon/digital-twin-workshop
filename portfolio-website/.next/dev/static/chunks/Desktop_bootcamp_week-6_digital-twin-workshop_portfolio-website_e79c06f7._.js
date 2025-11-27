(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/scroll-progress-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgressIndicator",
    ()=>ScrollProgressIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollProgressIndicator() {
    _s();
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgressIndicator.useEffect": ()=>{
            const updateScrollProgress = {
                "ScrollProgressIndicator.useEffect.updateScrollProgress": ()=>{
                    // Calculate how far down the page the user has scrolled
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = scrollTop / docHeight;
                    setScrollProgress(scrollPercent);
                }
            }["ScrollProgressIndicator.useEffect.updateScrollProgress"];
            // Add scroll event listener
            window.addEventListener("scroll", updateScrollProgress);
            // Initial calculation
            updateScrollProgress();
            // Clean up event listener
            return ({
                "ScrollProgressIndicator.useEffect": ()=>window.removeEventListener("scroll", updateScrollProgress)
            })["ScrollProgressIndicator.useEffect"];
        }
    }["ScrollProgressIndicator.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-gradient-to-r from-cyan-500 to-blue-500",
            style: {
                width: `${scrollProgress * 100}%`,
                transition: "width 0.1s"
            },
            role: "progressbar",
            "aria-valuenow": scrollProgress * 100,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-label": "Page scroll progress"
        }, void 0, false, {
            fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/scroll-progress-indicator.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/components/scroll-progress-indicator.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ScrollProgressIndicator, "mI/zHsdmTwVZEMJ2l0wkvaaiYnI=");
_c = ScrollProgressIndicator;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgressIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/contexts/animation-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationProvider",
    ()=>AnimationProvider,
    "useAnimation",
    ()=>useAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const defaultSettings = {
    duration: 700,
    delay: 100,
    easing: "ease-out",
    intensity: 0.5,
    enabled: true,
    preset: "moderate"
};
const presets = {
    subtle: {
        duration: 500,
        delay: 50,
        easing: "ease-out",
        intensity: 0.3
    },
    moderate: {
        duration: 700,
        delay: 100,
        easing: "ease-out",
        intensity: 0.5
    },
    playful: {
        duration: 800,
        delay: 150,
        easing: "ease-in-out",
        intensity: 0.7
    },
    dramatic: {
        duration: 1000,
        delay: 200,
        easing: "ease-in-out",
        intensity: 1
    },
    none: {
        enabled: false
    }
};
const AnimationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AnimationProvider({ children }) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings);
    // Load settings from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimationProvider.useEffect": ()=>{
            const savedSettings = localStorage.getItem("animationSettings");
            if (savedSettings) {
                try {
                    const parsedSettings = JSON.parse(savedSettings);
                    setSettings({
                        "AnimationProvider.useEffect": (prev)=>({
                                ...prev,
                                ...parsedSettings
                            })
                    }["AnimationProvider.useEffect"]);
                } catch (error) {
                    console.error("Failed to parse animation settings:", error);
                }
            }
        }
    }["AnimationProvider.useEffect"], []);
    // Save settings to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimationProvider.useEffect": ()=>{
            localStorage.setItem("animationSettings", JSON.stringify(settings));
        }
    }["AnimationProvider.useEffect"], [
        settings
    ]);
    const updateSettings = (newSettings)=>{
        setSettings((prev)=>({
                ...prev,
                ...newSettings
            }));
    };
    const applyPreset = (preset)=>{
        const presetSettings = presets[preset];
        setSettings((prev)=>({
                ...prev,
                ...presetSettings,
                preset
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimationContext.Provider, {
        value: {
            settings,
            updateSettings,
            applyPreset
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/bootcamp/week-6/digital-twin-workshop/portfolio-website/contexts/animation-context.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(AnimationProvider, "Wc799zRIYoLkx3R/ul10RMsdhe0=");
_c = AnimationProvider;
function useAnimation() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AnimationContext);
    if (context === undefined) {
        throw new Error("useAnimation must be used within an AnimationProvider");
    }
    return context;
}
_s1(useAnimation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AnimationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bootcamp_week-6_digital-twin-workshop_portfolio-website_e79c06f7._.js.map