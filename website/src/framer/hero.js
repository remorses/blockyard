/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/euj3wmPcgDeqC8J1BJqI/BUkqu7wbcOVVBFABtQUh/xKU_CZcEi.js
import { jsx as _jsx4, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls4,
  ComponentViewportProvider,
  ControlType as ControlType4,
  cx as cx4,
  getFonts,
  Image,
  RichText as RichText2,
  useActiveVariantCallback as useActiveVariantCallback4,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React4 from 'react';

// https :https://framerusercontent.com/modules/ibQ8eruosMO3Ioy5iN2C/yIlXPtCgFM0qi3fYQF7J/GhtQJI8Yt.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  CycleVariantState,
  SVG,
  useActiveVariantCallback,
  useOnVariantChange,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['o4fq1_Zyn', 'zXQm_CSE1', 'OVWDcWp8R',];
var variantClassNames = { o4fq1_Zyn: 'framer-v-vw0w2z', OVWDcWp8R: 'framer-v-1isx9j8', zXQm_CSE1: 'framer-v-186ahnr', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap = { 'Variant 1': 'o4fq1_Zyn', Variant: 'OVWDcWp8R', };
var transitions = {
  default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], mass: 1, stiffness: 500, type: 'spring', },
};
var Component = /* @__PURE__ */ React.forwardRef(
  function ({ id, style, className, width, height, layoutId, variant: outerVariant = 'o4fq1_Zyn', ...restProps }, ref,) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
      cycleOrder,
      defaultVariant: 'o4fq1_Zyn',
      transitions,
      variant,
      variantClassNames,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
    const onAppear7vqrr5 = activeVariantCallback(async (...args) => {
      await delay(() => setVariant(CycleVariantState,), 500,);
    },);
    useOnVariantChange(baseVariant, { default: onAppear7vqrr5, },);
    const defaultLayoutId = React.useId();
    return /* @__PURE__ */ _jsx(LayoutGroup, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx(motion.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx('framer-1dnsX', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx('framer-vw0w2z', className,),
          'data-framer-name': 'Variant 1',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'o4fq1_Zyn',
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides(
            { OVWDcWp8R: { 'data-framer-name': void 0, }, zXQm_CSE1: { 'data-framer-name': void 0, }, },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsx(SVG, {
            className: 'framer-1141mzi',
            'data-framer-name': 'Frame 11',
            layout: 'position',
            layoutDependency,
            layoutId: 'sRLL46xTo',
            opacity: 1,
            radius: 0,
            svg:
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 21"><path d="M 38 0 L 35 0 L 35 3 L 32 3 L 32 6 L 29 6 L 29 9 L 26 9 L 26 12 L 29 12 L 29 15 L 32 15 L 32 18 L 35 18 L 35 21 L 38 21 L 38 18 L 38 15 L 35 15 L 35 12 L 32 12 L 32 9 L 35 9 L 35 6 L 38 6 L 38 3 Z" fill="rgb(0,13,122)"></path><path d="M 25 0 L 22 0 L 22 3 L 19 3 L 19 6 L 16 6 L 16 9 L 13 9 L 13 12 L 16 12 L 16 15 L 19 15 L 19 18 L 22 18 L 22 21 L 25 21 L 25 18 L 25 15 L 22 15 L 22 12 L 19 12 L 19 9 L 22 9 L 22 6 L 25 6 L 25 3 Z" fill="rgb(0,13,122)" opacity="0.1"></path><path d="M 12 0 L 9 0 L 9 3 L 6 3 L 6 6 L 3 6 L 3 9 L 0 9 L 0 12 L 3 12 L 3 15 L 6 15 L 6 18 L 9 18 L 9 21 L 12 21 L 12 18 L 12 15 L 9 15 L 9 12 L 6 12 L 6 9 L 9 9 L 9 6 L 12 6 L 12 3 Z" fill="rgb(0,13,122)" opacity="0.1"></path></svg>',
            svgContentId: 3461642057,
            transition,
            withExternalLayout: true,
            ...addPropertyOverrides(
              {
                OVWDcWp8R: {
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 21"><path d="M 38 0 L 35 0 L 35 3 L 32 3 L 32 6 L 29 6 L 29 9 L 26 9 L 26 12 L 29 12 L 29 15 L 32 15 L 32 18 L 35 18 L 35 21 L 38 21 L 38 18 L 38 15 L 35 15 L 35 12 L 32 12 L 32 9 L 35 9 L 35 6 L 38 6 L 38 3 Z" fill="rgb(0,13,122)" opacity="0.1"></path><path d="M 25 0 L 22 0 L 22 3 L 19 3 L 19 6 L 16 6 L 16 9 L 13 9 L 13 12 L 16 12 L 16 15 L 19 15 L 19 18 L 22 18 L 22 21 L 25 21 L 25 18 L 25 15 L 22 15 L 22 12 L 19 12 L 19 9 L 22 9 L 22 6 L 25 6 L 25 3 Z" fill="rgb(0,13,122)" opacity="0.1"></path><path d="M 12 0 L 9 0 L 9 3 L 6 3 L 6 6 L 3 6 L 3 9 L 0 9 L 0 12 L 3 12 L 3 15 L 6 15 L 6 18 L 9 18 L 9 21 L 12 21 L 12 18 L 12 15 L 9 15 L 9 12 L 6 12 L 6 9 L 9 9 L 9 6 L 12 6 L 12 3 Z" fill="rgb(0,13,122)"></path></svg>',
                  svgContentId: 325778998,
                },
                zXQm_CSE1: {
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 21"><path d="M 38 0 L 35 0 L 35 3 L 32 3 L 32 6 L 29 6 L 29 9 L 26 9 L 26 12 L 29 12 L 29 15 L 32 15 L 32 18 L 35 18 L 35 21 L 38 21 L 38 18 L 38 15 L 35 15 L 35 12 L 32 12 L 32 9 L 35 9 L 35 6 L 38 6 L 38 3 Z" fill="rgb(0,13,122)" opacity="0.1"></path><path d="M 25 0 L 22 0 L 22 3 L 19 3 L 19 6 L 16 6 L 16 9 L 13 9 L 13 12 L 16 12 L 16 15 L 19 15 L 19 18 L 22 18 L 22 21 L 25 21 L 25 18 L 25 15 L 22 15 L 22 12 L 19 12 L 19 9 L 22 9 L 22 6 L 25 6 L 25 3 Z" fill="rgb(0,13,122)"></path><path d="M 12 0 L 9 0 L 9 3 L 6 3 L 6 6 L 3 6 L 3 9 L 0 9 L 0 12 L 3 12 L 3 15 L 6 15 L 6 18 L 9 18 L 9 21 L 12 21 L 12 18 L 12 15 L 9 15 L 9 12 L 6 12 L 6 9 L 9 9 L 9 6 L 12 6 L 12 3 Z" fill="rgb(0,13,122)" opacity="0.1"></path></svg>',
                  svgContentId: 854934745,
                },
              },
              baseVariant,
              gestureVariant,
            ),
          },),
        },),
      },),
    },);
  },
);
var css = [
  '.framer-1dnsX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-1dnsX * { box-sizing: border-box; }',
  '.framer-1dnsX .framer-fnif4l { display: block; }',
  '.framer-1dnsX .framer-vw0w2z { height: 44px; overflow: visible; position: relative; width: 44px; }',
  '.framer-1dnsX .framer-1141mzi { flex: none; height: 21px; left: 3px; position: absolute; top: 12px; width: 38px; }',
];
var FramerGhtQJI8Yt = withCSS(Component, css, 'framer-1dnsX',);
var stdin_default = FramerGhtQJI8Yt;
FramerGhtQJI8Yt.displayName = 'animated-arrows';
FramerGhtQJI8Yt.defaultProps = { height: 44, width: 44, };
addPropertyControls(FramerGhtQJI8Yt, {
  variant: {
    options: ['o4fq1_Zyn', 'zXQm_CSE1', 'OVWDcWp8R',],
    optionTitles: ['Variant 1', 'Variant', 'Variant',],
    title: 'Variant',
    type: ControlType.Enum,
  },
},);
addFonts(FramerGhtQJI8Yt, [],);

