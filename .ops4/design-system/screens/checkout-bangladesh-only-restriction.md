# Screen blueprint: Checkout: Bangladesh-Only Restriction

Route: `/checkout`
Purpose: Prevents checkout if address is outside Bangladesh.
Layout: **single-column-form**

## Required regions
- **main**: Shows restriction message and disables continue. — components: BangladeshRestrictionAlert, BuyerDetailsCard, DisabledContinueButton

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