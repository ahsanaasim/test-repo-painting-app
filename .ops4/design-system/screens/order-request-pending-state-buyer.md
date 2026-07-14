# Screen blueprint: Order Request Pending State (Buyer)

Route: `/dashboard/buyer/order/:id`
Purpose: Shows that cancellation/return request is under review.
Layout: **master-detail**

## Required regions
- **header**: Displays order summary and status — components: OrderNumber, OrderStatusBadge, OrderDate, PaintingThumbnail, PaintingTitle
- **main**: Shows order details and disables further actions while request is pending — components: OrderDetailsPanel, BuyerInfoCard, DeliveryInfoCard, PaymentInfoCard, RequestPendingBadge, RequestTypeLabel, RequestSubmittedDate, RequestReasonText, RequestSupportingDocsList, RequestStatusTimeline, DisabledActionsTooltip
- **context-rail**: Shows related actions and order history (disabled in pending state) — components: OrderHistoryTimeline, DownloadInvoiceButton (disabled), RequestCancellationButton (disabled), RequestReturnButton (disabled)

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