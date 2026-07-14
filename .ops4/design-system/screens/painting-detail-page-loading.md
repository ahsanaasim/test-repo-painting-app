# Screen blueprint: Painting Detail Page (Loading)

Route: `/painting/:id`
Purpose: Displays skeleton loaders while painting details are fetched.
Layout: **two-column-main-rail**

## Required regions
- **main**: Primary painting detail content area with skeletons for all painting attributes. — components: PaintingImageSkeleton, PaintingTitleSkeleton, PaintingDescriptionSkeleton, PaintingPriceSkeleton, PaintingSizeSkeleton, PaintingDeliveryInfoSkeleton
- **context-rail**: Contextual actions and painting meta skeletons (e.g., Buy Now/Add to Cart, share, delivery charge). — components: BuyNowButtonSkeleton, AddToCartButtonSkeleton, DeliveryChargeSkeleton, ShareButtonSkeleton

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