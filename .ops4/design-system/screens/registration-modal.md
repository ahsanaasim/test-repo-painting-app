# Screen blueprint: Registration Modal

Route: `/auth/register`
Purpose: Allows user to register via email, Google, Facebook, or phone number.
Layout: **single-column-form**

## Required regions
- **header**: Branding, language/theme toggle, and close modal — components: LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton
- **main**: User registration form and social registration options — components: RegisterTitle, NameField, EmailField, PasswordField, ShowPasswordToggle, PhoneField, RegisterButton, DividerWithText, GoogleRegisterButton, FacebookRegisterButton, PhoneRegisterButton, LoginRedirectLink
- **footer**: Legal links and accessibility statement — components: TermsLink, PrivacyLink, AccessibilityStatement

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