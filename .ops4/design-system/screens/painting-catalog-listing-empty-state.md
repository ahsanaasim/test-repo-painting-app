# Screen blueprint: Painting Catalog Listing (Empty State)

Route: `/`
Purpose: Handles case where no paintings are available for sale.
Layout: **two-column-main-rail**

## Required regions
- **header**: Persistent navigation, logo, language/theme switcher, and login/account controls. — components: Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu
- **filters**: Allow users to filter, sort, and search paintings (even if none are available). — components: SearchBar, SortDropdown, PriceRangeSlider, SizeMultiSelect, ClearFiltersButton
- **main**: Display empty state illustration and message. Seller sees CTA to add new painting. — components: EmptyStateIllustration, EmptyStateMessage, AddNewPaintingButton (Seller Only)

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