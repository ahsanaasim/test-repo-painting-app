# Screen blueprint: Phone Number Verification (OTP) Modal

Route: `/auth/verify-phone`
Purpose: Collects and verifies OTP sent to phone number.
Layout: **single-column-form**

## Required regions
- **header**: Branding, language/theme toggle, and close modal — components: LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton
- **main**: OTP entry and verification actions — components: OTPTitle, PhoneNumberDisplay, OTPField, OTPSubmitButton, ResendOTPButton, OTPTimer, OTPErrorMessage, ChangePhoneLink

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