/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DeckdeckgoBarChartData,
  DeckdeckgoBarChartDataValue,
} from '@deckdeckgo/types';

export namespace Components {
  interface DeckgoBarChart {
    'animation': boolean;
    'animationDuration': number;
    'customLoader': boolean;
    'data': DeckdeckgoBarChartData[];
    'draw': (width?: number, height?: number) => Promise<void>;
    'height': number;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'next': () => Promise<void>;
    'postCustomLoad': (content: string) => Promise<void>;
    'prev': () => Promise<void>;
    'separator': string;
    'src': string;
    'updateCurrentBar': (values: DeckdeckgoBarChartDataValue[]) => Promise<void>;
    'width': number;
    'yAxis': boolean;
  }
  interface DeckgoLineChart {
    'animation': boolean;
    'animationDuration': number;
    'area': boolean;
    'customLoader': boolean;
    'datePattern': string;
    'draw': (width?: number, height?: number) => Promise<void>;
    'grid': boolean;
    'height': number;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'next': () => Promise<void>;
    'postCustomLoad': (content: string) => Promise<void>;
    'prev': () => Promise<void>;
    'separator': string;
    'smooth': boolean;
    'src': string;
    'ticks': number;
    'width': number;
    'yAxisDomain': string;
  }
  interface DeckgoPieChart {
    'animation': boolean;
    'animationDuration': number;
    'customLoader': boolean;
    'draw': (width?: number, height?: number) => Promise<void>;
    'height': number;
    'innerRadius': number;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'next': () => Promise<void>;
    'postCustomLoad': (content: string) => Promise<void>;
    'prev': () => Promise<void>;
    'separator': string;
    'src': string;
    'width': number;
  }
}

declare global {


  interface HTMLDeckgoBarChartElement extends Components.DeckgoBarChart, HTMLStencilElement {}
  var HTMLDeckgoBarChartElement: {
    prototype: HTMLDeckgoBarChartElement;
    new (): HTMLDeckgoBarChartElement;
  };

  interface HTMLDeckgoLineChartElement extends Components.DeckgoLineChart, HTMLStencilElement {}
  var HTMLDeckgoLineChartElement: {
    prototype: HTMLDeckgoLineChartElement;
    new (): HTMLDeckgoLineChartElement;
  };

  interface HTMLDeckgoPieChartElement extends Components.DeckgoPieChart, HTMLStencilElement {}
  var HTMLDeckgoPieChartElement: {
    prototype: HTMLDeckgoPieChartElement;
    new (): HTMLDeckgoPieChartElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-bar-chart': HTMLDeckgoBarChartElement;
    'deckgo-line-chart': HTMLDeckgoLineChartElement;
    'deckgo-pie-chart': HTMLDeckgoPieChartElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoBarChart {
    'animation'?: boolean;
    'animationDuration'?: number;
    'customLoader'?: boolean;
    'data'?: DeckdeckgoBarChartData[];
    'height'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'onChartCustomLoad'?: (event: CustomEvent<string>) => void;
    'separator'?: string;
    'src'?: string;
    'width'?: number;
    'yAxis'?: boolean;
  }
  interface DeckgoLineChart {
    'animation'?: boolean;
    'animationDuration'?: number;
    'area'?: boolean;
    'customLoader'?: boolean;
    'datePattern'?: string;
    'grid'?: boolean;
    'height'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'onChartCustomLoad'?: (event: CustomEvent<string>) => void;
    'separator'?: string;
    'smooth'?: boolean;
    'src'?: string;
    'ticks'?: number;
    'width'?: number;
    'yAxisDomain'?: string;
  }
  interface DeckgoPieChart {
    'animation'?: boolean;
    'animationDuration'?: number;
    'customLoader'?: boolean;
    'height'?: number;
    'innerRadius'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'onChartCustomLoad'?: (event: CustomEvent<string>) => void;
    'separator'?: string;
    'src'?: string;
    'width'?: number;
  }

  interface IntrinsicElements {
    'deckgo-bar-chart': DeckgoBarChart;
    'deckgo-line-chart': DeckgoLineChart;
    'deckgo-pie-chart': DeckgoPieChart;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'deckgo-bar-chart': LocalJSX.DeckgoBarChart & JSXBase.HTMLAttributes<HTMLDeckgoBarChartElement>;
      'deckgo-line-chart': LocalJSX.DeckgoLineChart & JSXBase.HTMLAttributes<HTMLDeckgoLineChartElement>;
      'deckgo-pie-chart': LocalJSX.DeckgoPieChart & JSXBase.HTMLAttributes<HTMLDeckgoPieChartElement>;
    }
  }
}


