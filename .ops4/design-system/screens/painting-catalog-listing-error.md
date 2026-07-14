# Screen blueprint: Painting Catalog Listing (Error)

Route: `/`
Purpose: Handles API/network errors when loading paintings.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and language/theme toggles — components: Logo, NavigationMenu, LanguageToggle, ThemeToggle
- **main**: Displays error state, fallback illustration, and retry action — components: ErrorIllustration, ErrorMessage, RetryButton

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