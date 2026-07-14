# Screen blueprint: Seller Dashboard (Empty State)

Route: `/dashboard/seller`
Purpose: Handles case where there are no orders. Encourages seller to add paintings and provides guidance.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to account/settings. — components: LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu
- **main**: Communicate empty state, encourage next steps, and provide quick actions. — components: EmptyStateIllustration, EmptyStateMessage, AddPaintingButton, EmptyStateHelpLink
- **context-rail**: Provide contextual help, tips, and quick links for onboarding. — components: OnboardingChecklist, SupportContactCard

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