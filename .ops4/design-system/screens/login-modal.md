# Screen blueprint: Login Modal

Route: `/auth/login`
Purpose: Allows user to log in via email, Google, Facebook, or phone number.
Layout: **single-column-form**

## Required regions
- **header**: Branding, language/theme toggle, and close modal — components: LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton
- **main**: User login form and social login options — components: LoginTitle, EmailField, PasswordField, ShowPasswordToggle, ForgotPasswordLink, LoginButton, DividerWithText, GoogleLoginButton, FacebookLoginButton, PhoneLoginButton, RegisterRedirectLink
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