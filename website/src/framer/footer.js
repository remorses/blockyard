/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/rTfcwKloeyqH4RKg0pds/LzSlPYieWHDxfdzEtzML/l_W8BgOBS.js
import { jsx as _jsx7, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts7,
  addPropertyControls as addPropertyControls7,
  ControlType as ControlType7,
  cx as cx7,
  getFonts as getFonts2,
  Image as Image2,
  RichText as RichText5,
  useActiveVariantCallback as useActiveVariantCallback4,
  useVariantState as useVariantState7,
  withCSS as withCSS7,
} from 'unframer';
import { LayoutGroup as LayoutGroup7, motion as motion7, } from 'unframer';
import * as React7 from 'react';

// https :https://framerusercontent.com/modules/qAItFhte3PgBiwpDkjBC/L3H7i1rvqsmK1OIhIJQS/anLZ_uym4.js
import { fontStore, } from 'unframer';
fontStore.loadWebFontsFromSelectors(['CUSTOM;MS Sans Serif Bold Regular',],);
var fonts = [{
  family: 'MS Sans Serif Bold Regular',
  moduleAsset: { localModuleIdentifier: 'local-module:css/anLZ_uym4:default', url: 'assets/6my2frs4IlLHM4WNJb6Zg6p0FTE.ttf', },
  url:
    new URL(
      'assets/6my2frs4IlLHM4WNJb6Zg6p0FTE.ttf',
      'https://framerusercontent.com/modules/qAItFhte3PgBiwpDkjBC/L3H7i1rvqsmK1OIhIJQS/anLZ_uym4.js',
    ).href,
},];
var css = [
  '.framer-SK1rd .framer-styles-preset-1dmfinu:not(.rich-text-wrapper), .framer-SK1rd .framer-styles-preset-1dmfinu.rich-text-wrapper h3, .framer-SK1rd .framer-styles-preset-1dmfinu.rich-text-wrapper [data-preset-tag="h3"] { --framer-font-family: "MS Sans Serif Bold Regular", serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.2px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-transform: none; }',
  '@media (max-width: 1199px) and (min-width: 810px) { .framer-SK1rd .framer-styles-preset-1dmfinu:not(.rich-text-wrapper), .framer-SK1rd .framer-styles-preset-1dmfinu.rich-text-wrapper h3, .framer-SK1rd .framer-styles-preset-1dmfinu.rich-text-wrapper [data-preset-tag="h3"] { --framer-font-family: "MS Sans Serif Bold Regular", serif; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.2px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-SK1rd .framer-styles-preset-1dmfinu:not(.rich-text-wrapper), .framer-SK1rd .framer-styles-preset-1dmfinu.rich-text-wrapper h3, .framer-SK1rd .framer-styles-preset-1dmfinu.rich-text-wrapper [data-preset-tag="h3"] { --framer-font-family: "MS Sans Serif Bold Regular", serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.2px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-transform: none; } }',
];
var className = 'framer-SK1rd';

// https :https://framerusercontent.com/modules/LHSJbeoqkgItGHFp4RAc/JFcMOpoKYZg0bM7nq4rp/fwZYGCgKX.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addFonts, addPropertyControls, ControlType, cx, RichText, useVariantState, withCSS, } from 'unframer';
import { LayoutGroup, motion, } from 'unframer';
import * as React from 'react';
var enabledGestures = { VlX0KKZnN: { hover: true, }, };
var cycleOrder = ['VlX0KKZnN',];
var variantClassNames = { VlX0KKZnN: 'framer-v-1kwekfx', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap = {};
var transitions = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var transformTemplate = (_, t,) => `translateY(-50%) ${t}`;
var Component = /* @__PURE__ */ React.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
      width,
      height,
      layoutId,
      variant: outerVariant = 'VlX0KKZnN',
      title: TGXFeTZvJ = 'reversed',
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
      cycleOrder,
      defaultVariant: 'VlX0KKZnN',
      enabledGestures,
      transitions,
      variant,
      variantClassNames,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
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
        className: cx('framer-h1V3U', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx('framer-1kwekfx', className2,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'VlX0KKZnN',
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides({ 'VlX0KKZnN-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx(RichText, {
            __fromCanvasComponent: true,
            children: /* @__PURE__ */ _jsx(React.Fragment, {
              children: /* @__PURE__ */ _jsx(motion.p, {
                style: {
                  '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                  '--framer-font-family': '"MS Sans Serif Regular", serif',
                  '--framer-font-size': '18px',
                  '--framer-letter-spacing': '0.3px',
                  '--framer-line-height': '1.4em',
                  '--framer-text-alignment': 'center',
                },
                children: 'reversed',
              },),
            },),
            className: 'framer-b8gzdl',
            fonts: ['CUSTOM;MS Sans Serif Regular',],
            layoutDependency,
            layoutId: 'uq7mgNqsq',
            style: {
              '--framer-link-text-color': 'rgb(0, 153, 255)',
              '--framer-link-text-decoration': 'underline',
              '--framer-paragraph-spacing': '0px',
              opacity: 0.5,
              rotate: 0,
            },
            text: TGXFeTZvJ,
            transformTemplate,
            transition,
            variants: { 'VlX0KKZnN-hover': { rotate: 180, }, },
            verticalAlignment: 'top',
            withExternalLayout: true,
          },),
        },),
      },),
    },);
  },
);
var css2 = [
  '.framer-h1V3U [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-h1V3U * { box-sizing: border-box; }',
  '.framer-h1V3U .framer-qtkgp4 { display: block; }',
  '.framer-h1V3U .framer-1kwekfx { height: 25px; overflow: hidden; position: relative; width: 70px; }',
  '.framer-h1V3U .framer-b8gzdl { flex: none; height: auto; position: absolute; right: 0px; top: 48%; white-space: pre; width: auto; }',
  '.framer-h1V3U .framer-v-1kwekfx .framer-1kwekfx { cursor: pointer; }',
];
var FramerfwZYGCgKX = withCSS(Component, css2, 'framer-h1V3U',);
var stdin_default = FramerfwZYGCgKX;
FramerfwZYGCgKX.displayName = 'reversed';
FramerfwZYGCgKX.defaultProps = { height: 25, width: 70, };
addPropertyControls(FramerfwZYGCgKX, {
  TGXFeTZvJ: { defaultValue: 'reversed', displayTextArea: false, title: 'Title', type: ControlType.String, },
},);
addFonts(FramerfwZYGCgKX, [{
  family: 'MS Sans Serif Regular',
  moduleAsset: { localModuleIdentifier: 'local-module:canvasComponent/fwZYGCgKX:default', url: 'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf', },
  url:
    new URL(
      'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf',
      'https://framerusercontent.com/modules/LHSJbeoqkgItGHFp4RAc/JFcMOpoKYZg0bM7nq4rp/fwZYGCgKX.js',
    ).href,
},],);

