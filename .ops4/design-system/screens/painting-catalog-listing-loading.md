# Screen blueprint: Painting Catalog Listing (Loading)

Route: `/`
Purpose: Displays skeleton loaders while paintings are fetched.
Layout: **two-column-main-rail**

## Required regions
- **header**: Persistent navigation, logo, language/theme switcher, and login/account controls. — components: Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu
- **filters**: Show skeleton loaders for filters and search controls. — components: SearchBarSkeleton, SortDropdownSkeleton, PriceRangeSliderSkeleton, SizeMultiSelectSkeleton
- **main**: Show skeleton loaders for painting cards. — components: PaintingCardSkeletonGrid

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