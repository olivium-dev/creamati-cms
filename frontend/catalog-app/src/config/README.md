# Catalog config

**Stock / Amount (PCS) column** is configurable via `catalogColumns.ts`.

- **`amountPcs.enabled`** — `true` to show the column, `false` to hide it.
- **`amountPcs.headerName`** — Column header (e.g. "Amount (PCS)" or "Stock").
- **`amountPcs.width`** — Column width in pixels.

Edit the exported object in `catalogColumns.ts`. (Do not import JSON here; use the TS file for production stability.)

**Action buttons** (e.g. "Manage Inventory") are configured in `actionButtons.ts` — edit the array to enable/disable or add buttons.
