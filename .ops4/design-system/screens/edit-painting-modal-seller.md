# Screen blueprint: Edit Painting Modal (Seller)

Route: `/dashboard/seller/paintings/:id/edit`
Purpose: Seller edits painting details.
Layout: **single-column-form**

## Required regions
- **main**: Form for editing painting details and re-uploading image. — components: PaintingImageUpload, PaintingImagePreview, TitleField, ShortDescriptionField, PriceField, SizeField, SaveButton, CancelButton, FormValidationMessage, LanguageToggle, ThemeToggle

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