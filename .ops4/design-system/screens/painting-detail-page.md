# Screen blueprint: Painting Detail Page

Route: `/painting/:id`
Purpose: Displays all details for a selected painting, including high-res images, title, description, price, size, delivery fee, and purchase actions.
Layout: **master-detail**

## Required regions
- **main**: Showcase painting image, details, and purchase actions — components: PaintingImageZoom, PaintingTitle, PaintingDescription, PaintingSize, PaintingPrice, DeliveryFeeDisplay, BuyNowButton, AddToCartButton, SoldOutBadge
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