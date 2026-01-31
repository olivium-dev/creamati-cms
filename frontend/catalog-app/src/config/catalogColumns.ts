import type { CatalogColumnsConfig } from '../types/catalogColumns';

/**
 * Catalog column display config (stock/amount column).
 * Edit the object below to change visibility, header label, and width.
 * No JSON import here to avoid production/minification issues.
 */
export const catalogColumnsConfig: CatalogColumnsConfig = {
  amountPcs: {
    enabled: true,
    headerName: 'Amount (PCS)',
    width: 120,
  },
};
