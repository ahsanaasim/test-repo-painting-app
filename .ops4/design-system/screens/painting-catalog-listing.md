# Screen blueprint: Painting Catalog Listing

Route: `/`
Purpose: Landing page for all users. Displays grid/list of available original paintings with filters, sorting, and search.
Layout: **two-column-main-rail**

## Required regions
- **header**: Persistent navigation, logo, language/theme switcher, and login/account controls. — components: Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu
- **filters**: Allow users to filter, sort, and search paintings. — components: SearchBar, SortDropdown, PriceRangeSlider, SizeMultiSelect, ClearFiltersButton
- **main**: Display grid/list of painting cards with image and key details. — components: PaintingCardGrid, PaginationControls

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