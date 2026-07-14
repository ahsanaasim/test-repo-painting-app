# Screen blueprint: Order Detail Drawer (Seller)

Route: `/dashboard/seller/order/:id`
Purpose: Shows detailed info for a specific order, with actions to mark as shipped or review requests.
Layout: **master-detail**

## Required regions
- **header**: Order summary and quick status recognition — components: OrderIdBadge, OrderStatusBadge, OrderDate, CloseDrawerButton
- **main**: Displays painting, buyer, delivery, payment, and order actions — components: PaintingImageCard, PaintingTitle, PaintingShortDescription, PaintingSize, PaintingPrice, DeliveryFee, TotalAmount, BuyerInfoCard, DeliveryAddress, BuyerPhone, BuyerEmail, PaymentMethodBadge, OrderNotes, OrderTimeline, MarkAsShippedButton, ReviewRequestButton, DownloadInvoiceButton
- **context-rail**: Shows order activity, cancellation/return requests, and delivery partner info — components: OrderActivityTimeline, CancellationOrReturnRequestCard, DeliveryPartnerInfoCard

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