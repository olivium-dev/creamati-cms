import type { ActionButtonConfig } from '../types/actionButtons';

/**
 * Action buttons config (no JSON import — avoids "n[e] is not a function" in production).
 * Edit the object below to change which action buttons appear in the catalog.
 */
const defaultActionButtons: ActionButtonConfig[] = [
  {
    id: 'inventory',
    label: 'Manage Inventory',
    icon: 'Inventory',
    color: 'primary',
    enabled: true,
    type: 'inventory',
  },
];

export const actionButtonsConfig: { actionButtons: ActionButtonConfig[] } = {
  actionButtons: defaultActionButtons,
};
