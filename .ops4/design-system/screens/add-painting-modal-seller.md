# Screen blueprint: Add Painting Modal (Seller)

Route: `/dashboard/seller/paintings/add`
Purpose: Seller adds a new painting with image upload, title, description, price, and size.
Layout: **single-column-form**

## Required regions
- **main**: Form for entering painting details and uploading image. — components: PaintingImageUpload, PaintingImagePreview, TitleField, ShortDescriptionField, PriceField, SizeField, SaveButton, CancelButton, FormValidationMessage, LanguageToggle, ThemeToggle

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