# Screen blueprint: Order Request Result Modal (Buyer)

Route: `/dashboard/buyer/order/:id/request-result`
Purpose: Notifies buyer of cancellation/return request outcome.
Layout: **single-column-form**

## Required regions
- **main**: Shows request result, next steps, and close action — components: ResultStatusIcon, ResultStatusLabel, ResultSummaryText, RequestTypeLabel, RequestSubmittedDate, RequestReasonText, AdminDecisionNote, NextStepsPanel, CloseButton

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