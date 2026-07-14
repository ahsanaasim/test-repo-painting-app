# Screen blueprint: Buyer Dashboard / Order History (Empty State)

Route: `/dashboard/buyer`
Purpose: Handles case where buyer has no orders.
Layout: **dashboard-grid**

## Required regions
- **header**: Displays dashboard title and navigation context. — components: LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu
- **main**: Communicates empty state and encourages browsing catalog. — components: EmptyStateIllustration, EmptyStateMessage, BrowseCatalogCTA

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