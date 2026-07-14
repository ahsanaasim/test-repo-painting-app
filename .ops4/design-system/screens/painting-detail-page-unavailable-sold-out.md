# Screen blueprint: Painting Detail Page (Unavailable/Sold Out)

Route: `/painting/:id`
Purpose: Handles case where painting is no longer available.
Layout: **master-detail**

## Required regions
- **main**: Show painting details with sold out status and suggest alternatives — components: PaintingImageZoom, PaintingTitle, PaintingDescription, PaintingSize, PaintingPrice, DeliveryFeeDisplay, SoldOutBadge, BrowseOtherPaintingsButton
- **context-rail**: Show related paintings and additional info — components: RelatedPaintingsList, DeliveryInfoTooltip, LanguageToggle, ThemeToggle

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