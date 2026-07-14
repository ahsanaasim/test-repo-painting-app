# Screen blueprint: Painting Detail Page (Error)

Route: `/painting/:id`
Purpose: Handles API/network errors when loading painting details.
Layout: **two-column-main-rail**

## Required regions
- **main**: Displays error message and retry action. — components: ErrorIcon, ErrorMessage, RetryButton
- **context-rail**: Empty or minimal context; disables all painting actions.

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