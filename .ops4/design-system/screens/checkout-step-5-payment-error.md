# Screen blueprint: Checkout Step 5: Payment Error

Route: `/checkout`
Purpose: Displays payment failure message and retry option.
Layout: **two-column-main-rail**

## Required regions
- **main**: Shows payment error details, summary of attempted order, and retry/change payment method actions. — components: PaymentErrorAlert, OrderSummaryCard, BuyerDetailsCard, RetryPaymentButton, ChangePaymentMethodButton
- **context-rail**: Provides contextual help, payment method info, and support contact. — components: PaymentMethodList, SupportContactLink, FAQLink

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