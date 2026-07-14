# Screen blueprint: Phone Number Verification (OTP) Modal (Error)

Route: `/auth/verify-phone`
Purpose: Handles invalid OTP, expired code, or network error.
Layout: **single-column-form**

## Required regions
- **main**: Display OTP error message, allow retry and resend actions, and show phone number context. — components: PhoneNumberDisplay, OTPInputField, ErrorMessageBanner, RetryButton, ResendOTPButton, BackToCheckoutButton

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