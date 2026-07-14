# Screen blueprint: Buyer Dashboard / Order History

Route: `/dashboard/buyer`
Purpose: Shows registered buyer's order history, status (pending, shipped), and actions (cancel/return).
Layout: **list-detail**

## Required regions
- **header**: Dashboard title, user greeting, and quick actions. — components: DashboardTitle, UserGreeting, LanguageToggle, ThemeToggle
- **filters**: Filter orders by status, date, or search by painting title. — components: OrderStatusFilter, DateRangeFilter, SearchBar
- **main**: Display list of orders with painting, delivery, status, and actions. — components: OrderList, OrderCard, OrderStatusBadge, OrderActionsMenu
- **context-rail**: Show selected order details, actions, and invoice download. — components: OrderDetailPanel, PaintingImage, OrderSummary, DeliveryInfo, CancelOrderButton, ReturnRequestButton, DownloadInvoiceButton

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