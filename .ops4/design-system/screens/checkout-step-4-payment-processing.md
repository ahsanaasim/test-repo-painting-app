# Screen blueprint: Checkout Step 4: Payment Processing

Route: `/checkout`
Purpose: Handles payment processing/loading state for digital payments.
Layout: **single-column-form**

## Required regions
- **main**: Show payment processing spinner, status, and handle errors/timeouts. — components: ProcessingSpinner, ProcessingStatusText, TimeoutWarning, BackButton, RetryButton

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