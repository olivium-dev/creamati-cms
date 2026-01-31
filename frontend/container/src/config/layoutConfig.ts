import type { LayoutConfig } from '../types/layoutConfig';

import rawLayoutConfig from './layoutConfig.json';

const defaultLayoutConfig: LayoutConfig = {
  navbar: { title: 'Creamat CMS' },
  footer: { text: '© 2025 Creamat CMS. Built with React + MUI.' },
};

const raw = rawLayoutConfig as LayoutConfig | { default: LayoutConfig };
const loaded: LayoutConfig | null =
  raw && typeof (raw as { default?: LayoutConfig }).default === 'object'
    ? (raw as { default: LayoutConfig }).default
    : raw && typeof (raw as LayoutConfig).navbar === 'object'
      ? (raw as LayoutConfig)
      : null;

export const layoutConfig: LayoutConfig = loaded ?? defaultLayoutConfig;
