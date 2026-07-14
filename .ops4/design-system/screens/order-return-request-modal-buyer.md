# Screen blueprint: Order Return Request Modal (Buyer)

Route: `/dashboard/buyer/order/:id/return`
Purpose: Buyer submits return request with reason and optional details.
Layout: **single-column-form**

## Required regions
- **main**: Form for submitting return request — components: ReturnReasonDropdown, ReturnDetailsTextarea, SubmitReturnButton, CancelButton

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