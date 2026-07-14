# Screen blueprint: Guest Checkout Modal

Route: `/auth/guest-checkout`
Purpose: Allows buyers to proceed without account creation, collecting required info.
Layout: **single-column-form**

## Required regions
- **main**: Collect guest buyer's required information for checkout and trigger phone verification. — components: NameField, PhoneNumberField, AddressField, CityDropdown, DistrictDropdown, DeliveryAreaToggle, LanguageToggle, ProceedToOTPButton, CancelButton

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