# Screen blueprint: Painting Listing Management Drawer (Seller)

Route: `/dashboard/seller/paintings`
Purpose: Seller manages painting inventory (add/edit/remove).
Layout: **two-column-main-rail**

## Required regions
- **header**: Page title, add new painting action, and language/theme toggles. — components: PageTitle: 'My Paintings', AddPaintingButton, LanguageToggle, ThemeToggle
- **main**: List of all paintings with edit/remove actions. — components: PaintingListTable, EditPaintingAction, RemovePaintingAction
- **context-rail**: Quick painting preview and details when a row is selected. — components: PaintingPreviewCard, PaintingDetailsPanel

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