// https :https://framerusercontent.com/modules/80aVWvsiKvmTONFHISbo/9lpVdJkb7LOewW8NlO8s/GtEXKeVJ2.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx as cx2,
  RichText as RichText2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, } from 'unframer';
import * as React2 from 'react';
var enabledGestures2 = { OS7fpAuJ5: { hover: true, }, };
var cycleOrder2 = ['OS7fpAuJ5',];
var variantClassNames2 = { OS7fpAuJ5: 'framer-v-5reptj', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap2 = {};
var transitions2 = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var Component2 = /* @__PURE__ */ React2.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
      width,
      height,
      layoutId,
      variant: outerVariant = 'OS7fpAuJ5',
      title: H46XYMKoK = 'Credits',
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap2[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
      cycleOrder: cycleOrder2,
      defaultVariant: 'OS7fpAuJ5',
      enabledGestures: enabledGestures2,
      transitions: transitions2,
      variant,
      variantClassNames: variantClassNames2,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const defaultLayoutId = React2.useId();
    return /* @__PURE__ */ _jsx2(LayoutGroup2, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx2(motion2.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx2('framer-CWyvL', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx2(motion2.div, {
          ...restProps,
          className: cx2('framer-5reptj', className2,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'OS7fpAuJ5',
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides2({ 'OS7fpAuJ5-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx2(RichText2, {
            __fromCanvasComponent: true,
            children: /* @__PURE__ */ _jsx2(React2.Fragment, {
              children: /* @__PURE__ */ _jsx2(motion2.h3, {
                style: {
                  '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                  '--framer-font-family': '"MS Sans Serif Regular", serif',
                  '--framer-font-size': '22px',
                  '--framer-letter-spacing': '0.2px',
                  '--framer-line-height': '1.5em',
                  '--framer-text-decoration': 'underline',
                },
                children: 'Credits',
              },),
            },),
            className: 'framer-1yja1jx',
            fonts: ['CUSTOM;MS Sans Serif Regular',],
            layoutDependency,
            layoutId: 'rq7W1Wod_',
            style: {
              '--framer-link-text-color': 'rgb(0, 153, 255)',
              '--framer-link-text-decoration': 'underline',
              '--framer-paragraph-spacing': '0px',
            },
            text: H46XYMKoK,
            transition,
            verticalAlignment: 'top',
            withExternalLayout: true,
            ...addPropertyOverrides2(
              {
                'OS7fpAuJ5-hover': {
                  children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion2.h3, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                        '--framer-font-family': '"MS Sans Serif Regular", serif',
                        '--framer-font-size': '22px',
                        '--framer-letter-spacing': '0.2px',
                        '--framer-line-height': '1.5em',
                      },
                      children: 'Credits',
                    },),
                  },),
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
var css3 = [
  '.framer-CWyvL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-CWyvL * { box-sizing: border-box; }',
  '.framer-CWyvL .framer-q7sakg { display: block; }',
  '.framer-CWyvL .framer-5reptj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-CWyvL .framer-1yja1jx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-CWyvL .framer-v-5reptj .framer-5reptj { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CWyvL .framer-5reptj { gap: 0px; } .framer-CWyvL .framer-5reptj > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-CWyvL .framer-5reptj > :first-child { margin-left: 0px; } .framer-CWyvL .framer-5reptj > :last-child { margin-right: 0px; } }',
];
var FramerGtEXKeVJ2 = withCSS2(Component2, css3, 'framer-CWyvL',);
var stdin_default2 = FramerGtEXKeVJ2;
FramerGtEXKeVJ2.displayName = 'credits-cta';
FramerGtEXKeVJ2.defaultProps = { height: 36, width: 65, };
addPropertyControls2(FramerGtEXKeVJ2, {
  H46XYMKoK: { defaultValue: 'Credits', displayTextArea: false, title: 'Title', type: ControlType2.String, },
},);
addFonts2(FramerGtEXKeVJ2, [{
  family: 'MS Sans Serif Regular',
  moduleAsset: { localModuleIdentifier: 'local-module:canvasComponent/GtEXKeVJ2:default', url: 'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf', },
  url:
    new URL(
      'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf',
      'https://framerusercontent.com/modules/80aVWvsiKvmTONFHISbo/9lpVdJkb7LOewW8NlO8s/GtEXKeVJ2.js',
    ).href,
},],);

// https :https://framerusercontent.com/modules/qmhfGyZ4neWh87b0ub86/LRG73nhu5DNaSNuP270M/iW_r43w0K.js
import { jsx as _jsx4, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls4,
  ControlType as ControlType4,
  cx as cx4,
  getFonts,
  RichText as RichText3,
  useActiveVariantCallback as useActiveVariantCallback2,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup4, motion as motion4, } from 'unframer';
import * as React4 from 'react';

// https :https://framerusercontent.com/modules/v8QXXbpJ1Wh58KfdvKy8/e1FtmOqTLSn6ES0pIvqC/ahReXf7Cl.js
import { jsx as _jsx3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType3,
  cx as cx3,
  CycleVariantState,
  Image,
  useActiveVariantCallback,
  useOnVariantChange,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion3, } from 'unframer';
import * as React3 from 'react';
var cycleOrder3 = ['R_ECzcdyd', 'lP7EULFVH',];
var variantClassNames3 = { lP7EULFVH: 'framer-v-18enrou', R_ECzcdyd: 'framer-v-mtxhyw', };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap3 = { 'Variant 1': 'R_ECzcdyd', 'Variant 2': 'lP7EULFVH', };
var transitions3 = {
  default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], mass: 1, stiffness: 500, type: 'spring', },
};
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Component3 = /* @__PURE__ */ React3.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
      width,
      height,
      layoutId,
      variant: outerVariant = 'R_ECzcdyd',
      image: HfF3tEcmx = {
        src:
          new URL(
            'assets/KmEKF8iuv9PRcoThlklhwnDW4.png',
            'https://framerusercontent.com/modules/v8QXXbpJ1Wh58KfdvKy8/e1FtmOqTLSn6ES0pIvqC/ahReXf7Cl.js',
          ).href,
      },
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap3[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
      cycleOrder: cycleOrder3,
      defaultVariant: 'R_ECzcdyd',
      transitions: transitions3,
      variant,
      variantClassNames: variantClassNames3,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
    const onAppear7vqrr5 = activeVariantCallback(async (...args) => {
      await delay(() => setVariant(CycleVariantState,), 500,);
    },);
    useOnVariantChange(baseVariant, { default: onAppear7vqrr5, },);
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
        className: cx3('framer-RsCJK', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx3(motion3.div, {
          ...restProps,
          className: cx3('framer-mtxhyw', className2,),
          'data-framer-name': 'Variant 1',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'R_ECzcdyd',
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides3({ lP7EULFVH: { 'data-framer-name': 'Variant 2', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx3(Image, {
            background: { alt: '', fit: 'stretch', sizes: '16px', ...toResponsiveImage(HfF3tEcmx,), },
            className: 'framer-1jzbgsb',
            'data-framer-name': 'icon-heart',
            layoutDependency,
            layoutId: 'VfE1MQI_S',
            transition,
            ...addPropertyOverrides3(
              { lP7EULFVH: { background: { alt: '', fit: 'stretch', ...toResponsiveImage(HfF3tEcmx,), }, }, },
              baseVariant,
              gestureVariant,
            ),
          },),
        },),
      },),
    },);
  },
);
var css4 = [
  '.framer-RsCJK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-RsCJK * { box-sizing: border-box; }',
  '.framer-RsCJK .framer-12hprtm { display: block; }',
  '.framer-RsCJK .framer-mtxhyw { height: 22px; overflow: hidden; position: relative; width: 22px; }',
  '.framer-RsCJK .framer-1jzbgsb { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: calc(50.00000000000002% - 16px / 2); position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 16px; }',
  '.framer-RsCJK.framer-v-18enrou .framer-1jzbgsb { height: var(--framer-aspect-ratio-supported, 22px); left: 0px; right: 0px; top: 0px; width: unset; }',
];
var FramerahReXf7Cl = withCSS3(Component3, css4, 'framer-RsCJK',);
var stdin_default3 = FramerahReXf7Cl;
FramerahReXf7Cl.displayName = 'animated-heart';
FramerahReXf7Cl.defaultProps = { height: 22, width: 22, };
addPropertyControls3(FramerahReXf7Cl, {
  variant: { options: ['R_ECzcdyd', 'lP7EULFVH',], optionTitles: ['Variant 1', 'Variant 2',], title: 'Variant', type: ControlType3.Enum, },
  HfF3tEcmx: {
    __defaultAssetReference: 'data:framer/asset-reference,KmEKF8iuv9PRcoThlklhwnDW4.png?originalFilename=icon-heart.png&preferredSize=auto',
    title: 'Image',
    type: ControlType3.ResponsiveImage,
  },
},);
addFonts3(FramerahReXf7Cl, [],);

// https :https://framerusercontent.com/modules/qmhfGyZ4neWh87b0ub86/LRG73nhu5DNaSNuP270M/iW_r43w0K.js
var AnimatedHeartFonts = getFonts(stdin_default3,);
var cycleOrder4 = ['NigL06zME', 'HBDUkyN07',];
var variantClassNames4 = { HBDUkyN07: 'framer-v-1zsuas', NigL06zME: 'framer-v-1t6io4g', };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap4 = { 'Variant 1': 'NigL06zME', 'Variant 2': 'HBDUkyN07', };
var transitions4 = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var transformTemplate2 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Component4 = /* @__PURE__ */ React4.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
      width,
      height,
      layoutId,
      variant: outerVariant = 'NigL06zME',
      title: pOU0py68w = 'love',
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap4[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState4({
      cycleOrder: cycleOrder4,
      defaultVariant: 'NigL06zME',
      transitions: transitions4,
      variant,
      variantClassNames: variantClassNames4,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
    const onMouseEnter1m0gea6 = activeVariantCallback(async (...args) => {
      setVariant('HBDUkyN07',);
    },);
    const onMouseLeave1f8kqtu = activeVariantCallback(async (...args) => {
      setVariant('NigL06zME',);
    },);
    const isDisplayed = () => {
      if (baseVariant === 'HBDUkyN07') {
        return false;
      }
      return true;
    };
    const isDisplayed1 = () => {
      if (baseVariant === 'HBDUkyN07') {
        return true;
      }
      return false;
    };
    const defaultLayoutId = React4.useId();
    return /* @__PURE__ */ _jsx4(LayoutGroup4, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx4(motion4.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx4('framer-eggSO', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsxs(motion4.div, {
          ...restProps,
          className: cx4('framer-1t6io4g', className2,),
          'data-framer-name': 'Variant 1',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'NigL06zME',
          onMouseEnter: onMouseEnter1m0gea6,
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides4(
            { HBDUkyN07: { 'data-framer-name': 'Variant 2', onMouseLeave: onMouseLeave1f8kqtu, }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx4(RichText3, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                children: /* @__PURE__ */ _jsx4(motion4.p, {
                  style: {
                    '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                    '--framer-font-family': '"MS Sans Serif Regular", serif',
                    '--framer-font-size': '18px',
                    '--framer-letter-spacing': '0.3px',
                    '--framer-line-height': '1.4em',
                    '--framer-text-alignment': 'center',
                  },
                  children: 'love',
                },),
              },),
              className: 'framer-gexhri',
              fonts: ['CUSTOM;MS Sans Serif Regular',],
              layoutDependency,
              layoutId: 'XZ5GVb3TD',
              style: {
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                '--framer-paragraph-spacing': '0px',
                opacity: 0.5,
              },
              text: pOU0py68w,
              transformTemplate: transformTemplate2,
              transition,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            isDisplayed1() && /* @__PURE__ */
            _jsx4(motion4.div, {
              className: 'framer-d054s2-container',
              layoutDependency,
              layoutId: 'FuLEvNevW-container',
              transition,
              children: /* @__PURE__ */ _jsx4(stdin_default3, {
                height: '100%',
                id: 'FuLEvNevW',
                layoutId: 'FuLEvNevW',
                style: { height: '100%', width: '100%', },
                variant: 'R_ECzcdyd',
                width: '100%',
              },),
            },),
          ],
        },),
      },),
    },);
  },
);
var css5 = [
  '.framer-eggSO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-eggSO * { box-sizing: border-box; }',
  '.framer-eggSO .framer-1o0t4oo { display: block; }',
  '.framer-eggSO .framer-1t6io4g { height: 25px; overflow: hidden; position: relative; width: 34px; }',
  '.framer-eggSO .framer-gexhri { flex: none; height: auto; left: 49%; position: absolute; top: 48%; white-space: pre; width: auto; }',
  '.framer-eggSO .framer-d054s2-container { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: 0px; width: 20px; }',
];
var FrameriW_r43w0K = withCSS4(Component4, css5, 'framer-eggSO',);
var stdin_default4 = FrameriW_r43w0K;
FrameriW_r43w0K.displayName = 'love';
FrameriW_r43w0K.defaultProps = { height: 25, width: 34, };
addPropertyControls4(FrameriW_r43w0K, {
  variant: { options: ['NigL06zME', 'HBDUkyN07',], optionTitles: ['Variant 1', 'Variant 2',], title: 'Variant', type: ControlType4.Enum, },
  pOU0py68w: { defaultValue: 'love', displayTextArea: false, title: 'Title', type: ControlType4.String, },
},);
addFonts4(FrameriW_r43w0K, [{
  family: 'MS Sans Serif Regular',
  moduleAsset: { localModuleIdentifier: 'local-module:canvasComponent/iW_r43w0K:default', url: 'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf', },
  url:
    new URL(
      'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf',
      'https://framerusercontent.com/modules/qmhfGyZ4neWh87b0ub86/LRG73nhu5DNaSNuP270M/iW_r43w0K.js',
    ).href,
}, ...AnimatedHeartFonts,],);

// https :https://framerusercontent.com/modules/jzbBHBjRWavKGwE1YTeE/9qOYOAPDEifu5Qvs3bW6/rcROENBse.js
import { jsx as _jsx5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls5,
  ControlType as ControlType5,
  cx as cx5,
  RichText as RichText4,
  useVariantState as useVariantState5,
  withCSS as withCSS5,
} from 'unframer';
import { LayoutGroup as LayoutGroup5, motion as motion5, } from 'unframer';
import * as React5 from 'react';
var enabledGestures3 = { Sb0BqJ74v: { hover: true, }, };
var cycleOrder5 = ['Sb0BqJ74v',];
var variantClassNames5 = { Sb0BqJ74v: 'framer-v-vk7f1l', };
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap5 = {};
var transitions5 = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var Component5 = /* @__PURE__ */ React5.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
      width,
      height,
      layoutId,
      variant: outerVariant = 'Sb0BqJ74v',
      text: AGd07lgt5 = 'Terms & Conditions, Privacy Policy and all that',
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap5[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState5({
      cycleOrder: cycleOrder5,
      defaultVariant: 'Sb0BqJ74v',
      enabledGestures: enabledGestures3,
      transitions: transitions5,
      variant,
      variantClassNames: variantClassNames5,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const defaultLayoutId = React5.useId();
    return /* @__PURE__ */ _jsx5(LayoutGroup5, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx5(motion5.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx5('framer-rvp6W', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx5(motion5.div, {
          ...restProps,
          className: cx5('framer-vk7f1l', className2,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'Sb0BqJ74v',
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides5({ 'Sb0BqJ74v-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx5(RichText4, {
            __fromCanvasComponent: true,
            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
              children: /* @__PURE__ */ _jsx5(motion5.h3, {
                style: {
                  '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                  '--framer-font-family': '"MS Sans Serif Regular", serif',
                  '--framer-font-size': '22px',
                  '--framer-letter-spacing': '0.2px',
                  '--framer-line-height': '1.5em',
                  '--framer-text-alignment': 'left',
                  '--framer-text-decoration': 'underline',
                },
                children: 'Terms & Conditions, Privacy Policy and all that',
              },),
            },),
            className: 'framer-1412aa4',
            fonts: ['CUSTOM;MS Sans Serif Regular',],
            layoutDependency,
            layoutId: 'vCMnoGvRl',
            style: {
              '--framer-link-text-color': 'rgb(0, 153, 255)',
              '--framer-link-text-decoration': 'underline',
              '--framer-paragraph-spacing': '0px',
            },
            text: AGd07lgt5,
            transition,
            verticalAlignment: 'top',
            withExternalLayout: true,
            ...addPropertyOverrides5(
              {
                'Sb0BqJ74v-hover': {
                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx5(motion5.h3, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                        '--framer-font-family': '"MS Sans Serif Regular", serif',
                        '--framer-font-size': '22px',
                        '--framer-letter-spacing': '0.2px',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                      },
                      children: 'Terms & Conditions, Privacy Policy and all that',
                    },),
                  },),
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
var css6 = [
  '.framer-rvp6W [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-rvp6W * { box-sizing: border-box; }',
  '.framer-rvp6W .framer-13g743q { display: block; }',
  '.framer-rvp6W .framer-vk7f1l { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-rvp6W .framer-1412aa4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-rvp6W .framer-v-vk7f1l .framer-vk7f1l { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-rvp6W .framer-vk7f1l { gap: 0px; } .framer-rvp6W .framer-vk7f1l > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-rvp6W .framer-vk7f1l > :first-child { margin-left: 0px; } .framer-rvp6W .framer-vk7f1l > :last-child { margin-right: 0px; } }',
];
var FramerrcROENBse = withCSS5(Component5, css6, 'framer-rvp6W',);
var stdin_default5 = FramerrcROENBse;
FramerrcROENBse.displayName = 'tnc-pp-cta';
FramerrcROENBse.defaultProps = { height: 36, width: 427, };
addPropertyControls5(FramerrcROENBse, {
  AGd07lgt5: {
    defaultValue: 'Terms & Conditions, Privacy Policy and all that',
    displayTextArea: false,
    title: 'Text',
    type: ControlType5.String,
  },
},);
addFonts5(FramerrcROENBse, [{
  family: 'MS Sans Serif Regular',
  moduleAsset: { localModuleIdentifier: 'local-module:canvasComponent/rcROENBse:default', url: 'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf', },
  url:
    new URL(
      'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf',
      'https://framerusercontent.com/modules/jzbBHBjRWavKGwE1YTeE/9qOYOAPDEifu5Qvs3bW6/rcROENBse.js',
    ).href,
},],);

// https :https://framerusercontent.com/modules/nQA2WVhSMBL6XtxVBMbL/0SEs8IfVMBAjeyj1Vy0q/TSQMQYICf.js
import { jsx as _jsx6, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts6,
  addPropertyControls as addPropertyControls6,
  ControlType as ControlType6,
  cx as cx6,
  SVG,
  useActiveVariantCallback as useActiveVariantCallback3,
  useVariantState as useVariantState6,
  withCSS as withCSS6,
} from 'unframer';
import { LayoutGroup as LayoutGroup6, motion as motion6, } from 'unframer';
import * as React6 from 'react';
var enabledGestures4 = { B08Jwy6qX: { pressed: true, }, K1_kaUtDS: { pressed: true, }, RYsOSWXR6: { pressed: true, }, };
var cycleOrder6 = ['RYsOSWXR6', 'K1_kaUtDS', 'B08Jwy6qX',];
var variantClassNames6 = { B08Jwy6qX: 'framer-v-1ghpim3', K1_kaUtDS: 'framer-v-knr2w9', RYsOSWXR6: 'framer-v-1amuxa3', };
function addPropertyOverrides6(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap6 = { maximise: 'K1_kaUtDS', minimise: 'RYsOSWXR6', Variant: 'B08Jwy6qX', };
var transitions6 = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var Component6 = /* @__PURE__ */ React6.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
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
    const outerVariantId = humanReadableVariantMap6[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState6({
      cycleOrder: cycleOrder6,
      defaultVariant: 'RYsOSWXR6',
      enabledGestures: enabledGestures4,
      transitions: transitions6,
      variant,
      variantClassNames: variantClassNames6,
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
    const defaultLayoutId = React6.useId();
    return /* @__PURE__ */ _jsx6(LayoutGroup6, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx6(motion6.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx6('framer-sWUGm', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsxs2(motion6.div, {
          ...restProps,
          className: cx6('framer-1amuxa3', className2,),
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
          ...addPropertyOverrides6(
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
            isDisplayed() && /* @__PURE__ */ _jsx6(SVG, {
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
            isDisplayed1() && /* @__PURE__ */ _jsx6(SVG, {
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
            isDisplayed2() && /* @__PURE__ */ _jsx6(SVG, {
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
var css7 = [
  '.framer-sWUGm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-sWUGm * { box-sizing: border-box; }',
  '.framer-sWUGm .framer-7x5vv2 { display: block; }',
  '.framer-sWUGm .framer-1amuxa3 { cursor: pointer; height: 32px; overflow: hidden; position: relative; width: 32px; }',
  '.framer-sWUGm .framer-1h3a6nn, .framer-sWUGm .framer-1hfsjc5, .framer-sWUGm .framer-hld1hr { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }',
  '.framer-sWUGm .framer-v-1amuxa3 .framer-1amuxa3, .framer-sWUGm .framer-v-knr2w9 .framer-1amuxa3, .framer-sWUGm .framer-v-1ghpim3 .framer-1amuxa3 { cursor: pointer; }',
  '.framer-sWUGm.framer-v-knr2w9 .framer-1amuxa3, .framer-sWUGm.framer-v-1ghpim3 .framer-1amuxa3, .framer-sWUGm.framer-v-1amuxa3.pressed .framer-1amuxa3 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); }',
];
var FramerTSQMQYICf = withCSS6(Component6, css7, 'framer-sWUGm',);
var stdin_default6 = FramerTSQMQYICf;
FramerTSQMQYICf.displayName = 'icon-cta';
FramerTSQMQYICf.defaultProps = { height: 32, width: 32, };
addPropertyControls6(FramerTSQMQYICf, {
  variant: {
    options: ['RYsOSWXR6', 'K1_kaUtDS', 'B08Jwy6qX',],
    optionTitles: ['minimise', 'maximise', 'Variant',],
    title: 'Variant',
    type: ControlType6.Enum,
  },
  X4EJUu1MY: { defaultValue: 1, max: 1, min: 0, step: 0.01, title: 'Icon Opacity', type: ControlType6.Number, },
  PMx4y8w85: { title: 'Tap', type: ControlType6.EventHandler, },
},);
addFonts6(FramerTSQMQYICf, [],);

// https :https://framerusercontent.com/modules/rTfcwKloeyqH4RKg0pds/LzSlPYieWHDxfdzEtzML/l_W8BgOBS.js
var IconCtaFonts = getFonts2(stdin_default6,);
var CreditsCtaFonts = getFonts2(stdin_default2,);
var TncPpCtaFonts = getFonts2(stdin_default5,);
var ReversedFonts = getFonts2(stdin_default,);
var LoveFonts = getFonts2(stdin_default4,);
var cycleOrder7 = ['NMXdYQuT0', 'oYbRLIZ0v',];
var variantClassNames7 = { NMXdYQuT0: 'framer-v-1hlzj4w', oYbRLIZ0v: 'framer-v-1597s44', };
function addPropertyOverrides7(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap7 = { 'collapsed-footer': 'oYbRLIZ0v', 'expanded-footer': 'NMXdYQuT0', };
var transitions7 = { default: { damping: 60, delay: 0, duration: 0, ease: [0, 0, 1, 1,], mass: 1, stiffness: 500, type: 'tween', }, };
var toResponsiveImage2 = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function ({
  id,
  style,
  className: className2,
  width,
  height,
  layoutId,
  variant: outerVariant = 'NMXdYQuT0',
  tap: iScknE1Bo,
  tap3: sdLD5VDAC,
  image: r2umAjWSD = {
    src:
      new URL(
        'assets/99RtXyktG2D2JvpJnVP0rQGsoM.png',
        'https://framerusercontent.com/modules/rTfcwKloeyqH4RKg0pds/LzSlPYieWHDxfdzEtzML/l_W8BgOBS.js',
      ).href,
  },
  ...restProps
}, ref,) {
  const outerVariantId = humanReadableVariantMap7[outerVariant];
  const variant = outerVariantId || outerVariant;
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState7({
    cycleOrder: cycleOrder7,
    defaultVariant: 'NMXdYQuT0',
    transitions: transitions7,
    variant,
    variantClassNames: variantClassNames7,
  },);
  const layoutDependency = variants.join('-',) + restProps.layoutDependency;
  const { activeVariantCallback, delay, } = useActiveVariantCallback4(baseVariant,);
  const tap1ihmipp = activeVariantCallback(async (...args) => {
    setVariant('oYbRLIZ0v',);
  },);
  const tap1lmdcjk = activeVariantCallback(async (...args) => {
    setVariant('NMXdYQuT0',);
  },);
  const onTap1cw0h4 = activeVariantCallback(async (...args) => {
    if (iScknE1Bo) {
      const res = await iScknE1Bo(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap1qa0f5n = activeVariantCallback(async (...args) => {
    if (sdLD5VDAC) {
      const res = await sdLD5VDAC(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const isDisplayed = () => {
    if (baseVariant === 'oYbRLIZ0v') {
      return false;
    }
    return true;
  };
  const defaultLayoutId = React7.useId();
  return /* @__PURE__ */ _jsx7(LayoutGroup7, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(motion7.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx7('framer-Od58t', className, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsxs3(motion7.div, {
        ...restProps,
        className: cx7('framer-1hlzj4w', className2,),
        'data-border': true,
        'data-framer-name': 'expanded-footer',
        layoutDependency,
        layoutId: 'NMXdYQuT0',
        ref,
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
        transition,
        ...addPropertyOverrides7({ oYbRLIZ0v: { 'data-framer-name': 'collapsed-footer', }, }, baseVariant, gestureVariant,),
        children: [
          /* @__PURE__ */ _jsxs3(motion7.div, {
            className: 'framer-185l15k',
            'data-framer-name': 'top-bar',
            layoutDependency,
            layoutId: 'T3ZUcw7lf',
            style: { background: 'linear-gradient(90deg, #06007f 0%, #1084d0 100%)', },
            transition,
            children: [
              /* @__PURE__ */ _jsxs3(motion7.div, {
                className: 'framer-1jgl7cc',
                layoutDependency,
                layoutId: 'Jz3m96iWM',
                transition,
                children: [
                  /* @__PURE__ */ _jsx7(Image2, {
                    background: { alt: '', fit: 'fill', sizes: '24px', ...toResponsiveImage2(r2umAjWSD,), },
                    className: 'framer-1u6j1hg',
                    'data-framer-name': 'icon-footer',
                    layoutDependency,
                    layoutId: 'Mp26mdeGW',
                    transition,
                  },),
                  /* @__PURE__ */ _jsx7(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                      children: /* @__PURE__ */ _jsx7(motion7.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgQm9sZCBSZWd1bGFy',
                          '--framer-font-family': '"MS Sans Serif Bold Regular", serif',
                          '--framer-font-size': '20px',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'The Closing Act',
                      },),
                    },),
                    className: 'framer-10ldm08',
                    fonts: ['CUSTOM;MS Sans Serif Bold Regular',],
                    layoutDependency,
                    layoutId: 'TZXRcmNVY',
                    style: {
                      '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                ],
              },),
              /* @__PURE__ */ _jsxs3(motion7.div, {
                className: 'framer-5iwrs',
                layoutDependency,
                layoutId: 'TuKrWvuit',
                transition,
                children: [
                  /* @__PURE__ */ _jsxs3(motion7.div, {
                    className: 'framer-72vxw8',
                    layoutDependency,
                    layoutId: 'R79AJmZf1',
                    transition,
                    children: [
                      /* @__PURE__ */ _jsx7(motion7.div, {
                        className: 'framer-1okwolu-container',
                        layoutDependency,
                        layoutId: 'AfpKItZo0-container',
                        transition,
                        children: /* @__PURE__ */ _jsx7(stdin_default6, {
                          height: '100%',
                          iconOpacity: 1,
                          id: 'AfpKItZo0',
                          layoutId: 'AfpKItZo0',
                          tap: tap1ihmipp,
                          variant: 'RYsOSWXR6',
                          width: '100%',
                          ...addPropertyOverrides7({ oYbRLIZ0v: { iconOpacity: 0.3, }, }, baseVariant, gestureVariant,),
                        },),
                      },),
                      /* @__PURE__ */ _jsx7(motion7.div, {
                        className: 'framer-1nta8x-container',
                        layoutDependency,
                        layoutId: 'EesY5Rfgc-container',
                        transition,
                        children: /* @__PURE__ */ _jsx7(stdin_default6, {
                          height: '100%',
                          iconOpacity: 0.3,
                          id: 'EesY5Rfgc',
                          layoutId: 'EesY5Rfgc',
                          variant: 'K1_kaUtDS',
                          width: '100%',
                          ...addPropertyOverrides7({ oYbRLIZ0v: { iconOpacity: 1, tap: tap1lmdcjk, }, }, baseVariant, gestureVariant,),
                        },),
                      },),
                    ],
                  },),
                  /* @__PURE__ */ _jsx7(motion7.div, {
                    className: 'framer-ef0vjb-container',
                    layoutDependency,
                    layoutId: 'bDaIyid8X-container',
                    transition,
                    children: /* @__PURE__ */ _jsx7(stdin_default6, {
                      height: '100%',
                      iconOpacity: 0.3,
                      id: 'bDaIyid8X',
                      layoutId: 'bDaIyid8X',
                      variant: 'B08Jwy6qX',
                      width: '100%',
                    },),
                  },),
                ],
              },),
            ],
          },),
          isDisplayed() && /* @__PURE__ */ _jsxs3(motion7.div, {
            className: 'framer-rb49gd',
            'data-framer-name': 'content',
            layoutDependency,
            layoutId: 'N0AYbXks5',
            transition,
            children: [
              /* @__PURE__ */ _jsxs3(motion7.div, {
                className: 'framer-tcaium',
                'data-framer-name': 'content-1',
                layoutDependency,
                layoutId: 'FyM7SxbQh',
                transition,
                children: [
                  /* @__PURE__ */ _jsx7(motion7.div, {
                    className: 'framer-3db588',
                    'data-framer-name': 'credits',
                    'data-highlight': true,
                    layoutDependency,
                    layoutId: 'x4TYtIeTd',
                    onTap: onTap1cw0h4,
                    transition,
                    children: /* @__PURE__ */ _jsx7(motion7.div, {
                      className: 'framer-1g5cj4r-container',
                      layoutDependency,
                      layoutId: 't9b6b3kE8-container',
                      transition,
                      children: /* @__PURE__ */ _jsx7(stdin_default2, {
                        height: '100%',
                        id: 't9b6b3kE8',
                        layoutId: 't9b6b3kE8',
                        title: 'Credits',
                        width: '100%',
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx7(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                      children: /* @__PURE__ */ _jsx7(motion7.h3, {
                        className: 'framer-styles-preset-1dmfinu',
                        'data-styles-preset': 'anLZ_uym4',
                        children: '\u2022',
                      },),
                    },),
                    className: 'framer-btg8w',
                    layoutDependency,
                    layoutId: 'R178I7C5z',
                    style: {
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx7(motion7.div, {
                    className: 'framer-1p14x6n',
                    'data-framer-name': 'tnc-pp',
                    'data-highlight': true,
                    layoutDependency,
                    layoutId: 'jRQdwnioV',
                    onTap: onTap1qa0f5n,
                    transition,
                    children: /* @__PURE__ */ _jsx7(motion7.div, {
                      className: 'framer-13y8lvl-container',
                      layoutDependency,
                      layoutId: 'HYX0JF4eF-container',
                      transition,
                      children: /* @__PURE__ */ _jsx7(stdin_default5, {
                        height: '100%',
                        id: 'HYX0JF4eF',
                        layoutId: 'HYX0JF4eF',
                        text: 'Terms & Conditions, Privacy Policy and all that',
                        width: '100%',
                      },),
                    },),
                  },),
                ],
              },),
              /* @__PURE__ */ _jsxs3(motion7.div, {
                className: 'framer-q4ffg8',
                layoutDependency,
                layoutId: 'h1zaPu3Xg',
                transition,
                children: [
                  /* @__PURE__ */ _jsx7(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                      children: /* @__PURE__ */ _jsx7(motion7.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                          '--framer-font-family': '"MS Sans Serif Regular", serif',
                          '--framer-font-size': '18px',
                          '--framer-letter-spacing': '0.3px',
                          '--framer-line-height': '1.4em',
                          '--framer-text-alignment': 'center',
                        },
                        children: '2049  \u2022  All rights',
                      },),
                    },),
                    className: 'framer-1hotlta',
                    fonts: ['CUSTOM;MS Sans Serif Regular',],
                    layoutDependency,
                    layoutId: 'qSoz3hXtp',
                    style: {
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.5,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx7(motion7.div, {
                    className: 'framer-1iev5xo-container',
                    layoutDependency,
                    layoutId: 'oRniCgYqO-container',
                    transition,
                    children: /* @__PURE__ */ _jsx7(stdin_default, {
                      height: '100%',
                      id: 'oRniCgYqO',
                      layoutId: 'oRniCgYqO',
                      title: 'reversed',
                      width: '100%',
                    },),
                  },),
                  /* @__PURE__ */ _jsx7(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                      children: /* @__PURE__ */ _jsx7(motion7.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                          '--framer-font-family': '"MS Sans Serif Regular", serif',
                          '--framer-font-size': '18px',
                          '--framer-letter-spacing': '0.3px',
                          '--framer-line-height': '1.4em',
                          '--framer-text-alignment': 'center',
                        },
                        children: ' \u2022   Made with',
                      },),
                    },),
                    className: 'framer-p0d6kf',
                    fonts: ['CUSTOM;MS Sans Serif Regular',],
                    layoutDependency,
                    layoutId: 'AJeHah7Zh',
                    style: {
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.5,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx7(motion7.div, {
                    className: 'framer-aycqli-container',
                    layoutDependency,
                    layoutId: 'S_moDockZ-container',
                    transition,
                    children: /* @__PURE__ */ _jsx7(stdin_default4, {
                      height: '100%',
                      id: 'S_moDockZ',
                      layoutId: 'S_moDockZ',
                      title: 'love',
                      variant: 'NigL06zME',
                      width: '100%',
                    },),
                  },),
                  /* @__PURE__ */ _jsx7(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                      children: /* @__PURE__ */ _jsx7(motion7.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO01TIFNhbnMgU2VyaWYgUmVndWxhcg==',
                          '--framer-font-family': '"MS Sans Serif Regular", serif',
                          '--framer-font-size': '18px',
                          '--framer-letter-spacing': '0.3px',
                          '--framer-line-height': '1.4em',
                          '--framer-text-alignment': 'center',
                        },
                        children: ', pressure and creativity ( no? )',
                      },),
                    },),
                    className: 'framer-6uf5pj',
                    fonts: ['CUSTOM;MS Sans Serif Regular',],
                    layoutDependency,
                    layoutId: 'mMP0xqj2L',
                    style: {
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.5,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                ],
              },),
            ],
          },),
        ],
      },),
    },),
  },);
},);
var css8 = [
  '.framer-Od58t [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-Od58t * { box-sizing: border-box; }',
  '.framer-Od58t .framer-9c6w64 { display: block; }',
  '.framer-Od58t .framer-1hlzj4w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: 1246px; }',
  '.framer-Od58t .framer-185l15k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: 100%; }',
  '.framer-Od58t .framer-1jgl7cc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-Od58t .framer-1u6j1hg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }',
  '.framer-Od58t .framer-10ldm08, .framer-Od58t .framer-btg8w, .framer-Od58t .framer-1hotlta, .framer-Od58t .framer-p0d6kf, .framer-Od58t .framer-6uf5pj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-Od58t .framer-5iwrs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 32px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-Od58t .framer-72vxw8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-Od58t .framer-1okwolu-container, .framer-Od58t .framer-1nta8x-container, .framer-Od58t .framer-ef0vjb-container, .framer-Od58t .framer-1g5cj4r-container, .framer-Od58t .framer-13y8lvl-container, .framer-Od58t .framer-1iev5xo-container, .framer-Od58t .framer-aycqli-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-Od58t .framer-rb49gd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 14px 14px 14px 14px; position: relative; width: 100%; }',
  '.framer-Od58t .framer-tcaium { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-Od58t .framer-3db588, .framer-Od58t .framer-1p14x6n { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-Od58t .framer-q4ffg8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Od58t .framer-1hlzj4w, .framer-Od58t .framer-1jgl7cc, .framer-Od58t .framer-5iwrs, .framer-Od58t .framer-72vxw8, .framer-Od58t .framer-rb49gd, .framer-Od58t .framer-tcaium, .framer-Od58t .framer-3db588, .framer-Od58t .framer-1p14x6n, .framer-Od58t .framer-q4ffg8 { gap: 0px; } .framer-Od58t .framer-1hlzj4w > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Od58t .framer-1hlzj4w > :first-child, .framer-Od58t .framer-rb49gd > :first-child { margin-top: 0px; } .framer-Od58t .framer-1hlzj4w > :last-child, .framer-Od58t .framer-rb49gd > :last-child { margin-bottom: 0px; } .framer-Od58t .framer-1jgl7cc > *, .framer-Od58t .framer-3db588 > *, .framer-Od58t .framer-1p14x6n > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Od58t .framer-1jgl7cc > :first-child, .framer-Od58t .framer-5iwrs > :first-child, .framer-Od58t .framer-72vxw8 > :first-child, .framer-Od58t .framer-tcaium > :first-child, .framer-Od58t .framer-3db588 > :first-child, .framer-Od58t .framer-1p14x6n > :first-child, .framer-Od58t .framer-q4ffg8 > :first-child { margin-left: 0px; } .framer-Od58t .framer-1jgl7cc > :last-child, .framer-Od58t .framer-5iwrs > :last-child, .framer-Od58t .framer-72vxw8 > :last-child, .framer-Od58t .framer-tcaium > :last-child, .framer-Od58t .framer-3db588 > :last-child, .framer-Od58t .framer-1p14x6n > :last-child, .framer-Od58t .framer-q4ffg8 > :last-child { margin-right: 0px; } .framer-Od58t .framer-5iwrs > *, .framer-Od58t .framer-q4ffg8 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-Od58t .framer-72vxw8 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Od58t .framer-rb49gd > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-Od58t .framer-tcaium > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }',
  '.framer-Od58t.framer-v-1597s44 .framer-1hlzj4w { height: 72px; }',
  ...css,
];
var Framerl_W8BgOBS = withCSS7(Component7, css8, 'framer-Od58t',);
var stdin_default7 = Framerl_W8BgOBS;
Framerl_W8BgOBS.displayName = 'footer';
Framerl_W8BgOBS.defaultProps = { height: 199, width: 1246, };
addPropertyControls7(Framerl_W8BgOBS, {
  variant: {
    options: ['NMXdYQuT0', 'oYbRLIZ0v',],
    optionTitles: ['expanded-footer', 'collapsed-footer',],
    title: 'Variant',
    type: ControlType7.Enum,
  },
  iScknE1Bo: { title: 'Tap', type: ControlType7.EventHandler, },
  sdLD5VDAC: { title: 'Tap 3', type: ControlType7.EventHandler, },
  r2umAjWSD: {
    __defaultAssetReference:
      'data:framer/asset-reference,99RtXyktG2D2JvpJnVP0rQGsoM.png?originalFilename=standby_monitor_moon_cool-2.png&preferredSize=auto',
    title: 'Image',
    type: ControlType7.ResponsiveImage,
  },
},);
addFonts7(Framerl_W8BgOBS, [
  {
    family: 'MS Sans Serif Bold Regular',
    moduleAsset: {
      localModuleIdentifier: 'local-module:canvasComponent/l_W8BgOBS:default',
      url: 'assets/6my2frs4IlLHM4WNJb6Zg6p0FTE.ttf',
    },
    url:
      new URL(
        'assets/6my2frs4IlLHM4WNJb6Zg6p0FTE.ttf',
        'https://framerusercontent.com/modules/rTfcwKloeyqH4RKg0pds/LzSlPYieWHDxfdzEtzML/l_W8BgOBS.js',
      ).href,
  },
  {
    family: 'MS Sans Serif Regular',
    moduleAsset: { localModuleIdentifier: 'local-module:canvasComponent/l_W8BgOBS:default', url: 'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf', },
    url:
      new URL(
        'assets/4OpQUGRwFzY2QKEOENBzPmC3E.ttf',
        'https://framerusercontent.com/modules/rTfcwKloeyqH4RKg0pds/LzSlPYieWHDxfdzEtzML/l_W8BgOBS.js',
      ).href,
  },
  ...IconCtaFonts,
  ...CreditsCtaFonts,
  ...TncPpCtaFonts,
  ...ReversedFonts,
  ...LoveFonts,
  ...fonts,
],);

// virtual:footer
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default7.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default7, ...props, },);
};
var footer_default = stdin_default7;
export { footer_default as default, };
