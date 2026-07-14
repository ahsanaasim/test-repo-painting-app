# Screen blueprint: Checkout Step 3: Order Review & Confirmation

Route: `/checkout`
Purpose: Buyer reviews painting details, delivery address, delivery fee, payment method, and total cost before confirming.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display all order details for review and allow confirmation. — components: PaintingSummaryCard, DeliverySummaryCard, PaymentMethodSummaryCard, OrderTotalDisplay, EditSectionAction, ConfirmOrderButton, BackButton
- **context-rail**: Show buyer info and allow editing if needed. — components: BuyerSummaryCard, EditBuyerInfoAction

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