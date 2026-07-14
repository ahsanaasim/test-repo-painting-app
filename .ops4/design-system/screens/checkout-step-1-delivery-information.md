# Screen blueprint: Checkout Step 1: Delivery Information

Route: `/checkout`
Purpose: Collects buyer name, address (Bangladesh only), phone number (with verification), and Dhaka/outside selection.
Layout: **single-column-form**

## Required regions
- **main**: Mobile-first checkout form for delivery information. — components: BuyerNameField, BuyerAddressField, DhakaOutsideToggle, AddressAutoComplete, BuyerPhoneNumberField, PhoneOTPTriggerButton, DeliveryChargeSummary, ContinueToPaymentButton
- **footer**: Legal, privacy, and support links. — components: TermsAndConditionsLink, PrivacyPolicyLink, SupportContactLink

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