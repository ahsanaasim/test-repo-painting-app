# Screen blueprint: Mark Order as Shipped Modal (Seller)

Route: `/dashboard/seller/order/:id/mark-shipped`
Purpose: Seller confirms marking order as shipped.
Layout: **single-column-form**

## Required regions
- **main**: Confirmation and undo for marking order as shipped — components: ConfirmationMessage, OrderSummaryCard, DeliveryPartnerDropdown, ConfirmMarkShippedButton, UndoButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).