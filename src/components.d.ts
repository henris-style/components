/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HenrisButton {}
  interface HenrisInputText {
    'label': string;
  }
}

declare global {


  interface HTMLHenrisButtonElement extends Components.HenrisButton, HTMLStencilElement {}
  var HTMLHenrisButtonElement: {
    prototype: HTMLHenrisButtonElement;
    new (): HTMLHenrisButtonElement;
  };

  interface HTMLHenrisInputTextElement extends Components.HenrisInputText, HTMLStencilElement {}
  var HTMLHenrisInputTextElement: {
    prototype: HTMLHenrisInputTextElement;
    new (): HTMLHenrisInputTextElement;
  };
  interface HTMLElementTagNameMap {
    'henris-button': HTMLHenrisButtonElement;
    'henris-input-text': HTMLHenrisInputTextElement;
  }
}

declare namespace LocalJSX {
  interface HenrisButton {}
  interface HenrisInputText {
    'label'?: string;
  }

  interface IntrinsicElements {
    'henris-button': HenrisButton;
    'henris-input-text': HenrisInputText;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'henris-button': LocalJSX.HenrisButton & JSXBase.HTMLAttributes<HTMLHenrisButtonElement>;
      'henris-input-text': LocalJSX.HenrisInputText & JSXBase.HTMLAttributes<HTMLHenrisInputTextElement>;
    }
  }
}


