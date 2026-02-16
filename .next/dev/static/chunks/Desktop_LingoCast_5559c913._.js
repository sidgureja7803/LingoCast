(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/button.tsx",
        lineNumber: 44,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Select(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "select",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Select;
function SelectGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            "data-slot": "select-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = SelectGroup;
function SelectValue(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
            "data-slot": "select-value",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = SelectValue;
function SelectTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, size: t1, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const size = t1 === undefined ? "default" : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                className: "size-4 opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
                lineNumber: 133,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== size || $[12] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "select-trigger",
            "data-size": size,
            className: t2,
            ...props,
            children: [
                children,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = size;
        $[12] = t2;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c3 = SelectTrigger;
function SelectContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let children;
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, children, position: t1, align: t2, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
    }
    const position = t1 === undefined ? "popper" : t1;
    const align = t2 === undefined ? "center" : t2;
    const t3 = position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1";
    let t4;
    if ($[7] !== className || $[8] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", t3, className);
        $[7] = className;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1";
    let t7;
    if ($[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", t6);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== children || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
            className: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 215,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== align || $[18] !== position || $[19] !== props || $[20] !== t4 || $[21] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "select-content",
                className: t4,
                position: position,
                align: align,
                ...props,
                children: [
                    t5,
                    t8,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
                lineNumber: 231,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[17] = align;
        $[18] = position;
        $[19] = props;
        $[20] = t4;
        $[21] = t8;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    return t10;
}
_c4 = SelectContent;
function SelectLabel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            "data-slot": "select-label",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 275,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = SelectLabel;
function SelectItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
                    lineNumber: 320,
                    columnNumber: 118
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
                lineNumber: 320,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 320,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 327,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== props || $[11] !== t1 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            "data-slot": "select-item",
            className: t1,
            ...props,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 335,
            columnNumber: 10
        }, this);
        $[10] = props;
        $[11] = t1;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c6 = SelectItem;
function SelectSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            "data-slot": "select-separator",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 377,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = SelectSeparator;
function SelectScrollUpButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 418,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
            "data-slot": "select-scroll-up-button",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 425,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42d8c245e4656998fe3a1272d8bf37e08f0971c38948b53c572c66cd44c81842";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 466,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
            "data-slot": "select-scroll-down-button",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/select.tsx",
            lineNumber: 473,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function TooltipProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ delayDuration: t1, ...props } = t0);
        $[1] = t0;
        $[2] = props;
        $[3] = t1;
    } else {
        props = $[2];
        t1 = $[3];
    }
    const delayDuration = t1 === undefined ? 0 : t1;
    let t2;
    if ($[4] !== delayDuration || $[5] !== props) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            "data-slot": "tooltip-provider",
            delayDuration: delayDuration,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = delayDuration;
        $[5] = props;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_c = TooltipProvider;
function Tooltip(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                "data-slot": "tooltip",
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
                lineNumber: 61,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = Tooltip;
function TooltipTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "tooltip-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = TooltipTrigger;
function TooltipContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, sideOffset: t1, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const sideOffset = t1 === undefined ? 0 : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
            className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== sideOffset || $[12] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "tooltip-content",
                sideOffset: sideOffset,
                className: t2,
                ...props,
                children: [
                    children,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
                lineNumber: 145,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/tooltip.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = sideOffset;
        $[12] = t2;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function DropdownMenu(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dropdown-menu",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = DropdownMenu;
function DropdownMenuPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dropdown-menu-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dropdown-menu-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, sideOffset: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const sideOffset = t1 === undefined ? 4 : t1;
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== sideOffset || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dropdown-menu-content",
                sideOffset: sideOffset,
                className: t2,
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
                lineNumber: 129,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = sideOffset;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            "data-slot": "dropdown-menu-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let className;
    let inset;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, inset, variant: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
        $[5] = t1;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
        t1 = $[5];
    }
    const variant = t1 === undefined ? "default" : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== inset || $[9] !== props || $[10] !== t2 || $[11] !== variant) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            "data-slot": "dropdown-menu-item",
            "data-inset": inset,
            "data-variant": variant,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[8] = inset;
        $[9] = props;
        $[10] = t2;
        $[11] = variant;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let checked;
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, checked, ...props } = t0);
        $[1] = t0;
        $[2] = checked;
        $[3] = children;
        $[4] = className;
        $[5] = props;
    } else {
        checked = $[2];
        children = $[3];
        className = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
                    lineNumber: 259,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
                lineNumber: 259,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 259,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== checked || $[10] !== children || $[11] !== props || $[12] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
            "data-slot": "dropdown-menu-checkbox-item",
            className: t1,
            checked: checked,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[9] = checked;
        $[10] = children;
        $[11] = props;
        $[12] = t1;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    return t3;
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
            "data-slot": "dropdown-menu-radio-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 297,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                    className: "size-2 fill-current"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
                    lineNumber: 341,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
                lineNumber: 341,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children || $[9] !== props || $[10] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
            "data-slot": "dropdown-menu-radio-item",
            className: t1,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = props;
        $[10] = t1;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== inset || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            "data-slot": "dropdown-menu-label",
            "data-inset": inset,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 394,
            columnNumber: 10
        }, this);
        $[7] = inset;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            "data-slot": "dropdown-menu-separator",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 436,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-slot": "dropdown-menu-shortcut",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 477,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
            "data-slot": "dropdown-menu-sub",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 506,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let children;
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = inset;
        $[5] = props;
    } else {
        children = $[2];
        className = $[3];
        inset = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
            className: "ml-auto size-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 554,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== children || $[10] !== inset || $[11] !== props || $[12] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
            "data-slot": "dropdown-menu-sub-trigger",
            "data-inset": inset,
            className: t1,
            ...props,
            children: [
                children,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 561,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = inset;
        $[11] = props;
        $[12] = t1;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    return t3;
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f5fb2f4a0abd121f6a962e42bbcbfcf3f4fe2a97dfda901f5e04c74d039c2b8";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
            "data-slot": "dropdown-menu-sub-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx",
            lineNumber: 604,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/language-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/lingo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const languages = [
    {
        code: "en",
        name: "English"
    },
    {
        code: "es",
        name: "Español"
    },
    {
        code: "fr",
        name: "Français"
    },
    {
        code: "de",
        name: "Deutsch"
    },
    {
        code: "it",
        name: "Italiano"
    },
    {
        code: "pt",
        name: "Português"
    },
    {
        code: "nl",
        name: "Nederlands"
    },
    {
        code: "pl",
        name: "Polski"
    },
    {
        code: "ru",
        name: "Русский"
    },
    {
        code: "ja",
        name: "日本語"
    },
    {
        code: "ko",
        name: "한국어"
    },
    {
        code: "zh",
        name: "中文"
    },
    {
        code: "ar",
        name: "العربية"
    },
    {
        code: "hi",
        name: "हिन्दी"
    },
    {
        code: "tr",
        name: "Türkçe"
    },
    {
        code: "sv",
        name: "Svenska"
    },
    {
        code: "no",
        name: "Norsk"
    },
    {
        code: "da",
        name: "Dansk"
    },
    {
        code: "fi",
        name: "Suomi"
    }
];
function LanguageSwitcher() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "65b4e3543d1508e481bf24675a6761d0cfb99fb896a6e3435cbbc6472718215b") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65b4e3543d1508e481bf24675a6761d0cfb99fb896a6e3435cbbc6472718215b";
    }
    const { locale, setLocale, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Select language"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] !== isLoading) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "sm",
                className: "h-8 min-w-8 px-2",
                disabled: isLoading,
                children: [
                    t0,
                    t1
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
                lineNumber: 92,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[3] = isLoading;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
            className: "text-xs text-muted-foreground px-2 py-1.5",
            children: "Language"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] !== isLoading || $[8] !== locale || $[9] !== setLocale) {
        t5 = languages.map({
            "LanguageSwitcher[languages.map()]": (language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                    onClick: {
                        "LanguageSwitcher[languages.map() > <DropdownMenuItem>.onClick]": ()=>setLocale(language.code)
                    }["LanguageSwitcher[languages.map() > <DropdownMenuItem>.onClick]"],
                    className: "cursor-pointer px-2 py-1.5",
                    disabled: isLoading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 text-sm",
                            children: language.name
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
                            lineNumber: 114,
                            columnNumber: 136
                        }, this),
                        locale === language.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-3.5 w-3.5 text-primary ml-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
                            lineNumber: 114,
                            columnNumber: 220
                        }, this)
                    ]
                }, language.code, true, {
                    fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
                    lineNumber: 112,
                    columnNumber: 56
                }, this)
        }["LanguageSwitcher[languages.map()]"]);
        $[7] = isLoading;
        $[8] = locale;
        $[9] = setLocale;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            align: "end",
            className: "w-48",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t2 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/language-switcher.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_s(LanguageSwitcher, "Aay8fvBnkDGMEM1jNl4zciikbCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "811f0dc4787b46cec9cc6a16931e7a1f1b85c740f303b96e495b500fb8813c54") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "811f0dc4787b46cec9cc6a16931e7a1f1b85c740f303b96e495b500fb8813c54";
    }
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                className: "h-9 w-9 p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/theme-toggle.tsx",
                    lineNumber: 40,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/theme-toggle.tsx",
                lineNumber: 40,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] !== setTheme || $[5] !== theme) {
        t2 = ({
            "ThemeToggle[<Button>.onClick]": ()=>setTheme(theme === "dark" ? "light" : "dark")
        })["ThemeToggle[<Button>.onClick]"];
        $[4] = setTheme;
        $[5] = theme;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== theme) {
        t3 = theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/theme-toggle.tsx",
            lineNumber: 60,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/theme-toggle.tsx",
            lineNumber: 60,
            columnNumber: 59
        }, this);
        $[7] = theme;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Toggle theme"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/theme-toggle.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t2 || $[11] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "h-9 w-9 p-0",
            onClick: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/theme-toggle.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_s(ThemeToggle, "QzD9o/ztWUlpI51A2uKjoxDGfZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/card.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/card.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/ui/card.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
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
"[project]/Desktop/LingoCast/components/landing-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/lingo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LandingPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "bb7fc5735d4599b6ae54289275db78a3f6d720126d52c4565cf77630cc9291fc") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb7fc5735d4599b6ae54289275db78a3f6d720126d52c4565cf77630cc9291fc";
    }
    const { onGetStarted } = t0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                title: "18+ Languages",
                description: "Transform your content into podcasts in any of 18+ supported languages",
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                title: "Lightning Fast",
                description: "Generate high-quality podcast episodes in seconds with AI-powered processing",
                gradient: "from-purple-500 to-pink-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                title: "AI-Powered",
                description: "Advanced AI automatically structures your content into engaging chapters",
                gradient: "from-orange-500 to-red-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
                title: "Studio Quality",
                description: "Natural-sounding voices with professional audio quality",
                gradient: "from-green-500 to-emerald-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"],
                title: "Smart Translation",
                description: "Powered by Lingo.dev for accurate, context-aware translations",
                gradient: "from-violet-500 to-purple-500"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                title: "Easy Export",
                description: "Download individual chapters or merge them into complete episodes",
                gradient: "from-pink-500 to-rose-500"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const features = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                number: "01",
                title: "Paste URL",
                description: "Simply paste any blog post URL you want to convert"
            },
            {
                number: "02",
                title: "AI Processing",
                description: "Our AI analyzes and structures content into chapters"
            },
            {
                number: "03",
                title: "Select Languages",
                description: "Choose from 18+ languages for your podcast"
            },
            {
                number: "04",
                title: "Download",
                description: "Get your multilingual podcast ready to share"
            }
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const steps = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 -z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/20"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 87,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 87,
                    columnNumber: 201
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 87,
                    columnNumber: 402
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 87,
                    columnNumber: 584
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 87,
                    columnNumber: 788
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 dark:border-purple-500/30 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        className: "w-4 h-4 text-white"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                        lineNumber: 94,
                        columnNumber: 320
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 94,
                    columnNumber: 203
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent",
                    children: "Lingocast"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 94,
                    columnNumber: 364
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent",
                            children: "Turn Blogs into"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                            lineNumber: 101,
                            columnNumber: 129
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                            lineNumber: 101,
                            columnNumber: 310
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent",
                            children: "Multilingual Podcasts"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                            lineNumber: 101,
                            columnNumber: 316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 101,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed",
                    children: "Transform any blog post into professional podcast episodes in 18+ languages. Powered by AI and advanced translation technology."
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 101,
                    columnNumber: 480
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center gap-2",
            children: [
                "Get Started Free",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 109,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[6] = t6;
        $[7] = t7;
    } else {
        t6 = $[6];
        t7 = $[7];
    }
    let t8;
    if ($[8] !== onGetStarted) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "lg",
            onClick: onGetStarted,
            className: "group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[8] = onGetStarted;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "lg",
            variant: "outline",
            className: "border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300",
            children: "Watch Demo"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[11] = t8;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-4 h-4 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 142,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "No credit card required"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 142,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-4 h-4 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 149,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "18+ languages"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 149,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400",
            children: [
                t11,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-4 h-4 text-green-500"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                            lineNumber: 156,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Instant processing"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                            lineNumber: 156,
                            columnNumber: 225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 156,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] !== t10) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative text-center space-y-8 mb-20",
            children: [
                t4,
                t5,
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent",
                    children: "Powerful Features"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 171,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                    children: "Everything you need to create professional multilingual podcasts"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 171,
                    columnNumber: 226
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: features.map(_LandingPageFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 178,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent",
                    children: "How It Works"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 185,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                    children: "Create your multilingual podcast in four simple steps"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 185,
                    columnNumber: 221
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto",
                    children: steps.map({
                        "LandingPage[steps.map()]": (step, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mx-auto w-20 h-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-6 opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 181
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center w-full h-full shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl font-bold text-white",
                                                            children: step.number
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 436
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 295
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 137
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 516
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                                children: step.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 601
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 98
                                    }, this),
                                    index_0 < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 732
                                    }, this)
                                ]
                            }, index_0, true, {
                                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                lineNumber: 193,
                                columnNumber: 58
                            }, this)
                    }["LandingPage[steps.map()]"])
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 192,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    let t21;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent",
            children: "Ready to get started?"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
            children: "Join thousands of content creators who are already using Lingocast to reach global audiences"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[23] = t20;
        $[24] = t21;
    } else {
        t20 = $[23];
        t21 = $[24];
    }
    let t22;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center gap-2",
            children: [
                "Start Creating Now",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                    lineNumber: 219,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[25] = t22;
    } else {
        t22 = $[25];
    }
    let t23;
    if ($[26] !== onGetStarted) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 overflow-hidden",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "relative p-12 text-center space-y-6",
                        children: [
                            t20,
                            t21,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                onClick: onGetStarted,
                                className: "group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
                                children: t22
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                                lineNumber: 226,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                        lineNumber: 226,
                        columnNumber: 214
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                lineNumber: 226,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[26] = onGetStarted;
        $[27] = t23;
    } else {
        t23 = $[27];
    }
    let t24;
    if ($[28] !== t14 || $[29] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-12 sm:py-16 lg:py-20",
            children: [
                t14,
                t16,
                t18,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t23;
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    let t25;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "8de691015a1e637d",
            children: "@keyframes blob{0%{transform:translate(0)scale(1)}33%{transform:translate(30px,-50px)scale(1.1)}66%{transform:translate(-20px,20px)scale(.9)}to{transform:translate(0)scale(1)}}.animate-blob{animation:7s infinite blob}.animation-delay-2000{animation-delay:2s}.animation-delay-4000{animation-delay:4s}"
        }, void 0, false, void 0, this);
        $[31] = t25;
    } else {
        t25 = $[31];
    }
    let t26;
    if ($[32] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen overflow-hidden",
            children: [
                t3,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[32] = t24;
        $[33] = t26;
    } else {
        t26 = $[33];
    }
    return t26;
}
_s(LandingPage, "qyRGNO1W2ixBjnjvg4iOqZ5qzOo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"]
    ];
});
_c = LandingPage;
function _LandingPageFeaturesMap(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "group relative overflow-hidden border-2 border-gray-100 dark:border-gray-800 hover:border-transparent dark:hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:scale-105",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                lineNumber: 259,
                columnNumber: 233
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                            className: "w-6 h-6 text-white"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                            lineNumber: 259,
                            columnNumber: 611
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                        lineNumber: 259,
                        columnNumber: 413
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 dark:text-white",
                        children: feature.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                        lineNumber: 259,
                        columnNumber: 664
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400 leading-relaxed",
                        children: feature.description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                        lineNumber: 259,
                        columnNumber: 752
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
                lineNumber: 259,
                columnNumber: 374
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Desktop/LingoCast/components/landing-page.tsx",
        lineNumber: 259,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/LightRays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const DEFAULT_COLOR = '#ffffff';
const hexToRgb = (hex)=>{
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255
    ] : [
        1,
        1,
        1
    ];
};
const getAnchorAndDir = (origin, w, h)=>{
    const outside = 0.2;
    switch(origin){
        case 'top-left':
            return {
                anchor: [
                    0,
                    -outside * h
                ],
                dir: [
                    0,
                    1
                ]
            };
        case 'top-right':
            return {
                anchor: [
                    w,
                    -outside * h
                ],
                dir: [
                    0,
                    1
                ]
            };
        case 'left':
            return {
                anchor: [
                    -outside * w,
                    0.5 * h
                ],
                dir: [
                    1,
                    0
                ]
            };
        case 'right':
            return {
                anchor: [
                    (1 + outside) * w,
                    0.5 * h
                ],
                dir: [
                    -1,
                    0
                ]
            };
        case 'bottom-left':
            return {
                anchor: [
                    0,
                    (1 + outside) * h
                ],
                dir: [
                    0,
                    -1
                ]
            };
        case 'bottom-center':
            return {
                anchor: [
                    0.5 * w,
                    (1 + outside) * h
                ],
                dir: [
                    0,
                    -1
                ]
            };
        case 'bottom-right':
            return {
                anchor: [
                    w,
                    (1 + outside) * h
                ],
                dir: [
                    0,
                    -1
                ]
            };
        default:
            // "top-center"
            return {
                anchor: [
                    0.5 * w,
                    -outside * h
                ],
                dir: [
                    0,
                    1
                ]
            };
    }
};
const LightRays = ({ raysOrigin = 'top-center', raysColor = DEFAULT_COLOR, raysSpeed = 1, lightSpread = 1, rayLength = 2, pulsating = false, fadeDistance = 1.0, saturation = 1.0, followMouse = true, mouseInfluence = 0.1, noiseAmount = 0.0, distortion = 0.0, className = '' })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const smoothMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const animationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupFunctionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRays.useEffect": ()=>{
            if (!containerRef.current) return;
            observerRef.current = new IntersectionObserver({
                "LightRays.useEffect": (entries)=>{
                    const entry = entries[0];
                    setIsVisible(entry.isIntersecting);
                }
            }["LightRays.useEffect"], {
                threshold: 0.1
            });
            observerRef.current.observe(containerRef.current);
            return ({
                "LightRays.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                        observerRef.current = null;
                    }
                }
            })["LightRays.useEffect"];
        }
    }["LightRays.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRays.useEffect": ()=>{
            if (!isVisible || !containerRef.current) return;
            if (cleanupFunctionRef.current) {
                cleanupFunctionRef.current();
                cleanupFunctionRef.current = null;
            }
            const initializeWebGL = {
                "LightRays.useEffect.initializeWebGL": async ()=>{
                    if (!containerRef.current) return;
                    await new Promise({
                        "LightRays.useEffect.initializeWebGL": (resolve)=>setTimeout(resolve, 10)
                    }["LightRays.useEffect.initializeWebGL"]);
                    if (!containerRef.current) return;
                    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                        dpr: Math.min(window.devicePixelRatio, 2),
                        alpha: true
                    });
                    rendererRef.current = renderer;
                    const gl = renderer.gl;
                    gl.canvas.style.width = '100%';
                    gl.canvas.style.height = '100%';
                    while(containerRef.current.firstChild){
                        containerRef.current.removeChild(containerRef.current.firstChild);
                    }
                    containerRef.current.appendChild(gl.canvas);
                    const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;
                    const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  
  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`;
                    const uniforms = {
                        iTime: {
                            value: 0
                        },
                        iResolution: {
                            value: [
                                1,
                                1
                            ]
                        },
                        rayPos: {
                            value: [
                                0,
                                0
                            ]
                        },
                        rayDir: {
                            value: [
                                0,
                                1
                            ]
                        },
                        raysColor: {
                            value: hexToRgb(raysColor)
                        },
                        raysSpeed: {
                            value: raysSpeed
                        },
                        lightSpread: {
                            value: lightSpread
                        },
                        rayLength: {
                            value: rayLength
                        },
                        pulsating: {
                            value: pulsating ? 1.0 : 0.0
                        },
                        fadeDistance: {
                            value: fadeDistance
                        },
                        saturation: {
                            value: saturation
                        },
                        mousePos: {
                            value: [
                                0.5,
                                0.5
                            ]
                        },
                        mouseInfluence: {
                            value: mouseInfluence
                        },
                        noiseAmount: {
                            value: noiseAmount
                        },
                        distortion: {
                            value: distortion
                        }
                    };
                    uniformsRef.current = uniforms;
                    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
                    const program = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                        vertex: vert,
                        fragment: frag,
                        uniforms
                    });
                    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                        geometry,
                        program
                    });
                    meshRef.current = mesh;
                    const updatePlacement = {
                        "LightRays.useEffect.initializeWebGL.updatePlacement": ()=>{
                            if (!containerRef.current || !renderer) return;
                            renderer.dpr = Math.min(window.devicePixelRatio, 2);
                            const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
                            renderer.setSize(wCSS, hCSS);
                            const dpr = renderer.dpr;
                            const w = wCSS * dpr;
                            const h = hCSS * dpr;
                            uniforms.iResolution.value = [
                                w,
                                h
                            ];
                            const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
                            uniforms.rayPos.value = anchor;
                            uniforms.rayDir.value = dir;
                        }
                    }["LightRays.useEffect.initializeWebGL.updatePlacement"];
                    const loop = {
                        "LightRays.useEffect.initializeWebGL.loop": (t)=>{
                            if (!rendererRef.current || !uniformsRef.current || !meshRef.current) {
                                return;
                            }
                            uniforms.iTime.value = t * 0.001;
                            if (followMouse && mouseInfluence > 0.0) {
                                const smoothing = 0.92;
                                smoothMouseRef.current.x = smoothMouseRef.current.x * smoothing + mouseRef.current.x * (1 - smoothing);
                                smoothMouseRef.current.y = smoothMouseRef.current.y * smoothing + mouseRef.current.y * (1 - smoothing);
                                uniforms.mousePos.value = [
                                    smoothMouseRef.current.x,
                                    smoothMouseRef.current.y
                                ];
                            }
                            try {
                                renderer.render({
                                    scene: mesh
                                });
                                animationIdRef.current = requestAnimationFrame(loop);
                            } catch (error) {
                                console.warn('WebGL rendering error:', error);
                                return;
                            }
                        }
                    }["LightRays.useEffect.initializeWebGL.loop"];
                    window.addEventListener('resize', updatePlacement);
                    updatePlacement();
                    animationIdRef.current = requestAnimationFrame(loop);
                    cleanupFunctionRef.current = ({
                        "LightRays.useEffect.initializeWebGL": ()=>{
                            if (animationIdRef.current) {
                                cancelAnimationFrame(animationIdRef.current);
                                animationIdRef.current = null;
                            }
                            window.removeEventListener('resize', updatePlacement);
                            if (renderer) {
                                try {
                                    const canvas = renderer.gl.canvas;
                                    const loseContextExt = renderer.gl.getExtension('WEBGL_lose_context');
                                    if (loseContextExt) {
                                        loseContextExt.loseContext();
                                    }
                                    if (canvas && canvas.parentNode) {
                                        canvas.parentNode.removeChild(canvas);
                                    }
                                } catch (error_0) {
                                    console.warn('Error during WebGL cleanup:', error_0);
                                }
                            }
                            rendererRef.current = null;
                            uniformsRef.current = null;
                            meshRef.current = null;
                        }
                    })["LightRays.useEffect.initializeWebGL"];
                }
            }["LightRays.useEffect.initializeWebGL"];
            initializeWebGL();
            return ({
                "LightRays.useEffect": ()=>{
                    if (cleanupFunctionRef.current) {
                        cleanupFunctionRef.current();
                        cleanupFunctionRef.current = null;
                    }
                }
            })["LightRays.useEffect"];
        }
    }["LightRays.useEffect"], [
        isVisible,
        raysOrigin,
        raysColor,
        raysSpeed,
        lightSpread,
        rayLength,
        pulsating,
        fadeDistance,
        saturation,
        followMouse,
        mouseInfluence,
        noiseAmount,
        distortion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRays.useEffect": ()=>{
            if (!uniformsRef.current || !containerRef.current || !rendererRef.current) return;
            const u = uniformsRef.current;
            const renderer_0 = rendererRef.current;
            u.raysColor.value = hexToRgb(raysColor);
            u.raysSpeed.value = raysSpeed;
            u.lightSpread.value = lightSpread;
            u.rayLength.value = rayLength;
            u.pulsating.value = pulsating ? 1.0 : 0.0;
            u.fadeDistance.value = fadeDistance;
            u.saturation.value = saturation;
            u.mouseInfluence.value = mouseInfluence;
            u.noiseAmount.value = noiseAmount;
            u.distortion.value = distortion;
            const { clientWidth: wCSS_0, clientHeight: hCSS_0 } = containerRef.current;
            const dpr_0 = renderer_0.dpr;
            const { anchor: anchor_0, dir: dir_0 } = getAnchorAndDir(raysOrigin, wCSS_0 * dpr_0, hCSS_0 * dpr_0);
            u.rayPos.value = anchor_0;
            u.rayDir.value = dir_0;
        }
    }["LightRays.useEffect"], [
        raysColor,
        raysSpeed,
        lightSpread,
        raysOrigin,
        rayLength,
        pulsating,
        fadeDistance,
        saturation,
        mouseInfluence,
        noiseAmount,
        distortion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightRays.useEffect": ()=>{
            const handleMouseMove = {
                "LightRays.useEffect.handleMouseMove": (e)=>{
                    if (!containerRef.current || !rendererRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    mouseRef.current = {
                        x,
                        y
                    };
                }
            }["LightRays.useEffect.handleMouseMove"];
            if (followMouse) {
                window.addEventListener('mousemove', handleMouseMove);
                return ({
                    "LightRays.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
                })["LightRays.useEffect"];
            }
        }
    }["LightRays.useEffect"], [
        followMouse
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `w-full h-full pointer-events-none z-[3] overflow-hidden relative ${className}`.trim()
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/LightRays.tsx",
        lineNumber: 468,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LightRays, "gkxaG+awg9r85Ws+gbq3bog+yME=");
_c = LightRays;
const __TURBOPACK__default__export__ = LightRays;
var _c;
__turbopack_context__.k.register(_c, "LightRays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/PrismaticBurst.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/ogl/src/core/Texture.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const vertexShader = `#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;
const fragmentShader = `#version 300 es
precision highp float;
precision highp int;

out vec4 fragColor;

uniform vec2  uResolution;
uniform float uTime;

uniform float uIntensity;
uniform float uSpeed;
uniform int   uAnimType;
uniform vec2  uMouse;
uniform int   uColorCount;
uniform float uDistort;
uniform vec2  uOffset;
uniform sampler2D uGradient;
uniform float uNoiseAmount;
uniform int   uRayCount;

float hash21(vec2 p){
    p = floor(p);
    float f = 52.9829189 * fract(dot(p, vec2(0.065, 0.005)));
    return fract(f);
}

mat2 rot30(){ return mat2(0.8, -0.5, 0.5, 0.8); }

float layeredNoise(vec2 fragPx){
    vec2 p = mod(fragPx + vec2(uTime * 30.0, -uTime * 21.0), 1024.0);
    vec2 q = rot30() * p;
    float n = 0.0;
    n += 0.40 * hash21(q);
    n += 0.25 * hash21(q * 2.0 + 17.0);
    n += 0.20 * hash21(q * 4.0 + 47.0);
    n += 0.10 * hash21(q * 8.0 + 113.0);
    n += 0.05 * hash21(q * 16.0 + 191.0);
    return n;
}

vec3 rayDir(vec2 frag, vec2 res, vec2 offset, float dist){
    float focal = res.y * max(dist, 1e-3);
    return normalize(vec3(2.0 * (frag - offset) - res, focal));
}

float edgeFade(vec2 frag, vec2 res, vec2 offset){
    vec2 toC = frag - 0.5 * res - offset;
    float r = length(toC) / (0.5 * min(res.x, res.y));
    float x = clamp(r, 0.0, 1.0);
    float q = x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
    float s = q * 0.5;
    s = pow(s, 1.5);
    float tail = 1.0 - pow(1.0 - s, 2.0);
    s = mix(s, tail, 0.2);
    float dn = (layeredNoise(frag * 0.15) - 0.5) * 0.0015 * s;
    return clamp(s + dn, 0.0, 1.0);
}

mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,-s, 0.0,s,c); }
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.0,s, 0.0,1.0,0.0, -s,0.0,c); }
mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,-s,0.0, s,c,0.0, 0.0,0.0,1.0); }

vec3 sampleGradient(float t){
    t = clamp(t, 0.0, 1.0);
    return texture(uGradient, vec2(t, 0.5)).rgb;
}

vec2 rot2(vec2 v, float a){
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c) * v;
}

float bendAngle(vec3 q, float t){
    float a = 0.8 * sin(q.x * 0.55 + t * 0.6)
            + 0.7 * sin(q.y * 0.50 - t * 0.5)
            + 0.6 * sin(q.z * 0.60 + t * 0.7);
    return a;
}

void main(){
    vec2 frag = gl_FragCoord.xy;
    float t = uTime * uSpeed;
    float jitterAmp = 0.1 * clamp(uNoiseAmount, 0.0, 1.0);
    vec3 dir = rayDir(frag, uResolution, uOffset, 1.0);
    float marchT = 0.0;
    vec3 col = vec3(0.0);
    float n = layeredNoise(frag);
    vec4 c = cos(t * 0.2 + vec4(0.0, 33.0, 11.0, 0.0));
    mat2 M2 = mat2(c.x, c.y, c.z, c.w);
    float amp = clamp(uDistort, 0.0, 50.0) * 0.15;

    mat3 rot3dMat = mat3(1.0);
    if(uAnimType == 1){
      vec3 ang = vec3(t * 0.31, t * 0.21, t * 0.17);
      rot3dMat = rotZ(ang.z) * rotY(ang.y) * rotX(ang.x);
    }
    mat3 hoverMat = mat3(1.0);
    if(uAnimType == 2){
      vec2 m = uMouse * 2.0 - 1.0;
      vec3 ang = vec3(m.y * 0.6, m.x * 0.6, 0.0);
      hoverMat = rotY(ang.y) * rotX(ang.x);
    }

    for (int i = 0; i < 44; ++i) {
        vec3 P = marchT * dir;
        P.z -= 2.0;
        float rad = length(P);
        vec3 Pl = P * (10.0 / max(rad, 1e-6));

        if(uAnimType == 0){
            Pl.xz *= M2;
        } else if(uAnimType == 1){
      Pl = rot3dMat * Pl;
        } else {
      Pl = hoverMat * Pl;
        }

        float stepLen = min(rad - 0.3, n * jitterAmp) + 0.1;

        float grow = smoothstep(0.35, 3.0, marchT);
        float a1 = amp * grow * bendAngle(Pl * 0.6, t);
        float a2 = 0.5 * amp * grow * bendAngle(Pl.zyx * 0.5 + 3.1, t * 0.9);
        vec3 Pb = Pl;
        Pb.xz = rot2(Pb.xz, a1);
        Pb.xy = rot2(Pb.xy, a2);

        float rayPattern = smoothstep(
            0.5, 0.7,
            sin(Pb.x + cos(Pb.y) * cos(Pb.z)) *
            sin(Pb.z + sin(Pb.y) * cos(Pb.x + t))
        );

        if (uRayCount > 0) {
            float ang = atan(Pb.y, Pb.x);
            float comb = 0.5 + 0.5 * cos(float(uRayCount) * ang);
            comb = pow(comb, 3.0);
            rayPattern *= smoothstep(0.15, 0.95, comb);
        }

        vec3 spectralDefault = 1.0 + vec3(
            cos(marchT * 3.0 + 0.0),
            cos(marchT * 3.0 + 1.0),
            cos(marchT * 3.0 + 2.0)
        );

        float saw = fract(marchT * 0.25);
        float tRay = saw * saw * (3.0 - 2.0 * saw);
        vec3 userGradient = 2.0 * sampleGradient(tRay);
        vec3 spectral = (uColorCount > 0) ? userGradient : spectralDefault;
        vec3 base = (0.05 / (0.4 + stepLen))
                  * smoothstep(5.0, 0.0, rad)
                  * spectral;

        col += base * rayPattern;
        marchT += stepLen;
    }

    col *= edgeFade(frag, uResolution, uOffset);
    col *= uIntensity;

    fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
const hexToRgb01 = (hex)=>{
    let h = hex.trim();
    if (h.startsWith('#')) h = h.slice(1);
    if (h.length === 3) {
        const r = h[0], g = h[1], b = h[2];
        h = r + r + g + g + b + b;
    }
    const intVal = parseInt(h, 16);
    if (isNaN(intVal) || h.length !== 6 && h.length !== 8) return [
        1,
        1,
        1
    ];
    const r = (intVal >> 16 & 255) / 255;
    const g = (intVal >> 8 & 255) / 255;
    const b = (intVal & 255) / 255;
    return [
        r,
        g,
        b
    ];
};
const toPx = (v)=>{
    if (v == null) return 0;
    if (typeof v === 'number') return v;
    const s = String(v).trim();
    const num = parseFloat(s.replace('px', ''));
    return isNaN(num) ? 0 : num;
};
const PrismaticBurst = ({ intensity = 2, speed = 0.5, animationType = 'rotate3d', colors, distort = 0, paused = false, offset = {
    x: 0,
    y: 0
}, hoverDampness = 0, rayCount, mixBlendMode = 'lighten' })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const programRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        0.5,
        0.5
    ]);
    const mouseSmoothRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        0.5,
        0.5
    ]);
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(paused);
    const gradTexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverDampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(hoverDampness);
    const isVisibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrismaticBurst.useEffect": ()=>{
            pausedRef.current = paused;
        }
    }["PrismaticBurst.useEffect"], [
        paused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrismaticBurst.useEffect": ()=>{
            hoverDampRef.current = hoverDampness;
        }
    }["PrismaticBurst.useEffect"], [
        hoverDampness
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrismaticBurst.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                dpr,
                alpha: false,
                antialias: false
            });
            rendererRef.current = renderer;
            const gl = renderer.gl;
            gl.canvas.style.position = 'absolute';
            gl.canvas.style.inset = '0';
            gl.canvas.style.width = '100%';
            gl.canvas.style.height = '100%';
            gl.canvas.style.mixBlendMode = mixBlendMode && mixBlendMode !== 'none' ? mixBlendMode : '';
            container.appendChild(gl.canvas);
            const white = new Uint8Array([
                255,
                255,
                255,
                255
            ]);
            const gradientTex = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](gl, {
                image: white,
                width: 1,
                height: 1,
                generateMipmaps: false,
                flipY: false
            });
            gradientTex.minFilter = gl.LINEAR;
            gradientTex.magFilter = gl.LINEAR;
            gradientTex.wrapS = gl.CLAMP_TO_EDGE;
            gradientTex.wrapT = gl.CLAMP_TO_EDGE;
            gradTexRef.current = gradientTex;
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    uResolution: {
                        value: [
                            1,
                            1
                        ]
                    },
                    uTime: {
                        value: 0
                    },
                    uIntensity: {
                        value: 1
                    },
                    uSpeed: {
                        value: 1
                    },
                    uAnimType: {
                        value: 0
                    },
                    uMouse: {
                        value: [
                            0.5,
                            0.5
                        ]
                    },
                    uColorCount: {
                        value: 0
                    },
                    uDistort: {
                        value: 0
                    },
                    uOffset: {
                        value: [
                            0,
                            0
                        ]
                    },
                    uGradient: {
                        value: gradientTex
                    },
                    uNoiseAmount: {
                        value: 0.8
                    },
                    uRayCount: {
                        value: 0
                    }
                }
            });
            programRef.current = program;
            const triangle = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry: triangle,
                program
            });
            triRef.current = triangle;
            meshRef.current = mesh;
            const resize = {
                "PrismaticBurst.useEffect.resize": ()=>{
                    const w = container.clientWidth || 1;
                    const h = container.clientHeight || 1;
                    renderer.setSize(w, h);
                    program.uniforms.uResolution.value = [
                        gl.drawingBufferWidth,
                        gl.drawingBufferHeight
                    ];
                }
            }["PrismaticBurst.useEffect.resize"];
            let ro = null;
            if ('ResizeObserver' in window) {
                ro = new ResizeObserver(resize);
                ro.observe(container);
            } else {
                window.addEventListener('resize', resize);
            }
            resize();
            const onPointer = {
                "PrismaticBurst.useEffect.onPointer": (e)=>{
                    const rect = container.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / Math.max(rect.width, 1);
                    const y = (e.clientY - rect.top) / Math.max(rect.height, 1);
                    mouseTargetRef.current = [
                        Math.min(Math.max(x, 0), 1),
                        Math.min(Math.max(y, 0), 1)
                    ];
                }
            }["PrismaticBurst.useEffect.onPointer"];
            container.addEventListener('pointermove', onPointer, {
                passive: true
            });
            let io = null;
            if ('IntersectionObserver' in window) {
                io = new IntersectionObserver({
                    "PrismaticBurst.useEffect": (entries)=>{
                        if (entries[0]) isVisibleRef.current = entries[0].isIntersecting;
                    }
                }["PrismaticBurst.useEffect"], {
                    root: null,
                    threshold: 0.01
                });
                io.observe(container);
            }
            const onVis = {
                "PrismaticBurst.useEffect.onVis": ()=>{}
            }["PrismaticBurst.useEffect.onVis"];
            document.addEventListener('visibilitychange', onVis);
            let raf = 0;
            let last = performance.now();
            let accumTime = 0;
            const update = {
                "PrismaticBurst.useEffect.update": (now)=>{
                    const dt = Math.max(0, now - last) * 0.001;
                    last = now;
                    const visible = isVisibleRef.current && !document.hidden;
                    if (!pausedRef.current) accumTime += dt;
                    if (!visible) {
                        raf = requestAnimationFrame(update);
                        return;
                    }
                    const tau = 0.02 + Math.max(0, Math.min(1, hoverDampRef.current)) * 0.5;
                    const alpha = 1 - Math.exp(-dt / tau);
                    const tgt = mouseTargetRef.current;
                    const sm = mouseSmoothRef.current;
                    sm[0] += (tgt[0] - sm[0]) * alpha;
                    sm[1] += (tgt[1] - sm[1]) * alpha;
                    program.uniforms.uMouse.value = sm;
                    program.uniforms.uTime.value = accumTime;
                    renderer.render({
                        scene: meshRef.current
                    });
                    raf = requestAnimationFrame(update);
                }
            }["PrismaticBurst.useEffect.update"];
            raf = requestAnimationFrame(update);
            return ({
                "PrismaticBurst.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    container.removeEventListener('pointermove', onPointer);
                    ro?.disconnect();
                    if (!ro) window.removeEventListener('resize', resize);
                    io?.disconnect();
                    document.removeEventListener('visibilitychange', onVis);
                    try {
                        container.removeChild(gl.canvas);
                    } catch (e_0) {
                        void e_0;
                    }
                    meshRef.current = null;
                    triRef.current = null;
                    programRef.current = null;
                    try {
                        const glCtx = rendererRef.current?.gl;
                        if (glCtx && gradTexRef.current?.texture) glCtx.deleteTexture(gradTexRef.current.texture);
                    } catch (e_1) {
                        void e_1;
                    }
                    rendererRef.current = null;
                    gradTexRef.current = null;
                }
            })["PrismaticBurst.useEffect"];
        }
    }["PrismaticBurst.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrismaticBurst.useEffect": ()=>{
            const canvas = rendererRef.current?.gl?.canvas;
            if (canvas) {
                canvas.style.mixBlendMode = mixBlendMode && mixBlendMode !== 'none' ? mixBlendMode : '';
            }
        }
    }["PrismaticBurst.useEffect"], [
        mixBlendMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrismaticBurst.useEffect": ()=>{
            const program_0 = programRef.current;
            const renderer_0 = rendererRef.current;
            const gradTex = gradTexRef.current;
            if (!program_0 || !renderer_0 || !gradTex) return;
            program_0.uniforms.uIntensity.value = intensity ?? 1;
            program_0.uniforms.uSpeed.value = speed ?? 1;
            const animTypeMap = {
                rotate: 0,
                rotate3d: 1,
                hover: 2
            };
            program_0.uniforms.uAnimType.value = animTypeMap[animationType ?? 'rotate'];
            program_0.uniforms.uDistort.value = typeof distort === 'number' ? distort : 0;
            const ox = toPx(offset?.x);
            const oy = toPx(offset?.y);
            program_0.uniforms.uOffset.value = [
                ox,
                oy
            ];
            program_0.uniforms.uRayCount.value = Math.max(0, Math.floor(rayCount ?? 0));
            let count = 0;
            if (Array.isArray(colors) && colors.length > 0) {
                const gl_0 = renderer_0.gl;
                const capped = colors.slice(0, 64);
                count = capped.length;
                const data = new Uint8Array(count * 4);
                for(let i = 0; i < count; i++){
                    const [r, g, b] = hexToRgb01(capped[i]);
                    data[i * 4 + 0] = Math.round(r * 255);
                    data[i * 4 + 1] = Math.round(g * 255);
                    data[i * 4 + 2] = Math.round(b * 255);
                    data[i * 4 + 3] = 255;
                }
                gradTex.image = data;
                gradTex.width = count;
                gradTex.height = 1;
                gradTex.minFilter = gl_0.LINEAR;
                gradTex.magFilter = gl_0.LINEAR;
                gradTex.wrapS = gl_0.CLAMP_TO_EDGE;
                gradTex.wrapT = gl_0.CLAMP_TO_EDGE;
                gradTex.flipY = false;
                gradTex.generateMipmaps = false;
                gradTex.format = gl_0.RGBA;
                gradTex.type = gl_0.UNSIGNED_BYTE;
                gradTex.needsUpdate = true;
            } else {
                count = 0;
            }
            program_0.uniforms.uColorCount.value = count;
        }
    }["PrismaticBurst.useEffect"], [
        intensity,
        speed,
        animationType,
        colors,
        distort,
        offset,
        rayCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden",
        ref: containerRef
    }, void 0, false, {
        fileName: "[project]/Desktop/LingoCast/components/PrismaticBurst.tsx",
        lineNumber: 466,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PrismaticBurst, "8zuKxmbDSzrr+H1RplqTsKMvmdo=");
_c = PrismaticBurst;
const __TURBOPACK__default__export__ = PrismaticBurst;
var _c;
__turbopack_context__.k.register(_c, "PrismaticBurst");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function LoadingScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "879f2562d6bec0ce0a1c2bcbe2b15e42e6e03907bbc948f0eab4a29026a56520") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "879f2562d6bec0ce0a1c2bcbe2b15e42e6e03907bbc948f0eab4a29026a56520";
    }
    const { steps } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl sm:text-2xl font-semibold text-foreground",
                    children: "Creating your podcast"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                    lineNumber: 28,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs sm:text-sm text-muted-foreground",
                    children: "This may take a few moments"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                    lineNumber: 28,
                    columnNumber: 141
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== steps) {
        t2 = steps.map(_LoadingScreenStepsMap);
        $[2] = steps;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full max-w-md mx-auto px-4 sm:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 sm:space-y-8",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 sm:space-y-3",
                        children: t2
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                        lineNumber: 43,
                        columnNumber: 122
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                lineNumber: 43,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = LoadingScreen;
function _LoadingScreenStepsMap(step) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border bg-card/50 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: step.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-5 w-5 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                    lineNumber: 52,
                    columnNumber: 193
                }, this) : step.status === "processing" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-5 w-5 text-primary animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                    lineNumber: 52,
                    columnNumber: 278
                }, this) : step.status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "h-5 w-5 text-destructive"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                    lineNumber: 52,
                    columnNumber: 364
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                    className: "h-5 w-5 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                    lineNumber: 52,
                    columnNumber: 415
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                lineNumber: 52,
                columnNumber: 131
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium", step.status === "completed" ? "text-foreground" : step.status === "processing" ? "text-foreground" : step.status === "error" ? "text-destructive" : "text-muted-foreground"),
                        children: step.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                        lineNumber: 52,
                        columnNumber: 506
                    }, this),
                    step.status === "processing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-1 w-full bg-muted rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-primary rounded-full animate-pulse",
                            style: {
                                width: "60%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                            lineNumber: 52,
                            columnNumber: 840
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                        lineNumber: 52,
                        columnNumber: 769
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
                lineNumber: 52,
                columnNumber: 474
            }, this)
        ]
    }, step.id, true, {
        fileName: "[project]/Desktop/LingoCast/components/loading-screen.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "5e40a1e1d60b0e75e80bd19c2f360b0ae0f0c5c6cd6fa4aa9f6ea52efc052339") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e40a1e1d60b0e75e80bd19c2f360b0ae0f0c5c6cd6fa4aa9f6ea52efc052339";
    }
    let className;
    let props;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = variant;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        variant = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    let t2;
    if ($[6] !== className || $[7] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[6] = className;
        $[7] = variant;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== Comp || $[10] !== props || $[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "badge",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/badge.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = Comp;
        $[10] = props;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drawer",
    ()=>Drawer,
    "DrawerClose",
    ()=>DrawerClose,
    "DrawerContent",
    ()=>DrawerContent,
    "DrawerDescription",
    ()=>DrawerDescription,
    "DrawerFooter",
    ()=>DrawerFooter,
    "DrawerHeader",
    ()=>DrawerHeader,
    "DrawerOverlay",
    ()=>DrawerOverlay,
    "DrawerPortal",
    ()=>DrawerPortal,
    "DrawerTitle",
    ()=>DrawerTitle,
    "DrawerTrigger",
    ()=>DrawerTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/vaul/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Drawer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Root, {
            "data-slot": "drawer",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Drawer;
function DrawerTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Trigger, {
            "data-slot": "drawer-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DrawerTrigger;
function DrawerPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Portal, {
            "data-slot": "drawer-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DrawerPortal;
function DrawerClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Close, {
            "data-slot": "drawer-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DrawerClose;
function DrawerOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Overlay, {
            "data-slot": "drawer-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = DrawerOverlay;
function DrawerContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerOverlay, {}, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 203,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerPortal, {
            "data-slot": "drawer-portal",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Content, {
                    "data-slot": "drawer-content",
                    className: t2,
                    ...props,
                    children: [
                        t3,
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
                    lineNumber: 210,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = t2;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c5 = DrawerContent;
function DrawerHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "drawer-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 252,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = DrawerHeader;
function DrawerFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "drawer-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 293,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = DrawerFooter;
function DrawerTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Title, {
            "data-slot": "drawer-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 334,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = DrawerTitle;
function DrawerDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4416d9c54f685f458e87c324095e9eb06141eb810897f04cd18b58a08763c9d";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Description, {
            "data-slot": "drawer-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/drawer.tsx",
            lineNumber: 375,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = DrawerDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Drawer");
__turbopack_context__.k.register(_c1, "DrawerTrigger");
__turbopack_context__.k.register(_c2, "DrawerPortal");
__turbopack_context__.k.register(_c3, "DrawerClose");
__turbopack_context__.k.register(_c4, "DrawerOverlay");
__turbopack_context__.k.register(_c5, "DrawerContent");
__turbopack_context__.k.register(_c6, "DrawerHeader");
__turbopack_context__.k.register(_c7, "DrawerFooter");
__turbopack_context__.k.register(_c8, "DrawerTitle");
__turbopack_context__.k.register(_c9, "DrawerDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dialog",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Dialog;
function DialogTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dialog-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DialogTrigger;
function DialogPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dialog-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DialogPortal;
function DialogClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DialogClose;
function DialogOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "dialog-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = DialogOverlay;
function DialogContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, showCloseButton: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const showCloseButton = t1 === undefined ? true : t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className);
        $[7] = className;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== showCloseButton) {
        t4 = showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
                    lineNumber: 209,
                    columnNumber: 443
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
                    lineNumber: 209,
                    columnNumber: 452
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 209,
            columnNumber: 29
        }, this);
        $[9] = showCloseButton;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== children || $[12] !== props || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            "data-slot": "dialog-portal",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t3,
                    ...props,
                    children: [
                        children,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
                    lineNumber: 217,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = props;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
}
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 260,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = DialogHeader;
function DialogFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 301,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = DialogFooter;
function DialogTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "dialog-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 342,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = DialogTitle;
function DialogDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91011477e142d1f6aa5773648fe4443ed5bcc1af27ed2f5ade5e805a1b478e5e";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "dialog-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/dialog.tsx",
            lineNumber: 383,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Checkbox(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "de9b68a389bbbf916aff170fe6bca57ec2367e9edde43ed6ea1e564c5175d614") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "de9b68a389bbbf916aff170fe6bca57ec2367e9edde43ed6ea1e564c5175d614";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/ui/checkbox.tsx",
                lineNumber: 40,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/checkbox.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "checkbox",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/ui/checkbox.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/components/podcast-flow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PodcastFlow",
    ()=>PodcastFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/lingo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$podcast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Podcast$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/podcast.js [app-client] (ecmascript) <export default as Podcast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderArchive$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/folder-archive.js [app-client] (ecmascript) <export default as FolderArchive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/checkbox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const CHAPTER_COLORS = [
    {
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-300 dark:border-blue-700",
        label: "text-blue-700 dark:text-blue-300"
    },
    {
        bg: "bg-purple-50 dark:bg-purple-950/30",
        border: "border-purple-300 dark:border-purple-700",
        label: "text-purple-700 dark:text-purple-300"
    },
    {
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-300 dark:border-green-700",
        label: "text-green-700 dark:text-green-300"
    },
    {
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-300 dark:border-orange-700",
        label: "text-orange-700 dark:text-orange-300"
    },
    {
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-300 dark:border-pink-700",
        label: "text-pink-700 dark:text-pink-300"
    }
];
const LANGUAGES = [
    {
        code: "en",
        name: "English"
    },
    {
        code: "es",
        name: "Español"
    },
    {
        code: "fr",
        name: "Français"
    },
    {
        code: "de",
        name: "Deutsch"
    },
    {
        code: "it",
        name: "Italiano"
    },
    {
        code: "pt",
        name: "Português"
    }
];
function ChapterNode({ data }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    const { chapter, translations, audioUrls, onTranslate, onGenerateAudio } = data;
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingAudio, setIsGeneratingAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentAudioUrls, setCurrentAudioUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(audioUrls);
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayContent = selectedLanguage === "en" ? {
        title: chapter.title,
        textContent: chapter.textContent
    } : translations[selectedLanguage] || {
        title: chapter.title,
        textContent: chapter.textContent
    };
    const handleLanguageSelect = async (langCode)=>{
        if (langCode === selectedLanguage) return;
        if (!translations[langCode] && langCode !== "en") {
            setIsTranslating(true);
            try {
                await onTranslate(chapter.id, langCode);
                setSelectedLanguage(langCode);
            } catch (error) {
                console.error("Translation failed:", error);
            } finally{
                setIsTranslating(false);
            }
        } else {
            setSelectedLanguage(langCode);
        }
    };
    const handleGenerateAudio = async ()=>{
        if (currentAudioUrls[selectedLanguage]) {
            return;
        }
        setIsGeneratingAudio(true);
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(`${t("Generating")} ${LANGUAGES.find((l)=>l.code === selectedLanguage)?.name} ${t("audio...")}`);
        try {
            const audioUrl = await onGenerateAudio(chapter.id, selectedLanguage, displayContent.textContent);
            setCurrentAudioUrls((prev)=>({
                    ...prev,
                    [selectedLanguage]: audioUrl
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("Audio generated successfully!"), {
                id: toastId
            });
        } catch (error_0) {
            console.error("Audio generation failed:", error_0);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("Failed to generate audio"), {
                id: toastId
            });
        } finally{
            setIsGeneratingAudio(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChapterNode.useEffect": ()=>{
            setCurrentAudioUrls(audioUrls);
        }
    }["ChapterNode.useEffect"], [
        audioUrls
    ]);
    const displayContentForDrawer = selectedLanguage === "en" ? {
        title: chapter.title,
        textContent: chapter.textContent
    } : translations[selectedLanguage] || {
        title: chapter.title,
        textContent: chapter.textContent
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top,
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom,
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-xl", isGeneratingAudio && "p-[2px]"),
                children: [
                    isGeneratingAudio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-xl pointer-events-none",
                        style: {
                            background: "linear-gradient(90deg, hsl(var(--muted-foreground)), hsl(var(--foreground)), hsl(var(--muted-foreground)))",
                            backgroundSize: "200% 100%",
                            animation: "gradient-shift 3s ease-in-out infinite, gradient-border 2s ease-in-out infinite",
                            WebkitAnimation: "gradient-shift 3s ease-in-out infinite, gradient-border 2s ease-in-out infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 189,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-[280px] sm:w-72 p-3 sm:p-4 border-2 shadow-lg cursor-pointer hover:shadow-xl transition-shadow relative bg-card", isGeneratingAudio && "border-transparent"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-sm truncate",
                                                    children: displayContent.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        chapter.wordCount,
                                                        " words"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 198,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        className: "h-8 w-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-2 py-1.5 text-xs font-semibold",
                                                            children: "Languages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 17
                                                        }, this),
                                                        LANGUAGES.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleLanguageSelect(lang.code),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer", selectedLanguage === lang.code && "bg-accent"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                        className: "h-3 w-3 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    lang.name,
                                                                    translations[lang.code] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "secondary",
                                                                        className: "ml-auto text-xs",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, lang.code, true, {
                                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 40
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t my-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: handleGenerateAudio,
                                                            disabled: isGeneratingAudio || !!currentAudioUrls[selectedLanguage],
                                                            className: "cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                    className: "h-3 w-3 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 21
                                                                }, this),
                                                                isGeneratingAudio ? t("Generating...") : currentAudioUrls[selectedLanguage] ? t("Audio Ready") : t("Generate Audio")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 202,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 197,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"], {
                                    open: drawerOpen,
                                    onOpenChange: setDrawerOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "w-full",
                                                size: "sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "h-3 w-3 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    t("View Content")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 226,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerContent"], {
                                            className: "max-h-[85vh] sm:max-h-[80vh]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerHeader"], {
                                                    className: "px-4 sm:px-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerTitle"], {
                                                            className: "text-base sm:text-lg",
                                                            children: displayContentForDrawer.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerDescription"], {
                                                            className: "text-xs sm:text-sm",
                                                            children: [
                                                                chapter.wordCount,
                                                                " ",
                                                                t("words"),
                                                                " • ",
                                                                t("Language:"),
                                                                " ",
                                                                LANGUAGES.find((l_0)=>l_0.code === selectedLanguage)?.name || selectedLanguage.toUpperCase()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 sm:px-6 pb-4 overflow-y-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "prose prose-sm max-w-none dark:prose-invert",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "whitespace-pre-wrap text-xs sm:text-sm leading-relaxed",
                                                            children: displayContentForDrawer.textContent
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerFooter"], {
                                                    className: "px-4 sm:px-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: LANGUAGES.map((lang_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: selectedLanguage === lang_0.code ? "default" : "outline",
                                                                    size: "sm",
                                                                    onClick: ()=>{
                                                                        handleLanguageSelect(lang_0.code);
                                                                    },
                                                                    disabled: isTranslating,
                                                                    children: [
                                                                        lang_0.name,
                                                                        translations[lang_0.code] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "secondary",
                                                                            className: "ml-2 text-xs",
                                                                            children: "✓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, lang_0.code, true, {
                                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 44
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "default",
                                                                    onClick: async ()=>{
                                                                        if (!currentAudioUrls[selectedLanguage]) {
                                                                            await handleGenerateAudio();
                                                                            setDrawerOpen(false);
                                                                        }
                                                                    },
                                                                    disabled: isGeneratingAudio || !!currentAudioUrls[selectedLanguage],
                                                                    className: "flex-1",
                                                                    children: isGeneratingAudio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                className: "h-4 w-4 mr-2 animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                                lineNumber: 265,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            t("Generating...")
                                                                        ]
                                                                    }, void 0, true) : currentAudioUrls[selectedLanguage] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                className: "h-4 w-4 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            t("Audio Available")
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                                className: "h-4 w-4 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                                lineNumber: 271,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            t("Generate Audio")
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerClose"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "outline",
                                                                        className: "flex-1",
                                                                        children: "Close"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 232,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 225,
                                    columnNumber: 11
                                }, this),
                                isTranslating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-3 w-3 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        t("Translating...")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this),
                                currentAudioUrls[selectedLanguage] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "w-full justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "h-3 w-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        t("Audio Available")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 286,
                                    columnNumber: 50
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ChapterNode, "F9km9bT8rOS7Fs5ev86pcISy7ro=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"]
    ];
});
_c = ChapterNode;
function AudioNode(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(93);
    if ($[0] !== "77b0cee32e60b48394365b701df1ec0199a171700c949f78115b0adda76e99a3") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77b0cee32e60b48394365b701df1ec0199a171700c949f78115b0adda76e99a3";
    }
    const { data } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== data.audioUrl || $[2] !== data.chapterId || $[3] !== data.language || $[4] !== t) {
        t1 = ({
            "AudioNode[handleDownload]": ()=>{
                const link = document.createElement("a");
                link.href = data.audioUrl;
                link.download = `audio-${data.chapterId}-${data.language}.wav`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("Audio download started!"));
            }
        })["AudioNode[handleDownload]"];
        $[1] = data.audioUrl;
        $[2] = data.chapterId;
        $[3] = data.language;
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleDownload = t1;
    let t2;
    if ($[6] !== data.language) {
        t2 = LANGUAGES.find({
            "AudioNode[LANGUAGES.find()]": (l)=>l.code === data.language
        }["AudioNode[LANGUAGES.find()]"])?.name || data.language.toUpperCase();
        $[6] = data.language;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const languageName = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
            type: "target",
            position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top,
            className: "w-2 h-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
            type: "source",
            position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom,
            className: "w-2 h-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 349,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
            type: "target",
            position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
            className: "w-2 h-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 350,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
            type: "source",
            position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
            className: "w-2 h-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 351,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
    }
    const t7 = data.isSelected && "ring-2 ring-primary ring-offset-2";
    let t8;
    if ($[12] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-16 h-16 rounded-full border border-border bg-card shadow-sm transition-all hover:shadow-md hover:scale-105 cursor-pointer", t7);
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== data.language) {
        t9 = data.language.toUpperCase();
        $[14] = data.language;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 bg-muted rounded flex items-center justify-center border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-foreground text-xs font-semibold",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 381,
                    columnNumber: 174
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 381,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: t8,
                onClick: _AudioNodeButtonOnClick,
                children: t10
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 389,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t8;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t) {
        t12 = t("Audio Player");
        $[21] = t;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: t12
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== data.chapter?.title || $[26] !== t) {
        t14 = data.chapter?.title || t("Chapter Audio");
        $[25] = data.chapter?.title;
        $[26] = t;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== languageName || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: [
                t14,
                " • ",
                languageName
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[28] = languageName;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t13 || $[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[31] = t13;
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    const t17 = data.audioUrl;
    let t18;
    if ($[34] !== t) {
        t18 = t("Your browser does not support the audio element.");
        $[34] = t;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== data.audioUrl || $[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                controls: true,
                className: "w-full",
                src: t17,
                preload: "metadata",
                children: t18
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 450,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[36] = data.audioUrl;
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t) {
        t20 = t("Language:");
        $[39] = t;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: t20
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[41] = t20;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== languageName) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "secondary",
            children: languageName
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[43] = languageName;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== t21 || $[46] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[45] = t21;
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== data.chapter || $[49] !== t) {
        t24 = data.chapter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: t("Chapter:")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 492,
                            columnNumber: 80
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: data.chapter.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 492,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 492,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: t("Word Count:")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 492,
                            columnNumber: 256
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                data.chapter.wordCount,
                                " ",
                                t("words")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 492,
                            columnNumber: 321
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 492,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true);
        $[48] = data.chapter;
        $[49] = t;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t) {
        t25 = t("Format:");
        $[51] = t;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted-foreground",
            children: t25
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium",
            children: "WAV"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[56] = t26;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== t23 || $[59] !== t24 || $[60] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 text-sm",
            children: [
                t23,
                t24,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[58] = t23;
        $[59] = t24;
        $[60] = t28;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "h-4 w-4 mr-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== t) {
        t31 = t("Download Audio");
        $[63] = t;
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== handleDownload || $[66] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleDownload,
            className: "w-full",
            variant: "default",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[65] = handleDownload;
        $[66] = t31;
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] !== t19 || $[69] !== t29 || $[70] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t19,
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[68] = t19;
        $[69] = t29;
        $[70] = t32;
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== t16 || $[73] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[95vw] sm:max-w-md",
            children: [
                t16,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[72] = t16;
        $[73] = t33;
        $[74] = t34;
    } else {
        t34 = $[74];
    }
    let t35;
    if ($[75] !== dialogOpen || $[76] !== t11 || $[77] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: dialogOpen,
            onOpenChange: setDialogOpen,
            children: [
                t11,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[75] = dialogOpen;
        $[76] = t11;
        $[77] = t34;
        $[78] = t35;
    } else {
        t35 = $[78];
    }
    let t36;
    if ($[79] !== data) {
        t36 = ({
            "AudioNode[<div>.onClick]": (e_0)=>{
                e_0.stopPropagation();
                e_0.preventDefault();
                data.onToggleSelect(data.nodeId);
            }
        })["AudioNode[<div>.onClick]"];
        $[79] = data;
        $[80] = t36;
    } else {
        t36 = $[80];
    }
    let t37;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            pointerEvents: "auto"
        };
        $[81] = t37;
    } else {
        t37 = $[81];
    }
    let t38;
    if ($[82] !== data) {
        t38 = ({
            "AudioNode[<Checkbox>.onCheckedChange]": (checked)=>{
                data.onToggleSelect(data.nodeId);
            }
        })["AudioNode[<Checkbox>.onCheckedChange]"];
        $[82] = data;
        $[83] = t38;
    } else {
        t38 = $[83];
    }
    let t39;
    if ($[84] !== data.isSelected || $[85] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
            checked: data.isSelected,
            onCheckedChange: t38,
            className: "h-4 w-4 border-2 border-foreground/60 bg-background",
            onClick: _AudioNodeCheckboxOnClick
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[84] = data.isSelected;
        $[85] = t38;
        $[86] = t39;
    } else {
        t39 = $[86];
    }
    let t40;
    if ($[87] !== t36 || $[88] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-1 -left-1 z-30 checkbox-wrapper cursor-pointer",
            onClick: t36,
            onMouseDown: _AudioNodeDivOnMouseDown,
            style: t37,
            children: t39
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[87] = t36;
        $[88] = t39;
        $[89] = t40;
    } else {
        t40 = $[89];
    }
    let t41;
    if ($[90] !== t35 || $[91] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t4,
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t35,
                        t40
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 648,
                    columnNumber: 29
                }, this)
            ]
        }, void 0, true);
        $[90] = t35;
        $[91] = t40;
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    return t41;
}
_s1(AudioNode, "e07VmMD4UYACuj+5GDu/YwNEoT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"]
    ];
});
_c1 = AudioNode;
function _AudioNodeCheckboxOnClick(e_2) {
    e_2.stopPropagation();
    e_2.preventDefault();
}
function _AudioNodeDivOnMouseDown(e_1) {
    e_1.stopPropagation();
    e_1.preventDefault();
}
function _AudioNodeButtonOnClick(e) {
    const target = e.target;
    if (target.closest(".checkbox-wrapper")) {
        e.preventDefault();
        e.stopPropagation();
        return;
    }
}
function MergeNode({ data }) {
    _s2();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDownloadMerged = async ()=>{
        setIsDownloading(true);
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(t("Merging audio files..."));
        try {
            // Get actual audio file paths from the URLs
            const audioFiles = data.group.audioNodes.map((node)=>{
                const audioUrl = data.audioUrls[node.chapterId]?.[node.language];
                if (!audioUrl) {
                    throw new Error(`Audio not found for ${node.chapterId} - ${node.language}`);
                }
                // Extract filename from URL (/audio/filename.wav)
                return audioUrl.split('/').pop();
            }).filter(Boolean);
            console.log("Merging audio files:", audioFiles);
            const response = await fetch('/api/merge-audio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    audioFiles
                })
            });
            if (!response.ok) {
                const error_0 = await response.json();
                throw new Error(error_0.error || 'Failed to merge audio files');
            }
            const result = await response.json();
            // Download the merged file
            const link = document.createElement('a');
            link.href = result.url;
            link.download = `merged-podcast-${data.group.language}.wav`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("Merged audio download started!"), {
                id: toastId
            });
        } catch (error) {
            console.error("Download error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : t("Failed to download merged audio"), {
                id: toastId
            });
        } finally{
            setIsDownloading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top,
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom,
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-64 p-4 border shadow-sm bg-card bg-green-500/10 border-green-500/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            children: t("Merge Group")
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 743,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 741,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "ghost",
                                                        className: "h-6 w-6 p-0",
                                                        disabled: isDownloading,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleDownloadMerged,
                                                        disabled: isDownloading,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "h-3 w-3 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                                lineNumber: 754,
                                                                columnNumber: 21
                                                            }, this),
                                                            t("Download Merged")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            onClick: ()=>data.onRemoveGroup(data.group.id),
                                            className: "h-6 w-6 p-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                lineNumber: 760,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                            lineNumber: 759,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 745,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 740,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "default",
                            className: "w-fit",
                            children: data.group.language.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 764,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                data.group.audioNodes.length,
                                " ",
                                data.group.audioNodes.length > 1 ? t("audios") : t("audio"),
                                " ",
                                t("audios to merge")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 767,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: data.group.audioNodes.map((audio, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs bg-white dark:bg-gray-800 p-1 rounded",
                                    children: [
                                        idx + 1,
                                        ". ",
                                        t("Chapter"),
                                        " ",
                                        audio.chapterId.split('-').pop()
                                    ]
                                }, audio.nodeId, true, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 771,
                                    columnNumber: 56
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 770,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 739,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 738,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(MergeNode, "ku598kvpBVB3/gHW/6zCWZz+VPk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"]
    ];
});
_c2 = MergeNode;
function ChapterGroupNode(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "77b0cee32e60b48394365b701df1ec0199a171700c949f78115b0adda76e99a3") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77b0cee32e60b48394365b701df1ec0199a171700c949f78115b0adda76e99a3";
    }
    const { data } = t0;
    let t1;
    if ($[1] !== data.color.bg || $[2] !== data.color.border) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full rounded-xl border-2 border-dashed", data.color.bg, data.color.border);
        $[1] = data.color.bg;
        $[2] = data.color.border;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== data.color.border || $[5] !== data.color.label) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold", "bg-background border-2", data.color.border, data.color.label);
        $[4] = data.color.border;
        $[5] = data.color.label;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== data.chapterNumber || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                "Chapter ",
                data.chapterNumber
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 810,
            columnNumber: 10
        }, this);
        $[7] = data.chapterNumber;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const t4 = data.audioCount !== 1 ? "s" : "";
    let t5;
    if ($[10] !== data.audioCount || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-2 right-4 flex items-center gap-2 opacity-60",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-muted-foreground",
                children: [
                    data.audioCount,
                    " audio",
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 820,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 820,
            columnNumber: 10
        }, this);
        $[10] = data.audioCount;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t1 || $[14] !== t3 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
            lineNumber: 829,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t3;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c3 = ChapterGroupNode;
const nodeTypes = {
    chapter: ChapterNode,
    audio: AudioNode,
    merge: MergeNode,
    chapterGroup: ChapterGroupNode
};
function PodcastFlow({ steps, chapters, translations, audioUrls, onTranslate, onGenerateAudio, isLoading, onStartNew }) {
    _s3();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    const [selectedAudioNodes, setSelectedAudioNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [mergeGroups, setMergeGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleAudioSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PodcastFlow.useCallback[toggleAudioSelection]": (nodeId)=>{
            setSelectedAudioNodes({
                "PodcastFlow.useCallback[toggleAudioSelection]": (prev)=>{
                    const newSet = new Set(prev);
                    if (newSet.has(nodeId)) {
                        newSet.delete(nodeId);
                    } else {
                        newSet.add(nodeId);
                    }
                    return newSet;
                }
            }["PodcastFlow.useCallback[toggleAudioSelection]"]);
        }
    }["PodcastFlow.useCallback[toggleAudioSelection]"], []);
    const createMergeGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PodcastFlow.useCallback[createMergeGroup]": ()=>{
            if (selectedAudioNodes.size < 2) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("Please select at least 2 audio nodes to merge"));
                return;
            }
            // Extract audio node info from selected nodes
            const audioNodesInfo = Array.from(selectedAudioNodes).map({
                "PodcastFlow.useCallback[createMergeGroup].audioNodesInfo": (nodeId_0)=>{
                    const parts = nodeId_0.split('-');
                    const language = parts[parts.length - 1];
                    const chapterId = parts.slice(1, -1).join('-');
                    return {
                        nodeId: nodeId_0,
                        chapterId,
                        language
                    };
                }
            }["PodcastFlow.useCallback[createMergeGroup].audioNodesInfo"]);
            // Check if all selected audios have the same language
            const languages = new Set(audioNodesInfo.map({
                "PodcastFlow.useCallback[createMergeGroup]": (a)=>a.language
            }["PodcastFlow.useCallback[createMergeGroup]"]));
            if (languages.size > 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("All selected audios must be in the same language"));
                return;
            }
            const language_0 = audioNodesInfo[0].language;
            const newGroup = {
                id: `merge-${Date.now()}`,
                audioNodes: audioNodesInfo,
                language: language_0
            };
            setMergeGroups({
                "PodcastFlow.useCallback[createMergeGroup]": (prev_0)=>[
                        ...prev_0,
                        newGroup
                    ]
            }["PodcastFlow.useCallback[createMergeGroup]"]);
            setSelectedAudioNodes(new Set());
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${t("Merge group created with")} ${audioNodesInfo.length} ${audioNodesInfo.length > 1 ? t("audios") : t("audio")}`);
        }
    }["PodcastFlow.useCallback[createMergeGroup]"], [
        selectedAudioNodes,
        t
    ]);
    const removeMergeGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PodcastFlow.useCallback[removeMergeGroup]": (groupId)=>{
            setMergeGroups({
                "PodcastFlow.useCallback[removeMergeGroup]": (prev_1)=>prev_1.filter({
                        "PodcastFlow.useCallback[removeMergeGroup]": (g)=>g.id !== groupId
                    }["PodcastFlow.useCallback[removeMergeGroup]"])
            }["PodcastFlow.useCallback[removeMergeGroup]"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("Merge group removed"));
        }
    }["PodcastFlow.useCallback[removeMergeGroup]"], [
        t
    ]);
    const downloadAllSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PodcastFlow.useCallback[downloadAllSelected]": async ()=>{
            if (selectedAudioNodes.size < 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("Please select at least one audio to download"));
                return;
            }
            const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(t("Preparing download..."));
            try {
                // Extract audio node info from selected nodes
                const audioNodesInfo_0 = Array.from(selectedAudioNodes).map({
                    "PodcastFlow.useCallback[downloadAllSelected].audioNodesInfo_0": (nodeId_1)=>{
                        const parts_0 = nodeId_1.split('-');
                        const language_1 = parts_0[parts_0.length - 1];
                        const chapterId_0 = parts_0.slice(1, -1).join('-');
                        return {
                            nodeId: nodeId_1,
                            chapterId: chapterId_0,
                            language: language_1
                        };
                    }
                }["PodcastFlow.useCallback[downloadAllSelected].audioNodesInfo_0"]);
                // Get actual audio file paths
                const audioFiles = audioNodesInfo_0.map({
                    "PodcastFlow.useCallback[downloadAllSelected].audioFiles": (node)=>{
                        const audioUrl = audioUrls[node.chapterId]?.[node.language];
                        if (!audioUrl) {
                            throw new Error(`Audio not found for ${node.chapterId} - ${node.language}`);
                        }
                        // Extract filename from URL (/audio/filename.wav)
                        return audioUrl.split('/').pop();
                    }
                }["PodcastFlow.useCallback[downloadAllSelected].audioFiles"]).filter(Boolean);
                console.log("Zipping audio files:", audioFiles);
                const response = await fetch('/api/zip-audio', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        audioFiles
                    })
                });
                if (!response.ok) {
                    const error_0 = await response.json();
                    throw new Error(error_0.error || 'Failed to create zip file');
                }
                const result = await response.json();
                // Download the zip file
                const link = document.createElement('a');
                link.href = result.url;
                link.download = `podcast-audios-${Date.now()}.zip`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("Download started!"), {
                    id: toastId
                });
                setSelectedAudioNodes(new Set()); // Clear selection after download
            } catch (error) {
                console.error("Download error:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : t("Failed to download audio files"), {
                    id: toastId
                });
            }
        }
    }["PodcastFlow.useCallback[downloadAllSelected]"], [
        selectedAudioNodes,
        audioUrls,
        t
    ]);
    const downloadAllAudios = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PodcastFlow.useCallback[downloadAllAudios]": async ()=>{
            // Get all audio files from all chapters
            const allAudioFiles = [];
            chapters.forEach({
                "PodcastFlow.useCallback[downloadAllAudios]": (chapter)=>{
                    const chapterAudioUrls = audioUrls[chapter.id] || {};
                    Object.values(chapterAudioUrls).forEach({
                        "PodcastFlow.useCallback[downloadAllAudios]": (audioUrl_0)=>{
                            if (audioUrl_0) {
                                const filename = audioUrl_0.split('/').pop();
                                if (filename) {
                                    allAudioFiles.push(filename);
                                }
                            }
                        }
                    }["PodcastFlow.useCallback[downloadAllAudios]"]);
                }
            }["PodcastFlow.useCallback[downloadAllAudios]"]);
            if (allAudioFiles.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("No audio files available to download"));
                return;
            }
            const toastId_0 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(t("Preparing download..."));
            try {
                console.log("Zipping all audio files:", allAudioFiles);
                const response_0 = await fetch('/api/zip-audio', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        audioFiles: allAudioFiles
                    })
                });
                if (!response_0.ok) {
                    const error_2 = await response_0.json();
                    throw new Error(error_2.error || 'Failed to create zip file');
                }
                const result_0 = await response_0.json();
                // Download the zip file
                const link_0 = document.createElement('a');
                link_0.href = result_0.url;
                link_0.download = `all-podcast-audios-${Date.now()}.zip`;
                document.body.appendChild(link_0);
                link_0.click();
                document.body.removeChild(link_0);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("Download started!"), {
                    id: toastId_0
                });
            } catch (error_1) {
                console.error("Download error:", error_1);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error_1 instanceof Error ? error_1.message : t("Failed to download audio files"), {
                    id: toastId_0
                });
            }
        }
    }["PodcastFlow.useCallback[downloadAllAudios]"], [
        chapters,
        audioUrls,
        t
    ]);
    // Count total audio files
    const totalAudioCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PodcastFlow.useMemo[totalAudioCount]": ()=>{
            return chapters.reduce({
                "PodcastFlow.useMemo[totalAudioCount]": (count, chapter_0)=>{
                    const chapterAudioUrls_0 = audioUrls[chapter_0.id] || {};
                    return count + Object.keys(chapterAudioUrls_0).length;
                }
            }["PodcastFlow.useMemo[totalAudioCount]"], 0);
        }
    }["PodcastFlow.useMemo[totalAudioCount]"], [
        chapters,
        audioUrls
    ]);
    const initialNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PodcastFlow.useMemo[initialNodes]": ()=>{
            const nodes = [];
            if (chapters.length > 0) {
                const startY = 300;
                const audioSpacing = 220;
                const audioYOffset = 250;
                const minSpacing = 50; // Minimum gap between chapter groups
                // First pass: calculate all group widths
                const groupWidths = chapters.map({
                    "PodcastFlow.useMemo[initialNodes].groupWidths": (chapter_1)=>{
                        const chapterAudioUrls_1 = audioUrls[chapter_1.id] || {};
                        const audioCount = Object.keys(chapterAudioUrls_1).length;
                        return Math.max(420, audioCount * audioSpacing + 180);
                    }
                }["PodcastFlow.useMemo[initialNodes].groupWidths"]);
                // Calculate positions based on actual widths to prevent overlaps
                let currentX = 0;
                const groupPositions = groupWidths.map({
                    "PodcastFlow.useMemo[initialNodes].groupPositions": (width, index)=>{
                        const x = currentX + width / 2;
                        currentX += width + minSpacing;
                        return {
                            x,
                            width
                        };
                    }
                }["PodcastFlow.useMemo[initialNodes].groupPositions"]);
                // Center all groups around the center point
                const totalWidth = currentX - minSpacing;
                const centerX = 500;
                const startX = centerX - totalWidth / 2;
                chapters.forEach({
                    "PodcastFlow.useMemo[initialNodes]": (chapter_2, index_0)=>{
                        const chapterAudioUrls_2 = audioUrls[chapter_2.id] || {};
                        const audioCount_0 = Object.keys(chapterAudioUrls_2).length;
                        const color = CHAPTER_COLORS[index_0 % CHAPTER_COLORS.length];
                        // Add chapter group background node
                        const { width: groupWidth } = groupPositions[index_0];
                        const groupX = startX + groupPositions[index_0].x - groupWidth / 2;
                        const groupHeight = audioCount_0 > 0 ? 550 : 280;
                        const groupY = startY - 40;
                        nodes.push({
                            id: `group-${chapter_2.id}`,
                            type: "chapterGroup",
                            position: {
                                x: groupX,
                                y: groupY
                            },
                            style: {
                                width: groupWidth,
                                height: groupHeight
                            },
                            data: {
                                chapterNumber: index_0 + 1,
                                chapterTitle: chapter_2.title,
                                audioCount: audioCount_0,
                                color
                            }
                        });
                        // Position relative to group parent (parent's 0,0 is its top-left corner)
                        const relativeX = groupWidth / 2 - 140; // Center horizontally in group
                        const relativeY = 80;
                        nodes.push({
                            id: `chapter-${chapter_2.id}`,
                            type: "chapter",
                            position: {
                                x: relativeX,
                                y: relativeY
                            },
                            parentId: `group-${chapter_2.id}`,
                            extent: "parent",
                            data: {
                                chapter: chapter_2,
                                translations: translations[chapter_2.id] || {},
                                audioUrls: audioUrls[chapter_2.id] || {},
                                onTranslate,
                                onGenerateAudio
                            }
                        });
                        Object.entries(chapterAudioUrls_2).forEach({
                            "PodcastFlow.useMemo[initialNodes]": ([language_2, audioUrl_1], audioIndex)=>{
                                const audioNodeId = `audio-${chapter_2.id}-${language_2}`;
                                // Position audios relative to group's (0,0) 
                                const audioRelativeX = groupWidth / 2 - (audioCount_0 - 1) * audioSpacing / 2 + audioIndex * audioSpacing - 32; // Center audios in group (32 = half of 64px node width)
                                const audioRelativeY = 360;
                                nodes.push({
                                    id: audioNodeId,
                                    type: "audio",
                                    position: {
                                        x: audioRelativeX,
                                        y: audioRelativeY
                                    },
                                    parentId: `group-${chapter_2.id}`,
                                    extent: "parent",
                                    data: {
                                        audioUrl: audioUrl_1,
                                        language: language_2,
                                        chapterId: chapter_2.id,
                                        isSelected: selectedAudioNodes.has(audioNodeId),
                                        onToggleSelect: toggleAudioSelection,
                                        nodeId: audioNodeId,
                                        chapter: chapter_2
                                    }
                                });
                            }
                        }["PodcastFlow.useMemo[initialNodes]"]);
                    }
                }["PodcastFlow.useMemo[initialNodes]"]);
                // Add merge nodes
                mergeGroups.forEach({
                    "PodcastFlow.useMemo[initialNodes]": (group)=>{
                        const mergeY = startY + audioYOffset + 250;
                        const mergeX = 500;
                        nodes.push({
                            id: group.id,
                            type: "merge",
                            position: {
                                x: mergeX,
                                y: mergeY
                            },
                            data: {
                                group,
                                onRemoveGroup: removeMergeGroup,
                                audioUrls
                            }
                        });
                    }
                }["PodcastFlow.useMemo[initialNodes]"]);
            }
            return nodes;
        }
    }["PodcastFlow.useMemo[initialNodes]"], [
        chapters,
        translations,
        audioUrls,
        onTranslate,
        onGenerateAudio,
        selectedAudioNodes,
        toggleAudioSelection,
        mergeGroups,
        removeMergeGroup
    ]);
    const initialEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PodcastFlow.useMemo[initialEdges]": ()=>{
            const edges = [];
            if (chapters.length > 0) {
                chapters.forEach({
                    "PodcastFlow.useMemo[initialEdges]": (chapter_3)=>{
                        const chapterAudioUrls_3 = audioUrls[chapter_3.id] || {};
                        Object.entries(chapterAudioUrls_3).forEach({
                            "PodcastFlow.useMemo[initialEdges]": ([language_3])=>{
                                const audioNodeId_0 = `audio-${chapter_3.id}-${language_3}`;
                                edges.push({
                                    id: `chapter-${chapter_3.id}-audio-${language_3}`,
                                    source: `chapter-${chapter_3.id}`,
                                    target: audioNodeId_0,
                                    type: "smoothstep",
                                    animated: true,
                                    style: {
                                        stroke: "hsl(150, 50%, 50%)",
                                        strokeWidth: 2,
                                        strokeDasharray: "4,4"
                                    },
                                    markerEnd: {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                                        color: "hsl(150, 50%, 50%)"
                                    }
                                });
                            }
                        }["PodcastFlow.useMemo[initialEdges]"]);
                    }
                }["PodcastFlow.useMemo[initialEdges]"]);
            }
            // Add edges from audio nodes to merge nodes
            mergeGroups.forEach({
                "PodcastFlow.useMemo[initialEdges]": (group_0)=>{
                    group_0.audioNodes.forEach({
                        "PodcastFlow.useMemo[initialEdges]": (audioNode)=>{
                            edges.push({
                                id: `audio-${audioNode.nodeId}-merge-${group_0.id}`,
                                source: audioNode.nodeId,
                                target: group_0.id,
                                type: "smoothstep",
                                animated: true,
                                style: {
                                    stroke: "hsl(150, 50%, 50%)",
                                    strokeWidth: 2
                                },
                                markerEnd: {
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                                    color: "hsl(150, 50%, 50%)"
                                }
                            });
                        }
                    }["PodcastFlow.useMemo[initialEdges]"]);
                }
            }["PodcastFlow.useMemo[initialEdges]"]);
            return edges;
        }
    }["PodcastFlow.useMemo[initialEdges]"], [
        chapters,
        audioUrls,
        mergeGroups
    ]);
    const [nodes_0, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"])(initialNodes);
    const [edges_0, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"])(initialEdges);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PodcastFlow.useEffect": ()=>{
            // Recalculate positions to prevent overlaps when audio is added
            setNodes({
                "PodcastFlow.useEffect": (currentNodes)=>{
                    const newNodes = [];
                    if (chapters.length > 0) {
                        const startY_0 = 300;
                        const audioSpacing_0 = 220;
                        const audioYOffset_0 = 250;
                        const minSpacing_0 = 50; // Minimum gap between chapter groups
                        // First pass: calculate all group widths
                        const groupWidths_0 = chapters.map({
                            "PodcastFlow.useEffect.groupWidths_0": (chapter_4)=>{
                                const chapterAudioUrls_4 = audioUrls[chapter_4.id] || {};
                                const audioCount_1 = Object.keys(chapterAudioUrls_4).length;
                                return Math.max(420, audioCount_1 * audioSpacing_0 + 180);
                            }
                        }["PodcastFlow.useEffect.groupWidths_0"]);
                        // Calculate positions based on actual widths to prevent overlaps
                        let currentX_0 = 0;
                        const groupPositions_0 = groupWidths_0.map({
                            "PodcastFlow.useEffect.groupPositions_0": (width_0, index_1)=>{
                                const x_0 = currentX_0 + width_0 / 2;
                                currentX_0 += width_0 + minSpacing_0;
                                return {
                                    x: x_0,
                                    width: width_0
                                };
                            }
                        }["PodcastFlow.useEffect.groupPositions_0"]);
                        // Center all groups around the center point
                        const totalWidth_0 = currentX_0 - minSpacing_0;
                        const centerX_0 = 500;
                        const startX_0 = centerX_0 - totalWidth_0 / 2;
                        chapters.forEach({
                            "PodcastFlow.useEffect": (chapter_5, index_2)=>{
                                const chapterAudioUrls_5 = audioUrls[chapter_5.id] || {};
                                const audioCount_2 = Object.keys(chapterAudioUrls_5).length;
                                const color_0 = CHAPTER_COLORS[index_2 % CHAPTER_COLORS.length];
                                // Add chapter group background node
                                const { width: groupWidth_0 } = groupPositions_0[index_2];
                                const groupX_0 = startX_0 + groupPositions_0[index_2].x - groupWidth_0 / 2;
                                const groupHeight_0 = audioCount_2 > 0 ? 550 : 280;
                                const groupY_0 = startY_0 - 60;
                                newNodes.push({
                                    id: `group-${chapter_5.id}`,
                                    type: "chapterGroup",
                                    position: {
                                        x: groupX_0,
                                        y: groupY_0
                                    },
                                    style: {
                                        width: groupWidth_0,
                                        height: groupHeight_0
                                    },
                                    data: {
                                        chapterNumber: index_2 + 1,
                                        chapterTitle: chapter_5.title,
                                        audioCount: audioCount_2,
                                        color: color_0
                                    }
                                });
                                // Position relative to group parent (parent's 0,0 is its top-left corner)
                                const relativeX_0 = groupWidth_0 / 2 - 140; // Center horizontally in group
                                const relativeY_0 = 80;
                                newNodes.push({
                                    id: `chapter-${chapter_5.id}`,
                                    type: "chapter",
                                    position: {
                                        x: relativeX_0,
                                        y: relativeY_0
                                    },
                                    parentId: `group-${chapter_5.id}`,
                                    extent: "parent",
                                    data: {
                                        chapter: chapter_5,
                                        translations: translations[chapter_5.id] || {},
                                        audioUrls: audioUrls[chapter_5.id] || {},
                                        onTranslate,
                                        onGenerateAudio
                                    }
                                });
                                Object.entries(chapterAudioUrls_5).forEach({
                                    "PodcastFlow.useEffect": ([language_4, audioUrl_2], audioIndex_0)=>{
                                        const audioNodeId_1 = `audio-${chapter_5.id}-${language_4}`;
                                        // Position audios relative to group's (0,0) 
                                        const audioRelativeX_0 = groupWidth_0 / 2 - (audioCount_2 - 1) * audioSpacing_0 / 2 + audioIndex_0 * audioSpacing_0 - 32; // Center audios in group (32 = half of 64px node width)
                                        const audioRelativeY_0 = 360;
                                        newNodes.push({
                                            id: audioNodeId_1,
                                            type: "audio",
                                            position: {
                                                x: audioRelativeX_0,
                                                y: audioRelativeY_0
                                            },
                                            parentId: `group-${chapter_5.id}`,
                                            extent: "parent",
                                            data: {
                                                audioUrl: audioUrl_2,
                                                language: language_4,
                                                chapterId: chapter_5.id,
                                                isSelected: selectedAudioNodes.has(audioNodeId_1),
                                                onToggleSelect: toggleAudioSelection,
                                                nodeId: audioNodeId_1,
                                                chapter: chapter_5
                                            }
                                        });
                                    }
                                }["PodcastFlow.useEffect"]);
                            }
                        }["PodcastFlow.useEffect"]);
                        // Add merge nodes
                        mergeGroups.forEach({
                            "PodcastFlow.useEffect": (group_1)=>{
                                const mergeY_0 = startY_0 + audioYOffset_0 + 250;
                                const mergeX_0 = 500;
                                newNodes.push({
                                    id: group_1.id,
                                    type: "merge",
                                    position: {
                                        x: mergeX_0,
                                        y: mergeY_0
                                    },
                                    data: {
                                        group: group_1,
                                        onRemoveGroup: removeMergeGroup,
                                        audioUrls
                                    }
                                });
                            }
                        }["PodcastFlow.useEffect"]);
                    }
                    return newNodes;
                }
            }["PodcastFlow.useEffect"]);
        }
    }["PodcastFlow.useEffect"], [
        chapters,
        translations,
        audioUrls,
        onTranslate,
        onGenerateAudio,
        setNodes,
        selectedAudioNodes,
        toggleAudioSelection,
        mergeGroups,
        removeMergeGroup
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PodcastFlow.useEffect": ()=>{
            const newEdges = [];
            if (chapters.length > 0) {
                chapters.forEach({
                    "PodcastFlow.useEffect": (chapter_6)=>{
                        const chapterAudioUrls_6 = audioUrls[chapter_6.id] || {};
                        Object.entries(chapterAudioUrls_6).forEach({
                            "PodcastFlow.useEffect": ([language_5])=>{
                                const audioNodeId_2 = `audio-${chapter_6.id}-${language_5}`;
                                newEdges.push({
                                    id: `chapter-${chapter_6.id}-audio-${language_5}`,
                                    source: `chapter-${chapter_6.id}`,
                                    target: audioNodeId_2,
                                    type: "smoothstep",
                                    animated: true,
                                    style: {
                                        stroke: "hsl(150, 50%, 50%)",
                                        strokeWidth: 2,
                                        strokeDasharray: "4,4"
                                    },
                                    markerEnd: {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                                        color: "hsl(150, 50%, 50%)"
                                    }
                                });
                            }
                        }["PodcastFlow.useEffect"]);
                    }
                }["PodcastFlow.useEffect"]);
                // Add edges from audio nodes to merge nodes
                mergeGroups.forEach({
                    "PodcastFlow.useEffect": (group_2)=>{
                        group_2.audioNodes.forEach({
                            "PodcastFlow.useEffect": (audioNode_0)=>{
                                newEdges.push({
                                    id: `audio-${audioNode_0.nodeId}-merge-${group_2.id}`,
                                    source: audioNode_0.nodeId,
                                    target: group_2.id,
                                    type: "smoothstep",
                                    animated: true,
                                    style: {
                                        stroke: "hsl(150, 50%, 50%)",
                                        strokeWidth: 2
                                    },
                                    markerEnd: {
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                                        color: "hsl(150, 50%, 50%)"
                                    }
                                });
                            }
                        }["PodcastFlow.useEffect"]);
                    }
                }["PodcastFlow.useEffect"]);
            }
            setEdges(newEdges);
        }
    }["PodcastFlow.useEffect"], [
        chapters,
        audioUrls,
        setEdges,
        mergeGroups
    ]);
    const onConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PodcastFlow.useCallback[onConnect]": (params)=>setEdges({
                "PodcastFlow.useCallback[onConnect]": (eds)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEdge"])(params, eds)
            }["PodcastFlow.useCallback[onConnect]"])
    }["PodcastFlow.useCallback[onConnect]"], [
        setEdges
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PodcastFlow.useEffect": ()=>{
            if (nodes_0.length > 0 && edges_0.length > 0) {
                setTimeout({
                    "PodcastFlow.useEffect": ()=>{
                        const reactFlowInstance = document.querySelector('.react-flow');
                        if (reactFlowInstance) {
                            const flowElement = reactFlowInstance.closest('.react-flow__viewport');
                            if (flowElement) {
                                const fitViewBtn = document.querySelector('[data-testid="rf__controls-fitview"]');
                                if (fitViewBtn) {
                                    fitViewBtn.click();
                                }
                            }
                        }
                    }
                }["PodcastFlow.useEffect"], 100);
            }
        }
    }["PodcastFlow.useEffect"], [
        nodes_0.length,
        edges_0.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-2 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 sm:p-1.5 rounded-md bg-muted/50 border border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$podcast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Podcast$3e$__["Podcast"], {
                            className: "h-3 w-3 sm:h-4 sm:w-4 text-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1414,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 1413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xs sm:text-sm font-semibold text-foreground leading-tight",
                                children: t("Podcastify")
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                lineNumber: 1417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] sm:text-xs text-muted-foreground leading-tight hidden sm:block",
                                children: t("Blog to Podcast Converter")
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                lineNumber: 1420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 1416,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 1412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 left-2 sm:top-16 sm:left-4 z-10 hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium text-muted-foreground mb-0.5",
                            children: t("LEGEND")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-foreground/80"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 1429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: t("Chapter Node")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 1430,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1428,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 rounded-full border border-border bg-card shadow-sm flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-muted rounded border border-border"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                        lineNumber: 1434,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 1433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: t("Audio Node")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 1436,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1432,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-green-500/40"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 1439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: t("Merge Group")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                    lineNumber: 1440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1438,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 1426,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 1425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 sm:top-4 sm:right-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 1447,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 1446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 sm:top-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-1.5 sm:gap-2",
                children: [
                    onStartNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "icon",
                        onClick: onStartNew,
                        className: "h-8 w-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1453,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 1452,
                        columnNumber: 24
                    }, this),
                    totalAudioCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "icon",
                        onClick: downloadAllAudios,
                        className: "h-8 w-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                        title: t("Download all audio files"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                            lineNumber: 1456,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 1455,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 1451,
                columnNumber: 7
            }, this),
            selectedAudioNodes.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-[calc(100%-2rem)] sm:w-auto max-w-[90vw]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-3 sm:p-4 shadow-xl border-2 border-blue-500 bg-background/95 backdrop-blur",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 flex-1 sm:flex-initial",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm font-semibold",
                                        children: [
                                            selectedAudioNodes.size,
                                            " ",
                                            selectedAudioNodes.size > 1 ? t("audios") : t("audio"),
                                            " ",
                                            t("selected")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                        lineNumber: 1464,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] sm:text-xs text-muted-foreground",
                                        children: t("Select audios with the same language to merge")
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                        lineNumber: 1467,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                lineNumber: 1463,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-2 sm:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: downloadAllSelected,
                                        disabled: selectedAudioNodes.size < 1,
                                        size: "sm",
                                        variant: "secondary",
                                        className: "gap-2 w-full sm:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderArchive$3e$__["FolderArchive"], {
                                                className: "h-3 w-3 sm:h-4 sm:w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                lineNumber: 1473,
                                                columnNumber: 19
                                            }, this),
                                            t("Download All")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                        lineNumber: 1472,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: createMergeGroup,
                                        disabled: selectedAudioNodes.size < 2,
                                        size: "sm",
                                        className: "gap-2 w-full sm:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                className: "h-3 w-3 sm:h-4 sm:w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                                lineNumber: 1477,
                                                columnNumber: 19
                                            }, this),
                                            t("Create Merge Group")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                        lineNumber: 1476,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setSelectedAudioNodes(new Set()),
                                        variant: "outline",
                                        size: "sm",
                                        className: "w-full sm:w-auto",
                                        children: t("Clear")
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                                lineNumber: 1471,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                        lineNumber: 1462,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 1461,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 1460,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                nodes: nodes_0,
                edges: edges_0,
                onNodesChange: onNodesChange,
                onEdgesChange: onEdgesChange,
                onConnect: onConnect,
                nodeTypes: nodeTypes,
                fitView: true,
                className: "bg-background",
                fitViewOptions: {
                    padding: 0.1,
                    maxZoom: 2,
                    minZoom: 0.2
                },
                defaultViewport: {
                    x: 0,
                    y: 0,
                    zoom: 0.4
                },
                nodesDraggable: true,
                nodesConnectable: false,
                elementsSelectable: true,
                panOnScroll: true,
                zoomOnScroll: true,
                zoomOnPinch: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {}, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                    lineNumber: 1496,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
                lineNumber: 1487,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/LingoCast/components/podcast-flow.tsx",
        lineNumber: 1410,
        columnNumber: 10
    }, this);
}
_s3(PodcastFlow, "t02uwmQCUh94BlPo0D5Y3VDir18=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"]
    ];
});
_c4 = PodcastFlow;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ChapterNode");
__turbopack_context__.k.register(_c1, "AudioNode");
__turbopack_context__.k.register(_c2, "MergeNode");
__turbopack_context__.k.register(_c3, "ChapterGroupNode");
__turbopack_context__.k.register(_c4, "PodcastFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/LingoCast/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/lingo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$landing$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/landing-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$LightRays$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/LightRays.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$PrismaticBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/PrismaticBurst.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/loading-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$podcast$2d$flow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/components/podcast-flow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/LingoCast/lib/cache.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"])();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chapters, setChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [audioUrlsState, setAudioUrlsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [chapterCount, setChapterCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("3");
    const [sessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>`session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    }["Home.useState"]);
    const [steps, setSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "scrape",
            label: "Scraping blog content",
            status: "pending"
        },
        {
            id: "chapters",
            label: "Generating chapters",
            status: "pending"
        },
        {
            id: "summarize",
            label: "Summarizing to 3 chapters",
            status: "pending"
        }
    ]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLanding, setShowLanding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Mark as mounted after hydration to prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
            // Restore session only after hydration
            const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSession"])();
            if (session) {
                console.log("[Session] Restoring previous session:", session.url);
                setUrl(session.url);
                setChapters(session.chapters);
                setTranslations(session.translations);
                setAudioUrlsState(session.audioUrls);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Restored previous session");
            }
        }
    }["Home.useEffect"], []);
    // Save session whenever chapters/translations/audio changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (chapters.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCurrentSession"])(url, chapters, translations, audioUrlsState);
            }
        }
    }["Home.useEffect"], [
        chapters,
        translations,
        audioUrlsState,
        url
    ]);
    const updateStep = (stepId, status)=>{
        setSteps((prev)=>prev.map((step)=>step.id === stepId ? {
                    ...step,
                    status
                } : step));
    };
    const handleStartNew = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCurrentSession"])();
        setUrl("");
        setChapters([]);
        setTranslations({});
        setAudioUrlsState({});
        setError(null);
        setChapterCount("3");
        setSteps([
            {
                id: "scrape",
                label: "Scraping blog content",
                status: "pending"
            },
            {
                id: "chapters",
                label: "Generating chapters",
                status: "pending"
            },
            {
                id: "summarize",
                label: "Summarizing to 3 chapters",
                status: "pending"
            }
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Started new session");
    };
    const handleTranslateChapter = async (chapterId, language)=>{
        const chapter = chapters.find((ch)=>ch.id === chapterId);
        if (!chapter) return;
        if (translations[chapterId]?.[language]) {
            return;
        }
        const cachedTranslation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedTranslation"])(chapterId, language);
        if (cachedTranslation) {
            console.log(`[Cache] Using cached translation for chapter ${chapterId} in ${language}`);
            setTranslations((prev_0)=>({
                    ...prev_0,
                    [chapterId]: {
                        ...prev_0[chapterId],
                        [language]: cachedTranslation
                    }
                }));
            return;
        }
        try {
            const response = await fetch("/api/translate-chapter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chapter,
                    targetLocale: language,
                    sourceLocale: "en"
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Translation failed");
            }
            const data = await response.json();
            const translation = data.translations[language];
            if (translation) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedTranslation"])(chapterId, language, translation);
                setTranslations((prev_1)=>({
                        ...prev_1,
                        [chapterId]: {
                            ...prev_1[chapterId],
                            [language]: translation
                        }
                    }));
            }
        } catch (error_0) {
            console.error("Translation error:", error_0);
            throw error_0;
        }
    };
    const handleGenerateAudio = async (chapterId_0, language_0, text)=>{
        const cachedAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedAudio"])(chapterId_0, language_0);
        if (cachedAudio) {
            console.log(`[Cache] Using cached audio for chapter ${chapterId_0} in ${language_0}`);
            setAudioUrlsState((prev_2)=>({
                    ...prev_2,
                    [chapterId_0]: {
                        ...prev_2[chapterId_0],
                        [language_0]: cachedAudio
                    }
                }));
            return cachedAudio;
        }
        try {
            // Trigger background job via Inngest
            const response_0 = await fetch("/api/tts-async", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text,
                    language: language_0,
                    chapterId: chapterId_0,
                    sessionId
                })
            });
            if (!response_0.ok) {
                const errorData_0 = await response_0.json();
                throw new Error(errorData_0.error || "Audio generation failed");
            }
            const data_0 = await response_0.json();
            // If cached, return immediately
            if (data_0.cached && data_0.audioUrl) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedAudio"])(chapterId_0, language_0, data_0.audioUrl);
                setAudioUrlsState((prev_3)=>({
                        ...prev_3,
                        [chapterId_0]: {
                            ...prev_3[chapterId_0],
                            [language_0]: data_0.audioUrl
                        }
                    }));
                return data_0.audioUrl;
            }
            // Background job triggered - poll for completion
            const jobId = data_0.jobId;
            console.log(`[Background] Audio generation job started: ${jobId}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Audio generation started in background for ${language_0}`);
            // Poll for job completion
            const pollInterval = 2000; // 2 seconds
            const maxAttempts = 60; // Max 2 minutes
            let attempts = 0;
            const pollJob = async ()=>{
                if (attempts >= maxAttempts) {
                    throw new Error("Audio generation timeout");
                }
                attempts++;
                const jobResponse = await fetch(`/api/jobs?jobId=${jobId}`);
                if (!jobResponse.ok) {
                    throw new Error("Failed to fetch job status");
                }
                const jobData = await jobResponse.json();
                const job = jobData.job;
                if (job.status === "completed" && job.audioUrl) {
                    console.log(`[Background] Audio generation completed: ${job.audioUrl}`);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedAudio"])(chapterId_0, language_0, job.audioUrl);
                    setAudioUrlsState((prev_4)=>({
                            ...prev_4,
                            [chapterId_0]: {
                                ...prev_4[chapterId_0],
                                [language_0]: job.audioUrl
                            }
                        }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Audio ready for ${language_0}`);
                    return job.audioUrl;
                } else if (job.status === "failed") {
                    throw new Error(job.error || "Audio generation failed");
                } else {
                    // Still processing, poll again
                    await new Promise((resolve)=>setTimeout(resolve, pollInterval));
                    return pollJob();
                }
            };
            return await pollJob();
        } catch (error_1) {
            console.error("Audio generation error:", error_1);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed to generate audio: ${error_1 instanceof Error ? error_1.message : 'Unknown error'}`);
            throw error_1;
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!url.trim()) {
            setError(t("Please enter a valid URL"));
            return;
        }
        const normalizedUrl = url.trim().toLowerCase();
        const numChapters = parseInt(chapterCount) || 3;
        const cachedChapters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedChapters"])(normalizedUrl, numChapters);
        if (cachedChapters && cachedChapters.length > 0) {
            console.log(`[Cache] Using cached chapters for ${normalizedUrl} with ${numChapters} chapters`);
            setChapters(cachedChapters);
            const chapterIds = cachedChapters.map((ch_0)=>ch_0.id);
            setTranslations((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCachedTranslations"])(chapterIds));
            setAudioUrlsState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCachedAudios"])(chapterIds));
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Loaded from cache");
            return;
        }
        setIsLoading(true);
        setError(null);
        setSteps([
            {
                id: "scrape",
                label: "Scraping blog content",
                status: "pending"
            },
            {
                id: "chapters",
                label: "Generating chapters",
                status: "pending"
            },
            {
                id: "summarize",
                label: `Summarizing to ${numChapters} chapters`,
                status: "pending"
            }
        ]);
        try {
            const urlPattern = /^https?:\/\/.+\..+/;
            if (!urlPattern.test(normalizedUrl)) {
                throw new Error(t("Invalid URL format"));
            }
            console.log("[Step 1/3] Starting scrape...");
            updateStep("scrape", "processing");
            const response_1 = await fetch("/api/scrape", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: normalizedUrl
                })
            });
            if (!response_1.ok) {
                const errorData_1 = await response_1.json();
                updateStep("scrape", "error");
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorData_1.error || "Failed to scrape blog", {
                    id: "scrape"
                });
                throw new Error(errorData_1.error || t("An error occurred"));
            }
            const scrapedData = await response_1.json();
            console.log("[Step 1/3] Scrape completed:", scrapedData);
            updateStep("scrape", "completed");
            console.log("[Step 2/3] Starting chapter generation...");
            updateStep("chapters", "processing");
            const chaptersResponse = await fetch("/api/chapters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: scrapedData.content,
                    textContent: scrapedData.textContent
                })
            });
            if (!chaptersResponse.ok) {
                const errorData_2 = await chaptersResponse.json();
                updateStep("chapters", "error");
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorData_2.error || "Failed to generate chapters", {
                    id: "chapters"
                });
                throw new Error(errorData_2.error || t("Failed to generate chapters"));
            }
            const chaptersData = await chaptersResponse.json();
            console.log("[Step 2/3] Chapters generated:", chaptersData);
            console.log(`[Step 2/3] Total chapters: ${chaptersData.totalChapters}, Total words: ${chaptersData.totalWords}`);
            updateStep("chapters", "completed");
            console.log("[Step 3/3] Starting summarization...");
            updateStep("summarize", "processing");
            const summarizeResponse = await fetch("/api/summarize-chapters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chapters: chaptersData.chapters,
                    targetChapters: parseInt(chapterCount) || 3
                })
            });
            if (!summarizeResponse.ok) {
                const errorData_3 = await summarizeResponse.json();
                updateStep("summarize", "error");
                console.error("[Step 3/3] Summarization failed:", errorData_3);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorData_3.error || "Failed to summarize chapters", {
                    id: "summarize"
                });
                throw new Error(errorData_3.error || t("Failed to summarize chapters"));
            }
            const summarizedData = await summarizeResponse.json();
            console.log("[Step 3/3] Summarization completed:", summarizedData);
            console.log(`[Step 3/3] Reduced from ${summarizedData.originalChapters} to ${summarizedData.totalChapters} chapters`);
            console.log(`[Step 3/3] Word count: ${summarizedData.originalWords} → ${summarizedData.totalWords}`);
            updateStep("summarize", "completed");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedChapters"])(normalizedUrl, numChapters, summarizedData.chapters);
            setChapters(summarizedData.chapters);
            const chapterIds_0 = summarizedData.chapters.map((ch_1)=>ch_1.id);
            setTranslations((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCachedTranslations"])(chapterIds_0));
            setAudioUrlsState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCachedAudios"])(chapterIds_0));
            setTimeout(()=>{
                setSteps([]);
            }, 500);
        } catch (err) {
            console.error("Error in processing:", err);
            setError(err instanceof Error ? err.message : t("An error occurred"));
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 sm:top-4 sm:right-4 z-50 flex items-center gap-1.5 sm:gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            showLanding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$landing$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPage"], {
                onGetStarted: ()=>setShowLanding(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                lineNumber: 393,
                columnNumber: 22
            }, this) : isLoading && chapters.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex min-h-screen items-center justify-center px-4 py-12 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-0 w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$PrismaticBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {
                        steps: steps
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                lineNumber: 393,
                columnNumber: 120
            }, this) : !isLoading && chapters.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex min-h-screen items-center justify-center px-4 py-12 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$LightRays$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 401,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4 sm:space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl",
                                                children: t("Multilingual Podcast Generator")
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-muted-foreground md:text-base",
                                                children: t("Turn any blog into a multilingual podcast in seconds")
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "url",
                                                        placeholder: t("https://example.com/blog-post"),
                                                        value: url,
                                                        onChange: (e_0)=>setUrl(e_0.target.value),
                                                        disabled: isLoading,
                                                        className: "h-12 pl-10 text-base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full sm:w-auto flex-1 sm:flex-initial",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                value: chapterCount,
                                                                onValueChange: setChapterCount,
                                                                disabled: isLoading,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                        className: "h-12 w-full sm:w-20 px-3 py-0 [&[data-size=default]]:!h-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                                            fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                                            lineNumber: 427,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                        children: [
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                            10
                                                                        ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: num.toString(),
                                                                                children: num
                                                                            }, num, false, {
                                                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 71
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: t("Select chapters")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: isLoading || !url.trim(),
                                                className: "h-12 w-full sm:w-12 p-0 shrink-0",
                                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-5 w-5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 32
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 79
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-destructive",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                                lineNumber: 446,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                lineNumber: 399,
                columnNumber: 56
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 w-screen h-screen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$components$2f$podcast$2d$flow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PodcastFlow"], {
                        steps: steps,
                        chapters: chapters,
                        translations: translations,
                        audioUrls: audioUrlsState,
                        onTranslate: handleTranslateChapter,
                        onGenerateAudio: handleGenerateAudio,
                        isLoading: isLoading,
                        onStartNew: handleStartNew
                    }, void 0, false, {
                        fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                        lineNumber: 452,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/LingoCast/app/page.tsx",
                    lineNumber: 451,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true);
}
_s(Home, "lhgZVYMxdZGVlv8NGy1eGbzv0Lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$LingoCast$2f$lib$2f$lingo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLingo"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_LingoCast_5559c913._.js.map