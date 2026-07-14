# Screen blueprint: Seller Dashboard (Pending & Shipped Orders)

Route: `/dashboard/seller`
Purpose: Seller views all orders, filtered by pending/shipped, and manages painting listings.
Layout: **dashboard-grid**

## Required regions
- **header**: Dashboard title, quick stats, and add painting action — components: DashboardTitle, PendingOrdersMetric, ShippedOrdersMetric, AddPaintingButton, LanguageToggle, ThemeToggle
- **filters**: Filter orders by status, date, payment method, and search — components: OrderStatusTab, OrderDateRangeFilter, PaymentMethodFilter, OrderSearchInput
- **main**: Displays order cards in grid/list, each with buyer, painting, delivery, payment, and actions — components: OrderCardList, OrderCard, OrderCardActions, OrderCardStatusBadge, OrderCardBuyerInfo, OrderCardPaintingInfo, OrderCardDeliveryInfo, OrderCardPaymentInfo, OrderCardTimeline, OrderCardNotificationBadge
- **context-rail**: Shows painting management and quick links — components: PaintingListPanel, EditPaintingButton, RemovePaintingButton, PaintingUploadButton

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