# Screen blueprint: Remove Painting Confirmation Modal (Seller)

Route: `/dashboard/seller/paintings/:id/remove`
Purpose: Seller confirms removal of a painting.
Layout: **single-column-form**

## Required regions
- **main**: Display confirmation message, painting summary, and removal actions. — components: PaintingThumbnail, PaintingTitle, PaintingShortDescription, PaintingPrice, PaintingSize, RemoveConfirmationText, UndoRemovalBadge, RemoveButton, CancelButton, ErrorMessage, LoadingSpinner

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