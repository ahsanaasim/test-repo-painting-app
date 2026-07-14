# Screen blueprint: Seller Dashboard (Error)

Route: `/dashboard/seller`
Purpose: Handles API/network errors when loading orders.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to account/settings. — components: LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu
- **main**: Show error message and retry action. — components: ErrorStateIllustration, ErrorMessage, RetryButton
- **context-rail**: Provide support contact and troubleshooting tips. — components: SupportContactCard, TroubleshootingTips

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