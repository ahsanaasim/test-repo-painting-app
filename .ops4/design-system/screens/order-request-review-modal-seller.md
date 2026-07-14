# Screen blueprint: Order Request Review Modal (Seller)

Route: `/dashboard/seller/order/:id/request-review`
Purpose: Seller reviews and approves/rejects cancellation/return requests.
Layout: **single-column-form**

## Required regions
- **header**: Request summary and close action — components: RequestTypeBadge, CloseModalButton
- **main**: Shows request details, reason, supporting info, and approve/reject actions — components: RequestReasonText, SupportingInfoAttachment, BuyerMessage, OrderSummaryCard, ApproveButton, RejectButton

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