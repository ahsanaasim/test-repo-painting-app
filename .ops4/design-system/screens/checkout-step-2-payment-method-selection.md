# Screen blueprint: Checkout Step 2: Payment Method Selection

Route: `/checkout`
Purpose: Buyer selects payment method: cash on delivery (with card), Bcash, mobile wallet, or SSL Commerce.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display payment method options and allow selection; show delivery summary for context. — components: PaymentMethodList, PaymentMethodOptionCard, PaymentMethodDescriptionTooltip, PaymentMethodIcon, ContinueButton, BackButton, DeliverySummaryCard
- **context-rail**: Show buyer and delivery details for confirmation and editing if needed. — components: BuyerSummaryCard, EditDeliveryInfoAction, DeliveryChargeDisplay

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