// https :https://framerusercontent.com/modules/nODb789fh9lhOduPxj5M/fhLem03KUjV0u1GnVg0X/j5mELjsCj.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx as cx2,
  Link,
  RichText,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport,
  useLocaleInfo,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext, } from 'unframer';
import * as React2 from 'react';
var enabledGestures = { yOrV4Y72q: { pressed: true, }, };
var cycleOrder2 = ['yOrV4Y72q',];
var serializationHash = 'framer-gFE4R';
var variantClassNames2 = { yOrV4Y72q: 'framer-v-f116bh', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.05, ease: [0, 0, 1, 1,], type: 'tween', };
var Transition = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion2(React2.Fragment,);
var getProps = ({ height, id, link, tap, title, width, ...props },) => {
  var _ref;
  return {
    ...props,
    eTOPxPMNS: tap !== null && tap !== void 0 ? tap : props.eTOPxPMNS,
    pBuSHh2aE: link !== null && link !== void 0 ? link : props.pBuSHh2aE,
    PzmANNngt: (_ref = title !== null && title !== void 0 ? title : props.PzmANNngt) !== null && _ref !== void 0
      ? _ref
      : 'Click this button',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, PzmANNngt, pBuSHh2aE, eTOPxPMNS, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'yOrV4Y72q',
    enabledGestures,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onTap19eh2wy = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (eTOPxPMNS) {
      const res = await eTOPxPMNS(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsx2(Link, {
          href: pBuSHh2aE,
          openInNewTab: false,
          children: /* @__PURE__ */ _jsx2(motion2.a, {
            ...restProps,
            className: `${cx2(serializationHash, ...sharedStyleClassNames, 'framer-f116bh', className, classNames,)} framer-1j6xvmr`,
            'data-framer-name': 'Variant 1',
            'data-highlight': true,
            layoutDependency,
            layoutId: 'yOrV4Y72q',
            onHoverEnd: () => setGestureState({ isHovered: false, },),
            onHoverStart: () => setGestureState({ isHovered: true, },),
            onTap: onTap19eh2wy,
            onTapCancel: () => setGestureState({ isPressed: false, },),
            onTapStart: () => setGestureState({ isPressed: true, },),
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              backgroundColor: 'rgb(192, 192, 192)',
              boxShadow:
                'inset -2px -2px 0px 0px rgba(10, 10, 10, 1), inset 1px 1px 0px 0px rgba(255, 255, 255, 1), inset -2px -2px 0px 0px rgba(128, 128, 128, 1), inset 2px 2px 0px 0px rgba(223, 223, 223, 1)',
              ...style,
            },
            variants: {
              'yOrV4Y72q-pressed': {
                boxShadow:
                  'inset -1px -1px 0px 0px #fff, inset 1px 1px 0px 0px #0A0A0A, inset -2px -2px 0px 0px #DFDFDF, inset 2px 2px 0px 0px #808080',
              },
            },
            ...addPropertyOverrides2({ 'yOrV4Y72q-pressed': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
            children: /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion2.p, {
                  style: {
                    '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                    '--framer-font-family': '"MS Sans Serif Regular", serif',
                    '--framer-font-size': '20px',
                    '--framer-text-alignment': 'center',
                  },
                  children: 'Click this button',
                },),
              },),
              className: 'framer-dgd3tt',
              fonts: ['CUSTOM;MS Sans Serif Regular',],
              layoutDependency,
              layoutId: 'YdfUW8ko_',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              text: PzmANNngt,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-gFE4R.framer-1j6xvmr, .framer-gFE4R .framer-1j6xvmr { display: block; }',
  '.framer-gFE4R.framer-f116bh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: min-content; }',
  '.framer-gFE4R .framer-dgd3tt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gFE4R.framer-f116bh { gap: 0px; } .framer-gFE4R.framer-f116bh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-gFE4R.framer-f116bh > :first-child { margin-left: 0px; } .framer-gFE4R.framer-f116bh > :last-child { margin-right: 0px; } }',
];
var Framerj5mELjsCj = withCSS2(Component2, css2, 'framer-gFE4R',);
var stdin_default2 = Framerj5mELjsCj;
Framerj5mELjsCj.displayName = 'CTA Copy 2';
Framerj5mELjsCj.defaultProps = { height: 44, width: 173, };
addPropertyControls2(Framerj5mELjsCj, {
  PzmANNngt: { defaultValue: 'Click this button', displayTextArea: false, title: 'Title', type: ControlType2.String, },
  pBuSHh2aE: { title: 'Link', type: ControlType2.Link, },
  eTOPxPMNS: { title: 'Tap', type: ControlType2.EventHandler, },
},);
addFonts2(Framerj5mELjsCj, [{
  explicitInter: true,
  fonts: [{
    family: 'MS Sans Serif Regular',
    source: 'custom',
    url: 'https://framerusercontent.com/assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf',
  },],
},], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/maZAxPrPJr0zaT0Vyy2C/XeopjC6UmF1TzqgsrcLp/TSQMQYICf.js
import { jsx as _jsx3, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType3,
  cx as cx3,
  SVG as SVG2,
  useActiveVariantCallback as useActiveVariantCallback3,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion3, } from 'unframer';
import * as React3 from 'react';
var enabledGestures2 = { B08Jwy6qX: { pressed: true, }, K1_kaUtDS: { pressed: true, }, RYsOSWXR6: { pressed: true, }, };
var cycleOrder3 = ['RYsOSWXR6', 'K1_kaUtDS', 'B08Jwy6qX',];
var variantClassNames3 = { B08Jwy6qX: 'framer-v-1ghpim3', K1_kaUtDS: 'framer-v-knr2w9', RYsOSWXR6: 'framer-v-1amuxa3', };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap2 = { maximise: 'K1_kaUtDS', minimise: 'RYsOSWXR6', Variant: 'B08Jwy6qX', };
var transitions2 = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var Component3 = /* @__PURE__ */ React3.forwardRef(
  function (
    {
      id,
      style,
      className,
      width,
      height,
      layoutId,
      variant: outerVariant = 'RYsOSWXR6',
      iconOpacity: X4EJUu1MY = 1,
      tap: PMx4y8w85,
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap2[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
      cycleOrder: cycleOrder3,
      defaultVariant: 'RYsOSWXR6',
      enabledGestures: enabledGestures2,
      transitions: transitions2,
      variant,
      variantClassNames: variantClassNames3,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const { activeVariantCallback, delay, } = useActiveVariantCallback3(baseVariant,);
    const onTap1lrhr2e = activeVariantCallback(async (...args) => {
      if (PMx4y8w85) {
        const res = await PMx4y8w85(...args,);
        if (res === false) {
          return false;
        }
      }
    },);
    const isDisplayed = () => {
      if (['K1_kaUtDS-pressed', 'B08Jwy6qX-pressed',].includes(gestureVariant,)) {
        return false;
      }
      if (['K1_kaUtDS', 'B08Jwy6qX',].includes(baseVariant,)) {
        return false;
      }
      return true;
    };
    const isDisplayed1 = () => {
      if (gestureVariant === 'K1_kaUtDS-pressed') {
        return true;
      }
      if (baseVariant === 'K1_kaUtDS') {
        return true;
      }
      return false;
    };
    const isDisplayed2 = () => {
      if (gestureVariant === 'B08Jwy6qX-pressed') {
        return true;
      }
      if (baseVariant === 'B08Jwy6qX') {
        return true;
      }
      return false;
    };
    const defaultLayoutId = React3.useId();
    return /* @__PURE__ */ _jsx3(LayoutGroup3, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx3(motion3.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx3('framer-sWUGm', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsxs(motion3.div, {
          ...restProps,
          className: cx3('framer-1amuxa3', className,),
          'data-framer-name': 'minimise',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'RYsOSWXR6',
          onTap: onTap1lrhr2e,
          ref,
          style: {
            backgroundColor: 'rgb(192, 192, 192)',
            boxShadow:
              'inset -2px -2px 0px 0px rgba(10, 10, 10, 1), inset 1px 1px 0px 0px rgba(255, 255, 255, 1), inset -2px -2px 0px 0px rgba(128, 128, 128, 1), inset 2px 2px 0px 0px rgba(223, 223, 223, 1)',
            ...style,
          },
          transition,
          variants: {
            'B08Jwy6qX-pressed': {
              boxShadow:
                'inset -1px -1px 0px 0px #fff, inset 1px 1px 0px 0px #0A0A0A, inset -2px -2px 0px 0px #DFDFDF, inset 2px 2px 0px 0px #808080',
            },
            'K1_kaUtDS-pressed': {
              boxShadow:
                'inset -1px -1px 0px 0px #fff, inset 1px 1px 0px 0px #0A0A0A, inset -2px -2px 0px 0px #DFDFDF, inset 2px 2px 0px 0px #808080',
            },
            'RYsOSWXR6-pressed': {
              boxShadow:
                'inset -1px -1px 0px 0px #fff, inset 1px 1px 0px 0px #0A0A0A, inset -2px -2px 0px 0px #DFDFDF, inset 2px 2px 0px 0px #808080',
            },
          },
          ...addPropertyOverrides3(
            {
              'B08Jwy6qX-pressed': { 'data-framer-name': void 0, },
              'K1_kaUtDS-pressed': { 'data-framer-name': void 0, },
              'RYsOSWXR6-pressed': { 'data-framer-name': void 0, },
              B08Jwy6qX: { 'data-framer-name': void 0, },
              K1_kaUtDS: { 'data-framer-name': 'maximise', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx3(SVG2, {
              className: 'framer-1h3a6nn',
              'data-framer-name': 'minimise',
              fill: 'rgba(0,0,0,1)',
              intrinsicHeight: 16,
              intrinsicWidth: 16,
              layoutDependency,
              layoutId: 't5AeuFk5q',
              style: { opacity: X4EJUu1MY, },
              svg:
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 11.8785H12.5514V15.0623H3V11.8785Z" fill="black"/>\n</svg>\n',
              transition,
              withExternalLayout: true,
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx3(SVG2, {
              className: 'framer-1hfsjc5',
              'data-framer-name': 'maximise',
              fill: 'rgba(0,0,0,1)',
              intrinsicHeight: 16,
              intrinsicWidth: 17,
              layoutDependency,
              layoutId: 'Bca9zDw95',
              style: { opacity: X4EJUu1MY, },
              svg:
                '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8554 0.836426H1.52832V15.1635H15.8554V0.836426ZM14.2635 4.02023H3.12022V13.5716H14.2635V4.02023Z" fill="black"/>\n</svg>\n',
              transition,
              withExternalLayout: true,
            },),
            isDisplayed2() && /* @__PURE__ */ _jsx3(SVG2, {
              className: 'framer-hld1hr',
              'data-framer-name': 'close',
              fill: 'rgba(0,0,0,1)',
              intrinsicHeight: 16,
              intrinsicWidth: 16,
              layoutDependency,
              layoutId: 'jGHmUYqn3',
              style: { opacity: X4EJUu1MY, },
              svg:
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H5.1838V3.5919H6.7757V5.1838H9.9595V3.5919H11.5514V2H14.7352V3.5919H13.1433V5.1838H11.5514V6.7757H9.9595V8.3676H11.5514V9.9595H13.1433V11.5514H14.7352V13.1433H11.5514V11.5514H9.9595V9.9595H6.7757V11.5514H5.1838V13.1433H2V11.5514H3.5919V9.9595H5.1838V8.3676H6.7757V6.7757H5.1838V5.1838H3.5919V3.5919H2V2Z" fill="black"/>\n</svg>\n',
              transition,
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },);
  },
);
var css3 = [
  '.framer-sWUGm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-sWUGm * { box-sizing: border-box; }',
  '.framer-sWUGm .framer-7x5vv2 { display: block; }',
  '.framer-sWUGm .framer-1amuxa3 { cursor: pointer; height: 32px; overflow: hidden; position: relative; width: 32px; }',
  '.framer-sWUGm .framer-1h3a6nn, .framer-sWUGm .framer-1hfsjc5, .framer-sWUGm .framer-hld1hr { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }',
  '.framer-sWUGm .framer-v-1amuxa3 .framer-1amuxa3, .framer-sWUGm .framer-v-knr2w9 .framer-1amuxa3, .framer-sWUGm .framer-v-1ghpim3 .framer-1amuxa3 { cursor: pointer; }',
  '.framer-sWUGm.framer-v-knr2w9 .framer-1amuxa3, .framer-sWUGm.framer-v-1ghpim3 .framer-1amuxa3, .framer-sWUGm.framer-v-1amuxa3.pressed .framer-1amuxa3 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); }',
];
var FramerTSQMQYICf = withCSS3(Component3, css3, 'framer-sWUGm',);
var stdin_default3 = FramerTSQMQYICf;
FramerTSQMQYICf.displayName = 'icon-cta';
FramerTSQMQYICf.defaultProps = { height: 32, width: 32, };
addPropertyControls3(FramerTSQMQYICf, {
  variant: {
    options: ['RYsOSWXR6', 'K1_kaUtDS', 'B08Jwy6qX',],
    optionTitles: ['minimise', 'maximise', 'Variant',],
    title: 'Variant',
    type: ControlType3.Enum,
  },
  X4EJUu1MY: { defaultValue: 1, max: 1, min: 0, step: 0.01, title: 'Icon Opacity', type: ControlType3.Number, },
  PMx4y8w85: { title: 'Tap', type: ControlType3.EventHandler, },
},);
addFonts3(FramerTSQMQYICf, [],);

// https :https://framerusercontent.com/modules/euj3wmPcgDeqC8J1BJqI/BUkqu7wbcOVVBFABtQUh/xKU_CZcEi.js
var IconCtaFonts = getFonts(stdin_default3,);
var AnimatedArrowsFonts = getFonts(stdin_default,);
var CTACopy2Fonts = getFonts(stdin_default2,);
var cycleOrder4 = ['gjDlh3BIy', 'GctxtIt6F',];
var serializationHash2 = 'framer-zJoIK';
var variantClassNames4 = { GctxtIt6F: 'framer-v-16pbe3d', gjDlh3BIy: 'framer-v-jya5ki', };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition12 = { delay: 0, duration: 0, ease: [0, 0, 1, 1,], type: 'tween', };
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition2 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion4(React4.Fragment,);
var humanReadableVariantMap3 = { 'collapsed-intro': 'GctxtIt6F', 'expanded-intro': 'gjDlh3BIy', };
var getProps2 = ({ cta, height, id, image, tap, width, ...props },) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return {
    ...props,
    D5HCDFewR: (_ref = image !== null && image !== void 0 ? image : props.D5HCDFewR) !== null && _ref !== void 0
      ? _ref
      : { src: 'https://framerusercontent.com/images/6AcPlVRKEP2vYw78kk5gkYlTUzc.png', },
    EIqFo2ZU2: cta !== null && cta !== void 0 ? cta : props.EIqFo2ZU2,
    s5bLvJPGS: tap !== null && tap !== void 0 ? tap : props.s5bLvJPGS,
    variant:
      (_ref1 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : 'gjDlh3BIy',
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component4 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, s5bLvJPGS, D5HCDFewR, EIqFo2ZU2, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: 'gjDlh3BIy',
    variant,
    variantClassNames: variantClassNames4,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback4(baseVariant,);
  const tap1b9my43 = activeVariantCallback(async (...args) => {
    setVariant('GctxtIt6F',);
  },);
  const tapg6rbh = activeVariantCallback(async (...args) => {
    setVariant('gjDlh3BIy',);
  },);
  const tap7ji456 = activeVariantCallback(async (...args) => {
    if (s5bLvJPGS) {
      const res = await s5bLvJPGS(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React4.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'GctxtIt6F') {
      return false;
    }
    return true;
  };
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx4(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsxs2(motion4.div, {
          ...restProps,
          className: cx4(serializationHash2, ...sharedStyleClassNames, 'framer-jya5ki', className, classNames,),
          'data-border': true,
          'data-framer-name': 'expanded-intro',
          layoutDependency,
          layoutId: 'gjDlh3BIy',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            '--border-bottom-width': '3px',
            '--border-color': 'rgb(128, 128, 128)',
            '--border-left-width': '3px',
            '--border-right-width': '3px',
            '--border-style': 'solid',
            '--border-top-width': '3px',
            backgroundColor: 'rgb(192, 192, 192)',
            boxShadow: '3px 3px 0px 0px #DFDFDF, inset 6px 6px 0px 0px #DFDFDF',
            ...style,
          },
          ...addPropertyOverrides4({ GctxtIt6F: { 'data-framer-name': 'collapsed-intro', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsxs2(motion4.div, {
              className: 'framer-kuegw7',
              'data-framer-name': 'top-bar',
              layoutDependency,
              layoutId: 'XUN6eOIjv',
              style: { background: 'linear-gradient(90deg, #06007f 0%, #1084d0 100%)', },
              children: [
                /* @__PURE__ */ _jsxs2(motion4.div, {
                  className: 'framer-wpm1pf',
                  layoutDependency,
                  layoutId: 'fif3zcrs6',
                  children: [
                    /* @__PURE__ */ _jsx4(Image, {
                      background: { alt: '', fit: 'fill', sizes: '24px', ...toResponsiveImage(D5HCDFewR,), },
                      className: 'framer-an8zkw',
                      'data-framer-name': 'icon-loudspeaker',
                      layoutDependency,
                      layoutId: 'hAIPki555',
                    },),
                    /* @__PURE__ */ _jsx4(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion4.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgQm9sZCBSZWd1bGFy',
                            '--framer-font-family': '"MS Sans Serif Bold Regular", "MS Sans Serif Bold Regular Placeholder", serif',
                            '--framer-font-size': '20px',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                          },
                          children: 'Minecraft + Discord + Zoom = BlockYard',
                        },),
                      },),
                      className: 'framer-n2rwdu',
                      fonts: ['CUSTOM;MS Sans Serif Bold Regular',],
                      layoutDependency,
                      layoutId: 'l2WjN_t25',
                      style: {
                        '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs2(motion4.div, {
                  className: 'framer-1pr6m0i',
                  layoutDependency,
                  layoutId: 'wcI573XR7',
                  children: [
                    /* @__PURE__ */ _jsxs2(motion4.div, {
                      className: 'framer-yi01g1',
                      layoutDependency,
                      layoutId: 'Mwi6WXsNp',
                      children: [
                        /* @__PURE__ */ _jsx4(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx4(motion4.div, {
                            className: 'framer-1js8fkv-container',
                            layoutDependency,
                            layoutId: 'vNbnpnYlA-container',
                            children: /* @__PURE__ */ _jsx4(stdin_default3, {
                              height: '100%',
                              iconOpacity: 1,
                              id: 'vNbnpnYlA',
                              layoutId: 'vNbnpnYlA',
                              tap: tap1b9my43,
                              variant: 'RYsOSWXR6',
                              width: '100%',
                              ...addPropertyOverrides4({ GctxtIt6F: { iconOpacity: 0.3, }, }, baseVariant, gestureVariant,),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx4(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx4(motion4.div, {
                            className: 'framer-w8uy5s-container',
                            layoutDependency,
                            layoutId: 'suWNwbjMs-container',
                            children: /* @__PURE__ */ _jsx4(stdin_default3, {
                              height: '100%',
                              iconOpacity: 0.3,
                              id: 'suWNwbjMs',
                              layoutId: 'suWNwbjMs',
                              variant: 'K1_kaUtDS',
                              width: '100%',
                              ...addPropertyOverrides4({ GctxtIt6F: { iconOpacity: 1, tap: tapg6rbh, }, }, baseVariant, gestureVariant,),
                            },),
                          },),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsx4(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx4(motion4.div, {
                        className: 'framer-8578kc-container',
                        layoutDependency,
                        layoutId: 'pS_kfNmYi-container',
                        children: /* @__PURE__ */ _jsx4(stdin_default3, {
                          height: '100%',
                          iconOpacity: 0.3,
                          id: 'pS_kfNmYi',
                          layoutId: 'pS_kfNmYi',
                          variant: 'B08Jwy6qX',
                          width: '100%',
                        },),
                      },),
                    },),
                  ],
                },),
              ],
            },),
            isDisplayed() && /* @__PURE__ */ _jsxs2(motion4.div, {
              className: 'framer-1o5jget',
              layoutDependency,
              layoutId: 'oMlmLhS3S',
              children: [
                /* @__PURE__ */ _jsxs2(motion4.div, {
                  className: 'framer-10x8ag0',
                  layoutDependency,
                  layoutId: 'e1BZa_f3c',
                  children: [
                    /* @__PURE__ */ _jsx4(motion4.div, {
                      className: 'framer-1pnh4bf',
                      'data-framer-name': 'hero-content',
                      layoutDependency,
                      layoutId: 'Et98G55VS',
                      children: /* @__PURE__ */ _jsx4(RichText2, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion4.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                              '--framer-font-family': '"MS Sans Serif Regular", "MS Sans Serif Regular Placeholder", serif',
                              '--framer-font-size': '76px',
                              '--framer-text-alignment': 'center',
                            },
                            children: 'Meetings that are fun',
                          },),
                        },),
                        className: 'framer-dufxp5',
                        fonts: ['CUSTOM;MS Sans Serif Regular',],
                        layoutDependency,
                        layoutId: 'bIYxw1ml1',
                        style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    },),
                    /* @__PURE__ */ _jsx4(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion4.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                            '--framer-font-family': '"MS Sans Serif Regular", "MS Sans Serif Regular Placeholder", serif',
                            '--framer-font-size': '30px',
                          },
                          children: 'Zoom makes you depressed? Meet in the blockyard instead',
                        },),
                      },),
                      className: 'framer-1u5syxy',
                      fonts: ['CUSTOM;MS Sans Serif Regular',],
                      layoutDependency,
                      layoutId: 'mpnS3yCGg',
                      style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs2(motion4.div, {
                  className: 'framer-cgjlp2',
                  layoutDependency,
                  layoutId: 'PFdZxZqSF',
                  children: [
                    /* @__PURE__ */ _jsx4(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion4.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                            '--framer-font-family': '"MS Sans Serif Regular", "MS Sans Serif Regular Placeholder", serif',
                            '--framer-font-size': '20px',
                          },
                          children: 'Why do we have to make all those boring video calls. Let\'s meet in a fun game instead.',
                        },),
                      },),
                      className: 'framer-1hkaff2',
                      fonts: ['CUSTOM;MS Sans Serif Regular',],
                      layoutDependency,
                      layoutId: 'NMfUAFhse',
                      style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsxs2(motion4.div, {
                      className: 'framer-5a7cjv',
                      layoutDependency,
                      layoutId: 'jD7SYXaV7',
                      children: [
                        /* @__PURE__ */ _jsx4(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx4(motion4.div, {
                            className: 'framer-876fpm-container',
                            layoutDependency,
                            layoutId: 'BAsKN0oyX-container',
                            style: { rotate: 180, },
                            children: /* @__PURE__ */ _jsx4(stdin_default, {
                              height: '100%',
                              id: 'BAsKN0oyX',
                              layoutId: 'BAsKN0oyX',
                              variant: 'o4fq1_Zyn',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx4(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx4(motion4.div, {
                            className: 'framer-1ag2m8w-container',
                            layoutDependency,
                            layoutId: 's2IJaLdoe-container',
                            children: /* @__PURE__ */ _jsx4(stdin_default2, {
                              height: '100%',
                              id: 's2IJaLdoe',
                              layoutId: 's2IJaLdoe',
                              link: EIqFo2ZU2,
                              tap: tap7ji456,
                              title: 'Enter The BlockYard',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx4(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx4(motion4.div, {
                            className: 'framer-auf6we-container',
                            layoutDependency,
                            layoutId: 's2tiKunnM-container',
                            children: /* @__PURE__ */ _jsx4(stdin_default, {
                              height: '100%',
                              id: 's2tiKunnM',
                              layoutId: 's2tiKunnM',
                              variant: 'o4fq1_Zyn',
                              width: '100%',
                            },),
                          },),
                        },),
                      ],
                    },),
                  ],
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css4 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-zJoIK.framer-1ti2jla, .framer-zJoIK .framer-1ti2jla { display: block; }',
  '.framer-zJoIK.framer-jya5ki { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 1246px; }',
  '.framer-zJoIK .framer-kuegw7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 10px; position: relative; width: 100%; }',
  '.framer-zJoIK .framer-wpm1pf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-an8zkw { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }',
  '.framer-zJoIK .framer-n2rwdu, .framer-zJoIK .framer-dufxp5, .framer-zJoIK .framer-1u5syxy, .framer-zJoIK .framer-1hkaff2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-zJoIK .framer-1pr6m0i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-yi01g1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-1js8fkv-container, .framer-zJoIK .framer-w8uy5s-container, .framer-zJoIK .framer-8578kc-container, .framer-zJoIK .framer-876fpm-container, .framer-zJoIK .framer-auf6we-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-zJoIK .framer-1o5jget { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 0px 80px 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-10x8ag0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-1pnh4bf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1226px; }',
  '.framer-zJoIK .framer-cgjlp2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-5a7cjv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-zJoIK .framer-1ag2m8w-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zJoIK.framer-jya5ki, .framer-zJoIK .framer-wpm1pf, .framer-zJoIK .framer-1pr6m0i, .framer-zJoIK .framer-yi01g1, .framer-zJoIK .framer-1o5jget, .framer-zJoIK .framer-10x8ag0, .framer-zJoIK .framer-1pnh4bf, .framer-zJoIK .framer-cgjlp2, .framer-zJoIK .framer-5a7cjv { gap: 0px; } .framer-zJoIK.framer-jya5ki > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-zJoIK.framer-jya5ki > :first-child, .framer-zJoIK .framer-1o5jget > :first-child, .framer-zJoIK .framer-10x8ag0 > :first-child, .framer-zJoIK .framer-cgjlp2 > :first-child { margin-top: 0px; } .framer-zJoIK.framer-jya5ki > :last-child, .framer-zJoIK .framer-1o5jget > :last-child, .framer-zJoIK .framer-10x8ag0 > :last-child, .framer-zJoIK .framer-cgjlp2 > :last-child { margin-bottom: 0px; } .framer-zJoIK .framer-wpm1pf > *, .framer-zJoIK .framer-1pnh4bf > *, .framer-zJoIK .framer-5a7cjv > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-zJoIK .framer-wpm1pf > :first-child, .framer-zJoIK .framer-1pr6m0i > :first-child, .framer-zJoIK .framer-yi01g1 > :first-child, .framer-zJoIK .framer-1pnh4bf > :first-child, .framer-zJoIK .framer-5a7cjv > :first-child { margin-left: 0px; } .framer-zJoIK .framer-wpm1pf > :last-child, .framer-zJoIK .framer-1pr6m0i > :last-child, .framer-zJoIK .framer-yi01g1 > :last-child, .framer-zJoIK .framer-1pnh4bf > :last-child, .framer-zJoIK .framer-5a7cjv > :last-child { margin-right: 0px; } .framer-zJoIK .framer-1pr6m0i > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-zJoIK .framer-yi01g1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-zJoIK .framer-1o5jget > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-zJoIK .framer-10x8ag0 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-zJoIK .framer-cgjlp2 > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } }',
  '.framer-zJoIK.framer-v-16pbe3d.framer-jya5ki { height: 72px; }',
  '.framer-zJoIK[data-border="true"]::after, .framer-zJoIK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerxKU_CZcEi = withCSS4(Component4, css4, 'framer-zJoIK',);
var stdin_default4 = FramerxKU_CZcEi;
FramerxKU_CZcEi.displayName = 'Hero';
FramerxKU_CZcEi.defaultProps = { height: 521, width: 1246, };
addPropertyControls4(FramerxKU_CZcEi, {
  variant: {
    options: ['gjDlh3BIy', 'GctxtIt6F',],
    optionTitles: ['expanded-intro', 'collapsed-intro',],
    title: 'Variant',
    type: ControlType4.Enum,
  },
  s5bLvJPGS: { title: 'Tap', type: ControlType4.EventHandler, },
  D5HCDFewR: {
    __defaultAssetReference:
      'data:framer/asset-reference,6AcPlVRKEP2vYw78kk5gkYlTUzc.png?originalFilename=loudspeaker_rays_green-0.png&preferredSize=auto',
    title: 'Image',
    type: ControlType4.ResponsiveImage,
  },
  EIqFo2ZU2: { title: 'cta', type: ControlType4.Link, },
},);
addFonts4(FramerxKU_CZcEi, [
  {
    explicitInter: true,
    fonts: [{
      family: 'MS Sans Serif Bold Regular',
      source: 'custom',
      url: 'https://framerusercontent.com/assets/6my2frs4IlLHM4WNJb6Zg6p0FTE.ttf',
    }, { family: 'MS Sans Serif Regular', source: 'custom', url: 'https://framerusercontent.com/assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf', },],
  },
  ...IconCtaFonts,
  ...AnimatedArrowsFonts,
  ...CTACopy2Fonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:hero
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default4.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default4, ...props, },);
};
var hero_default = stdin_default4;
export { hero_default as default, };
