# Screen blueprint: Seller Dashboard (Loading)

Route: `/dashboard/seller`
Purpose: Displays skeleton loaders while orders are fetched.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to account/settings. — components: LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu
- **main**: Show skeleton loaders for order cards and dashboard metrics. — components: OrderListSkeleton, OrderMetricsSkeleton
- **context-rail**: Show skeletons for context panels. — components: ContextPanelSkeleton

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