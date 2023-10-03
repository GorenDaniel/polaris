import {size} from '../../size';
import type {Experimental} from '../../types';
import type {MetaTokenProperties} from '../types';
import {createVar as createVarName} from '../../utilities';

export type FontFamilyPrefix = 'font-family';
type FontFamilyAlias = 'sans' | 'mono';

type FontSizeScaleExperimental = Experimental<'70' | '80'>;

export type FontSizePrefix = 'font-size';
export type FontSizeScale =
  | '275'
  | '300'
  | '325'
  | '350'
  | '400'
  | '500'
  | '600'
  | '750'
  | '900'
  | '1000'
  | '75'
  | '100'
  | '200'
  | '700'
  | FontSizeScaleExperimental;

type FontLineHeightScaleExperimental = Experimental<'075'>;

export type FontLineHeightPrefix = 'font-line-height';
export type FontLineHeightScale =
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '1000'
  | '1200'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | FontLineHeightScaleExperimental;

export type FontLetterSpacingPrefix = 'font-letter-spacing';
export type FontLetterSpacingAlias = 'densest' | 'denser' | 'dense' | 'normal';

export type FontWeightPrefix = 'font-weight';
export type FontWeightAlias = 'regular' | 'medium' | 'semibold' | 'bold';

export type FontPrefix =
  | FontFamilyPrefix
  | FontLetterSpacingPrefix
  | FontLineHeightPrefix
  | FontSizePrefix
  | FontWeightPrefix;

export type FontTokenName =
  | `${FontFamilyPrefix}-${FontFamilyAlias}`
  | `${FontLetterSpacingPrefix}-${FontLetterSpacingAlias}`
  | `${FontLineHeightPrefix}-${FontLineHeightScale}`
  | `${FontSizePrefix}-${FontSizeScale}`
  | `${FontWeightPrefix}-${FontWeightAlias}`;

export type FontTokenGroup = {
  [TokenName in FontTokenName]: string;
};

export const font: {
  [TokenName in FontTokenName]: MetaTokenProperties;
} = {
  'font-family-sans': {
    value:
      "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  'font-family-mono': {
    value:
      "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
  },
  'font-size-275': {
    value: size[275],
  },
  'font-size-300': {
    value: size[300],
  },
  'font-size-325': {
    value: size[325],
  },
  'font-size-350': {
    value: size[350],
  },
  'font-size-400': {
    value: size[400],
  },
  'font-size-500': {
    value: size[500],
  },
  'font-size-600': {
    value: size[600],
  },
  'font-size-750': {
    value: size[750],
  },
  'font-size-900': {
    value: size[900],
  },
  'font-size-1000': {
    value: size[1000],
  },
  'font-size-70-experimental': {
    value: '11px',
  },
  'font-size-75': {
    value: '12px',
  },
  'font-size-80-experimental': {
    value: '13px',
  },
  'font-size-100': {
    value: '14px',
  },
  'font-size-200': {
    value: '16px',
  },
  'font-size-700': {
    value: '40px',
  },
  'font-weight-regular': {
    value: '450',
  },
  'font-weight-medium': {
    value: '550',
  },
  'font-weight-semibold': {
    value: '650',
  },
  'font-weight-bold': {
    value: '700',
  },
  'font-letter-spacing-densest': {
    value: '-0.54px',
  },
  'font-letter-spacing-denser': {
    value: '-0.3px',
  },
  'font-letter-spacing-dense': {
    value: '-0.2px',
  },
  'font-letter-spacing-normal': {
    value: '0px',
  },
  'font-line-height-300': {
    value: size[300],
  },
  'font-line-height-400': {
    value: size[400],
  },
  'font-line-height-500': {
    value: size[500],
  },
  'font-line-height-600': {
    value: size[600],
  },
  'font-line-height-700': {
    value: size[700],
  },
  'font-line-height-800': {
    value: size[800],
  },
  'font-line-height-1000': {
    value: size[1000],
  },
  'font-line-height-1200': {
    value: size[1200],
  },
  'font-line-height-075-experimental': {
    value: '12px',
  },
  'font-line-height-1': {
    value: '16px',
  },
  'font-line-height-2': {
    value: '20px',
  },
  'font-line-height-3': {
    value: '24px',
  },
  'font-line-height-4': {
    value: '28px',
  },
  'font-line-height-5': {
    value: '32px',
  },
  'font-line-height-6': {
    value: '40px',
  },
  'font-line-height-7': {
    value: '48px',
  },
};

export function createVar(fontTokenName: FontTokenName) {
  return `var(${createVarName(fontTokenName)})`;
}
