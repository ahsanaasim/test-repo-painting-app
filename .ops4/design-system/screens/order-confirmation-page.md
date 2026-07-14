# Screen blueprint: Order Confirmation Page

Route: `/checkout/confirmation`
Purpose: Displays order confirmation, painting details, delivery info, fee, total, and download invoice option.
Layout: **two-column-main-rail**

## Required regions
- **main**: Shows order confirmation, painting summary, delivery details, and invoice download. — components: OrderConfirmationBanner, OrderSummaryCard, PaintingDetailsCard, DeliveryDetailsCard, DownloadInvoiceButton, OrderStatusBadge
- **context-rail**: Provides next steps, feedback prompt, and support contact. — components: FeedbackPrompt, SupportContactLink, OrderTrackingLink

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