import {MetadataProperties} from '@shopify/polaris-tokens';
import {Icon} from '@shopify/polaris-icons/metadata';

export interface TokenPropertiesWithName extends MetadataProperties {
  name: string;
}

export const searchResultCategories = [
  'foundations',
  'components',
  'patterns',
  'tokens',
  'icons',
] as const;

export type SearchResultCategory = typeof searchResultCategories[number];

export interface SearchResult {
  id: string;
  category: SearchResultCategory;
  url: string;
  score: number;
  meta: Partial<{
    components: {
      title: string;
      description: string;
      status?: Status;
      group?: string;
    };
    patterns: {
      title: string;
      description: string;
      previewImg?: string;
    };
    foundations: {
      title: string;
      description: string;
      icon: string;
      category: string;
    };
    tokens: {
      category: string;
      token: TokenPropertiesWithName;
    };
    icons: {icon: Icon};
  }>;
}

export type SearchResults = SearchResult[];

export type GroupedSearchResults = {
  category: SearchResultCategory;
  results: SearchResult[];
}[];

export interface SearchResultItem {
  searchResultData?: {
    isHighlighted: boolean;
    tabIndex: -1;
    itemAttributes: {
      id: string;
      'data-is-active-descendant': boolean;
    };
    url: string;
  };
}

export enum Breakpoints {
  Mobile = 500,
  Tablet = 768,
  Desktop = 1400,
  DesktopLarge = 1600,
}

export enum StatusName {
  New = 'New',
  Deprecated = 'Deprecated',
  Alpha = 'Alpha',
  Beta = 'Beta',
  Information = 'Information',
  Legacy = 'Legacy',
  Warning = 'Warning',
}

export type Status = {
  value: StatusName;
  message: string;
};

export interface QuickGuideRow {
  question: string;
  answer: string;
}

export interface QuickGuide {
  title: string;
  queryParam: string;
  rows: QuickGuideRow[];
}

export type AllTypes = {
  [typeName: string]: {
    [filePath: string]: Type;
  };
};

export type FilteredTypes = {
  [typeName: string]: Type;
};

export type Type = {
  filePath: string;
  name: string;
  value: string | number | object;
  syntaxKind?: string;
  description?: string;
  isOptional?: true;
  deprecationMessage?: string;
  defaultValue?: string;
  members?: Type[];
};

export interface NavJSON {
  children?: {
    [key: string]: NavItem;
  };
}

export interface NavItem {
  title?: string;
  description?: string;
  slug?: string;
  order?: number;
  icon?: string;
  color?: string;
  hideChildren?: false;
  newSection?: true;
  status?: Status;
  children?: NavJSON;
  expanded?: boolean;
  hideFromNav?: boolean;
}
