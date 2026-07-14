# Screen blueprint: Order Cancellation Request Modal (Buyer)

Route: `/dashboard/buyer/order/:id/cancel`
Purpose: Buyer submits cancellation request with reason and optional details.
Layout: **single-column-form**

## Required regions
- **main**: Form for submitting cancellation request — components: CancellationReasonDropdown, CancellationDetailsTextarea, SubmitCancellationButton, CancelButton

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