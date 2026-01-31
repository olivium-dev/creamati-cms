import type { LayoutConfig } from '../types/layoutConfig';

import rawLayoutConfig from './layoutConfig.json';

const raw = rawLayoutConfig as LayoutConfig | { default: LayoutConfig };
export const layoutConfig: LayoutConfig =
  raw && typeof (raw as { default?: LayoutConfig }).default === 'object'
    ? (raw as { default: LayoutConfig }).default
    : (raw as LayoutConfig);
