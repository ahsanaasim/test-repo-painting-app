# Screen blueprint: Order Detail Drawer (Buyer)

Route: `/dashboard/buyer/order/:id`
Purpose: Shows detailed info for a specific order, with cancel/return request actions.
Layout: **master-detail**

## Required regions
- **header**: Displays order number, status, and quick actions — components: OrderNumberText, OrderStatusBadge, DownloadInvoiceButton
- **main**: Shows painting details, delivery info, payment summary, and action buttons — components: PaintingImage, PaintingTitle, PaintingShortDescription, PaintingSize, PaintingPrice, DeliveryAddressBlock, DeliveryFeeText, BuyerContactInfoBlock, PaymentMethodText, OrderTotalText, OrderDateText, CancelOrderButton, ReturnOrderButton
- **context-rail**: Shows order timeline, status history, and support contact — components: OrderTimelineStepper, OrderStatusHistoryList, SupportContactCard

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