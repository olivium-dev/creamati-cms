# Catalog config

**Stock / Amount (PCS) column** and **action buttons** are configured **inlined** in `ItemList.tsx` (at the top of the file) to avoid production Module Federation errors.

- **`CATALOG_COLUMNS_CONFIG.amountPcs`** — `enabled`, `headerName`, `width` for the Amount (PCS) column.
- **`ACTION_BUTTONS_CONFIG.actionButtons`** — Array of action buttons (e.g. "Manage Inventory").

Edit those constants in `catalog-app/src/components/ItemList.tsx`. The files in this folder (`catalogColumns.ts`, `actionButtons.ts`) are kept for reference only; the app does not import them at runtime.
