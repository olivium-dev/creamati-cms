import type { CatalogColumnsConfig } from '../types/catalogColumns';

// Import JSON - bundlers may expose as default or as the object itself
import rawCatalogColumns from './catalogColumns.json';

const raw = rawCatalogColumns as CatalogColumnsConfig | { default: CatalogColumnsConfig };
export const catalogColumnsConfig: CatalogColumnsConfig =
  raw && typeof (raw as { default?: CatalogColumnsConfig }).default === 'object'
    ? (raw as { default: CatalogColumnsConfig }).default
    : (raw as CatalogColumnsConfig);
