# AI Build Task

## Objective
Build a full-featured, production-grade preview of the Art App using the locked 'Catalog Browse' design system and layouts as specified in the Design Brain prompt. All screens, flows, and UI states must match the detailed requirements, including multi-region layouts, responsive design, and all specified components and variants.

## Context
## screen:approved
- id=171f7b9a-aea4-4f31-8991-bd8f0f6dda57 title="Painting Listing Page" confidence=0.80 description="A screen is needed to display paintings for sale."
- id=d9ef1a6d-5a49-4994-af4e-a099fb1fcb4b title="Painting Detail Page" confidence=0.80 description="Each painting will need a detail view for buyers."
- id=4a23d0af-bc87-4a4e-9f8e-daa0ee95bfde title="Checkout / Purchase Flow" confidence=0.80 description="A flow is needed for buyers to purchase paintings."
- id=cc5f4b2b-4247-4ed6-b45c-b6adccfcdef8 title="Seller Dashboard" confidence=0.95 description="Client confirmed desire for a dashboard with order status tracking."
- id=8dd49e55-a7d2-4ca7-a333-2aba8b2d363e title="Order Status Dashboard (Pending & Shipped)" confidence=0.95 description="Client wants to see only pending and shipped orders in the dashboard."
## decision:approved
- id=aed70f20-77bf-4f4e-ba78-7576cb155416 title="Platform: Web Application" confidence=1.00 description="Client explicitly stated web application."
## business_rule:approved
- id=02caf696-d940-4559-8601-c403692a4e6f title="Multiple Payment Methods" confidence=0.95 description="Client wants to support cash on delivery, card, Bcash, all mobile wallets, and digital payments."
- id=12ca373c-a5d4-45a5-9f1d-19242cc2ec7a title="Guest Checkout and Account Creation" confidence=0.95 description="Buyers can check out as guests or create accounts."
- id=94f8d5eb-6ef2-429e-b270-89bee3758ac2 title="Shipping via Delivery Partners" confidence=0.95 description="Client will not handle shipping; will use delivery partners."
- id=8baf3b71-81ad-49b0-a3c0-181f14424493 title="Delivery Charge Applies" confidence=0.95 description="Client clarified there is a delivery charge, but no packaging fee."
- id=11259db0-6db9-47db-95d5-579a73aec59c title="Delivery Fee by Location" confidence=0.98 description="Client specified fixed delivery fees: 100 taka inside Dhaka, 200 taka outside Dhaka."
- id=4788de6f-a03f-419f-b9ec-e05eb5381c26 title="Multi-language Support (Bangla & English)" confidence=0.98 description="App should support both Bangla and English."
- id=89caebdf-edea-46c3-8825-71e5b15bc9ee title="Phone Number Verification Required" confidence=0.90 description="Client emphasized phone number verification is important."
- id=89b7ed25-0e75-4601-8884-1be628e7c310 title="Delegation to PM for Painting Details and Dashboard UX" confidence=0.98 description="Client delegated decisions on painting details and dashboard UX to PM expertise."
- id=04727450-0e3c-4d90-9e50-bf1096b14045 title="Restrict Orders to Bangladesh" confidence=0.98 description="Client explicitly stated orders should only be accepted from buyers inside Bangladesh."
- id=de5ff175-065b-47fb-b336-c6a12125d3ba title="Local Payment Gateway (SSL Commerce)" confidence=0.95 description="Stripe is not available in Bangladesh; client wants local payment vendors."
- id=939d6597-4b66-4331-a250-020a832c5639 title="Preferred Color Scheme: Purple and White" confidence=0.95 description="Client explicitly stated preference for purple and white as the main colors for the app's design."
## data_object:approved
- id=4356b34c-7301-488b-9310-1082d5ef626a title="Buyer Name" confidence=0.95 description="Required for delivery and order processing."
- id=438cc20c-d67c-4273-bde4-b97d645c0ed0 title="Buyer Address" confidence=0.95 description="Required for delivery."
- id=10e7f835-3b91-498e-8037-d75f07ed49a7 title="Buyer Phone Number" confidence=0.95 description="Required for delivery and contact."
- id=8c5e642d-3b85-4305-9219-aa08a0ee6002 title="Painting Title" confidence=0.95 description="Core field for listing a painting."
- id=f0e91315-47d9-4997-84ec-5f11067497f1 title="Painting Short Description" confidence=0.95 description="Core field for listing a painting."
- id=4fd4c8ac-081d-4f34-a980-55d75eef3b2f title="Painting Price" confidence=0.95 description="Core field for listing a painting."
- id=eda0c5c3-785e-492d-a9c9-70dd38d89435 title="Painting Size" confidence=0.95 description="Core field for listing a painting."
- id=b54b7e24-008f-4c53-8ae5-d12f8dce59ff title="Delivery Charge" confidence=0.95 description="Delivery charge needs to be shown/calculated at checkout."
- id=846187a3-62f7-426c-bd3d-8ab697934666 title="Painting Image" confidence=0.98 description="Client confirmed image upload is essential for listing paintings."
## feature:approved
- id=53b7bc4d-b81e-48d0-8778-2b0ce3bfe756 title="Order Notifications (Email, In-App, SMS)" confidence=0.95 description="Client wants notifications via email, in-app, and SMS for new orders."
- id=25d7b1d6-4b0f-4c49-af86-259c8453c9dc title="Multi-Method Account Creation" confidence=0.95 description="Users can create accounts via email, Google, Facebook, or phone number."
- id=560ab8f9-5e08-4d36-aa67-5d2514ccaf87 title="Order Cancellation and Returns (Manual Review)" confidence=0.98 description="Client confirmed that all cancellation and return requests must be reviewed and approved before processing."
- id=2124cd1a-d143-4907-ac0e-1b74ea81ff08 title="Responsive Web Design (Mobile-First)" confidence=0.98 description="Client explicitly reaffirmed mobile responsiveness as critical, with most users on mobile."
- id=0cb1ec1b-8ea4-4a35-b627-8b724cc167b3 title="Sell Paintings Online" confidence=0.98 description="Client clarified that only real paintings (not prints) are sold, and only to buyers inside Bangladesh."
- id=ca447753-badb-4a7d-a031-1e043bf18243 title="Dark Mode and Light Mode Support" confidence=0.98 description="Client requested both dark and light mode options for the UI."
- id=9b23c614-7b4d-43cd-9980-0ecea030b8fb title="Modern Look and Feel" confidence=0.95 description="Client requested a modern look for the UI."
- id=272f4c57-34a4-48ad-937f-5d5da574d7de title="Logo Recommendation" confidence=0.90 description="Client does not have a logo and requested a suggestion."
## user_role:approved
- id=61844bd4-9de0-4229-8b36-1e683b6c701c title="Corporate Buyer (Office/Hotel)" confidence=0.90 description="Organizations (offices, hotels) purchasing real paintings for display"

## Existing Design Rules
Variation: Catalog Browse
Mobile-first, catalog-centric layout with persistent sidebar navigation, top bar for quick actions, and main content focused on painting discovery, detail, and transaction flows.
Screens: Painting Catalog Listing, Painting Catalog Listing (Empty State), Painting Catalog Listing (Loading), Painting Catalog Listing (Error), Painting Detail Page, Painting Detail Page (Unavailable/Sold Out), Painting Detail Page (Loading), Painting Detail Page (Error), Checkout Step 1: Delivery Information, Checkout Step 2: Payment Method Selection, Checkout Step 3: Order Review & Confirmation, Checkout Step 4: Payment Processing, Checkout Step 5: Payment Error, Order Confirmation Page, Checkout: Bangladesh-Only Restriction, Login Modal, Registration Modal, Phone Number Verification (OTP) Modal, Phone Number Verification (OTP) Modal (Error), Guest Checkout Modal, Buyer Dashboard / Order History, Buyer Dashboard / Order History (Empty State), Buyer Dashboard / Order History (Loading), Buyer Dashboard / Order History (Error), Order Detail Drawer (Buyer), Order Cancellation Request Modal (Buyer), Order Return Request Modal (Buyer), Order Request Pending State (Buyer), Order Request Result Modal (Buyer), Seller Dashboard (Pending & Shipped Orders), Seller Dashboard (Empty State), Seller Dashboard (Loading), Seller Dashboard (Error), Order Detail Drawer (Seller), Order Request Review Modal (Seller), Mark Order as Shipped Modal (Seller), Painting Listing Management Drawer (Seller), Add Painting Modal (Seller), Edit Painting Modal (Seller), Remove Painting Confirmation Modal (Seller), Settings & Preferences, Notification Preferences Modal, Notifications Center, Notifications Center (Empty State), Notifications Center (Loading), Notifications Center (Error), Logo Recommendation Modal
Design system: Sales Intelligence Dashboard
Components: 
PREVIEW BUILD: isolated feature branch — do not merge to main; Ops4 will promote the chosen variation.
Fourteen Aperture UI/UX guideline documents are included for tokens/a11y — locked build prompt + screen blueprints win for composition.
Colors: accent: #2563EB; neutrals: zinc/slate neutrals with product-appropriate warmth
Typography: Fira Code / Fira Sans

## 1. Locked Design Brain build prompt (PRIMARY — implement verbatim)
This UI is for Web Application (responsive) — design all screens for browser conventions, with mobile-first breakpoints, pointer and touch support, and responsive layouts.

LOCKED DESIGN SYSTEM TOKENS (apply to all screens):
- Aesthetic: Sales Intelligence Dashboard
- Industry fit: Analytics Dashboard
- Style system: Sales Intelligence Dashboard
- Accent: #2563EB
- Neutrals: zinc/slate neutrals with product-appropriate warmth
- Typography: Fira Code / Fira Sans
- Radius: rounded-lg cards, rounded-md buttons
- App shell: Collapsible left sidebar + slim top bar + max-width content (ops/workspace default)
- Components: shadcn/ui (New York) + lucide-react
- Colors:
  - primary: #2563EB
  - secondary: #3B82F6
  - background: #F8FAFC
- Avoid: Ornate design, no filtering, no marketing analytics/HR/CS dashboards
- Checklist: Pipeline stages, quotas, rankings, territory, CRM integration (not used here, but informs density and hierarchy)

Build a senior product-designer prototype level UI — dense where needed, with supporting panels for related context/history; never a thin admin CRUD shell.

---

Build a Next.js (App Router) frontend using Shadcn/ui and Tailwind CSS, TypeScript, and the above design system. Use realistic sample data for all fields from the Page by Page Data Points. Implement every page from the page list below, with routes, layouts, and components as specified. For each primary screen, use the 'Catalog Browse' archetype: persistent collapsible sidebar for navigation, slim top bar for quick actions (language/theme/account), and a main content area focused on painting discovery, detail, and transaction flows. All filters, status variants, and edge cases must be implemented per the data points. Use Shadcn components (Table, Card, Dialog, Sheet, Tabs, Select, Input, Badge, Skeleton, Alert, etc.) as appropriate for each region. Do not collapse multi-region screens or replace specified controls with simpler substitutes.

---

ROUTES & LAYOUTS:

1. App Shell (applies to all pages):
   - Collapsible left sidebar (Shadcn Sheet/Sidebar):
     - Logo (art-inspired, purple/white, top left)
     - Navigation: Home/Catalog, Buyer Dashboard (if buyer), Seller Dashboard (if seller), Notifications, Settings
     - Responsive: collapses to icon-only on mobile, expands on desktop
   - Slim top bar (Shadcn Navbar):
     - Language Switcher (Bangla/English)
     - Theme Toggle (light/dark)
     - Login/Register or Account Menu (avatar, dropdown)
     - Notification Bell (with unread badge)
   - Main content area: max-width, centered on desktop, full-bleed on mobile

2. Painting Catalog Listing ("/", all status variants):
   - Layout: Catalog Browse (main content + filter rail)
   - Regions:
     - Header: persistent (from shell)
     - Filters (left/top on desktop, collapsible on mobile):
       - SearchBar (title/description)
       - SortDropdown (Newest, Price, Size)
       - PriceRangeSlider
       - SizeMultiSelect (Small, Medium, Large)
       - ClearFiltersButton
     - Main:
       - PaintingCardGrid (responsive grid, 2-3 columns desktop, 1 column mobile)
         - Each card: Painting Image, Title, Short Description, Price, Size
         - Card click: navigates to Painting Detail
       - PaginationControls (if >1 page)
     - Status Variants:
       - Empty: Friendly illustration, message (Bangla & English), CTA for seller to add painting
       - Loading: Skeletons for cards and filters
       - Error: Error message, retry button, fallback illustration
       - Plan Limit: Limit message, disable add painting (seller), buyers can browse
       - Permission Denied: Access denied message

3. Painting Detail Page ("/painting/:id", all status variants):
   - Layout: Catalog Browse (main + context rail)
   - Regions:
     - Main:
       - PaintingImageZoom (high-res, zoomable)
       - PaintingTitle
       - PaintingDescription
       - PaintingSize
       - PaintingPrice
       - DeliveryFeeDisplay (auto-calc, Dhaka/outside)
       - BuyNowButton, AddToCartButton (disabled if sold out/plan limit)
       - SoldOutBadge (if unavailable)
     - Context Rail (right on desktop, collapsible on mobile):
       - RelatedPaintingsList (horizontal scroll on mobile)
       - DeliveryInfoTooltip (explains fee logic)
       - LanguageToggle, ThemeToggle
     - Status Variants:
       - Default: all details, actions enabled
       - Unavailable: Sold Out badge, actions disabled, suggest browsing others
       - Empty: Not found message, browse catalog button
       - Loading: Skeletons for image, text, actions
       - Error: Error message, retry button
       - Plan Limit: Details shown, actions disabled, plan message
       - Permission Denied: Access denied message

4. Checkout Flow ("/checkout", multi-step wizard):
   - Step 1: Delivery Information
     - Single-column form (mobile-first)
     - Fields: Buyer Name, Buyer Address (Bangladesh only), Dhaka/Outside Toggle, Address Auto-Complete, Buyer Phone Number, Phone OTP Trigger, Delivery Charge Summary
     - ContinueToPaymentButton (disabled until valid)
     - Footer: Terms, Privacy, Support links
     - Status Variants: Empty (blank), Loading (skeletons), Error (validation/system), Plan Limit, Permission Denied
   - Step 2: Payment Method Selection
     - Two-column main/context rail (desktop), stacked on mobile
     - Main: PaymentMethodList (Cash on Delivery, Bcash, Mobile Wallet, SSL Commerce), icons, tooltips, Continue/Back buttons
     - Context Rail: DeliverySummaryCard, BuyerSummaryCard, EditDeliveryInfoAction
     - Status Variants: Default, Empty (no methods), Loading (spinner), Error, Plan Limit, Permission Denied
   - Step 3: Order Review & Confirmation
     - Two-column main/context rail
     - Main: PaintingSummaryCard, DeliverySummaryCard, PaymentMethodSummaryCard, OrderTotalDisplay, EditSectionAction, ConfirmOrderButton, BackButton
     - Context Rail: BuyerSummaryCard, EditBuyerInfoAction
     - Status Variants: Default, Empty, Loading, Error, Plan Limit, Permission Denied
   - Step 4: Payment Processing
     - Single-column, centered
     - ProcessingSpinner, ProcessingStatusText, TimeoutWarning, RetryButton, BackButton
     - Status Variants: Default, Empty, Loading, Error, Plan Limit, Permission Denied
   - Step 5: Payment Error
     - Two-column main/context rail
     - Main: PaymentErrorAlert, OrderSummaryCard, BuyerDetailsCard, RetryPaymentButton, ChangePaymentMethodButton
     - Context Rail: PaymentMethodList, SupportContactLink, FAQLink
     - Status Variants: Default, Empty, Loading, Error, Plan Limit, Permission Denied
   - Confirmation ("/checkout/confirmation")
     - Two-column main/context rail
     - Main: OrderConfirmationBanner, OrderSummaryCard, PaintingDetailsCard, DeliveryDetailsCard, DownloadInvoiceButton, OrderStatusBadge
     - Context Rail: FeedbackPrompt, SupportContactLink, OrderTrackingLink
     - Status Variants: Default, Empty, Loading, Error, Plan Limit, Permission Denied
   - Bangladesh Restriction (invalid address):
     - Single-column, centered
     - BangladeshRestrictionAlert, BuyerDetailsCard, DisabledContinueButton
     - Status Variants: Default, Empty, Loading, Error, Plan Limit, Permission Denied

5. Authentication Modals (Login, Register, OTP, Guest Checkout):
   - Centered modal (Shadcn Dialog/Sheet)
   - Login: LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton, LoginTitle, EmailField, PasswordField, ShowPasswordToggle, ForgotPasswordLink, LoginButton, DividerWithText, GoogleLoginButton, FacebookLoginButton, PhoneLoginButton, RegisterRedirectLink
   - Register: Similar to login, with RegisterTitle, ConfirmPasswordField, PhoneVerificationTrigger
   - OTP: OTPField, ResendButton, Timer, ErrorMessage, SubmitButton, CancelButton
   - Guest Checkout: Name, Address, Phone, OTP, ContinueButton
   - Status Variants: Default, Loading, Error, Plan Limit, Permission Denied

6. Buyer Dashboard ("/dashboard/buyer", all status variants):
   - Layout: Catalog Browse (main + context rail)
   - Main: OrderCardList (each: painting, delivery, status, actions), FilterTabs (pending, shipped), EmptyStateIllustration/Message, RetryButton
   - Context Rail: NotificationPreferences, SupportContact
   - Status Variants: Default, Empty, Loading, Error
   - Order Detail Drawer: Painting, delivery, payment, status, Cancel/Return buttons
   - Cancel/Return Modal: ReasonDropdown, DetailsField, Submit/Cancel
   - Request Pending State: PendingBadge, actions disabled
   - Request Result Modal: Approved/Rejected, next steps, CloseButton

7. Seller Dashboard ("/dashboard/seller", all status variants):
   - Layout: Catalog Browse (main + context rail)
   - Main: OrderCardList (pending/shipped tabs), AddNewPaintingButton, PaintingListManagementDrawer (edit/remove/add), EmptyStateIllustration/Message, RetryButton
   - Context Rail: NotificationPreferences, SupportContact
   - Status Variants: Default, Empty, Loading, Error
   - Order Detail Drawer: Buyer info, painting, delivery, payment, status, MarkAsShipped, ReviewRequest
   - Request Review Modal: Reason, Details, Approve/Reject
   - Mark Shipped Modal: Confirm, Undo
   - Painting Listing Management Drawer: List, Edit/Remove/Add
   - Add/Edit/Remove Painting Modals: ImageUpload, Title, Description, Price, Size, Validation

8. Settings & Preferences ("/settings"):
   - Main: LanguageToggle, ThemeToggle, NotificationPreferences, AccountInfo, SaveButton
   - Notification Preferences Modal: Email/In-App/SMS toggles

9. Notifications Center ("/notifications", all status variants):
   - Main: NotificationCardList (read/unread, filter by type), EmptyStateIllustration/Message, RetryButton

10. Logo Recommendation Modal ("/logo-recommendation"):
    - LogoPreview, AcceptButton, RequestRevisionButton

---

QUALITY BAR:
- All screens must be dense where needed, with supporting panels for related context/history.
- Do not collapse multi-region screens into single cards or forms.
- Render all filters, status variants, and edge cases as specified.
- Use Shadcn/ui components appropriate to the region and data density.
- All copy, labels, and messages should be production-grade and localized (Bangla/English toggle).
- All navigation, actions, and state transitions must be implemented as per the data points.
- All pages must be included; do not ship a subset.

---

PAGES COVERED:
- Painting Catalog Listing (all states)
- Painting Detail Page (all states)
- Checkout Flow (all steps, all states)
- Authentication Modals (Login, Register, OTP, Guest Checkout)
- Buyer Dashboard (all states, order detail, cancel/return)
- Seller Dashboard (all states, painting management, order detail, request review)
- Settings & Preferences
- Notifications Center (all states)
- Logo Recommendation Modal

---

Build this as a complete, production-grade Next.js app using the above design system, layout archetype, and all specified data points, filters, and status variants. Use Shadcn/ui and lucide-react components throughout. All screens must be responsive, accessible, and visually consistent with the locked design system.

## 2. Design Pattern Brain (REQUIRED for matching screens)

Design Pattern Brain briefs (REQUIRED composition for matching screen types — esp. auth/register/login):
- `.ops4/design-system/patterns/pattern-1-authentication.md`
- `.ops4/design-system/patterns/pattern-2-authentication.md`
Apply composition, density, hierarchy, spacing, and surfaces from these briefs. Keep product brand tokens; do not clone reference branding.
If patterns specify centered auth and the current auth UI is multi-panel, reshape auth screens to match.

## Design Pattern Brain (composition geometry only — keep locked product tokens)
These patterns are approved visual-memory references.
Apply archetype, reading flow, density, hierarchy, spacing rhythm, and surface structure only. DO NOT adopt reference hex colors or font families — use locked designMemory tokens.
KEEP this product's brand tokens (logo, primary brand color, locked Figma/product colors) — do not clone proprietary branding/copy from the reference product.
If a retrieved pattern is a centered auth/register card and the current screen is a heavier multi-panel auth layout, RESHAPE the auth/register screen to match the pattern archetype.

### Pattern 1: Centered authentication card
- Screen type: authentication
- Primary task: Authenticate with email and password to access the application
- Composition archetype: centered-card
- Reading flow: brand-logo → form-title → form-fields → form-actions → secondary-links
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: form-title and fields
- Secondary focal points: brand-logo, primary action button
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), checkbox (secondary), button-primary (secondary), link-secondary (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and whitespace create a calm, focused entry point for authentication. Single-column, minimal distractions, and clear hierarchy reduce cognitive load and error risk. Card elevation and rounded corners reinforce separation from background and draw attention.
- Avoid when: Multi-step or highly transactional flows; When space is limited and vertical stacking would cause excessive scrolling
- Summary: This pattern is a centered authentication card for desktop SaaS apps, focusing user attention on a single sign-in task. The composition uses a single-column card with generous whitespace, clear hierarchy, and minimal distractions, making it suitable for login, registration, or password reset screens. Works best when authentication is the only task and branding is important. Avoid for multi-step onboarding or dense transactional flows.
### Pattern 2: Centered authentication card
- Screen type: authentication
- Primary task: Create a new user account by entering email and password
- Composition archetype: centered-card
- Reading flow: page-header → primary-region
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: authentication-card
- Secondary focal points: form-fields, primary-action
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), primary-action (secondary), secondary-action (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and card containment reduce cognitive load and focus attention on the authentication task. Single-column layout is optimal for short forms and improves accessibility. Clear separation of primary and secondary actions prevents accidental navigation.
- Avoid when: Multi-step onboarding or marketing-heavy flows; Dense data input requirements
- Summary: A centered authentication card pattern for desktop SaaS apps, optimized for sign-up or sign-in flows. The primary task is account creation, with a single-column card containing form fields and clear primary/secondary actions. The composition uses generous whitespace, strong visual hierarchy, and minimal distractions, making it suitable for focused authentication tasks. Avoid for multi-step onboarding or marketing-heavy screens.

## 3. Screen composition blueprints

Screen composition blueprints (REQUIRED layouts — do not collapse):
- `.ops4/design-system/screens/painting-catalog-listing.md`
- `.ops4/design-system/screens/painting-catalog-listing-empty-state.md`
- `.ops4/design-system/screens/painting-catalog-listing-loading.md`
- `.ops4/design-system/screens/painting-catalog-listing-error.md`
- `.ops4/design-system/screens/painting-detail-page.md`
- `.ops4/design-system/screens/painting-detail-page-unavailable-sold-out.md`
- `.ops4/design-system/screens/painting-detail-page-loading.md`
- `.ops4/design-system/screens/painting-detail-page-error.md`
- `.ops4/design-system/screens/checkout-step-1-delivery-information.md`
- `.ops4/design-system/screens/checkout-step-2-payment-method-selection.md`
- `.ops4/design-system/screens/checkout-step-3-order-review-confirmation.md`
- `.ops4/design-system/screens/checkout-step-4-payment-processing.md`
- `.ops4/design-system/screens/checkout-step-5-payment-error.md`
- `.ops4/design-system/screens/order-confirmation-page.md`
- `.ops4/design-system/screens/checkout-bangladesh-only-restriction.md`
- `.ops4/design-system/screens/login-modal.md`
- `.ops4/design-system/screens/registration-modal.md`
- `.ops4/design-system/screens/phone-number-verification-otp-modal.md`
- `.ops4/design-system/screens/phone-number-verification-otp-modal-error.md`
- `.ops4/design-system/screens/guest-checkout-modal.md`
- `.ops4/design-system/screens/buyer-dashboard-order-history.md`
- `.ops4/design-system/screens/buyer-dashboard-order-history-empty-state.md`
- `.ops4/design-system/screens/buyer-dashboard-order-history-loading.md`
- `.ops4/design-system/screens/buyer-dashboard-order-history-error.md`
- `.ops4/design-system/screens/order-detail-drawer-buyer.md`
- `.ops4/design-system/screens/order-cancellation-request-modal-buyer.md`
- `.ops4/design-system/screens/order-return-request-modal-buyer.md`
- `.ops4/design-system/screens/order-request-pending-state-buyer.md`
- `.ops4/design-system/screens/order-request-result-modal-buyer.md`
- `.ops4/design-system/screens/seller-dashboard-pending-shipped-orders.md`
- `.ops4/design-system/screens/seller-dashboard-empty-state.md`
- `.ops4/design-system/screens/seller-dashboard-loading.md`
- `.ops4/design-system/screens/seller-dashboard-error.md`
- `.ops4/design-system/screens/order-detail-drawer-seller.md`
- `.ops4/design-system/screens/order-request-review-modal-seller.md`
- `.ops4/design-system/screens/mark-order-as-shipped-modal-seller.md`
- `.ops4/design-system/screens/painting-listing-management-drawer-seller.md`
- `.ops4/design-system/screens/add-painting-modal-seller.md`
- `.ops4/design-system/screens/edit-painting-modal-seller.md`
- `.ops4/design-system/screens/remove-painting-confirmation-modal-seller.md`
# Screen blueprint: Painting Catalog Listing

Route: `/`
Purpose: Landing page for all users. Displays grid/list of available original paintings with filters, sorting, and search.
Layout: **two-column-main-rail**

## Required regions
- **header**: Persistent navigation, logo, language/theme switcher, and login/account controls. — components: Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu
- **filters**: Allow users to filter, sort, and search paintings. — components: SearchBar, SortDropdown, PriceRangeSlider, SizeMultiSelect, ClearFiltersButton
- **main**: Display grid/list of painting cards with image and key details. — components: PaintingCardGrid, PaginationControls

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

---

# Screen blueprint: Painting Catalog Listing (Empty State)

Route: `/`
Purpose: Handles case where no paintings are available for sale.
Layout: **two-column-main-rail**

## Required regions
- **header**: Persistent navigation, logo, language/theme switcher, and login/account controls. — components: Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu
- **filters**: Allow users to filter, sort, and search paintings (even if none are available). — components: SearchBar, SortDropdown, PriceRangeSlider, SizeMultiSelect, ClearFiltersButton
- **main**: Display empty state illustration and message. Seller sees CTA to add new painting. — components: EmptyStateIllustration, EmptyStateMessage, AddNewPaintingButton (Seller Only)

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

---

# Screen blueprint: Painting Catalog Listing (Loading)

Route: `/`
Purpose: Displays skeleton loaders while paintings are fetched.
Layout: **two-column-main-rail**

## Required regions
- **header**: Persistent navigation, logo, language/theme switcher, and login/account controls. — components: Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu
- **filters**: Show skeleton loaders for filters and search controls. — components: SearchBarSkeleton, SortDropdownSkeleton, PriceRangeSliderSkeleton, SizeMultiSelectSkeleton
- **main**: Show skeleton loaders for painting cards. — components: PaintingCardSkeletonGrid

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

---

# Screen blueprint: Painting Catalog Listing (Error)

Route: `/`
Purpose: Handles API/network errors when loading paintings.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and language/theme toggles — components: Logo, NavigationMenu, LanguageToggle, ThemeToggle
- **main**: Displays error state, fallback illustration, and retry action — components: ErrorIllustration, ErrorMessage, RetryButton

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

---

# Screen blueprint: Painting Detail Page

Route: `/painting/:id`
Purpose: Displays all details for a selected painting, including high-res images, title, description, price, size, delivery fee, and purchase actions.
Layout: **master-detail**

## Required regions
- **main**: Showcase painting image, details, and purchase actions — components: PaintingImageZoom, PaintingTitle, PaintingDescription, PaintingSize, PaintingPrice, DeliveryFeeDisplay, BuyNowButton, AddToCartButton, SoldOutBadge
- **context-rail**: Show related paintings and additional info — components: RelatedPaintingsList, DeliveryInfoTooltip, LanguageToggle, ThemeToggle

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

---

# Screen blueprint: Painting Detail Page (Unavailable/Sold Out)

Route: `/painting/:id`
Purpose: Handles case where painting is no longer available.
Layout: **master-detail**

## Required regions
- **main**: Show painting details with sold out status and suggest alternatives — components: PaintingImageZoom, PaintingTitle, PaintingDescription, PaintingSize, PaintingPrice, DeliveryFeeDisplay, SoldOutBadge, BrowseOtherPaintingsButton
- **context-rail**: Show related paintings and additional info — components: RelatedPaintingsList, DeliveryInfoTooltip, LanguageToggle, ThemeToggle

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

---

# Screen blueprint: Painting Detail Page (Loading)

Route: `/painting/:id`
Purpose: Displays skeleton loaders while painting details are fetched.
Layout: **two-column-main-rail**

## Required regions
- **main**: Primary painting detail content area with skeletons for all painting attributes. — components: PaintingImageSkeleton, PaintingTitleSkeleton, PaintingDescriptionSkeleton, PaintingPriceSkeleton, PaintingSizeSkeleton, PaintingDeliveryInfoSkeleton
- **context-rail**: Contextual actions and painting meta skeletons (e.g., Buy Now/Add to Cart, share, delivery charge). — components: BuyNowButtonSkeleton, AddToCartButtonSkeleton, DeliveryChargeSkeleton, ShareButtonSkeleton

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

---

# Screen blueprint: Painting Detail Page (Error)

Route: `/painting/:id`
Purpose: Handles API/network errors when loading painting details.
Layout: **two-column-main-rail**

## Required regions
- **main**: Displays error message and retry action. — components: ErrorIcon, ErrorMessage, RetryButton
- **context-rail**: Empty or minimal context; disables all painting actions.

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

---

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

---

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

---

# Screen blueprint: Checkout Step 3: Order Review & Confirmation

Route: `/checkout`
Purpose: Buyer reviews painting details, delivery address, delivery fee, payment method, and total cost before confirming.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display all order details for review and allow confirmation. — components: PaintingSummaryCard, DeliverySummaryCard, PaymentMethodSummaryCard, OrderTotalDisplay, EditSectionAction, ConfirmOrderButton, BackButton
- **context-rail**: Show buyer info and allow editing if needed. — components: BuyerSummaryCard, EditBuyerInfoAction

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

---

# Screen blueprint: Checkout Step 4: Payment Processing

Route: `/checkout`
Purpose: Handles payment processing/loading state for digital payments.
Layout: **single-column-form**

## Required regions
- **main**: Show payment processing spinner, status, and handle errors/timeouts. — components: ProcessingSpinner, ProcessingStatusText, TimeoutWarning, BackButton, RetryButton

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

---

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

---

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

---

# Screen blueprint: Checkout: Bangladesh-Only Restriction

Route: `/checkout`
Purpose: Prevents checkout if address is outside Bangladesh.
Layout: **single-column-form**

## Required regions
- **main**: Shows restriction message and disables continue. — components: BangladeshRestrictionAlert, BuyerDetailsCard, DisabledContinueButton

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

---

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

---

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

---

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

---

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

---

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

---

# Screen blueprint: Buyer Dashboard / Order History

Route: `/dashboard/buyer`
Purpose: Shows registered buyer's order history, status (pending, shipped), and actions (cancel/return).
Layout: **list-detail**

## Required regions
- **header**: Dashboard title, user greeting, and quick actions. — components: DashboardTitle, UserGreeting, LanguageToggle, ThemeToggle
- **filters**: Filter orders by status, date, or search by painting title. — components: OrderStatusFilter, DateRangeFilter, SearchBar
- **main**: Display list of orders with painting, delivery, status, and actions. — components: OrderList, OrderCard, OrderStatusBadge, OrderActionsMenu
- **context-rail**: Show selected order details, actions, and invoice download. — components: OrderDetailPanel, PaintingImage, OrderSummary, DeliveryInfo, CancelOrderButton, ReturnRequestButton, DownloadInvoiceButton

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

---

# Screen blueprint: Buyer Dashboard / Order History (Empty State)

Route: `/dashboard/buyer`
Purpose: Handles case where buyer has no orders.
Layout: **dashboard-grid**

## Required regions
- **header**: Displays dashboard title and navigation context. — components: LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu
- **main**: Communicates empty state and encourages browsing catalog. — components: EmptyStateIllustration, EmptyStateMessage, BrowseCatalogCTA

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

---

# Screen blueprint: Buyer Dashboard / Order History (Loading)

Route: `/dashboard/buyer`
Purpose: Displays skeleton loaders while orders are fetched.
Layout: **dashboard-grid**

## Required regions
- **header**: Displays dashboard title and navigation context. — components: LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu
- **main**: Shows skeleton loaders for order cards. — components: OrderCardSkeletonList

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

---

# Screen blueprint: Buyer Dashboard / Order History (Error)

Route: `/dashboard/buyer`
Purpose: Handles API/network errors when loading orders.
Layout: **dashboard-grid**

## Required regions
- **header**: Displays dashboard title and navigation context. — components: LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu
- **main**: Shows error message and retry action. — components: ErrorMessage, RetryButton

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

---

# Screen blueprint: Order Detail Drawer (Buyer)

Route: `/dashboard/buyer/order/:id`
Purpose: Shows detailed info for a specific order, with cancel/return request actions.
Layout: **master-detail**

## Required regions
- **header**: Displays order number, status, and quick actions — components: OrderNumberText, OrderStatusBadge, DownloadInvoiceButton
- **main**: Shows painting details, delivery info, payment summary, and action buttons — components: PaintingImage, PaintingTitle, PaintingShortDescription, PaintingSize, PaintingPrice, DeliveryAddressBlock, DeliveryFeeText, BuyerContactInfoBlock, PaymentMethodText, OrderTotalText, OrderDateText, CancelOrderButton, ReturnOrderButton
- **context-rail**: Shows order timeline, status history, and support contact — components: OrderTimelineStepper, OrderStatusHistoryList, SupportContactCard

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

---

# Screen blueprint: Order Cancellation Request Modal (Buyer)

Route: `/dashboard/buyer/order/:id/cancel`
Purpose: Buyer submits cancellation request with reason and optional details.
Layout: **single-column-form**

## Required regions
- **main**: Form for submitting cancellation request — components: CancellationReasonDropdown, CancellationDetailsTextarea, SubmitCancellationButton, CancelButton

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

---

# Screen blueprint: Order Return Request Modal (Buyer)

Route: `/dashboard/buyer/order/:id/return`
Purpose: Buyer submits return request with reason and optional details.
Layout: **single-column-form**

## Required regions
- **main**: Form for submitting return request — components: ReturnReasonDropdown, ReturnDetailsTextarea, SubmitReturnButton, CancelButton

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

---

# Screen blueprint: Order Request Pending State (Buyer)

Route: `/dashboard/buyer/order/:id`
Purpose: Shows that cancellation/return request is under review.
Layout: **master-detail**

## Required regions
- **header**: Displays order summary and status — components: OrderNumber, OrderStatusBadge, OrderDate, PaintingThumbnail, PaintingTitle
- **main**: Shows order details and disables further actions while request is pending — components: OrderDetailsPanel, BuyerInfoCard, DeliveryInfoCard, PaymentInfoCard, RequestPendingBadge, RequestTypeLabel, RequestSubmittedDate, RequestReasonText, RequestSupportingDocsList, RequestStatusTimeline, DisabledActionsTooltip
- **context-rail**: Shows related actions and order history (disabled in pending state) — components: OrderHistoryTimeline, DownloadInvoiceButton (disabled), RequestCancellationButton (disabled), RequestReturnButton (disabled)

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

---

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

---

# Screen blueprint: Seller Dashboard (Pending & Shipped Orders)

Route: `/dashboard/seller`
Purpose: Seller views all orders, filtered by pending/shipped, and manages painting listings.
Layout: **dashboard-grid**

## Required regions
- **header**: Dashboard title, quick stats, and add painting action — components: DashboardTitle, PendingOrdersMetric, ShippedOrdersMetric, AddPaintingButton, LanguageToggle, ThemeToggle
- **filters**: Filter orders by status, date, payment method, and search — components: OrderStatusTab, OrderDateRangeFilter, PaymentMethodFilter, OrderSearchInput
- **main**: Displays order cards in grid/list, each with buyer, painting, delivery, payment, and actions — components: OrderCardList, OrderCard, OrderCardActions, OrderCardStatusBadge, OrderCardBuyerInfo, OrderCardPaintingInfo, OrderCardDeliveryInfo, OrderCardPaymentInfo, OrderCardTimeline, OrderCardNotificationBadge
- **context-rail**: Shows painting management and quick links — components: PaintingListPanel, EditPaintingButton, RemovePaintingButton, PaintingUploadButton

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

---

# Screen blueprint: Seller Dashboard (Empty State)

Route: `/dashboard/seller`
Purpose: Handles case where there are no orders. Encourages seller to add paintings and provides guidance.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to account/settings. — components: LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu
- **main**: Communicate empty state, encourage next steps, and provide quick actions. — components: EmptyStateIllustration, EmptyStateMessage, AddPaintingButton, EmptyStateHelpLink
- **context-rail**: Provide contextual help, tips, and quick links for onboarding. — components: OnboardingChecklist, SupportContactCard

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

---

# Screen blueprint: Seller Dashboard (Loading)

Route: `/dashboard/seller`
Purpose: Displays skeleton loaders while orders are fetched.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to account/settings. — components: LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu
- **main**: Show skeleton loaders for order cards and dashboard metrics. — components: OrderListSkeleton, OrderMetricsSkeleton
- **context-rail**: Show skeletons for context panels. — components: ContextPanelSkeleton

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

---

# Screen blueprint: Seller Dashboard (Error)

Route: `/dashboard/seller`
Purpose: Handles API/network errors when loading orders.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to account/settings. — components: LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu
- **main**: Show error message and retry action. — components: ErrorStateIllustration, ErrorMessage, RetryButton
- **context-rail**: Provide support contact and troubleshooting tips. — components: SupportContactCard, TroubleshootingTips

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

---

# Screen blueprint: Order Detail Drawer (Seller)

Route: `/dashboard/seller/order/:id`
Purpose: Shows detailed info for a specific order, with actions to mark as shipped or review requests.
Layout: **master-detail**

## Required regions
- **header**: Order summary and quick status recognition — components: OrderIdBadge, OrderStatusBadge, OrderDate, CloseDrawerButton
- **main**: Displays painting, buyer, delivery, payment, and order actions — components: PaintingImageCard, PaintingTitle, PaintingShortDescription, PaintingSize, PaintingPrice, DeliveryFee, TotalAmount, BuyerInfoCard, DeliveryAddress, BuyerPhone, BuyerEmail, PaymentMethodBadge, OrderNotes, OrderTimeline, MarkAsShippedButton, ReviewRequestButton, DownloadInvoiceButton
- **context-rail**: Shows order activity, cancellation/return requests, and delivery partner info — components: OrderActivityTimeline, CancellationOrReturnRequestCard, DeliveryPartnerInfoCard

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

---

# Screen blueprint: Order Request Review Modal (Seller)

Route: `/dashboard/seller/order/:id/request-review`
Purpose: Seller reviews and approves/rejects cancellation/return requests.
Layout: **single-column-form**

## Required regions
- **header**: Request summary and close action — components: RequestTypeBadge, CloseModalButton
- **main**: Shows request details, reason, supporting info, and approve/reject actions — components: RequestReasonText, SupportingInfoAttachment, BuyerMessage, OrderSummaryCard, ApproveButton, RejectButton

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

---

# Screen blueprint: Mark Order as Shipped Modal (Seller)

Route: `/dashboard/seller/order/:id/mark-shipped`
Purpose: Seller confirms marking order as shipped.
Layout: **single-column-form**

## Required regions
- **main**: Confirmation and undo for marking order as shipped — components: ConfirmationMessage, OrderSummaryCard, DeliveryPartnerDropdown, ConfirmMarkShippedButton, UndoButton

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

---

# Screen blueprint: Painting Listing Management Drawer (Seller)

Route: `/dashboard/seller/paintings`
Purpose: Seller manages painting inventory (add/edit/remove).
Layout: **two-column-main-rail**

## Required regions
- **header**: Page title, add new painting action, and language/theme toggles. — components: PageTitle: 'My Paintings', AddPaintingButton, LanguageToggle, ThemeToggle
- **main**: List of all paintings with edit/remove actions. — components: PaintingListTable, EditPaintingAction, RemovePaintingAction
- **context-rail**: Quick painting preview and details when a row is selected. — components: PaintingPreviewCard, PaintingDetailsPanel

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

---

# Screen blueprint: Add Painting Modal (Seller)

Route: `/dashboard/seller/paintings/add`
Purpose: Seller adds a new painting with image upload, title, description, price, and size.
Layout: **single-column-form**

## Required regions
- **main**: Form for entering painting details and uploading image. — components: PaintingImageUpload, PaintingImagePreview, TitleField, ShortDescriptionField, PriceField, SizeField, SaveButton, CancelButton, FormValidationMessage, LanguageToggle, ThemeToggle

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

---

# Screen blueprint: Edit Painting Modal (Seller)

Route: `/dashboard/seller/paintings/:id/edit`
Purpose: Seller edits painting details.
Layout: **single-column-form**

## Required regions
- **main**: Form for editing painting details and re-uploading image. — components: PaintingImageUpload, PaintingImagePreview, TitleField, ShortDescriptionField, PriceField, SizeField, SaveButton, CancelButton, FormValidationMessage, LanguageToggle, ThemeToggle

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

---

# Screen blueprint: Remove Painting Confirmation Modal (Seller)

Route: `/dashboard/seller/paintings/:id/remove`
Purpose: Seller confirms removal of a painting.
Layout: **single-column-form**

## Required regions
- **main**: Display confirmation message, painting summary, and removal actions. — components: PaintingThumbnail, PaintingTitle, PaintingShortDescription, PaintingPrice, PaintingSize, RemoveConfirmationText, UndoRemovalBadge, RemoveButton, CancelButton, ErrorMessage, LoadingSpinner

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

## 4. Page-by-page data points
Implement screens using this field-level inventory.

Summary: 49 pages, 705 data points, 28 filters.

### Painting Catalog Listing (/) [default] layout=two-column-main-rail
Regions:
- header — Persistent navigation, logo, language/theme switcher, and login/account controls. [Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu]
- filters — Allow users to filter, sort, and search paintings. [SearchBar, SortDropdown, PriceRangeSlider, SizeMultiSelect, ClearFiltersButton]
- main — Display grid/list of painting cards with image and key details. [PaintingCardGrid, PaginationControls]
Fields:
- Painting Title (table-column · main · required)
- Painting Short Description (table-column · main · required)
- Painting Price (table-column · main · required)
- Painting Size (table-column · main · required)
- Painting Image (form-field · main · required)
- Logo (navigation-item · header · required)
- Language Switcher (navigation-item · header · required)
- Theme Toggle (navigation-item · header · required)
- Login/Register (navigation-item · header)
Filters:
- Search Paintings (search)
- Sort By (multi-select)
- Price Range (numeric-range)
- Size (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Painting Catalog Listing (Empty State) (/) [empty] layout=two-column-main-rail
Regions:
- header — Persistent navigation, logo, language/theme switcher, and login/account controls. [Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu]
- filters — Allow users to filter, sort, and search paintings (even if none are available). [SearchBar, SortDropdown, PriceRangeSlider, SizeMultiSelect, ClearFiltersButton]
- main — Display empty state illustration and message. Seller sees CTA to add new painting. [EmptyStateIllustration, EmptyStateMessage, AddNewPaintingButton (Seller Only)]
Fields:
- Painting Title (table-column · main · required)
- Painting Short Description (table-column · main · required)
- Painting Price (table-column · main · required)
- Painting Size (table-column · main · required)
- Painting Image (form-field · main · required)
- Logo (navigation-item · header · required)
- Language Switcher (navigation-item · header · required)
- Theme Toggle (navigation-item · header · required)
- Login/Register (navigation-item · header)
Filters:
- Search Paintings (search)
- Sort By (multi-select)
- Price Range (numeric-range)
- Size (multi-select)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Painting Catalog Listing (Loading) (/) [loading] layout=two-column-main-rail
Regions:
- header — Persistent navigation, logo, language/theme switcher, and login/account controls. [Logo, NavigationMenu, LanguageSwitcher, ThemeToggle, LoginOrAccountMenu]
- filters — Show skeleton loaders for filters and search controls. [SearchBarSkeleton, SortDropdownSkeleton, PriceRangeSliderSkeleton, SizeMultiSelectSkeleton]
- main — Show skeleton loaders for painting cards. [PaintingCardSkeletonGrid]
Fields:
- Painting Title (table-column · main · required)
- Painting Short Description (table-column · main · required)
- Painting Price (table-column · main · required)
- Painting Size (table-column · main · required)
- Painting Image (form-field · main · required)
- Logo (navigation-item · header · required)
- Language Switcher (navigation-item · header · required)
- Theme Toggle (navigation-item · header · required)
- Login/Register (navigation-item · header)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Painting Catalog Listing (Error) (/) [error] layout=dashboard-grid
Regions:
- header — Branding, navigation, and language/theme toggles [Logo, NavigationMenu, LanguageToggle, ThemeToggle]
- main — Displays error state, fallback illustration, and retry action [ErrorIllustration, ErrorMessage, RetryButton]
Fields:
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Fallback Illustration (image · main · required)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Painting Card Grid (list · main)
- Catalog Filters (filter · filters)
- Sort Dropdown (filter · filters)
Statuses: error, default, empty, loading, plan_limit, permission_denied

### Painting Detail Page (/painting/:id) [default] layout=master-detail
Regions:
- main — Showcase painting image, details, and purchase actions [PaintingImageZoom, PaintingTitle, PaintingDescription, PaintingSize, PaintingPrice, DeliveryFeeDisplay, BuyNowButton, AddToCartButton]
- context-rail — Show related paintings and additional info [RelatedPaintingsList, DeliveryInfoTooltip, LanguageToggle, ThemeToggle]
Fields:
- Painting Image (Zoomable) (image · main · required)
- Painting Title (text · main · required)
- Painting Description (text · main · required)
- Painting Price (number · main · required)
- Painting Size (text · main · required)
- Delivery Fee (number · main · required)
- Buy Now Button (action · main · required)
- Add to Cart Button (action · main · required)
- Sold Out Badge (badge · main)
- Related Paintings (list · context-rail)
- Delivery Info Tooltip (tooltip · context-rail)
- Language Toggle (navigation-item · context-rail · required)
- Theme Toggle (navigation-item · context-rail · required)
- Empty State Message (text · main)
- Browse Other Paintings Button (action · main)
- Loading Skeletons (text · main)
- Error Message (text · main)
- Retry Button (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Painting Detail Page (Unavailable/Sold Out) (/painting/:id) [unavailable] layout=master-detail
Regions:
- main — Show painting details with sold out status and suggest alternatives [PaintingImageZoom, PaintingTitle, PaintingDescription, PaintingSize, PaintingPrice, DeliveryFeeDisplay, SoldOutBadge, BrowseOtherPaintingsButton]
- context-rail — Show related paintings and additional info [RelatedPaintingsList, DeliveryInfoTooltip, LanguageToggle, ThemeToggle]
Fields:
- Painting Image (Zoomable) (image · main · required)
- Painting Title (text · main · required)
- Painting Description (text · main · required)
- Painting Price (number · main · required)
- Painting Size (text · main · required)
- Delivery Fee (number · main · required)
- Sold Out Badge (badge · main · required)
- Browse Other Paintings Button (action · main · required)
- Related Paintings (list · context-rail)
- Delivery Info Tooltip (tooltip · context-rail)
- Language Toggle (navigation-item · context-rail · required)
- Theme Toggle (navigation-item · context-rail · required)
- Empty State Message (text · main)
- Loading Skeletons (text · main)
- Error Message (text · main)
- Retry Button (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: unavailable, default, empty, loading, error, plan_limit, permission_denied

### Painting Detail Page (Loading) (/painting/:id) [loading] layout=two-column-main-rail
Regions:
- main — Primary painting detail content area with skeletons for all painting attributes. [PaintingImageSkeleton, PaintingTitleSkeleton, PaintingDescriptionSkeleton, PaintingPriceSkeleton, PaintingSizeSkeleton, PaintingDeliveryInfoSkeleton]
- context-rail — Contextual actions and painting meta skeletons (e.g., Buy Now/Add to Cart, share, delivery charge). [BuyNowButtonSkeleton, AddToCartButtonSkeleton, DeliveryChargeSkeleton, ShareButtonSkeleton]
Fields:
- Painting Image (Skeleton) (text · main · required)
- Painting Title (Skeleton) (text · main · required)
- Painting Description (Skeleton) (text · main · required)
- Painting Price (Skeleton) (text · main · required)
- Painting Size (Skeleton) (text · main)
- Delivery Charge (Skeleton) (text · context-rail)
- Buy Now Button (Skeleton) (action · context-rail)
- Add to Cart Button (Skeleton) (action · context-rail)
- Share Button (Skeleton) (action · context-rail)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Painting Detail Page (Error) (/painting/:id) [error] layout=two-column-main-rail
Regions:
- main — Displays error message and retry action. [ErrorIcon, ErrorMessage, RetryButton]
- context-rail — Empty or minimal context; disables all painting actions. []
Fields:
- Error Message (text · main · required)
- Retry Button (action · main · required)
Statuses: error, default, empty, loading, plan_limit, permission_denied

### Checkout Step 1: Delivery Information (/checkout) [default] layout=single-column-form
Regions:
- main — Mobile-first checkout form for delivery information. [BuyerNameField, BuyerAddressField, DhakaOutsideToggle, AddressAutoComplete, BuyerPhoneNumberField, PhoneOTPTriggerButton, DeliveryChargeSummary, ContinueToPaymentButton]
- footer — Legal, privacy, and support links. [TermsAndConditionsLink, PrivacyPolicyLink, SupportContactLink]
Fields:
- Buyer Name (form-field · form · required)
- Buyer Address (form-field · form · required)
- Buyer Phone Number (form-field · form · required)
- Delivery Charge (form-field · summary · required)
- Dhaka/Outside Dhaka Toggle (form-field · form · required)
- Address Auto-Complete (form-field · form)
- Phone Number OTP Trigger (action · form · required)
- Continue to Payment (action · form · required)
- Error Message (text · form)
- Plan Limit Message (text · form)
- Permission Denied Message (text · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Checkout Step 2: Payment Method Selection (/checkout) [default] layout=two-column-main-rail
Regions:
- main — Display payment method options and allow selection; show delivery summary for context. [PaymentMethodList, PaymentMethodOptionCard, PaymentMethodDescriptionTooltip, PaymentMethodIcon, ContinueButton, BackButton, DeliverySummaryCard]
- context-rail — Show buyer and delivery details for confirmation and editing if needed. [BuyerSummaryCard, EditDeliveryInfoAction, DeliveryChargeDisplay]
Fields:
- Buyer Name (form-field · form · required)
- Buyer Address (form-field · form · required)
- Buyer Phone Number (form-field · form · required)
- Delivery Charge (form-field · summary · required)
- Payment Method List (list · main · required)
- Payment Method Option: Cash on Delivery (with card) (form-field · main · required)
- Payment Method Option: Bcash (form-field · main · required)
- Payment Method Option: Mobile Wallet (form-field · main · required)
- Payment Method Option: SSL Commerce (form-field · main · required)
- Payment Method Icon (icon · main · required)
- Payment Method Description Tooltip (tooltip · main)
- Continue Button (action · footer · required)
- Back Button (action · footer · required)
- Delivery Summary Card (panel · context-rail · required)
- Buyer Summary Card (panel · context-rail · required)
- Edit Delivery Info Action (action · context-rail)
- Loading Spinner (icon · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Checkout Step 3: Order Review & Confirmation (/checkout) [default] layout=two-column-main-rail
Regions:
- main — Display all order details for review and allow confirmation. [PaintingSummaryCard, DeliverySummaryCard, PaymentMethodSummaryCard, OrderTotalDisplay, EditSectionAction, ConfirmOrderButton, BackButton]
- context-rail — Show buyer info and allow editing if needed. [BuyerSummaryCard, EditBuyerInfoAction]
Fields:
- Buyer Name (form-field · form · required)
- Buyer Address (form-field · form · required)
- Buyer Phone Number (form-field · form · required)
- Delivery Charge (form-field · summary · required)
- Painting Title (text · main · required)
- Painting Image (image · main · required)
- Painting Description (text · main)
- Painting Size (text · main)
- Painting Price (number · main · required)
- Payment Method Summary (text · main · required)
- Order Total (number · main · required)
- Edit Section Action (action · main)
- Confirm Order Button (action · footer · required)
- Back Button (action · footer · required)
- Buyer Summary Card (panel · context-rail · required)
- Edit Buyer Info Action (action · context-rail)
- Loading Spinner (icon · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Checkout Step 4: Payment Processing (/checkout) [loading] layout=single-column-form
Regions:
- main — Show payment processing spinner, status, and handle errors/timeouts. [ProcessingSpinner, ProcessingStatusText, TimeoutWarning, BackButton, RetryButton]
Fields:
- Buyer Name (form-field · form · required)
- Buyer Address (form-field · form · required)
- Buyer Phone Number (form-field · form · required)
- Delivery Charge (form-field · summary · required)
- Processing Spinner (icon · main · required)
- Processing Status Text (text · main · required)
- Timeout Warning (text · main)
- Retry Button (action · main)
- Back Button (action · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Checkout Step 5: Payment Error (/checkout) [error] layout=two-column-main-rail
Regions:
- main — Shows payment error details, summary of attempted order, and retry/change payment method actions. [PaymentErrorAlert, OrderSummaryCard, BuyerDetailsCard, RetryPaymentButton, ChangePaymentMethodButton]
- context-rail — Provides contextual help, payment method info, and support contact. [PaymentMethodList, SupportContactLink, FAQLink]
Fields:
- Buyer Name (form-field · form · required)
- Buyer Address (form-field · form · required)
- Buyer Phone Number (form-field · form · required)
- Delivery Charge (form-field · summary · required)
- Payment Error Message (text · main · required)
- Order Total (number · summary · required)
- Painting Title (text · summary · required)
- Painting Image (image · summary · required)
- Payment Method (text · main · required)
- Retry Payment (action · main · required)
- Change Payment Method (action · main · required)
- Continue to Confirmation (action · main)
- Loading Spinner (badge · main)
- Critical Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Confirmation Page (/checkout/confirmation) [default] layout=two-column-main-rail
Regions:
- main — Shows order confirmation, painting summary, delivery details, and invoice download. [OrderConfirmationBanner, OrderSummaryCard, PaintingDetailsCard, DeliveryDetailsCard, DownloadInvoiceButton, OrderStatusBadge]
- context-rail — Provides next steps, feedback prompt, and support contact. [FeedbackPrompt, SupportContactLink, OrderTrackingLink]
Fields:
- Order Number (text · header · required)
- Order Confirmation Message (text · main · required)
- Painting Title (text · main · required)
- Painting Image (image · main · required)
- Painting Size (text · main · required)
- Painting Price (number · main · required)
- Delivery Address (text · main · required)
- Buyer Name (text · main · required)
- Buyer Phone Number (text · main · required)
- Delivery Charge (number · main · required)
- Order Total (number · main · required)
- Order Status (badge · main · required)
- Download Invoice (action · main · required)
- Order Date (date · main · required)
- Notification Sent Message (text · main · required)
- No Order Found Message (text · main)
- Loading Spinner (badge · main)
- Critical Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Checkout: Bangladesh-Only Restriction (/checkout) [invalid-address] layout=single-column-form
Regions:
- main — Shows restriction message and disables continue. [BangladeshRestrictionAlert, BuyerDetailsCard, DisabledContinueButton]
Fields:
- Buyer Name (form-field · form · required)
- Buyer Address (form-field · form · required)
- Buyer Phone Number (form-field · form · required)
- Delivery Charge (form-field · summary · required)
- Bangladesh Restriction Message (text · main · required)
- Continue to Payment (action · main)
- Empty Address Message (text · main)
- Loading Spinner (badge · main)
- Critical Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Login Modal (/auth/login) [default] layout=single-column-form
Regions:
- header — Branding, language/theme toggle, and close modal [LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton]
- main — User login form and social login options [LoginTitle, EmailField, PasswordField, ShowPasswordToggle, ForgotPasswordLink, LoginButton, DividerWithText, GoogleLoginButton]
- footer — Legal links and accessibility statement [TermsLink, PrivacyLink, AccessibilityStatement]
Fields:
- LogoMark (navigation-item · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- ModalCloseButton (action · header · required)
- LoginTitle (text · main · required)
- EmailField (form-field · main · required)
- PasswordField (form-field · main · required)
- ShowPasswordToggle (action · main)
- ForgotPasswordLink (action · main · required)
- LoginButton (action · main · required)
- DividerWithText (text · main)
- GoogleLoginButton (action · main · required)
- FacebookLoginButton (action · main · required)
- PhoneLoginButton (action · main · required)
- RegisterRedirectLink (action · main · required)
- LoginErrorMessage (text · main)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
- TermsLink (navigation-item · footer · required)
- PrivacyLink (navigation-item · footer · required)
- AccessibilityStatement (navigation-item · footer)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Registration Modal (/auth/register) [default] layout=single-column-form
Regions:
- header — Branding, language/theme toggle, and close modal [LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton]
- main — User registration form and social registration options [RegisterTitle, NameField, EmailField, PasswordField, ShowPasswordToggle, PhoneField, RegisterButton, DividerWithText]
- footer — Legal links and accessibility statement [TermsLink, PrivacyLink, AccessibilityStatement]
Fields:
- LogoMark (navigation-item · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- ModalCloseButton (action · header · required)
- RegisterTitle (text · main · required)
- NameField (form-field · main · required)
- EmailField (form-field · main · required)
- PasswordField (form-field · main · required)
- ShowPasswordToggle (action · main)
- PhoneField (form-field · main · required)
- RegisterButton (action · main · required)
- DividerWithText (text · main)
- GoogleRegisterButton (action · main · required)
- FacebookRegisterButton (action · main · required)
- PhoneRegisterButton (action · main · required)
- LoginRedirectLink (action · main · required)
- RegisterErrorMessage (text · main)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
- TermsLink (navigation-item · footer · required)
- PrivacyLink (navigation-item · footer · required)
- AccessibilityStatement (navigation-item · footer)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Phone Number Verification (OTP) Modal (/auth/verify-phone) [default] layout=single-column-form
Regions:
- header — Branding, language/theme toggle, and close modal [LogoMark, LanguageToggle, ThemeToggle, ModalCloseButton]
- main — OTP entry and verification actions [OTPTitle, PhoneNumberDisplay, OTPField, OTPSubmitButton, ResendOTPButton, OTPTimer, OTPErrorMessage, ChangePhoneLink]
Fields:
- LogoMark (navigation-item · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- ModalCloseButton (action · header · required)
- OTPTitle (text · main · required)
- PhoneNumberDisplay (text · main · required)
- OTPField (form-field · main · required)
- OTPSubmitButton (action · main · required)
- ResendOTPButton (action · main · required)
- OTPTimer (text · main · required)
- OTPErrorMessage (text · main)
- ChangePhoneLink (action · main)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Phone Number Verification (OTP) Modal (Error) (/auth/verify-phone) [error] layout=single-column-form
Regions:
- main — Display OTP error message, allow retry and resend actions, and show phone number context. [PhoneNumberDisplay, OTPInputField, ErrorMessageBanner, RetryButton, ResendOTPButton, BackToCheckoutButton]
Fields:
- Phone Number (text · main · required)
- OTP Input (form-field · main · required)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Resend OTP Button (action · main · required)
- Back to Checkout (action · main)
- Loading Indicator (badge · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, error, loading, plan_limit, permission_denied

### Guest Checkout Modal (/auth/guest-checkout) [default] layout=single-column-form
Regions:
- main — Collect guest buyer's required information for checkout and trigger phone verification. [NameField, PhoneNumberField, AddressField, CityDropdown, DistrictDropdown, DeliveryAreaToggle, LanguageToggle, ProceedToOTPButton]
Fields:
- Name (form-field · main · required)
- Phone Number (form-field · main · required)
- Address (form-field · main · required)
- City (form-field · main · required)
- District (form-field · main · required)
- Delivery Area (form-field · main · required)
- Language Toggle (action · main)
- Proceed to OTP (action · main · required)
- Cancel (action · main)
- Loading Indicator (badge · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Buyer Dashboard / Order History (/dashboard/buyer) [default] layout=list-detail
Regions:
- header — Dashboard title, user greeting, and quick actions. [DashboardTitle, UserGreeting, LanguageToggle, ThemeToggle]
- filters — Filter orders by status, date, or search by painting title. [OrderStatusFilter, DateRangeFilter, SearchBar]
- main — Display list of orders with painting, delivery, status, and actions. [OrderList, OrderCard, OrderStatusBadge, OrderActionsMenu]
- context-rail — Show selected order details, actions, and invoice download. [OrderDetailPanel, PaintingImage, OrderSummary, DeliveryInfo, CancelOrderButton, ReturnRequestButton, DownloadInvoiceButton]
Fields:
- Dashboard Title (text · header · required)
- User Greeting (text · header)
- Language Toggle (action · header)
- Theme Toggle (action · header)
- Order Status (filter · filters)
- Date Range (filter · filters)
- Search (filter · filters)
- Order List (list · main · required)
- Order Card (table-column · main · required)
- Order Status Badge (badge · main · required)
- Order Actions Menu (action · main · required)
- Order Detail Panel (panel · context-rail)
- Painting Image (image · context-rail)
- Order Summary (panel · context-rail)
- Delivery Info (panel · context-rail)
- Cancel Order Button (action · context-rail)
- Return Request Button (action · context-rail)
- Download Invoice Button (action · context-rail)
- Empty State Message (text · main)
- Loading Indicator (badge · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Filters:
- Order Status (multi-select)
- Date Range (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Buyer Dashboard / Order History (Empty State) (/dashboard/buyer) [empty] layout=dashboard-grid
Regions:
- header — Displays dashboard title and navigation context. [LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu]
- main — Communicates empty state and encourages browsing catalog. [EmptyStateIllustration, EmptyStateMessage, BrowseCatalogCTA]
Fields:
- Dashboard Title (text · header · required)
- Logo Mark (navigation-item · header · required)
- Language Toggle (action · header · required)
- Theme Toggle (action · header · required)
- User Menu (navigation-item · header · required)
- Empty State Illustration (illustration · main · required)
- Empty State Message (text · main · required)
- Browse Catalog CTA (action · main · required)
- Empty State Skeleton (illustration · main)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Order List (list · main)
- Order Card (table-column · main)
- Order Status Badge (badge · main)
- Order Actions (action · main)
- Order Filters (filter · filters)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Buyer Dashboard / Order History (Loading) (/dashboard/buyer) [loading] layout=dashboard-grid
Regions:
- header — Displays dashboard title and navigation context. [LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu]
- main — Shows skeleton loaders for order cards. [OrderCardSkeletonList]
Fields:
- Dashboard Title (text · header · required)
- Logo Mark (navigation-item · header · required)
- Language Toggle (action · header · required)
- Theme Toggle (action · header · required)
- User Menu (navigation-item · header · required)
- Order Card Skeleton List (list · main · required)
- Order List (list · main)
- Order Card (table-column · main)
- Order Status Badge (badge · main)
- Order Actions (action · main)
- Order Filters (filter · filters)
- Empty State Illustration (illustration · main)
- Empty State Message (text · main)
- Browse Catalog CTA (action · main)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Buyer Dashboard / Order History (Error) (/dashboard/buyer) [error] layout=dashboard-grid
Regions:
- header — Displays dashboard title and navigation context. [LogoMark, DashboardTitle, LanguageToggle, ThemeToggle, UserMenu]
- main — Shows error message and retry action. [ErrorMessage, RetryButton]
Fields:
- Dashboard Title (text · header · required)
- Logo Mark (navigation-item · header · required)
- Language Toggle (action · header · required)
- Theme Toggle (action · header · required)
- User Menu (navigation-item · header · required)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Order List (list · main)
- Order Card (table-column · main)
- Order Status Badge (badge · main)
- Order Actions (action · main)
- Order Filters (filter · filters)
- Order Card Skeleton List (list · main)
- Empty State Illustration (illustration · main)
- Empty State Message (text · main)
- Browse Catalog CTA (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: error, default, empty, loading, plan_limit, permission_denied

### Order Detail Drawer (Buyer) (/dashboard/buyer/order/:id) [default] layout=master-detail
Regions:
- header — Displays order number, status, and quick actions [OrderNumberText, OrderStatusBadge, DownloadInvoiceButton]
- main — Shows painting details, delivery info, payment summary, and action buttons [PaintingImage, PaintingTitle, PaintingShortDescription, PaintingSize, PaintingPrice, DeliveryAddressBlock, DeliveryFeeText, BuyerContactInfoBlock]
- context-rail — Shows order timeline, status history, and support contact [OrderTimelineStepper, OrderStatusHistoryList, SupportContactCard]
Fields:
- Order Number (text · header · required)
- Order Status (badge · header · required)
- Download Invoice (action · header)
- Painting Image (image · main · required)
- Painting Title (text · main · required)
- Painting Short Description (text · main)
- Painting Size (text · main)
- Painting Price (number · main · required)
- Delivery Address (text · main · required)
- Delivery Fee (number · main · required)
- Buyer Contact Info (text · main · required)
- Payment Method (text · main · required)
- Order Total (number · main · required)
- Order Date (date · main · required)
- Cancel Order (action · main · required)
- Return Order (action · main · required)
- Order Timeline (list · context-rail)
- Order Status History (list · context-rail)
- Support Contact (text · context-rail)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Cancellation Request Modal (Buyer) (/dashboard/buyer/order/:id/cancel) [default] layout=single-column-form
Regions:
- main — Form for submitting cancellation request [CancellationReasonDropdown, CancellationDetailsTextarea, SubmitCancellationButton, CancelButton]
Fields:
- Cancellation Reason (form-field · main · required)
- Cancellation Details (form-field · main)
- Submit Cancellation (action · main · required)
- Cancel (action · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Return Request Modal (Buyer) (/dashboard/buyer/order/:id/return) [default] layout=single-column-form
Regions:
- main — Form for submitting return request [ReturnReasonDropdown, ReturnDetailsTextarea, SubmitReturnButton, CancelButton]
Fields:
- Return Reason (form-field · main · required)
- Return Details (form-field · main)
- Submit Return (action · main · required)
- Cancel (action · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Request Pending State (Buyer) (/dashboard/buyer/order/:id) [request-pending] layout=master-detail
Regions:
- header — Displays order summary and status [OrderNumber, OrderStatusBadge, OrderDate, PaintingThumbnail, PaintingTitle]
- main — Shows order details and disables further actions while request is pending [OrderDetailsPanel, BuyerInfoCard, DeliveryInfoCard, PaymentInfoCard, RequestPendingBadge, RequestTypeLabel, RequestSubmittedDate, RequestReasonText]
- context-rail — Shows related actions and order history (disabled in pending state) [OrderHistoryTimeline, DownloadInvoiceButton (disabled), RequestCancellationButton (disabled), RequestReturnButton (disabled)]
Fields:
- OrderNumber (text · header · required)
- OrderStatusBadge (badge · header · required)
- OrderDate (date · header · required)
- PaintingThumbnail (image · header · required)
- PaintingTitle (text · header · required)
- OrderDetailsPanel (panel · main · required)
- BuyerInfoCard (panel · main · required)
- DeliveryInfoCard (panel · main · required)
- PaymentInfoCard (panel · main · required)
- RequestPendingBadge (badge · main · required)
- RequestTypeLabel (text · main · required)
- RequestSubmittedDate (date · main · required)
- RequestReasonText (text · main)
- RequestSupportingDocsList (list · main)
- RequestStatusTimeline (panel · main)
- DisabledActionsTooltip (tooltip · main · required)
- OrderHistoryTimeline (panel · context-rail)
- DownloadInvoiceButton (action · context-rail)
- RequestCancellationButton (action · context-rail)
- RequestReturnButton (action · context-rail)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Request Result Modal (Buyer) (/dashboard/buyer/order/:id/request-result) [approved|rejected] layout=single-column-form
Regions:
- main — Shows request result, next steps, and close action [ResultStatusIcon, ResultStatusLabel, ResultSummaryText, RequestTypeLabel, RequestSubmittedDate, RequestReasonText, AdminDecisionNote, NextStepsPanel]
Fields:
- ResultStatusIcon (badge · main · required)
- ResultStatusLabel (text · main · required)
- ResultSummaryText (text · main · required)
- RequestTypeLabel (text · main · required)
- RequestSubmittedDate (date · main · required)
- RequestReasonText (text · main)
- AdminDecisionNote (text · main)
- NextStepsPanel (panel · main · required)
- CloseButton (action · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Seller Dashboard (Pending & Shipped Orders) (/dashboard/seller) [default] layout=dashboard-grid
Regions:
- header — Dashboard title, quick stats, and add painting action [DashboardTitle, PendingOrdersMetric, ShippedOrdersMetric, AddPaintingButton, LanguageToggle, ThemeToggle]
- filters — Filter orders by status, date, payment method, and search [OrderStatusTab, OrderDateRangeFilter, PaymentMethodFilter, OrderSearchInput]
- main — Displays order cards in grid/list, each with buyer, painting, delivery, payment, and actions [OrderCardList, OrderCard, OrderCardActions, OrderCardStatusBadge, OrderCardBuyerInfo, OrderCardPaintingInfo, OrderCardDeliveryInfo, OrderCardPaymentInfo]
- context-rail — Shows painting management and quick links [PaintingListPanel, EditPaintingButton, RemovePaintingButton, PaintingUploadButton]
Fields:
- DashboardTitle (text · header · required)
- PendingOrdersMetric (metric · header · required)
- ShippedOrdersMetric (metric · header · required)
- AddPaintingButton (action · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- OrderStatusTab (filter · filters · required)
- OrderDateRangeFilter (filter · filters)
- PaymentMethodFilter (filter · filters)
- OrderSearchInput (filter · filters)
- OrderCardList (list · main · required)
- OrderCard (panel · main · required)
- OrderCardActions (action · main · required)
- OrderCardStatusBadge (badge · main · required)
- OrderCardBuyerInfo (panel · main · required)
- OrderCardPaintingInfo (panel · main · required)
- OrderCardDeliveryInfo (panel · main · required)
- OrderCardPaymentInfo (panel · main · required)
- OrderCardTimeline (panel · main)
- OrderCardNotificationBadge (badge · main)
- PaintingListPanel (panel · context-rail · required)
- EditPaintingButton (action · context-rail · required)
- RemovePaintingButton (action · context-rail · required)
- PaintingUploadButton (action · context-rail · required)
Filters:
- OrderStatusTab (multi-select)
- OrderDateRangeFilter (date-range)
- PaymentMethodFilter (multi-select)
- OrderSearchInput (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Seller Dashboard (Empty State) (/dashboard/seller) [empty] layout=dashboard-grid
Regions:
- header — Branding, navigation, and quick access to account/settings. [LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu]
- main — Communicate empty state, encourage next steps, and provide quick actions. [EmptyStateIllustration, EmptyStateMessage, AddPaintingButton, EmptyStateHelpLink]
- context-rail — Provide contextual help, tips, and quick links for onboarding. [OnboardingChecklist, SupportContactCard]
Fields:
- LogoMark (navigation-item · header · required)
- SellerNavTabs (navigation-item · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- AccountMenu (navigation-item · header · required)
- EmptyStateIllustration (text · main · required)
- EmptyStateMessage (text · main · required)
- AddPaintingButton (action · main · required)
- EmptyStateHelpLink (action · main)
- OnboardingChecklist (panel · context-rail)
- SupportContactCard (panel · context-rail)
- EmptyStateSkeleton (text · main)
- ErrorMessage (text · main · required)
- RetryButton (action · main · required)
- PlanLimitMessage (text · main)
- UpgradePlanLink (action · main)
- PermissionDeniedMessage (text · main · required)
- OrderList (table-column · main)
- OrderStatusFilter (filter · filters)
- OrderMetrics (metric · main)
- OrderNotificationBadge (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Seller Dashboard (Loading) (/dashboard/seller) [loading] layout=dashboard-grid
Regions:
- header — Branding, navigation, and quick access to account/settings. [LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu]
- main — Show skeleton loaders for order cards and dashboard metrics. [OrderListSkeleton, OrderMetricsSkeleton]
- context-rail — Show skeletons for context panels. [ContextPanelSkeleton]
Fields:
- LogoMark (navigation-item · header · required)
- SellerNavTabs (navigation-item · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- AccountMenu (navigation-item · header · required)
- OrderListSkeleton (text · main · required)
- OrderMetricsSkeleton (text · main)
- ContextPanelSkeleton (text · context-rail)
- ErrorMessage (text · main · required)
- RetryButton (action · main · required)
- PlanLimitMessage (text · main)
- UpgradePlanLink (action · main)
- PermissionDeniedMessage (text · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Seller Dashboard (Error) (/dashboard/seller) [error] layout=dashboard-grid
Regions:
- header — Branding, navigation, and quick access to account/settings. [LogoMark, SellerNavTabs, LanguageToggle, ThemeToggle, AccountMenu]
- main — Show error message and retry action. [ErrorStateIllustration, ErrorMessage, RetryButton]
- context-rail — Provide support contact and troubleshooting tips. [SupportContactCard, TroubleshootingTips]
Fields:
- LogoMark (navigation-item · header · required)
- SellerNavTabs (navigation-item · header · required)
- LanguageToggle (action · header · required)
- ThemeToggle (action · header · required)
- AccountMenu (navigation-item · header · required)
- ErrorStateIllustration (text · main · required)
- ErrorMessage (text · main · required)
- RetryButton (action · main · required)
- SupportContactCard (panel · context-rail)
- TroubleshootingTips (panel · context-rail)
- PlanLimitMessage (text · main)
- UpgradePlanLink (action · main)
- PermissionDeniedMessage (text · main · required)
- OrderList (table-column · main)
- OrderStatusFilter (filter · filters)
- OrderMetrics (metric · main)
- OrderNotificationBadge (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Detail Drawer (Seller) (/dashboard/seller/order/:id) [default] layout=master-detail
Regions:
- header — Order summary and quick status recognition [OrderIdBadge, OrderStatusBadge, OrderDate, CloseDrawerButton]
- main — Displays painting, buyer, delivery, payment, and order actions [PaintingImageCard, PaintingTitle, PaintingShortDescription, PaintingSize, PaintingPrice, DeliveryFee, TotalAmount, BuyerInfoCard]
- context-rail — Shows order activity, cancellation/return requests, and delivery partner info [OrderActivityTimeline, CancellationOrReturnRequestCard, DeliveryPartnerInfoCard]
Fields:
- Order ID (text · header · required)
- Order Status (badge · header · required)
- Order Date (date · header · required)
- Painting Image (image · main · required)
- Painting Title (text · main · required)
- Painting Short Description (text · main)
- Painting Size (text · main · required)
- Painting Price (number · main · required)
- Delivery Fee (number · main · required)
- Total Amount (number · main · required)
- Buyer Name (text · main · required)
- Buyer Phone (text · main · required)
- Buyer Email (text · main)
- Delivery Address (text · main · required)
- Payment Method (badge · main · required)
- Order Notes (text · main)
- Order Timeline (list · main)
- Order Activity Timeline (list · context-rail)
- Cancellation/Return Request (badge · context-rail)
- Delivery Partner Info (text · context-rail)
- Mark as Shipped (action · main · required)
- Review Request (action · main)
- Download Invoice (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Error Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Order Request Review Modal (Seller) (/dashboard/seller/order/:id/request-review) [default] layout=single-column-form
Regions:
- header — Request summary and close action [RequestTypeBadge, CloseModalButton]
- main — Shows request details, reason, supporting info, and approve/reject actions [RequestReasonText, SupportingInfoAttachment, BuyerMessage, OrderSummaryCard, ApproveButton, RejectButton]
Fields:
- Request Type (badge · header · required)
- Request Reason (text · main · required)
- Supporting Info (upload · main)
- Buyer Message (text · main)
- Order Summary (text · main)
- Approve (action · main · required)
- Reject (action · main · required)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Error Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Mark Order as Shipped Modal (Seller) (/dashboard/seller/order/:id/mark-shipped) [default] layout=single-column-form
Regions:
- main — Confirmation and undo for marking order as shipped [ConfirmationMessage, OrderSummaryCard, DeliveryPartnerDropdown, ConfirmMarkShippedButton, UndoButton]
Fields:
- Confirmation Message (text · main · required)
- Order Summary (text · main)
- Delivery Partner (dropdown · main · required)
- Confirm Mark Shipped (action · main · required)
- Undo (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Error Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Painting Listing Management Drawer (Seller) (/dashboard/seller/paintings) [default] layout=two-column-main-rail
Regions:
- header — Page title, add new painting action, and language/theme toggles. [PageTitle: 'My Paintings', AddPaintingButton, LanguageToggle, ThemeToggle]
- main — List of all paintings with edit/remove actions. [PaintingListTable, EditPaintingAction, RemovePaintingAction]
- context-rail — Quick painting preview and details when a row is selected. [PaintingPreviewCard, PaintingDetailsPanel]
Fields:
- Painting Image (table-column · table · required)
- Painting Title (table-column · table · required)
- Short Description (table-column · table · required)
- Price (table-column · table · required)
- Size (table-column · table · required)
- Status Badge (badge · table)
- Edit Painting (action · table · required)
- Remove Painting (action · table · required)
- Add Painting (action · header · required)
- Search Paintings (filter · filters)
- Language Toggle (action · header · required)
- Theme Toggle (action · header · required)
- Error Message (text · main)
- Retry Button (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Filters:
- Search Paintings (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add Painting Modal (Seller) (/dashboard/seller/paintings/add) [default] layout=single-column-form
Regions:
- main — Form for entering painting details and uploading image. [PaintingImageUpload, PaintingImagePreview, TitleField, ShortDescriptionField, PriceField, SizeField, SaveButton, CancelButton]
Fields:
- Painting Image Upload (form-field · main · required)
- Painting Image Preview (form-field · main)
- Title Field (form-field · main · required)
- Short Description Field (form-field · main · required)
- Price Field (form-field · main · required)
- Size Field (form-field · main · required)
- Save Button (action · main · required)
- Cancel Button (action · main · required)
- Form Validation Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Language Toggle (action · main · required)
- Theme Toggle (action · main · required)
Statuses: default, loading, error, plan_limit, permission_denied, invalid_upload

### Edit Painting Modal (Seller) (/dashboard/seller/paintings/:id/edit) [default] layout=single-column-form
Regions:
- main — Form for editing painting details and re-uploading image. [PaintingImageUpload, PaintingImagePreview, TitleField, ShortDescriptionField, PriceField, SizeField, SaveButton, CancelButton]
Fields:
- Painting Image Upload (form-field · main · required)
- Painting Image Preview (form-field · main)
- Title Field (form-field · main · required)
- Short Description Field (form-field · main · required)
- Price Field (form-field · main · required)
- Size Field (form-field · main · required)
- Save Button (action · main · required)
- Cancel Button (action · main · required)
- Form Validation Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Language Toggle (action · main · required)
- Theme Toggle (action · main · required)
Statuses: default, loading, error, plan_limit, permission_denied, invalid_upload

### Remove Painting Confirmation Modal (Seller) (/dashboard/seller/paintings/:id/remove) [default] layout=single-column-form
Regions:
- main — Display confirmation message, painting summary, and removal actions. [PaintingThumbnail, PaintingTitle, PaintingShortDescription, PaintingPrice, PaintingSize, RemoveConfirmationText, UndoRemovalBadge, RemoveButton]
Fields:
- PaintingThumbnail (text · main · required)
- PaintingTitle (text · main · required)
- PaintingShortDescription (text · main)
- PaintingPrice (number · main)
- PaintingSize (text · main)
- RemoveConfirmationText (text · main · required)
- RemoveButton (action · main · required)
- CancelButton (action · main · required)
- UndoRemovalBadge (badge · main)
- ErrorMessage (text · main)
- LoadingSpinner (text · main)
- PlanLimitBadge (badge · main)
- PermissionDeniedMessage (text · main)
- EmptyStateMessage (text · main)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Settings & Preferences (/settings) [default] layout=two-column-main-rail
Regions:
- main — Primary settings management: language, theme, notification preferences. [LanguageSelector, ThemeToggle, NotificationPreferencesSummary, EditNotificationPreferencesButton, AccountInfoSection, LogoutButton]
- context-rail — Display account avatar, logo, and quick links to support or feedback. [UserAvatar, Logo, SupportLink, FeedbackLink]
Fields:
- LanguageSelector (form-field · main · required)
- ThemeToggle (form-field · main · required)
- NotificationPreferencesSummary (text · main · required)
- EditNotificationPreferencesButton (action · main · required)
- AccountInfoSection (form-field · main · required)
- LogoutButton (action · main · required)
- UserAvatar (text · context-rail)
- Logo (text · context-rail)
- SupportLink (action · context-rail)
- FeedbackLink (action · context-rail)
- LoadingSpinner (text · main)
- ErrorMessage (text · main)
- PlanLimitBadge (badge · main)
- PermissionDeniedMessage (text · main)
- EmptyStateMessage (text · main)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Notification Preferences Modal (/settings/notifications) [default] layout=single-column-form
Regions:
- main — Allow user to enable/disable notification channels. [NotificationChannelEmailToggle, NotificationChannelInAppToggle, NotificationChannelSMSToggle, SaveButton, CancelButton, LoadingSpinner, ErrorMessage]
Fields:
- NotificationChannelEmailToggle (form-field · main · required)
- NotificationChannelInAppToggle (form-field · main · required)
- NotificationChannelSMSToggle (form-field · main · required)
- SaveButton (action · main · required)
- CancelButton (action · main · required)
- LoadingSpinner (text · main)
- ErrorMessage (text · main)
- PlanLimitBadge (badge · main)
- PermissionDeniedMessage (text · main)
- EmptyStateMessage (text · main)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Notifications Center (/notifications) [default] layout=two-column-main-rail
Regions:
- header — Page title, notification settings, and quick actions. [PageTitle, NotificationSettingsButton, MarkAllAsReadButton]
- filters — Filter and search notifications by type, status, and date. [NotificationTypeFilter, ReadStatusFilter, DateRangeFilter, SearchInput]
- main — Displays the list of notifications with actionable links. [NotificationList, NotificationCard, PaginationControls]
- context-rail — Shows notification preferences, tips, and quick links to order dashboard. [NotificationPreferencesPanel, QuickLinksPanel]
Fields:
- Notification Type (filter · filters · required)
- Read Status (filter · filters · required)
- Date Range (filter · filters)
- Search (filter · filters)
- Notification List (list · main · required)
- Notification Card (table-column · main · required)
- Notification Title (text · main · required)
- Notification Body (text · main · required)
- Notification Timestamp (date · main · required)
- Notification Type Badge (badge · main)
- Order Reference Link (action · main)
- Mark as Read/Unread Action (action · main · required)
- Delete Notification Action (action · main)
- Mark All as Read Action (action · header)
- Pagination Controls (action · main)
- Notification Preferences Panel (panel · context-rail)
- Quick Links Panel (panel · context-rail)
- Empty State Illustration (illustration · main)
- Empty State Message (text · main)
- Notification List Skeleton (list · main)
- Error Message (text · main)
- Retry Action (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan Action (action · main)
- Clear Old Notifications Action (action · main)
- Permission Denied Message (text · main)
Filters:
- Notification Type (multi-select)
- Read Status (toggle)
- Date Range (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Notifications Center (Empty State) (/notifications) [empty] layout=two-column-main-rail
Regions:
- header — Page title and quick actions. [PageTitle, NotificationSettingsButton]
- filters — Filter and search notifications (still available in empty state). [NotificationTypeFilter, ReadStatusFilter, DateRangeFilter, SearchInput]
- main — Displays empty state illustration and message. [EmptyStateIllustration, EmptyStateMessage]
- context-rail — Shows notification preferences and quick links. [NotificationPreferencesPanel, QuickLinksPanel]
Fields:
- Notification Type (filter · filters · required)
- Read Status (filter · filters · required)
- Date Range (filter · filters)
- Search (filter · filters)
- Empty State Illustration (illustration · main · required)
- Empty State Message (text · main · required)
- Notification Preferences Panel (panel · context-rail)
- Quick Links Panel (panel · context-rail)
- Notification List Skeleton (list · main)
- Error Message (text · main)
- Retry Action (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan Action (action · main)
- Clear Old Notifications Action (action · main)
- Permission Denied Message (text · main)
Filters:
- Notification Type (multi-select)
- Read Status (toggle)
- Date Range (date-range)
- Search (search)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Notifications Center (Loading) (/notifications) [loading] layout=two-column-main-rail
Regions:
- header — Page title and quick actions. [PageTitle, NotificationSettingsButton]
- filters — Filter and search notifications (disabled during loading). [NotificationTypeFilter, ReadStatusFilter, DateRangeFilter, SearchInput]
- main — Displays skeleton loaders for notification cards. [NotificationListSkeleton]
- context-rail — Shows notification preferences and quick links. [NotificationPreferencesPanel, QuickLinksPanel]
Fields:
- Notification Type (filter · filters · required)
- Read Status (filter · filters · required)
- Date Range (filter · filters)
- Search (filter · filters)
- Notification List Skeleton (list · main · required)
- Notification Preferences Panel (panel · context-rail)
- Quick Links Panel (panel · context-rail)
- Empty State Illustration (illustration · main)
- Empty State Message (text · main)
- Error Message (text · main)
- Retry Action (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan Action (action · main)
- Clear Old Notifications Action (action · main)
- Permission Denied Message (text · main)
Filters:
- Notification Type (multi-select)
- Read Status (toggle)
- Date Range (date-range)
- Search (search)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Notifications Center (Error) (/notifications) [error] layout=two-column-main-rail
Regions:
- main — Displays error state, error details, and retry action for notification center. [ErrorIcon, ErrorMessageText, ErrorDetailsTooltip, RetryButton]
- context-rail — Provides navigation to other notification-related or dashboard areas. [NotificationsNavList, BackToDashboardLink]
Fields:
- ErrorIcon (icon · main · required)
- ErrorMessageText (text · main · required)
- ErrorDetailsTooltip (tooltip · main)
- RetryButton (action · main · required)
- LoadingSpinner (icon · main · required)
- PlanLimitBanner (badge · main)
- UpgradePlanLink (action · main)
- PermissionDeniedIcon (icon · main · required)
- PermissionDeniedMessage (text · main · required)
- NotificationsNavList (navigation-item · context-rail · required)
- BackToDashboardLink (navigation-item · context-rail · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Logo Recommendation Modal (/logo-recommendation) [default] layout=single-column-form
Regions:
- main — Showcases logo preview and allows seller to accept or request revision. [LogoPreviewImage, LogoDescriptionText, AcceptLogoButton, RequestRevisionButton, LogoPlacementPreviewToggle, ThemeModeToggle]
Fields:
- LogoPreviewImage (image · main · required)
- LogoDescriptionText (text · main · required)
- AcceptLogoButton (action · main · required)
- RequestRevisionButton (action · main · required)
- LogoPlacementPreviewToggle (toggle · main)
- ThemeModeToggle (toggle · main)
- LoadingSpinner (icon · main · required)
- ErrorMessageText (text · main · required)
- RetryButton (action · main)
- PlanLimitBanner (badge · main)
- UpgradePlanLink (action · main)
- PermissionDeniedMessage (text · main · required)
- EmptyStateMessage (text · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Access Denied State (/*) [permission-denied] layout=single-column-form
Regions:
- main — Informs user of access denial, provides login prompt and navigation options. [PermissionDeniedIcon, PermissionDeniedMessage, LoginPromptButton, BackToHomeLink, LanguageSwitcher]
Fields:
- PermissionDeniedIcon (icon · main · required)
- PermissionDeniedMessage (text · main · required)
- LoginPromptButton (action · main · required)
- BackToHomeLink (navigation-item · main · required)
- LanguageSwitcher (action · main)
- LoadingSpinner (icon · main · required)
- ErrorMessageText (text · main · required)
- PlanLimitBanner (badge · main)
- UpgradePlanLink (action · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### 404 Not Found State (/*) [not-found] layout=single-column-form
Regions:
- main — Communicates the 404 error, provides visual feedback, and offers a clear path to recover navigation. [NotFoundIllustration, NotFoundMessage, HomeNavigationAction, ThemeToggle, LanguageSwitcher, Logo]
Fields:
- NotFoundIllustration (text · main · required)
- NotFoundMessage (text · main · required)
- HomeNavigationAction (action · main · required)
- ThemeToggle (action · main)
- LanguageSwitcher (action · main)
- Logo (navigation-item · main)
- LoadingSpinner (text · main)
- ErrorMessage (text · main)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

## 5. Design guidelines (tokens / UX validation — secondary to §1–§3)

Guideline files in the repo under `.ops4/design-system/` (validation / tokens / a11y — do NOT override screen composition in the locked build prompt):
- `.ops4/design-system/01_design_system.md` — Design system
- `.ops4/design-system/02_ux_principles.md` — UX principles
- `.ops4/design-system/03_screen_composition.md` — Screen composition
- `.ops4/design-system/04_form_patterns.md` — Form patterns
- `.ops4/design-system/05_table_patterns.md` — Table patterns
- `.ops4/design-system/06_dashboard_patterns.md` — Dashboard patterns
- `.ops4/design-system/07_navigation_patterns.md` — Navigation patterns
- `.ops4/design-system/08_feedback_patterns.md` — Feedback patterns
- `.ops4/design-system/09_layout_patterns.md` — Layout patterns
- `.ops4/design-system/10_responsive_patterns.md` — Responsive patterns
- `.ops4/design-system/11_accessibility_rules.md` — Accessibility rules
- `.ops4/design-system/12_content_guidelines.md` — Content guidelines
- `.ops4/design-system/13_interaction_patterns.md` — Interaction patterns
- `.ops4/design-system/14_ai_validation_rules.md` — AI validation rules
Also: `.ops4/design-system/README.md` (conflict priority) and `.ops4/design-system/DESIGN_SYSTEM.md` (index).
Index URL: https://github.com/ahsanaasim/test-repo-painting-app/blob/ai-build/preview-var1-issue-2-implement-catalog-browse-ui-variation-full-app-p/.ops4/design-system/DESIGN_SYSTEM.md
# Aperture UI/UX guideline pack

This file concatenates all guideline slots for the coding agent.
Prefer individual files under `.ops4/design-system/` when available.

## Conflict priority (README)

# UI / UX guidelines (Aperture Design Governance)

Version: 1.1

These files are the **default** source of truth for Design Brain / Build Now / Cursor.

## Design Brain

Each project Design Brain shows **14 slots** (one per file below).

- If a slot has **no upload**, the matching default file from this folder is used.
- If a user **uploads** a `.md`/`.txt` file for a slot, that override is stored on the project baseline and used instead.
- **Preview** always shows the *effective* content (override or default).
- Build Now / Cursor always receives all 14 effective documents under `.ops4/design-system/`.

## File index

| File | Role |
|------|------|
| `01_design_system.md` | Visual tokens, components, motion, casing matrix |
| `02_ux_principles.md` | UX philosophy (when other docs are silent) |
| `03_screen_composition.md` | Page anatomy (header, filters, content, footer) |
| `04_form_patterns.md` | Forms, fields, validation timing |
| `05_table_patterns.md` | Tables / data tables (when features are required) |
| `06_dashboard_patterns.md` | Dashboard structure & KPI patterns |
| `07_navigation_patterns.md` | App nav, breadcrumbs, wayfinding |
| `08_feedback_patterns.md` | Loading, toasts, empty, confirm, undo |
| `09_layout_patterns.md` | Grid, widths, spacing, placement |
| `10_responsive_patterns.md` | Breakpoints & device adaptations |
| `11_accessibility_rules.md` | WCAG 2.1 AA, keyboard, ARIA |
| `12_content_guidelines.md` | Copy tone, labels, microcopy |
| `13_interaction_patterns.md` | States, gestures, animation behavior |
| `14_ai_validation_rules.md` | Pre-ship checklist (must not invent new policy) |

Optional companion: `tokens.css` (CSS variables mirroring `01`).

## Conflict priority (highest wins)

When two files disagree, apply in this order:

1. **`11_accessibility_rules.md`** — accessibility blockers always win  
2. **`01_design_system.md`** — tokens, components, Sheet/Drawer, casing matrix  
3. **Domain patterns** — `04` forms · `05` tables · `06` dashboards · `07` nav · `08` feedback  
4. **Structure** — `03` composition · `09` layout · `10` responsive  
5. **`12_content_guidelines.md`** — copy (must match `01` casing matrix)  
6. **`13_interaction_patterns.md`** — interaction polish  
7. **`02_ux_principles.md`** — philosophy only when others are silent  
8. **`14_ai_validation_rules.md`** — checklist only; never overrides higher docs  

## Canonical reconciled rules (v1.1)

Agents must treat these as authoritative:

### Primary CTA
- Exactly **one** orange `primary` button in the **page header** (page chrome).
- Nested cards/panels use `secondary` / `ghost`.
- **Exception:** a focused task surface (dialog, sheet/drawer body, or empty-state recovery) may contain **one** primary.
- Never show two or more primary fills in the same viewport.

### Sheet vs Drawer
- **≥ 640px:** edge panel = shadcn **Sheet** (desktop/tablet secondary panels, filters, details).
- **&lt; 640px:** same pattern = shadcn **Drawer** (bottom sheet).
- Do not put full multi-step workflows inside Sheet/Drawer.
- “Right drawer” in older wording means **Sheet** on desktop.

### Destructive actions
- **Recoverable** (soft delete, archive, dismiss) → perform action + **Undo toast** (~10s). No modal.
- **Irreversible / high-impact** (permanent delete, purge, cancel subscription) → **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

### Validation timing (forms)
1. Do **not** validate aggressively on every keystroke before first blur.
2. After a field is touched/blurred → validate that field on subsequent changes.
3. On submit → validate all; move focus to first invalid; announce errors accessibly.
4. Success → toast or inline confirmation.

### Capitalization
Follow the matrix in `01` §8 (mirrored in `12`):
- Actions, form labels, toasts → **sentence case** (`Email address`, `Save changes`)
- Page titles, section headers, nav labels → **Title Case** (`Account Settings`)

### Motion
- Interactive transitions: **150–200ms** on named easings.
- Overlay enter/exit: up to **300ms** allowed.
- Continuous indicators (spinner ~700ms loop, skeleton shimmer) are exempt; honor `prefers-reduced-motion`.

### Spacing
Use the 4px rail in `01`. Mapped common values:
- 8 / 16 / 24 / 32 / 48 → `space-2` / `space-4` / `space-6` / `space-8` / `space-12`
- Page section-to-section = **48px** (`space-12`), not invented values.

### Typography floor
- Primary reading body ≥ **16px**.
- `body-small` **14px** = metadata/captions only.
- `label` **13px** = form labels, chips, button text — OK.

### Error feedback
- Recoverable / non-blocking → toast (assertive OK) with retry when useful.
- Critical / blocking → persistent Alert or modal — **never toast-only**.

---

## 01_design_system — Design system

Source: default (01_design_system.md)

# Aperture — Design System Guidelines

Version: 1.1  
Part of: Aperture Design Governance

**Source of truth for visual UI.** Coding agents (Cursor / Build Now) and humans must follow this file over generic aesthetics, invented palettes, or ad-hoc component styles.

For cross-file conflict priority and the canonical CTA / Sheet-Drawer / delete / validation rules, see `README.md`.

| Item | Value |
|------|--------|
| System name | **Aperture** |
| Stack | React + Tailwind CSS + **shadcn/ui** patterns |
| Icons | **Phosphor Icons** (`@phosphor-icons/web`) |
| Themes | Light + Dark (`class` strategy) |
| Direction | LTR + RTL (`dir` on `<html>`) |
| Contrast | WCAG 2.1 AA |

---

## 1. Non‑negotiable rules

1. **Do not invent a new visual language.** Use Aperture tokens, zinc neutrals, and orange brand accents below.
2. **One primary CTA in page chrome.** Exactly one orange `primary` in the page header. Nested cards use `secondary`/`ghost`. Focused task surfaces (dialog, sheet/drawer, empty-state) may have one primary. Never two primary fills in one viewport.
3. **Never encode meaning by color alone.** Pair status with icon + text.
4. **Focus rings are mandatory.** Orange 2px ring + 2px offset — never remove without a visible replacement.
5. **Sentence case for actions and form labels;** Title Case for page/nav headers (see §8).
6. **Motion:** interactive transitions **150–200ms**; overlay enter/exit up to **300ms**; spinner/shimmer loops exempt. Honor `prefers-reduced-motion`.
7. **≥ 640px** secondary panels use **Sheet**; **&lt; 640px** the same pattern uses bottom **Drawer**.
8. Use **logical CSS** (`ms`/`me`, `border-s`, `start`/`end`) — no hard-coded left/right that breaks RTL.
9. Prefer existing **shadcn/ui** components over custom one-offs.
10. When this file conflicts with a generic “make it pretty” instinct, **this file wins** (accessibility in `11` still outranks this file).

---

## 2. Brand & aesthetic

- **Look:** Clean product UI — zinc surfaces, subtle borders, restrained elevation, orange accent.
- **Not:** Purple gradients, glassmorphism noise, neon glow, heavy multi-layer shadows, random decorative cards.
- **Canvas:** Light `#fafafa` / Dark `#09090b`
- **Surfaces:** Light `#ffffff` / Dark `#18181b` (cards, panels)
- **Brand / primary fill:** `#f97316` (orange-500/600 family); hover darkens in light, lightens in dark
- **Destructive:** Rose (`#e11d48` light / `#fb7185` dark)
- **Fonts:** System UI sans (`ui-sans-serif`, system-ui, Segoe UI, Roboto, Helvetica, Arial); mono for code chips

### Shared shell primitives (Tailwind)

```
CARD = rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900
RING = focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
       focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950
```

---

## 3. Color tokens

### Semantic roles

| Token | Role | Light | Dark | Use |
|-------|------|-------|------|-----|
| `bg/canvas` | Page canvas | `#fafafa` | `#09090b` | Lowest layer; don’t put long-form text directly on canvas without a surface |
| `bg/surface` | Card / panel | `#ffffff` | `#18181b` | Default elevated container; pair with `border/subtle` |
| `bg/muted` | Inset fill | `#f4f4f5` | `#27272a` | Wells, code blocks, secondary rows |
| `fg/default` | Primary action fill | `#f97316` | `#f97316` | Primary buttons; **white** label/icons for AA |
| `fg/hover` | Primary hover | `#ea580c` | `#fb923c` | Darken in light; lighten in dark |
| `fg/neutral` | Secondary fill | `#e4e4e7` | `#3f3f46` | Secondary / ghost resting fill |
| `text/primary` | Body & headings | `#18181b` | `#fafafa` | ≥ 4.5:1 on surface |
| `text/secondary` | Supporting copy | `#52525b` | `#a1a1aa` | Metadata, helpers (≥ 4.5:1) |
| `text/disabled` | Disabled label | `#a1a1aa` | `#52525b` | Always pair with non-color disabled cues |
| `icon/interactive` | Actionable icon | `#ea580c` | `#fb923c` | ≥ 3:1 graphical contrast |
| `icon/neutral` | Informational icon | `#52525b` | `#a1a1aa` | ≥ 3:1; pair with text if status |
| `border/subtle` | Structural line | `#e4e4e7` | `#27272a` | Cards, dividers |
| `border/strong` | Input border | `#a1a1aa` | `#52525b` | Form affordance (~3:1 vs surface) |
| `border/focus` | Focus ring | `#f97316` | `#f97316` | Keyboard focus only — never structure |
| `status/success` | Success | `#059669` | `#34d399` | + check glyph |
| `status/info` | Info | `#2563eb` | `#60a5fa` | Tips, in-progress |
| `status/warning` | Warning | `#d97706` | `#fbbf24` | + warning glyph |
| `status/error` | Error | `#e11d48` | `#fb7185` | Blocking; announce with `aria-live` |

### Charts (Okabe–Ito–derived — color-blind safe)

| Token | Hex | Name |
|-------|-----|------|
| `charts/1` | `#0072b2` | Blue |
| `charts/2` | `#e69f00` | Orange |
| `charts/3` | `#009e73` | Green |
| `charts/4` | `#cc79a7` | Pink |
| `charts/5` | `#56b4e9` | Sky |
| `charts/6` | `#d55e00` | Vermillion |
| `charts/7` | `#f0e442` | Yellow |
| `charts/8` | `#525252` | Grey |

Always encode series with **color + label/pattern**, never hue alone.

### Badge / pill tones

`zinc` | `orange` | `emerald` | `rose` | `blue` | `amber` — soft filled pills with matching border; map to status semantics.

---

## 4. Typography

| Token | Desktop | Tablet | Mobile | Weight | Tracking | Rule |
|-------|---------|--------|--------|--------|----------|------|
| `display1` | 60/64 | 52/56 | 40/44 | 700 | -0.02em | Marketing heroes only — never dense product UI |
| `display2` | 48/52 | 40/44 | 34/38 | 700 | -0.02em | Secondary marketing splash |
| `h1` | 36/40 | 32/36 | 28/32 | 700 | -0.01em | **One per page/view** |
| `h2` | 28/34 | 26/32 | 24/30 | 600 | -0.01em | Module / major section titles |
| `title` | 20/28 | 18/26 | 18/26 | 600 | 0 | Card headers, dialog titles |
| `body` | 16/24 | 16/24 | 16/24 | 400 | 0 | Default reading size |
| `body-small` | 14/20 | 14/20 | 14/20 | 400 | 0 | Secondary metadata only |
| `label` | 13/16 | 13/16 | 13/16 | 500 | 0.01em | Form labels, buttons, chips — sentence case |
| `overline` | 11/16 | 11/16 | 11/16 | 600 | 0.12em | Eyebrows — uppercase + tracked |

Contrast: body/label ≥ **4.5:1**; large headings ≥ **3:1**.

**Size floor:** primary reading body ≥ **16px**. `body-small` (14px) is metadata only. `label` (13px) is OK for controls.

---

## 5. Spacing, radius, elevation

### Spacing (4px rail)

| Token | px | Use |
|-------|-----|-----|
| `space-1` | 4 | Icon–label gap |
| `space-2` | 8 | Chip / badge padding |
| `space-3` | 12 | Compact control padding (S) |
| `space-4` | 16 | Default container / M control padding |
| `space-5` | 20 | Card internal padding |
| `space-6` | 24 | Section gaps / card gutters |
| `space-8` | 32 | Grouped blocks; desktop page padding |
| `space-10` | 40 | Tablet region gaps |
| `space-12` | 48 | Page section-to-section rhythm |

### Radius

| Token | px | Tailwind | Use |
|-------|-----|----------|-----|
| `radius-sm` | 6 | `rounded-md` | Inputs, small buttons, checkboxes |
| `radius-md` | 8 | `rounded-lg` | Default buttons, menus, alerts |
| `radius-lg` | 12 | `rounded-xl` | Cards, dialogs, sheets, popovers |
| `radius-xl` | 16 | `rounded-2xl` | Large marketing / media |
| `radius-full` | 9999 | `rounded-full` | Pills, avatars, switch thumbs |

### Shadows

| Token | Use |
|-------|-----|
| `shadow-xs` / `shadow-sm` | Resting buttons, inputs, chips |
| `shadow` | Cards on canvas |
| `shadow-md` | Dropdowns, popovers, hover cards |
| `shadow-lg` | Menus, comboboxes, toasts |
| `shadow-xl` | Modals, sheets, drawers |

---

## 6. Iconography (Phosphor)

- Library: [phosphoricons.com](https://phosphoricons.com/)
- Weights: `thin` | `light` | `regular` | `bold` | `fill` | `duotone`
- Usage: **Regular** resting · **Bold/Fill** active/selected
- Sizes: **16 / 20 / 24 / 28** (4px steps)
- Custom icons: 24×24 grid, 2px stroke, 2px live padding, rounded terminals, optical center
- Roles:
  - **Actionable** — 3:1 + accessible name
  - **Informational** — pair with text
  - **Decorative** — `aria-hidden="true"`
- RTL: directional icons use `.flip-x` (`scaleX(-1)`)

---

## 7. Motion & interaction states

### Easing (Tailwind / CSS)

| Name | Curve | Typical duration |
|------|-------|------------------|
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | 150–200ms |
| `emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | 200ms |
| `decelerate` | `cubic-bezier(0, 0, 0, 1)` | 150ms |
| `accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | 150ms |

### Motion presets

| Preset | Duration | Behavior |
|--------|----------|----------|
| Press | 150ms | `scale(0.98)` on active |
| Fade | 150ms | Opacity 0→1 |
| Expand | 200ms | Height + chevron |
| Slide | 200ms | `translateY(8–12px)` + fade |
| Overlay | 200–300ms | Scrim fade + panel slide (**exception** to 200ms cap) |
| Thumb | 150ms | Switch knob travel |
| Shimmer | 1400ms | Skeleton sweep (**continuous**; disable if reduced-motion) |
| Spin | 700ms linear | Spinner (**continuous**; slow/fade if reduced-motion) |

**Rule:** UI state transitions stay in 150–200ms. Overlay entrance may use up to 300ms. Continuous loops are not “transitions” but must respect reduced motion.

### Control states (all interactive controls)

`Default` · `Hover` · `Focus` · `Active` · `Disabled` · `Loading`

Sizes: **S** `h-8` · **M** `h-9` · **L** `h-11`

### Buttons

| Variant | Style |
|---------|--------|
| `primary` | Orange fill, white text |
| `secondary` | Surface + zinc border |
| `ghost` | Transparent, zinc text, muted hover |
| `destructive` | Rose fill, white text |
| `link` | Orange text, underline on hover |

Labels: sentence-case **verbs** (“Save changes”). Loading → spinner + `aria-busy` + disabled.

### Inputs

- Radius `rounded-md`, strong border; invalid → rose border + `aria-invalid`
- Always visible `<label>` — **never** placeholder-as-label
- **Validation timing** (canonical — also in `04` / README):
  1. Do not validate aggressively on every keystroke before first blur
  2. After touch/blur → validate that field on subsequent changes
  3. On submit → validate all; focus first invalid; announce errors
  4. Success → toast or inline confirmation

### Overlays

- Scrim: `bg-black/50` + light blur
- Esc + outside click dismiss (except alert dialogs where Cancel is explicit)
- Focus trap; restore focus to trigger on close
- Toasts: bottom-end stack, `aria-live="polite"` (assertive OK for **recoverable** errors), max ~3, pause on hover
- **Never toast-only for irreversible/blocking failures** — use Alert Dialog or persistent Alert
- **Destructive policy:** recoverable → Undo toast (~10s); irreversible/high-impact → Alert Dialog

---

## 8. Editorial / copy

### Tone

| Do | Don’t |
|----|--------|
| Clear, direct, human (“Your changes are saved.”) | Robotic (“Operation completed successfully.”) |
| Confident, not boastful (“Deploy in one click.”) | Hype (“The world’s most powerful…”) |
| Blame-free errors (“We couldn’t reach the server.”) | Accusatory (“You entered an invalid value.”) |
| Concise active voice (“Add a member.”) | Passive padding |

### Capitalization

| Surface | Style | Example |
|---------|--------|---------|
| Buttons & actions | Sentence case | Save changes |
| Tooltips & helpers | Sentence case | Add to your library |
| Page & section headers | Title Case | Account Settings |
| Navigation labels | Title Case | Billing & Plans |
| Form labels | Sentence case | Email address |
| Toast / banner titles | Sentence case | Event created |

### Length limits

| Surface | Max chars |
|---------|-----------|
| Toast title | 60 |
| Banner body | 120 |
| Notification card | 90 |

---

## 9. Accessibility & i18n

- WCAG 2.1 AA contrast (see §3)
- Keyboard: Tab order intact; Esc closes top overlay; menus/tabs/radios follow WAI-ARIA patterns
- Icon-only controls need `aria-label`
- Status / errors: text + icon; errors use `role="alert"` / `aria-live="assertive"` when injected
- Charts: provide summary/`role="img"` + data table alternative when practical
- **RTL:** set `dir="rtl"`; mirror arrows/carets; sheets slide from logical end; pagination arrows flip
- Reduced motion: no infinite shimmer/pulse; prefer opacity fades

### Global keyboard expectations

| Context | Key | Behavior |
|---------|-----|----------|
| Global | Tab / Shift+Tab | Move focus |
| Global | Esc | Dismiss top overlay |
| Buttons | Enter / Space | Activate |
| Menus | ↑ ↓ · Home/End | Navigate items |
| Tabs | ← → | Move tabs |
| Radio | Arrows | Move selection |
| Combobox | Alt+↓ | Open listbox |
| Calendar/Grid | Arrows · PageUp/Down | Navigate |
| Slider | ← → · Home/End | Step / jump |
| Dialog | Tab | Cycle inside only |

---

## 10. Layout & responsive behavior

- App shell: often **sidebar nav** + main content; collapse to icons / off-canvas on narrow screens
- Cards: `radius-lg`, `space-5` padding; card actions are `secondary`/`ghost` unless the card is a focused task surface
- Tables: see `05_table_patterns.md` — Data Table features only when the task needs them
- Empty states: icon in soft circle + title + why + **one recovery CTA**
- **Viewport rule:** `≥ 640px` → side **Sheet**; `< 640px` → bottom **Drawer** for secondary panels/filters

---

## 11. Component inventory

Prefer **shadcn/ui** docs for implementation. Use each component for its intended job.

### Core (shadcn)

Accordion · Alert · Alert Dialog · Aspect Ratio · Avatar · Badge · Breadcrumb · Button · Button Group · Calendar · Card · Carousel · Chart · Checkbox · Collapsible · Combobox · Command · Context Menu · Data Table · Date Picker · Dialog · Drawer · Dropdown Menu · Empty · Hover Card · Input · Input Group · Input OTP · Label · Menubar · Native Select · Navigation Menu · Pagination · Popover · Progress · Radio Group · Resizable · Scroll Area · Select · Separator · Sheet · Sidebar · Skeleton · Slider · Sonner (Toast) · Spinner · Switch · Table · Tabs · Textarea · Toggle · Toggle Group · Tooltip

### Brand / chat / media (Aperture)

| Component | When |
|-----------|------|
| Attachment | Inline file chip (type + name + size + action) |
| AttachmentNew | Post-upload confirmed / emphasized attachment |
| Bubble | Compact chat bubble (own = end, other = start) |
| BubbleNew | Emphasized bubble (ring/shadow) — sparingly |
| Message | Avatar + author + timestamp + body |
| MessageNew | Carded / pinned message |
| Message Scroller | Live thread `role="log"`; stick to bottom only if already at bottom |
| Message ScrollerNew | + typing indicator |
| Marker | Map/timeline annotation |
| MarkerNew | Live/now marker (pulse; respect reduced-motion) |

**Chat a11y:** message list = `aria-live="polite"` log; sender via alignment + label, not color alone; timestamps use `<time datetime>`.

### Component selection cheatsheet

| Need | Use | Avoid |
|------|-----|--------|
| Primary action | One `primary` in page header (or focused task surface) | Multiple primaries in one viewport |
| Confirm irreversible destroy | Alert Dialog | Toast-only |
| Recoverable delete/archive | Undo toast (~10s) | Alert Dialog fatigue |
| Transient feedback | Sonner | Blocking Alert Dialog |
| Persistent inline notice | Alert | Toast |
| Blocking / critical failure | Alert or modal | Toast-only |
| Short text | Input | Textarea |
| Choices ≤ ~6 visible | Radio / Select | Combobox |
| Searchable long list | Combobox | Select |
| Instant setting | Switch | Checkbox + Save |
| Form multi-select | Checkbox | Switch |
| Side panel desktop (≥640) | Sheet | Drawer |
| Side panel mobile (&lt;640) | Drawer | Sheet |
| Page sections peers | Tabs | Accordion (unless stack needed) |
| Dense sort/filter data | Data Table | static Table |

---

## 12. Implementation checklist (for agents)

When building or changing UI:

- [ ] Zinc + orange Aperture palette (light/dark classes)
- [ ] Phosphor icons at 16/20/24/28; decorative icons `aria-hidden`
- [ ] Focus ring on all interactive controls
- [ ] Labels on every input; errors linked via `aria-describedby`
- [ ] Spacing on the 4px scale; section-to-section `space-12` (48px); cards `rounded-xl` + subtle border
- [ ] One primary in page header; no stacked primaries
- [ ] Sheet (≥640) / Drawer (&lt;640) for secondary panels
- [ ] Motion: 150–200ms transitions; overlays ≤300ms; reduced-motion safe
- [ ] Status colors always with icon + text
- [ ] Prefer shadcn components from §11 over custom widgets
- [ ] Validation timing per Inputs section / README

---

## 13. Optional CSS variables (tokens.css)

Agents may commit a companion `tokens.css` mapping the semantic tokens above, e.g.:

```css
:root {
  --bg-canvas: #fafafa;
  --bg-surface: #ffffff;
  --bg-muted: #f4f4f5;
  --fg-default: #f97316;
  --fg-hover: #ea580c;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --border-subtle: #e4e4e7;
  --border-strong: #a1a1aa;
  --border-focus: #f97316;
  --status-success: #059669;
  --status-info: #2563eb;
  --status-warning: #d97706;
  --status-error: #e11d48;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --space-1: 4px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
}
.dark {
  --bg-canvas: #09090b;
  --bg-surface: #18181b;
  --bg-muted: #27272a;
  --fg-hover: #fb923c;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --border-subtle: #27272a;
  --border-strong: #52525b;
  --status-success: #34d399;
  --status-info: #60a5fa;
  --status-warning: #fbbf24;
  --status-error: #fb7185;
}
```

---

*Derived from the Aperture Design System Showroom (`design-system-showroom.html` / `.md`). Treat this document as the visual and behavioral contract for product UI.*

---

## 02_ux_principles — UX principles

Source: default (02_ux_principles.md)

# 02_ux_principles.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory User Experience (UX) principles that govern every interface generated within the Aperture ecosystem.

Unlike the Design System, which defines visual appearance, this document defines how interfaces should behave, communicate, and guide users.

Every generated page, component, workflow, and interaction must comply with these principles.

These principles are mandatory.

If any UX principle conflicts with aesthetics, animations, or personal preference, the UX principle always wins.

---

# UX Philosophy

Software exists to help people complete tasks.

Users should spend their time solving business problems—not learning how to use the interface.

Every screen should reduce friction.

Every interaction should increase confidence.

Every workflow should minimize effort.

Good UX is invisible.

The best interface is one that users barely notice because everything feels obvious.

---

# Core Objectives

Every interface must optimize for:

- Clarity
- Simplicity
- Speed
- Predictability
- Consistency
- Learnability
- Accessibility
- Error Prevention
- Confidence
- Efficiency

Never optimize for visual complexity.

---

# UX-001 — Clarity Above Everything

## Objective

The purpose of every screen must be obvious within three seconds.

Users should never wonder:

- Where am I?
- What is this page for?
- What should I do next?

## Rules

- Every page must have one clear purpose.
- Every page must have a descriptive title.
- Primary content must appear before secondary content.
- Decorative elements must never compete with functional elements.
- Every important action must be visible.

## AI MUST

- Prioritize clarity over aesthetics.
- Remove unnecessary visual elements.
- Keep labels simple and descriptive.

## AI MUST NEVER

- Hide primary actions.
- Use vague labels.
- Add decorative components without purpose.

---

# UX-002 — One Primary Goal Per Screen

Every page should help users complete one primary objective.

Examples

Good

Customer Details

Goal:
Manage customer information.

Bad

Customer Details

Analytics

Reports

Calendar

Marketing

Invoices

Support

Everything mixed together.

## Rules

- One dominant workflow.
- One dominant call-to-action.
- Secondary actions must support the primary workflow.

---

# UX-003 — Reduce Cognitive Load

Users should think about their work.

Not the interface.

## Rules

- Show only necessary information.
- Group related information.
- Hide advanced options until needed.
- Break complex workflows into smaller steps.
- Remove unnecessary decisions.

## AI MUST

Ask before adding every component:

Does this help complete the primary task?

If not,

Remove it.

---

# UX-004 — Recognition Over Recall

Interfaces should help users recognize information.

Never require memory.

Examples

Good

Autocomplete

Recent searches

Recent projects

Breadcrumbs

Current filters

Bad

Remember IDs

Remember commands

Remember previous page values

---

# UX-005 — Progressive Disclosure

Complexity should appear only when necessary.

Rules

- Show essential information first.
- Hide advanced settings behind expansion panels.
- Reveal complexity gradually.
- Default experience should be beginner-friendly.

---

# UX-006 — Visual Hierarchy

Users should know what deserves attention first.

Hierarchy

1. Page Title

2. Primary Action

3. Primary Content

4. Supporting Content

5. Metadata

6. Footer

Never create competing visual focal points.

---

# UX-007 — Information Hierarchy

Information should appear in this order.

Overview

↓

Current Task

↓

Important Information

↓

Supporting Information

↓

History

↓

Metadata

Never reverse this order.

---

# UX-008 — Consistency

Users should never relearn the interface.

Everything should behave consistently.

Including:

- Buttons
- Colors
- Icons
- Terminology
- Navigation
- Dialogs
- Forms
- Tables
- Error Messages

Example

Never rename the same action.

Delete

Remove

Erase

Discard

Choose one.

Use it everywhere.

---

# UX-009 — User Control

Users should always feel in control.

Provide

- Cancel
- Back
- Undo
- Retry
- Close

Never trap users.

Always allow recovery whenever possible.

---

# UX-010 — Feedback

Every user action deserves feedback.

Loading

Saving

Success

Failure

Empty

Retry

Progress

Users should never wonder whether something happened.

---

# UX-011 — Error Prevention

Prevent mistakes instead of reporting mistakes.

Examples

Disable impossible actions.

Validate before submission (and per-field after blur — see `04` / README).

Warn before irreversible destructive actions (Alert Dialog). Prefer Undo for recoverable deletes.

Autosave drafts.

Suggest corrections.

Good UX prevents errors.

---

# UX-012 — Forgiveness

Humans make mistakes.

Software should help recover.

Examples

Undo

Restore

Version History

Draft Recovery

Confirmation Dialogs

Never punish mistakes.

---

# UX-013 — Trust

Interfaces should always explain what is happening.

Users should understand

- Why something happened.
- Why something failed.
- What changed.
- What will happen next.

Never perform destructive actions silently.

Never surprise users.

---

# UX-014 — Accessibility

Accessibility is mandatory.

Every interface must support:

- Keyboard navigation
- Screen readers
- Color blindness
- Low vision
- Motor impairments
- Reduced motion

Accessibility failures block release.

---

# UX-015 — Perceived Performance

Fast interfaces feel trustworthy.

Rules

Always prefer

- Skeleton loading
- Progressive loading
- Optimistic updates
- Lazy loading
- Background refresh

Never show blank screens while waiting.

---

# UX-016 — Decision Economy

Reduce unnecessary decisions.

Software should remember:

- Previous selections
- Recent searches
- Filters
- Sorting
- Preferred views
- Default values

Never ask users the same question repeatedly.

---

# UX-017 — Discoverability

Important functionality should be easy to discover.

Users should not need documentation to complete common tasks.

Frequently used actions should always remain visible.

Rare actions may be hidden behind menus.

---

# UX-018 — Predictability

Interfaces should behave exactly as users expect.

Buttons should look clickable.

Links should look like links.

Menus should open consistently.

Dialogs should close consistently.

Never surprise users.

---

# UX-019 — Task Efficiency

Optimize for completing tasks quickly.

Reduce:

- Clicks
- Typing
- Navigation
- Waiting
- Scrolling

Never increase interaction count without clear value.

---

# UX-020 — Simplicity

Simple interfaces outperform complicated ones.

Whenever multiple solutions exist,

Choose the simplest solution that solves the problem.

Simple does not mean fewer features.

Simple means fewer unnecessary decisions.

---

# AI Decision Rules

Before generating any screen, AI must answer:

1. What is the user's primary goal?

2. What information is required?

3. What information can be removed?

4. What information can be hidden?

5. What action should be primary?

6. Can anything be automated?

7. Can defaults be inferred?

8. Can the workflow be simplified?

If yes,

Simplify before generating the interface.

---

# AI Anti-Patterns

Never:

- Create multiple primary buttons.
- Add decorative cards without purpose.
- Mix different interaction styles.
- Use inconsistent spacing.
- Overcrowd dashboards.
- Hide important actions.
- Use placeholder text as labels.
- Depend on color alone.
- Require horizontal scrolling for normal workflows.
- Invent custom components when existing components exist.
- Create unnecessary clicks.
- Duplicate information.
- Display advanced settings by default.

---

# UX Validation Checklist

Every screen must satisfy all of the following.

## Purpose

✓ Screen purpose immediately obvious.

✓ Primary task clearly identifiable.

---

## Content

✓ Only necessary information displayed.

✓ Information grouped logically.

✓ No redundant content.

---

## Actions

✓ One primary action.

✓ Secondary actions clearly differentiated.

✓ Destructive actions separated.

---

## Navigation

✓ User knows current location.

✓ Navigation predictable.

✓ Back navigation available.

---

## Feedback

✓ Loading state.

✓ Empty state.

✓ Success state.

✓ Error state.

---

## Accessibility

✓ Keyboard accessible.

✓ Screen reader friendly.

✓ WCAG AA compliant.

✓ Touch targets large enough.

---

## Performance

✓ No unnecessary rendering.

✓ Loading feedback visible.

✓ Responsive interactions.

---

## Overall

The interface should feel:

- Obvious
- Predictable
- Trustworthy
- Fast
- Simple

If any of these qualities are missing, the design should be revised before implementation.

---

# Final Principle

The goal of UX is not to impress users.

The goal is to help users accomplish meaningful work with the least possible effort.

If removing an element improves the experience,

remove it.

---

## 03_screen_composition — Screen composition

Source: default (03_screen_composition.md)

# 03_screen_composition.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every application screen should be structured.

The goal is to ensure every generated interface follows a predictable, consistent and user-friendly layout regardless of feature or module.

This document does **not** define colors, typography or component styling. Those are covered in the Design System.

This document defines **where things belong**.

---

# Design Philosophy

Users should never spend time figuring out where information is located.

Every page should follow familiar patterns.

Layouts should feel predictable across the entire application.

Every section must have a purpose.

Every component must support the primary workflow.

---

# Core Principles

Every screen should:

- Have one clear purpose
- Have one primary workflow
- Follow a predictable reading order
- Minimize scrolling
- Prioritize important information
- Group related information
- Maintain visual balance
- Be responsive across all devices

---

# Standard Reading Flow

Every screen should follow this hierarchy.

```

Header
↓

Page Information

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Footer (optional)

```

Never reverse this order unless a documented pattern explicitly requires it.

---

# Standard Page Anatomy

Every application page should contain the following sections when applicable.

## 1. Global Navigation

Purpose

Provide application-wide navigation.

Examples

- Sidebar
- Top Navigation
- Workspace Switcher

Rules

- Always accessible.
- Current page clearly highlighted.
- Never hide navigation unexpectedly.

---

## 2. Page Header

Purpose

Introduce the current page.

Contains

- Page Title
- Description (optional)
- Primary Action
- Secondary Actions

Rules

- Exactly one page title.
- Exactly one primary CTA in the page header (orange `primary`).
- Nested content actions use secondary/ghost — see README Primary CTA rule.
- Keep descriptions concise.

---

## 3. Filters / Search

Only display if content can be filtered.

Contains

- Search
- Filters
- Sort
- View Options

Rules

- Place above content.
- Preserve previous selections.
- Allow quick reset.

---

## 4. Main Content

Purpose

Primary task area.

Examples

- Table
- Form
- Dashboard
- Cards
- Timeline
- Editor

Rules

- Occupies most of the viewport.
- Must remain visually dominant.
- Never compete with side content.

---

## 5. Supporting Information

Examples

- Statistics
- Related Items
- Notes
- Activity
- Comments

Rules

Support—not replace—the primary content.

---

## 6. Footer

Optional.

Only include if additional actions or legal information are required.

Never place important actions exclusively in the footer.

---

# Screen Types

Every generated screen should belong to one of the following categories.

---

# Dashboard

Purpose

Provide a high-level overview.

Structure

```

Header

↓

KPI Cards

↓

Charts

↓

Primary Workflow

↓

Recent Activity

↓

Supporting Information

```

Rules

- KPIs always appear before charts.
- Recent activity near bottom.
- Maximum six KPI cards.
- Maximum three charts.
- Never overload dashboards.

---

# List Page

Purpose

Browse multiple records.

Structure

```

Header

↓

Search

↓

Filters

↓

Bulk Actions

↓

Table / Cards

↓

Pagination

```

Rules

- Search always before filters.
- Bulk actions appear only when items are selected.
- Pagination always below content.

---

# Detail Page

Purpose

Display one entity.

Structure

```

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

```

Rules

Keep primary information visible before supporting information.

---

# Create / Edit Page

Purpose

Create or modify data.

Structure

```

Header

↓

Instructions (optional)

↓

Grouped Form Sections

↓

Validation

↓

Primary Actions

```

Rules

Never present one long unstructured form.

Group related fields.

---

# Settings

Purpose

Configure application behavior.

Structure

```

Category Navigation

↓

Section

↓

Settings

↓

Save Bar

```

Rules

Always group settings.

Never mix unrelated settings.

---

# Wizard

Purpose

Guide users through complex tasks.

Structure

```

Progress Indicator

↓

Current Step

↓

Navigation Buttons

```

Rules

- Clearly indicate progress.
- One step at a time.
- Preserve entered information.

---

# Empty State

Purpose

Guide users when no data exists.

Contains

- Illustration/Icon
- Title
- Explanation
- Primary CTA

Rules

Always explain why the page is empty.

Always provide a recovery action.

---

# Error State

Purpose

Recover from failures.

Contains

- Error Message
- Explanation
- Retry Button

Rules

Never expose technical errors.

Always explain what users can do next.

---

# Loading State

Purpose

Communicate progress.

Rules

- Use skeletons whenever possible.
- Preserve layout during loading.
- Avoid layout shifts.

---

# Section Rules

Every page section must have:

- Clear heading
- Related content
- Consistent spacing
- Visual separation
- Logical grouping

Never create sections without purpose.

---

# Visual Balance

Content should feel balanced.

Avoid:

- Large empty spaces
- Uneven columns
- Floating buttons
- Random card sizes
- Misaligned content

---

# White Space

Whitespace improves readability.

Rules

- Separate unrelated sections.
- Avoid excessive compression.
- Avoid excessive spacing.

Whitespace should communicate structure.

---

# CTA Placement

Primary CTA

Top-right of page header.

Secondary Actions

Beside primary action.

Destructive Actions

Separated from primary actions.

Never place destructive actions beside Save.

---

# Sticky Elements

Allowed

- Navigation
- Filters
- Table Header
- Save Bar
- Wizard Navigation

Avoid excessive sticky elements.

---

# Responsive Composition

Desktop

Multiple columns allowed.

Tablet

Reduce secondary panels.

Mobile

Single-column layout.

Stack vertically.

Never require horizontal scrolling.

---

# AI MUST

- Follow the appropriate page template.
- Use consistent reading flow.
- Prioritize primary workflows.
- Group related content.
- Remove unnecessary sections.

---

# AI MUST NEVER

- Invent page layouts.
- Mix multiple screen types.
- Create multiple primary workflows.
- Scatter actions randomly.
- Create visually unbalanced layouts.

---

# Validation Checklist

Every generated screen must satisfy:

✓ One page purpose

✓ One page title

✓ One primary workflow

✓ One primary CTA

✓ Logical reading order

✓ Related information grouped

✓ Appropriate screen template used

✓ Proper empty state

✓ Proper loading state

✓ Proper error state

✓ Responsive layout

✓ Balanced spacing

✓ Consistent section hierarchy

✓ No unnecessary components

---

# Final Principle

Users should never have to learn where information is located.

If two screens perform similar jobs, they should have similar layouts.

Consistency is more valuable than creativity.

---

## 04_form_patterns — Form patterns

Source: default (04_form_patterns.md)

# 04_form_patterns.md

Version: 1.1

Part of: Aperture Design Governance

---

# Purpose

This document defines how forms should be designed, structured, validated, and generated.

Forms are the primary interaction pattern in enterprise software.

Every generated form must minimize user effort, reduce errors, and maximize completion rate.

Whenever this document conflicts with aesthetics, this document wins.

---

# Design Philosophy

Forms exist to collect information.

They should never feel like paperwork.

Users should always understand:

• What information is needed.

• Why it is needed.

• Which fields are required.

• What happens after submission.

A good form reduces effort.

A great form feels effortless.

---

# Core Principles

Every form must be

• Easy to scan

• Easy to complete

• Easy to validate

• Easy to recover

• Easy to edit

---

# Form Anatomy

Every form should follow this structure.

Header

↓

Description (optional)

↓

Section 1

↓

Section 2

↓

Section 3

↓

Review (optional)

↓

Primary Actions

---

# Form Header

Contains

• Form Title

• Short description (optional)

Rules

One title only.

Descriptions should explain purpose—not implementation.

Good

Create Customer

Bad

Customer Creation Interface

---

# Form Sections

Large forms must be divided into logical sections.

Examples

Personal Information

Contact Information

Billing Information

Emergency Contact

Employment

Preferences

Never create one long list of fields.

---

# Field Ordering

Fields should appear in the same order users naturally think.

Example

Name

↓

Email

↓

Phone

↓

Address

↓

Notes

Never ask for detailed information before basic identity.

---

# Labels

Every input requires a visible label.

Never use placeholders as labels.

Good

Email address

[text field]

Bad

[text field]

Placeholder:
Email address

---

# Required Fields

Only require information that is absolutely necessary.

Mark required fields clearly.

Avoid making every field required.

---

# Optional Fields

Optional fields should be labeled.

Example

Company (optional)

Middle name (optional)

---

# Helper Text

Use helper text only when necessary.

Explain

• Expected format

• Restrictions

• Why information is needed

Never duplicate labels.

---

# Validation

Prefer inline validation.

Validate

• Required

• Format

• Length

• Range

• Duplicate values

**Timing (canonical — matches README / `01`):**

1. Do not validate aggressively on every keystroke before the field is first blurred.
2. After the field is touched or blurred → validate that field on subsequent changes.
3. On submit → validate all fields; move focus to the first invalid control; announce errors accessibly (`aria-invalid`, `aria-describedby`, assertive live region for blocking failures).
4. On success → toast or inline confirmation.

Show helpful errors as soon as the user has finished with a field—not while they are still typing the first character.

---

# Error Messages

Good

Email address is required.

Password must contain at least 8 characters.

Bad

Invalid Input

Error 5002

---

# Input Types

Always use the correct control.

Short text

Input

Long text

Textarea

Date

Date Picker

Boolean

Switch

One choice

Radio

Many choices

Checkbox

Large searchable list

Combobox

Never substitute incorrect controls.

---

# Default Values

Pre-fill information whenever safe.

Examples

Country

Timezone

Current User

Today's Date

Remember previous choices.

---

# Grouping

Related fields belong together.

Never mix unrelated topics.

Good

Address

City

State

ZIP

Bad

Address

Phone

ZIP

Email

---

# Long Forms

If more than 15 fields

Group into sections.

If more than 30 fields

Consider multi-step wizard.

---

# Multi-step Forms

Use only when complexity requires it.

Every step should contain one logical group.

Always show progress.

Never lose entered information.

---

# Save Behaviour

Support

Auto Save (where appropriate)

Save Draft

Cancel

Reset

Warn before leaving with unsaved changes.

---

# Primary Actions

Preferred

Save

Create

Submit

Update

Secondary

Cancel

Back

Reset

Destructive actions must remain separated.

---

# Mobile Behaviour

Fields stack vertically.

Minimum touch target 44px.

Avoid side-by-side inputs unless necessary.

Keyboard should never hide focused fields.

---

# Accessibility

Every field requires

Visible Label

Keyboard Access

Focus Indicator

ARIA Labels

Error Association

Screen Reader Support

---

# AI MUST

Use the correct input type.

Group related fields.

Use inline validation.

Generate clear labels.

Generate meaningful errors.

Support keyboard navigation.

Preserve entered values.

---

# AI MUST NEVER

Create placeholder-only labels.

Create giant ungrouped forms.

Use generic error messages.

Require unnecessary information.

Reset completed forms after validation errors.

---

# Validation Checklist

✓ Visible title

✓ Logical grouping

✓ Correct input types

✓ Labels

✓ Helper text

✓ Validation

✓ Error handling

✓ Mobile friendly

✓ Accessible

✓ Clear primary action

✓ Unsaved change protection

✓ Consistent spacing

---

# Final Principle

The best form is not the one with the fewest fields.

The best form is the one that feels the easiest to complete.

---

## 05_table_patterns — Table patterns

Source: default (05_table_patterns.md)

# 05_table_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines when and how tables should be generated.

Tables display comparable records. They are not a default layout for every screen.

If this document conflicts with aesthetics, this document wins.
For visual tokens and components, follow `01_design_system.md`.
For conflict priority across all guidelines, follow `README.md`.

---

# Design Philosophy

Users scan tables to compare, find, and act on records.

Every column must earn its place.

Every interactive table feature (search, sort, filter, pagination) must match the dataset size and task—not be added by default.

---

# Choose the right control

| Need | Use |
|------|-----|
| Read-only comparable data, few rows, no sort/filter | **Table** (static) |
| Sort, filter, search, selection, or pagination | **Data Table** |
| Precise values matter more than shape | Table / Data Table over Chart |
| Card list on mobile when columns collapse poorly | Stacked rows / card list (see Responsive) |

Never use tables for page layout.

---

# Static Table (simple)

Required

- Native `<table>` semantics (`th` with scope, optional `<caption>`)
- Clear column headers
- Numbers right-aligned
- Status via badge + text (never color alone)

Optional

- Row actions as secondary/ghost icon buttons with labels

Do **not** require search, sort, filters, or pagination on small static tables (e.g. &lt; ~20 rows of reference data).

---

# Data Table (interactive)

Use when any of the following are true:

- More than ~20 rows expected
- Users need to find a specific record quickly
- Users need to compare by sorting a column
- Users need to narrow the set (filters)
- Server- or client-paginated datasets

When a Data Table is used, include the features the task needs:

| Feature | Required when |
|---------|----------------|
| Column sort | Users compare or rank by a field |
| Search | Directory/list of many named entities |
| Filters | Multiple facets (status, owner, date) |
| Pagination or virtualization | Large datasets |
| Row selection | Bulk actions exist |
| Empty state | Zero rows possible |
| Loading skeleton | Async fetch |

Automatic failure for Data Tables only:

- Unsortable columns when comparison is the primary task
- No search on large entity directories
- Pagination without totals / position when paginated
- Missing empty or loading states

---

# Column rules

- Prefer 4–7 visible columns on desktop; hide secondary columns on tablet/mobile.
- Pin identity column (name/id) when horizontal space is tight.
- Truncate long text with title/tooltip; never clip without affordance.
- Put primary row action at end (secondary button or menu); never multiple primary fills in a row.

---

# Toolbar pattern

Place above the table:

Search (if needed) → Filters → View options → Primary create action (page header preferred; table toolbar uses secondary unless this is a focused embedded task surface—see README Primary CTA rule).

Allow clear/reset of filters.

Preserve filter/sort state when returning to the page when practical.

---

# Row actions

- Single common action → icon button or text button (`ghost` / `secondary`)
- Multiple actions → Dropdown Menu
- Destructive row action → follow Destructive actions policy in README:
  - Recoverable → Undo toast
  - Irreversible → Alert Dialog

Never hide the only path to a critical action inside an unlabeled icon.

---

# Responsive behaviour

Desktop

- Full columns + toolbar

Tablet

- Hide lowest-priority columns; keep identity + status + actions

Mobile (&lt; 640px)

- Prefer stacked row cards or horizontally scrollable table with sticky first column
- Move filters into Sheet→Drawer pattern (bottom Drawer)
- Keep search reachable without horizontal scroll

Never rely on tiny unreadable multi-column grids on small screens.

---

# Accessibility

- Use real table markup for tabular data
- Sort controls expose `aria-sort`
- Select-all and row checkboxes have accessible names
- Keyboard reaches sort headers and row actions
- Announce loading and empty states

---

# Content

- Header labels: Title Case for column names that act as headings (`Status`, `Created At`)
- Cell values: sentence case for prose; preserve proper nouns and IDs
- Empty: “No [entities] yet” + recovery CTA (see `08_feedback_patterns.md`)

---

# Do

✓ Prefer Data Table only when interaction is needed  
✓ Right-align numeric columns  
✓ Pair status color with label  
✓ Provide empty + loading states for async tables  
✓ Match features to dataset size  

# Don’t

✗ Force search/sort/pagination on tiny static tables  
✗ Use layout tables  
✗ Encode status by color alone  
✗ Overflow without a mobile strategy  
✗ Put multiple primary buttons in each row  

---

# Final Principle

Tables exist to help users decide and act on records.

Add power features when the task needs them—not because tables “usually” have them.

---

## 06_dashboard_patterns — Dashboard patterns

Source: default (06_dashboard_patterns.md)

# 06_dashboard_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how dashboards should be designed and structured.

Dashboards exist to help users quickly understand the current state of a system, identify problems, monitor progress, and take action.

Dashboards are not reports.

Dashboards are not data dumps.

Every dashboard must prioritize clarity, actionability, and decision making.

---

# Design Philosophy

Users should understand the health of the system within five seconds.

The dashboard should answer:

• What is happening?

• Is everything okay?

• What needs my attention?

• What should I do next?

If a dashboard cannot answer these questions immediately, it should be redesigned.

---

# Core Principles

Every dashboard should be

- Actionable
- Focused
- Scannable
- Real-time
- Role-specific
- Minimal
- Prioritized

Never build dashboards that simply display data.

---

# Dashboard Anatomy

Every dashboard should follow this structure.

Page Header

↓

Primary KPI Summary

↓

Alerts & Important Notifications

↓

Primary Business Metrics

↓

Supporting Analytics

↓

Recent Activity

↓

Quick Actions

---

# Page Header

Contains

- Dashboard Title
- Date Range
- Filters
- Refresh Action

Optional

- Export
- Share

Rules

Keep filters close to the title.

Do not overload the header.

---

# KPI Summary

Purpose

Provide an instant overview.

Rules

Display the most important business metrics first.

Examples

Revenue

Active Users

Orders

Open Tickets

System Health

Pending Approvals

Rules

Maximum six KPI cards.

Never display more than two rows of KPIs.

Every KPI must include

Current Value

↓

Trend

↓

Comparison

↓

Status

Example

1,245 Orders

↑ 12%

Compared to last week

---

# Alerts

Critical information appears immediately after KPIs.

Examples

Payment failures

System outage

Pending approvals

Security issues

Inventory shortage

Rules

Critical alerts first.

Warnings second.

Informational messages last.

Do not mix alerts with analytics.

---

# Charts

Charts answer questions.

They do not decorate pages.

Every chart must answer one business question.

Example

Revenue by Month

Orders by Region

New Users per Week

Support Resolution Time

Bad

Random Pie Chart

Random Line Graph

No context.

---

# Chart Selection

Use

Line Chart

Trends

Bar Chart

Comparison

Stacked Bar

Composition

Area Chart

Growth

Donut

Simple proportions

Table

Detailed information

Avoid

3D Charts

Decorative Charts

Gauge Charts

Radar Charts

Unless explicitly required.

---

# Supporting Analytics

Examples

Top Customers

Top Products

Recent Sales

Conversion Funnel

Team Performance

These should support the primary KPIs.

Never compete with them.

---

# Recent Activity

Purpose

Show what happened recently.

Examples

Recent Orders

Recent Logins

Recent Tickets

Recent Payments

Rules

Newest first.

Provide quick access.

Allow navigation to details.

---

# Quick Actions

Frequently used actions should appear near the bottom or side.

Examples

Create Customer

Add User

Generate Report

Create Invoice

Approve Request

Rules

Maximum six quick actions.

Never replace navigation.

---

# Dashboard Layout

Preferred layout

Desktop

```

KPI Row

↓

Charts

↓

Tables

↓

Activity

```

Tablet

```

KPIs

↓

Charts

↓

Activity

```

Mobile

```

KPIs

↓

Alerts

↓

Charts

↓

Activity

```

---

# Visual Priority

Highest

Critical Alerts

↓

KPIs

↓

Charts

↓

Tables

↓

Activity

↓

Supporting Information

Never reverse this order.

---

# Refresh Behaviour

Support

Manual Refresh

Auto Refresh (where appropriate)

Last Updated timestamp

Loading indicators

Never refresh unexpectedly while users interact.

---

# Empty Dashboard

Display

Illustration

↓

Explanation

↓

Primary Action

↓

Helpful Resources

Never show empty widgets.

---

# Loading Dashboard

Use skeleton cards.

Preserve layout.

Load critical metrics first.

Progressively load charts.

Avoid layout shifting.

---

# Error Handling

Dashboard failures should clearly explain

What failed.

What still works.

How users can recover.

Never display technical errors.

---

# Personalization

Allow users to

Choose date ranges.

Save filters.

Remember layout preferences.

Choose density.

Pin favorite widgets.

Do not require personalization for usability.

---

# Performance

Load KPIs first.

Lazy load charts.

Cache previous results.

Load secondary widgets after primary information.

Never block the entire dashboard.

---

# Accessibility

Every chart requires

Title

Description

Keyboard access

Data summary

Accessible colors

Charts must not depend only on color.

---

# AI MUST

Prioritize business decisions.

Display KPIs before analytics.

Separate alerts from reports.

Group related widgets.

Keep dashboards focused.

Use meaningful chart types.

Support loading states.

Support empty states.

Support error states.

---

# AI MUST NEVER

Create dashboards with random widgets.

Display more than six KPI cards.

Place charts before critical alerts.

Mix unrelated business metrics.

Use decorative charts.

Duplicate information.

Display unnecessary statistics.

Overwhelm users.

---

# Validation Checklist

✓ Clear dashboard purpose

✓ Maximum six KPI cards

✓ Alerts separated

✓ Meaningful charts

✓ Recent activity visible

✓ Quick actions available

✓ Loading state

✓ Empty state

✓ Error state

✓ Responsive

✓ Accessible

✓ Fast initial loading

✓ Logical visual hierarchy

✓ Business-focused metrics

---

# Final Principle

A dashboard should help users make decisions.

If users have to search for important information, the dashboard has failed.

---

## 07_navigation_patterns — Navigation patterns

Source: default (07_navigation_patterns.md)

# 07_navigation_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how navigation should be designed throughout the application.

Navigation exists to help users move between workflows with the least possible effort.

Navigation should always feel predictable.

Users should never wonder:

- Where am I?
- Where can I go?
- How do I go back?

---

# Design Philosophy

Navigation is not decoration.

Navigation is a map.

Users should always understand their current location and available destinations.

Navigation should disappear mentally.

Users should focus on their work—not on finding pages.

---

# Core Principles

Every navigation system must be

- Predictable
- Consistent
- Discoverable
- Minimal
- Scalable
- Responsive
- Accessible

---

# Navigation Hierarchy

Every application should follow this hierarchy.

Application

↓

Module

↓

Page

↓

Section

↓

Component

Never exceed four navigation levels.

---

# Primary Navigation

Purpose

Move between major application modules.

Examples

Dashboard

Customers

Orders

Reports

Settings

Rules

- Always visible on desktop.
- Highlight current module.
- Use icons with labels.
- Sort modules by importance.
- Keep names short.

Maximum recommended items:

8

If more than eight,

group related modules.

---

# Secondary Navigation

Purpose

Navigate inside a module.

Examples

Profile

Security

Notifications

Billing

Rules

Keep navigation contextual.

Never mix unrelated sections.

---

# Breadcrumbs

Purpose

Show current location.

Structure

Home

>

Customers

>

John Smith

Rules

Show only when navigation depth exceeds one level.

Breadcrumbs should always be clickable.

Current page should not be clickable.

---

# Sidebar

Preferred for desktop applications.

Contains

- Logo
- Navigation
- Workspace Switcher
- Collapse Button
- User Profile

Rules

Support collapse.

Collapsed state shows icons.

Expanded state shows icons and labels.

Remember user preference.

---

# Top Navigation

Use for

Global search

Notifications

Help

Profile

Workspace switching

Do not place page-specific actions in global navigation.

---

# Mobile Navigation

Preferred

Bottom Navigation

or

Drawer Navigation

Maximum bottom navigation items

5

Additional pages belong in the drawer.

---

# Search

Global search should always remain accessible.

Search should locate

Pages

Users

Projects

Reports

Settings

Commands

Support keyboard shortcut.

Ctrl + K

or

⌘ + K

---

# Quick Navigation

Frequently used actions should be accessible.

Examples

Recent Pages

Favorites

Pinned Items

Recent Searches

Never require users to repeatedly navigate deep hierarchies.

---

# Navigation Labels

Labels should describe destinations.

Good

Customers

Invoices

Projects

Bad

Manage

Open

Start

Module

Keep labels noun-based whenever possible.

---

# Current Location

Users must always know where they are.

Highlight

Current module

Current page

Current tab

Current section

Never allow multiple active items.

---

# Tabs

Use tabs only for sibling content.

Good

Overview

Activity

Documents

History

Bad

Customers

Reports

Settings

Orders

Those belong in navigation.

---

# Back Navigation

Support

Browser Back

Back Button

Breadcrumbs

Cancel

Never trap users inside workflows.

---

# External Links

Always indicate when users leave the application.

Examples

Documentation

Support Portal

Company Website

Open external links in new tabs when appropriate.

---

# Icons

Icons support labels.

Icons never replace labels.

Exception

Collapsed sidebar.

---

# Notifications

Notifications belong in the global navigation.

Never interrupt workflows unless necessary.

Critical notifications should appear separately from standard notifications.

---

# Workspace Switching

For multi-tenant applications,

workspace switching should remain accessible from every page.

Switching workspaces should clearly indicate the active workspace.

---

# Responsive Navigation

Desktop

Persistent Sidebar

Tablet

Collapsed Sidebar

Mobile

Bottom Navigation

+

Drawer

Never force horizontal scrolling.

---

# Accessibility

Navigation must support

Keyboard navigation

Screen readers

Focus indicators

ARIA landmarks

Skip Navigation links

Visible active states

---

# AI MUST

Use consistent navigation across every page.

Keep navigation shallow.

Highlight current location.

Use descriptive labels.

Remember navigation preferences.

Support keyboard navigation.

---

# AI MUST NEVER

Invent different navigation systems.

Mix unrelated modules.

Hide important pages.

Use icons without labels.

Nest navigation excessively.

Create dead-end pages.

---

# Validation Checklist

✓ Current page highlighted

✓ Maximum four navigation levels

✓ Sidebar consistent

✓ Breadcrumbs where appropriate

✓ Global search available

✓ Mobile navigation supported

✓ Keyboard accessible

✓ Icons paired with labels

✓ Responsive

✓ Workspace clearly identified

✓ No dead ends

---

# Final Principle

Users should never think about navigation.

If users stop to figure out where to click next, the navigation has failed.

---

## 08_feedback_patterns — Feedback patterns

Source: default (08_feedback_patterns.md)

# 08_feedback_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how applications communicate with users.

Every user action should receive appropriate feedback.

Users should always know:

- What is happening.
- What has happened.
- What will happen next.
- Whether an action succeeded or failed.

Feedback should reduce uncertainty.

Never leave users guessing.

---

# Design Philosophy

Silence creates confusion.

Every interaction deserves a response.

Feedback should be:

- Immediate
- Clear
- Contextual
- Helpful
- Actionable

Never interrupt users unless absolutely necessary.

---

# Core Principles

Every interface must provide feedback for:

- Loading
- Success
- Failure
- Warning
- Progress
- Empty State
- Confirmation
- Background Processing
- Validation

---

# Feedback Hierarchy

Use the least disruptive feedback possible.

Information

↓

Success

↓

Warning

↓

Error

↓

Blocking Confirmation

Never interrupt users unnecessarily.

---

# Loading States

Users should immediately know that work is in progress.

Preferred order

1. Skeleton Loading
2. Inline Spinner
3. Progress Indicator
4. Full Page Loading (last resort)

Rules

- Preserve layout during loading.
- Never show blank pages.
- Never hide existing content while refreshing.
- Show loading immediately.

---

# Skeleton Loading

Use for

- Cards
- Tables
- Dashboards
- Lists
- Forms

Rules

Skeleton should closely resemble final layout.

Avoid flashing between loading and loaded states.

---

# Spinner

Use only for

- Small actions
- Inline loading
- Button loading

Avoid fullscreen spinners whenever possible.

---

# Progress Indicators

Use for operations longer than three seconds.

Examples

File Upload

Data Import

Report Generation

Export

Migration

Display

Current Progress

↓

Estimated Time (optional)

↓

Cancel (if possible)

---

# Success Feedback

Users should know when actions complete successfully.

Preferred methods

Toast

↓

Inline Success

↓

Success Screen

Rules

Success messages should be brief.

Example

Customer created.

Profile updated.

Invoice sent.

Avoid

Operation completed successfully.

---

# Error Feedback

Errors should help users recover.

Every error must answer

What happened?

Why?

How can I fix it?

Never expose

Stack traces

Technical IDs

Database errors

API messages

---

# Warning Feedback

Warnings communicate risk.

Examples

Unsaved changes

Low inventory

Expiring subscription

Delete confirmation

Warnings should not block users unless necessary.

---

# Empty States

Never display empty tables or blank pages.

Every empty state should include

Illustration or Icon

↓

Title

↓

Explanation

↓

Primary Action

Example

No customers yet.

Create your first customer to get started.

[Create customer]

---

# Confirmation Dialogs

Use **Alert Dialog** only for

Irreversible actions

High-impact actions that cannot be undone easily

Examples

Permanent delete / purge

Cancel subscription

Wipe data

Never confirm simple or easily reversible actions.

---

# Undo

For **recoverable** destructive actions, prefer Undo over a confirmation modal.

Examples

Soft delete

Archive

Dismiss

Flow

Action completes

↓

Toast with Undo (~10 seconds)

Do not use Undo-only for irreversible/high-impact actions — those require Alert Dialog (see README Destructive actions).

---

# Notifications

Notification types

Information

Success

Warning

Error

Rules

Keep notifications concise.

Automatically dismiss success messages.

Persistent errors require user action.

---

# Toasts

Use for

Short-lived feedback.

Examples

Saved

Copied

Updated

Sent

Rules

Maximum three visible.

Disappear automatically.

Pause on hover.

Never use toasts for irreversible or blocking critical failures (use Alert Dialog or persistent Alert).

Recoverable errors may use an assertive toast with retry when useful.

---

# Inline Feedback

Use inside forms.

Examples

Email available.

Password strength.

Invalid date.

Keep messages close to the related field.

---

# Background Processing

Long-running operations should continue in the background.

Users should be informed

Work started.

↓

Work in progress.

↓

Completed.

Allow users to continue working.

---

# Offline Feedback

Applications should detect connectivity changes.

Display

Offline

↓

Reconnecting

↓

Connected

Queue user actions when possible.

---

# Auto Save Feedback

When autosave exists,

display

Saving...

↓

Saved

↓

Last saved 2 minutes ago

Users should never wonder if data is safe.

---

# Retry

Whenever possible,

provide Retry.

Examples

Failed Upload

Network Error

Sync Failure

Never require users to restart workflows.

---

# AI MUST

Provide feedback for every user action.

Use skeleton loading.

Generate meaningful errors.

Generate meaningful success messages.

Support retry.

Support undo where possible.

Generate empty states.

Generate loading states.

---

# AI MUST NEVER

Leave users waiting silently.

Display blank pages while loading.

Expose technical errors.

Use generic messages.

Interrupt users unnecessarily.

Require page refreshes after actions.

---

# Validation Checklist

✓ Loading state exists

✓ Empty state exists

✓ Error state exists

✓ Success state exists

✓ Warning state exists

✓ Retry supported

✓ Undo supported where applicable

✓ Progress shown for long tasks

✓ Autosave feedback

✓ Background tasks communicated

✓ Notifications concise

✓ Feedback contextual

---

# Final Principle

Every user action should receive an immediate and meaningful response.

If users wonder whether the application is working,

the interface has failed.

---

## 09_layout_patterns — Layout patterns

Source: default (09_layout_patterns.md)

# 09_layout_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how content should be arranged across every page of the application.

Good layouts reduce cognitive load, improve readability, and make applications feel professional.

Every generated interface must follow these layout standards.

This document defines **where components should be placed**, **how much space they require**, and **how content should flow**.

---

# Design Philosophy

Layout is communication.

Users should understand page structure before reading any content.

Good layouts create rhythm.

Good layouts create balance.

Good layouts naturally guide attention.

Users should never feel lost because of poor positioning.

---

# Core Principles

Every layout must be

- Predictable
- Balanced
- Consistent
- Responsive
- Spacious
- Readable
- Purposeful

---

# Layout Hierarchy

Every page follows this order.

Application Shell

↓

Navigation

↓

Page Header

↓

Page Content

↓

Supporting Content

↓

Footer (Optional)

Never change this hierarchy without good reason.

---

# Page Width

Use consistent maximum content widths.

Recommended

Small Content

640px

Forms

768px

Standard Pages

1280px

Analytics

1440px

Never stretch content across the entire monitor.

Large screens should improve readability—not increase line length.

---

# Grid System

Use a 12-column grid.

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

All layouts should align to the grid.

Never position components arbitrarily.

---

# Containers

Every page should use containers.

Container responsibilities

- Alignment
- Padding
- Responsive resizing
- Visual consistency

Never place content directly against browser edges.

---

# Page Padding

Desktop

32px

Tablet

24px

Mobile

16px

Maintain consistent page padding.

---

# Section Spacing

Separate sections using the 4px spacing rail from `01_design_system.md`.

Recommended (token-mapped)

Section to Section

48px (`space-12`)

Section Heading to Content

24px (`space-6`)

Cards inside section

24px (`space-6`)

Related Components

16px (`space-4`)

Small Controls

8px (`space-2`)

Desktop page padding

32px (`space-8`)

Never invent spacing values outside the rail.

---

# Alignment

Align everything to the same vertical grid.

Examples

Good

Titles

↓

Cards

↓

Buttons

↓

Tables

All share the same left edge.

Bad

Floating cards.

Random margins.

Misaligned buttons.

Uneven columns.

---

# Reading Direction

Users naturally scan

Desktop

Top Left

↓

Top Right

↓

Middle

↓

Bottom

Mobile

Top

↓

Bottom

Place important information accordingly.

---

# White Space

Whitespace is intentional.

Whitespace separates meaning.

Do not fill empty areas simply because space exists.

Never sacrifice readability to reduce whitespace.

---

# Visual Balance

Every screen should feel balanced.

Avoid

Large empty regions

↓

Crowded regions

↓

Uneven component sizes

↓

Misaligned sections

Balance is more important than symmetry.

---

# Cards

Cards should group related information.

Use cards only when they create meaning.

Do not wrap everything in cards.

Avoid nested cards.

Maximum nesting

2 Levels

---

# Columns

Multiple columns should only exist when they improve readability.

Examples

Dashboard

2–4 columns

Form

1–2 columns

Settings

1–2 columns

Detail Page

2 columns

Mobile

1 column

Never create narrow unreadable columns.

---

# Sidebar Width

Expanded

280px

Collapsed

72px

Never resize sidebar unpredictably.

---

# Content Density

Support three density modes.

Comfortable

Default

Compact

Remember user preference.

Do not mix densities on the same page.

---

# Section Headers

Every major section requires

Title

Optional Description

Optional Action

Never place unrelated actions inside section headers.

---

# Dividers

Use dividers sparingly.

Prefer whitespace before borders.

Borders should reinforce structure—not replace spacing.

---

# Sticky Layouts

Allowed

Navigation

Table Header

Filter Bar

Save Bar

Wizard Footer

Avoid excessive sticky regions.

---

# Modals

Small

Confirmation

Medium

Standard Forms

Large

Complex Forms

Extra Large

Advanced Workflows

Never use fullscreen modals on desktop unless the task truly requires it.

On mobile (&lt; 640px), dialogs may go fullscreen for usability (see `10_responsive_patterns.md`).

---

# Sheets & Drawers

Use the Sheet / Drawer pattern for

Filters

Secondary editing

Quick details

**Breakpoint rule (canonical):**

- **≥ 640px** → shadcn **Sheet** (edge panel; “right drawer” means Sheet)
- **&lt; 640px** → shadcn **Drawer** (bottom)

Avoid placing entire multi-step workflows inside sheets or drawers.

---

# Master-Detail Layout

Preferred

List

↓

Details

Desktop

Side-by-side

Tablet

Adjustable

Mobile

Navigate between screens

---

# Dashboard Layout

Preferred order

KPIs

↓

Alerts

↓

Charts

↓

Tables

↓

Activity

↓

Quick Actions

Never reverse importance.

---

# Form Layout

Preferred

One column

↓

Grouped Sections

↓

Actions

Use two columns only when fields are naturally related.

---

# Table Layout

Toolbar

↓

Filters

↓

Table

↓

Pagination

↓

Bulk Actions

Bulk actions appear only after selection.

---

# Detail Layout

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

---

# Responsive Layout

Desktop

Multiple columns.

Tablet

Reduce secondary panels.

Mobile

Single column.

Stack vertically.

No horizontal scrolling.

---

# Accessibility

Layouts must support

200% Zoom

Keyboard Navigation

Screen Readers

Reduced Motion

Large Text

No layout should break under accessibility settings.

---

# Performance

Avoid rendering hidden content.

Lazy load secondary panels.

Load above-the-fold content first.

Prevent layout shifts.

---

# AI MUST

Use the 12-column grid.

Maintain consistent spacing.

Align components.

Keep layouts balanced.

Use whitespace intentionally.

Group related information.

Optimize for readability.

Support all breakpoints.

---

# AI MUST NEVER

Create floating components.

Invent spacing values.

Stretch content edge-to-edge.

Nest unnecessary cards.

Mix layout patterns.

Create inconsistent alignments.

Depend on absolute positioning.

Create visually unbalanced pages.

---

# Validation Checklist

✓ Uses standard grid

✓ Consistent page padding

✓ Proper section spacing

✓ Balanced layout

✓ Logical reading flow

✓ Appropriate column usage

✓ Responsive

✓ Accessible

✓ Proper whitespace

✓ Components aligned

✓ No unnecessary cards

✓ No layout shifts

---

# Final Principle

Layout should disappear.

Users should notice the information—not the arrangement.

If the layout distracts users from completing their work, it has failed.

---

## 10_responsive_patterns — Responsive patterns

Source: default (10_responsive_patterns.md)

# 10_responsive_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every interface must adapt across different screen sizes and devices.

Responsive design is not about shrinking a desktop interface.

Responsive design is about delivering the best possible experience for every device.

Every generated interface must work equally well on desktop, laptop, tablet, and mobile.

---

# Design Philosophy

Content is constant.

Presentation changes.

The user's task remains the same regardless of screen size.

Layouts should adapt.

Workflows should not.

Never remove critical functionality simply because the screen becomes smaller.

---

# Supported Breakpoints

Small Mobile

320px – 479px

Mobile

480px – 639px

Tablet

640px – 1023px

Laptop

1024px – 1439px

Desktop

1440px+

Every generated interface must support every breakpoint.

---

# Core Principles

Every responsive layout must be

- Readable
- Touch Friendly
- Consistent
- Accessible
- Efficient

Never create a mobile version with fewer capabilities unless technically necessary.

---

# Responsive Priority

When screen space decreases, preserve information in this order.

Primary Task

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Decorative Elements

Decorative elements disappear first.

Never remove primary workflows.

---

# Navigation

Desktop

Persistent Sidebar

Tablet

Collapsible Sidebar

Mobile

Bottom Navigation

+

Drawer

Rules

Desktop navigation should never appear on mobile unchanged.

---

# Page Width

Desktop

Centered Container

Tablet

Fluid Container

Mobile

Full Width

Always maintain consistent page padding.

---

# Columns

Desktop

2–4 Columns

Tablet

1–2 Columns

Mobile

Single Column

Never create narrow unreadable columns.

---

# Cards

Desktop

Grid Layout

Tablet

2 Columns

Mobile

Single Column

Cards should expand vertically instead of shrinking horizontally.

---

# Forms

Desktop

Two-column layout where appropriate.

Tablet

Reduce to one or two columns.

Mobile

Single column only.

Never place multiple unrelated inputs on the same row on mobile.

---

# Tables

Desktop

Full Table

Tablet

Hide low-priority columns

Mobile

Convert to cards

or

Horizontal scroll only when absolutely necessary.

Never require horizontal scrolling for standard CRUD workflows.

---

# Dashboard

Desktop

KPIs

↓

Charts

↓

Tables

↓

Activity

Tablet

KPIs

↓

Charts

↓

Activity

Mobile

KPIs

↓

Alerts

↓

Charts

↓

Activity

↓

Actions

---

# Sidebar

Desktop

Expanded

Tablet

Collapsed

Mobile

Drawer

Remember previous state on larger devices.

---

# Dialogs

Desktop

Centered Modal

Tablet

Large Modal

Mobile

Fullscreen Dialog

Avoid tiny dialogs on mobile.

---

# Drawers / Sheets

Canonical overlay pattern for secondary panels (filters, details, quick edit):

Desktop / Tablet (≥ 640px)

**Sheet** (edge panel). Older docs may say “Right Drawer” — that means Sheet.

Mobile (&lt; 640px)

**Drawer** (bottom)

Never put full multi-step workflows in Sheet/Drawer.

---

# Buttons

Desktop

Standard Size

Mobile

Minimum Height

44px

Minimum Width

44px

Buttons should stretch full width only when it improves usability.

---

# Touch Targets

Minimum

44 × 44 px

Recommended

48 × 48 px

Never place interactive controls too close together.

---

# Typography

Never reduce body text below

16px

Headings may scale.

Body text should remain readable.

---

# Images

Scale proportionally.

Never crop important content.

Lazy load large images.

---

# Charts

Desktop

Full Charts

Tablet

Simplified Legends

Mobile

Prioritize readability over detail.

Provide table alternative when needed.

---

# Search

Desktop

Full Search Bar

Mobile

Expandable Search

Search should remain available on every device.

---

# Filters

Desktop

Sidebar or toolbar

Tablet / Desktop secondary panel (≥ 640px)

**Sheet**

Mobile (&lt; 640px)

**Drawer** (bottom)

Never permanently hide filters.

---

# Sticky Elements

Desktop

Allowed

Mobile

Use sparingly.

Too many sticky regions reduce usable space.

---

# Keyboard

When the mobile keyboard opens,

Focused fields must remain visible.

Never hide primary actions behind the keyboard.

---

# Orientation

Portrait

Default

Landscape

Improve content density

Do not require landscape mode.

---

# Performance

Load only visible content.

Lazy load secondary sections.

Optimize images.

Avoid unnecessary animations.

Reduce network requests on mobile.

---

# Accessibility

Support

Zoom

Screen Readers

Keyboard Navigation

Voice Control

Reduced Motion

High Contrast

Responsive layouts must remain accessible.

---

# AI MUST

Generate layouts for every breakpoint.

Maintain one primary workflow.

Stack content logically.

Prioritize readability.

Convert layouts—not simply resize them.

Use touch-friendly controls.

Optimize performance.

---

# AI MUST NEVER

Scale desktop layouts directly.

Hide critical functionality.

Create unreadable tables.

Reduce touch targets.

Break navigation.

Require horizontal scrolling unnecessarily.

Reduce accessibility on mobile.

---

# Validation Checklist

✓ Desktop supported

✓ Laptop supported

✓ Tablet supported

✓ Mobile supported

✓ Navigation adapts

✓ Forms adapt

✓ Tables adapt

✓ Dashboards adapt

✓ Touch targets ≥44px

✓ Body text ≥16px for primary reading (14px metadata / 13px labels OK)

✓ No unnecessary horizontal scrolling

✓ Performance optimized

✓ Accessibility preserved

---

# Final Principle

Responsive design is adaptation—not reduction.

Users should feel that the application was designed specifically for the device they are using.

---

## 11_accessibility_rules — Accessibility rules

Source: default (11_accessibility_rules.md)

# 11_accessibility_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the accessibility standards that every generated interface must follow.

Accessibility is not a feature.

Accessibility is a minimum quality requirement.

Every user, regardless of ability, should be able to successfully complete every supported workflow.

All generated interfaces must meet WCAG 2.1 AA standards at minimum.

---

# Design Philosophy

Accessible software is better software.

Accessibility improves usability for everyone.

Interfaces should never assume users:

- Can see perfectly
- Can hear perfectly
- Can use a mouse
- Can distinguish colors
- Can use a touchscreen precisely
- Can process information quickly

Design for everyone.

---

# Core Principles

Every interface must be

- Perceivable
- Operable
- Understandable
- Robust

Accessibility is mandatory.

Accessibility issues block release.

---

# Keyboard Navigation

Every feature must be usable without a mouse.

Users must be able to

- Navigate
- Select
- Submit
- Close dialogs
- Open menus
- Switch tabs
- Complete forms

using only the keyboard.

---

# Focus Management

Keyboard focus must always be visible.

Rules

- Never remove focus outlines.
- Focus order must match visual order.
- Focus should never become trapped.
- Focus returns to the triggering element when dialogs close.

Every interactive component requires a visible focus state.

---

# Focus Order

Focus should move logically.

Preferred order

Header

↓

Navigation

↓

Primary Content

↓

Secondary Content

↓

Footer

Never create random focus jumps.

---

# Skip Navigation

Every application should provide

Skip to Content

at the beginning of the page.

Keyboard users should bypass repeated navigation quickly.

---

# Touch Targets

Minimum size

44 × 44 px

Recommended

48 × 48 px

Interactive elements should never overlap.

Spacing between touch targets should prevent accidental taps.

---

# Color Contrast

All text must satisfy WCAG AA.

Minimum contrast

Normal Text

4.5 : 1

Large Text

3 : 1

Icons

3 : 1

Never reduce contrast for aesthetic purposes.

---

# Color Usage

Never communicate meaning using color alone.

Every status should include

Color

+

Icon

+

Text

Good

✓ Success

Bad

Green text only

---

# Typography

Minimum **primary reading** body text

16px

Secondary metadata may use 14px (`body-small`). Form labels/control text may use 13px (`label`) per `01_design_system.md`.

Maintain comfortable line height.

Avoid decorative fonts.

Never justify paragraphs.

Keep line lengths readable.

---

# Images

Every meaningful image requires alternative text.

Decorative images

aria-hidden

or

empty alt text.

Never use images to display important text.

---

# Icons

Decorative icons

aria-hidden="true"

Action icons

Accessible label required.

Icons should support text.

Icons should not replace text.

---

# Links

Links should clearly describe their destination.

Good

Download Invoice

Bad

Click Here

Never rely on surrounding context.

---

# Buttons

Every button should describe its action.

Good

Save Changes

Delete User

Generate Report

Bad

OK

Yes

Continue

---

# Forms

Every input requires

Visible Label

Associated Label

Helper Text (when needed)

Error Message

Accessible Description

Never use placeholders as labels.

---

# Form Validation

Errors should

- Identify the field.
- Explain the problem.
- Explain how to fix it.

Follow validation timing in `04_form_patterns.md` / README (blur-after-touch, then submit-all).

Focus should move to the first invalid field after a failed submission.

---

# Error Messages

Error messages should be announced to screen readers.

Never rely on color.

Good

Email address is required.

Bad

Red border only.

---

# Tables

Tables require

Column Headers

Row Headers (when appropriate)

Scope attributes

Captions (when helpful)

Screen readers must understand relationships.

---

# Charts

Charts require

Title

Summary

Alternative data table

Never rely only on visual interpretation.

---

# Dialogs

Dialogs must

Trap keyboard focus.

Close using Escape.

Return focus to the triggering element.

Announce themselves properly.

---

# Notifications

Important notifications should be announced.

Use

aria-live

Appropriate urgency

Success

Polite

Errors

Assertive

---

# Motion

Respect

prefers-reduced-motion

Disable

Large animations

Parallax

Continuous motion

Flashing effects

Never trigger seizures or discomfort.

---

# Timing

Users should have enough time.

Never automatically log users out without warning.

Allow users to extend timeouts whenever possible.

---

# Language

Every page must define its language.

Example

lang="en"

Changes in language should also be identified.

---

# Reading Order

Screen readers should encounter content in the same order that visual users do.

Never create different logical and visual hierarchies.

---

# Zoom

Every page must remain usable at

200%

Zoom

without loss of functionality.

No horizontal scrolling should occur for normal content.

---

# Responsive Accessibility

Accessibility requirements remain identical on

Desktop

Tablet

Mobile

Never reduce accessibility because of screen size.

---

# Performance

Accessibility should not significantly reduce application performance.

Optimize

ARIA usage

Screen reader announcements

Keyboard interactions

Avoid excessive live regions.

---

# AI MUST

Generate semantic HTML.

Generate accessible labels.

Generate keyboard support.

Generate visible focus states.

Generate meaningful alt text.

Generate accessible error messages.

Support screen readers.

Maintain sufficient color contrast.

Support reduced motion.

Support zoom.

---

# AI MUST NEVER

Remove focus indicators.

Depend only on color.

Generate inaccessible forms.

Use placeholder-only labels.

Use generic button labels.

Hide content from assistive technology unnecessarily.

Ignore keyboard navigation.

Generate inaccessible custom components.

---

# Validation Checklist

✓ Keyboard accessible

✓ Visible focus indicators

✓ Proper tab order

✓ Skip navigation available

✓ Touch targets ≥44px

✓ WCAG AA contrast

✓ Images have alt text

✓ Buttons have meaningful labels

✓ Inputs have associated labels

✓ Errors announced

✓ Dialogs trap focus

✓ Reduced motion supported

✓ Zoom to 200% supported

✓ Screen reader compatible

✓ No accessibility blockers

---

# Accessibility Blockers

The following issues automatically fail accessibility validation.

✗ Missing form labels

✗ Missing keyboard navigation

✗ Invisible keyboard focus

✗ Insufficient color contrast

✗ Color-only status indicators

✗ Missing alternative text

✗ Inaccessible dialogs

✗ Broken tab order

✗ Keyboard traps

✗ Unreachable interactive elements

Accessibility blockers must be fixed before release.

---

# Final Principle

Accessibility is not about accommodating a minority of users.

Accessibility is about ensuring every user can successfully complete every task with confidence and independence.

---

## 12_content_guidelines — Content guidelines

Source: default (12_content_guidelines.md)

# 12_content_guidelines.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every piece of text inside the application should be written.

Good content reduces confusion.

Good content reduces support requests.

Good content builds trust.

Every word should help users complete their task.

---

# Design Philosophy

Interfaces should speak like a knowledgeable colleague.

Not like a machine.

Not like a legal document.

Not like a developer.

Writing should always be

- Clear
- Short
- Friendly
- Professional
- Action-oriented

---

# Core Principles

Every piece of content must be

- Easy to understand
- Easy to scan
- Consistent
- Helpful
- Human

---

# Tone of Voice

The application should sound

Professional

Helpful

Confident

Respectful

Calm

Never sound

Robotic

Passive aggressive

Sarcastic

Overly technical

Marketing focused

---

# Writing Style

Prefer

Short sentences.

Active voice.

Simple words.

Common vocabulary.

Avoid

Long paragraphs.

Buzzwords.

Technical jargon.

Complex grammar.

---

# Page Titles

Titles should describe the page.

Good

Customers

Orders

Reports

Account Settings

Bad

Customer Management Interface

Report Administration Portal

---

# Page Descriptions

Only include descriptions when they add value.

Good

Manage your customer information and activity.

Bad

This page allows users to manage customer information within the system.

---

# Button Labels

Buttons describe actions.

Always begin with a verb.

Good

Save Changes

Create Customer

Generate Report

Approve Request

Invite Member

Bad

OK

Go

Continue

Click Here

Yes

---

# Navigation Labels

Navigation describes destinations.

Use nouns.

Good

Customers

Invoices

Projects

Reports

Bad

Manage

Go

Open

View

---

# Form Labels

Labels describe information. Use **sentence case** (see `01` casing matrix).

Good

Email address

Phone number

Billing address

Bad

Email

Input

Information

(Do not Title Case form labels. Page titles and nav use Title Case.)

---

# Placeholder Text

Placeholder text provides examples.

Never replace labels.

Good

example@email.com

Bad

Enter your email address here

---

# Helper Text

Use helper text only when necessary.

Explain

Accepted format

Restrictions

Why information is required

Keep helper text short.

---

# Required Fields

Mark only truly required fields.

Example

Email address *

Optional fields should say

(optional)

Never make every field required.

---

# Empty States

Every empty state should include

Title

Explanation

Action

Good

No invoices yet.

Create your first invoice to get started.

[Create Invoice]

Bad

No Data

---

# Success Messages

Keep success messages short.

Good

Customer created.

Profile updated.

Changes saved.

Bad

The operation completed successfully.

---

# Error Messages

Explain

What happened.

How to fix it.

Good

Password must contain at least 8 characters.

Bad

Validation Error.

---

# Warning Messages

Warn users before risky actions.

Good

Deleting this customer cannot be undone.

Bad

Warning!

---

# Confirmation Dialogs

Title

Action

Consequence

Primary Action

Cancel

Example

Delete Customer

This action cannot be undone.

Delete

Cancel

---

# Notifications

Keep notifications concise.

Good

Invoice sent.

Bad

Your invoice has been successfully processed and delivered.

---

# Search

Search placeholders should explain what can be searched.

Good

Search customers...

Search invoices...

Bad

Search...

---

# Filters

Labels should be obvious.

Good

Status

Department

Date Range

Bad

Options

Category

---

# Dates

Use consistent formats.

Prefer

12 Jul 2026

or

Jul 12, 2026

Never mix formats.

---

# Numbers

Use thousands separators.

Good

12,450

Bad

12450

Display currency appropriately.

Example

$12,450.00

---

# Time

Display relative time when useful.

Examples

5 minutes ago

Yesterday

Today

Display exact timestamps when precision matters.

---

# Tables

Column names should be short.

Good

Customer

Status

Amount

Created

Bad

Customer Full Name Information

---

# Tooltips

Explain

Why

Not

What

Good

Only administrators can edit this setting.

Bad

Admin Button

---

# Links

Link text should describe the destination.

Good

View Customer Details

Bad

Click Here

---

# Loading Text

Good

Loading customers...

Saving changes...

Generating report...

Bad

Loading...

---

# Login

Be welcoming.

Good

Welcome back.

Sign in to continue.

Bad

Authentication Required

---

# Logout

Good

You have signed out successfully.

Bad

Session terminated.

---

# Permissions

Explain why users cannot perform an action.

Good

Only administrators can delete projects.

Bad

Permission denied.

---

# Validation Messages

Explain exactly what needs to change.

Good

Phone number must contain 10 digits.

Bad

Invalid value.

---

# AI Writing Rules

AI MUST

Follow the capitalization matrix in `01_design_system.md` / README:

- Actions, form labels, toasts → sentence case (`Save changes`, `Email address`)
- Page titles, section headers, nav → Title Case (`Account Settings`)

Use active voice.

Keep sentences under 20 words when possible.

Write at approximately Grade 8 reading level.

Prefer verbs for actions.

Prefer nouns for navigation.

Be concise.

---

# AI MUST NEVER

Use technical jargon.

Write robotic messages.

Use exclamation marks excessively.

Use ALL CAPS.

Blame the user.

Use vague wording.

Duplicate information.

Write paragraphs longer than four lines inside the interface.

---

# Validation Checklist

✓ Sentence case for actions, labels, toasts

✓ Title Case for page titles and navigation

✓ Active voice

✓ Clear actions

✓ Short labels

✓ Helpful errors

✓ Helpful empty states

✓ Helpful success messages

✓ Consistent terminology

✓ Professional tone

✓ Human language

✓ Accessible reading level

---

# Final Principle

Users should never stop to understand the wording.

Good interface copy disappears into the experience.

If users notice the writing, it should be because it helped them—not because it confused them.

---

## 13_interaction_patterns — Interaction patterns

Source: default (13_interaction_patterns.md)

# 13_interaction_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how users interact with every component in the application.

Interactions should feel predictable, responsive, and effortless.

Every interaction should provide immediate feedback and reinforce user confidence.

Users should never wonder whether an interaction worked.

---

# Design Philosophy

Interfaces should feel alive.

Every interaction should have a clear beginning, response, and completion.

Interactions should reduce effort—not increase it.

Animations exist to explain changes, not decorate the interface.

---

# Core Principles

Every interaction should be

- Predictable
- Responsive
- Consistent
- Accessible
- Forgiving
- Fast

---

# Interaction Lifecycle

Every interaction follows this sequence.

User Action

↓

Immediate Feedback

↓

Processing

↓

Completion

↓

Next Available Action

Never skip any stage.

---

# Click Interactions

Buttons should immediately indicate interaction.

Rules

- Show hover state.
- Show pressed state.
- Show loading when processing.
- Disable repeated submissions while processing.
- Restore normal state after completion.

Never leave buttons unchanged after clicking.

---

# Hover States

Use hover only to indicate interactivity.

Examples

- Buttons
- Links
- Cards
- Table Rows
- Menu Items

Never hide critical information behind hover.

Hover effects should never be required on touch devices.

---

# Focus States

Keyboard focus must always be visible.

Every interactive element requires a focus state.

Focus styling should be consistent across the application.

Never remove focus indicators.

---

# Active States

Selected items must remain visually distinct.

Examples

- Active Navigation
- Selected Card
- Selected Row
- Active Tab
- Selected Filter

Users should always know what is selected.

---

# Disabled States

Disabled controls must clearly communicate they are unavailable.

Rules

- Reduce emphasis.
- Maintain readability.
- Explain why when appropriate.

Never disable controls without explanation if the reason is not obvious.

---

# Loading Interactions

During processing

- Disable duplicate actions.
- Display progress.
- Preserve layout.
- Keep users informed.

Never freeze the interface.

---

# Optimistic Updates

Use optimistic updates when operations are highly likely to succeed.

Examples

- Like
- Favorite
- Archive
- Mark Complete

If an operation fails

Restore previous state

Display explanation

Offer retry

---

# Inline Editing

Allow inline editing only for simple changes.

Examples

- Name
- Status
- Tags

Complex editing should open a dedicated form.

Always support

Save

Cancel

Keyboard shortcuts

---

# Selection

Selection should always be visible.

Support

Single Selection

Multi Selection

Range Selection (Shift)

Select All

Never lose selections unexpectedly.

---

# Drag and Drop

Use only when it significantly improves productivity.

Examples

- Kanban Boards
- File Upload
- Reordering Lists

Always provide

Visual placeholder

Drop indicator

Success feedback

Alternative keyboard interaction

---

# Context Menus

Use for secondary actions.

Never hide primary actions inside context menus.

Keep menus concise.

Group related actions.

Separate destructive actions.

---

# Keyboard Shortcuts

Support shortcuts for frequently used actions.

Examples

Ctrl/Cmd + K

Search

Ctrl/Cmd + S

Save

Esc

Close

Enter

Submit

Delete

Delete Selected

Display shortcuts where appropriate.

---

# Undo

For **recoverable** actions (soft delete, archive, dismiss):

Prefer Undo over a confirmation modal.

Good

Delete customer

↓

Undo available for 10 seconds

For **irreversible / high-impact** actions (permanent delete, purge, cancel subscription):

Require **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

---

# Confirmations

Require confirmation (Alert Dialog) only for

Irreversible

High-risk / high-impact

actions.

Do not confirm recoverable soft deletes when Undo is available.

Avoid confirmation fatigue.

---

# Auto Save

Where appropriate

Save automatically.

Communicate status.

Saving...

↓

Saved

Never make users wonder whether work has been lost.

---

# Refresh

Refreshing should preserve

Scroll position

Selection

Filters

Sorting

Expanded sections

Avoid resetting user context.

---

# Search Interaction

Search should

Respond immediately.

Debounce requests.

Highlight matches.

Remember recent searches.

Never require explicit search buttons unless necessary.

---

# Filter Interaction

Changing filters should

Update results quickly.

Display active filters.

Support clearing filters.

Remember preferences.

---

# Pagination

Users should remain oriented.

Preserve

Sorting

Filters

Search

Selection where possible

---

# Notifications

Do not interrupt users unnecessarily.

Success

Toast

Error

Persistent

Critical

Modal only if required

Choose the least disruptive feedback possible.

---

# Animations

Animations should explain

Movement

Expansion

Loading

State changes

Never animate for decoration.

Duration

Interactive transitions: 150–200ms

Overlay enter/exit: up to 300ms allowed

Continuous indicators (spinner, skeleton shimmer): exempt; honor prefers-reduced-motion

---

# Accessibility

Every interaction must support

Keyboard

Screen Readers

Reduced Motion

Touch

Mouse

No interaction should depend on only one input method.

---

# Performance

Interactions should feel immediate.

Target

Visual Response

<100ms

Loading Feedback

<200ms

Long Operations

Progress Indicator

Never leave users without feedback.

---

# AI MUST

Generate hover states.

Generate focus states.

Generate active states.

Generate loading states.

Generate disabled states.

Support keyboard interaction.

Support touch interaction.

Generate meaningful animations.

Support undo where possible.

Support retry where appropriate.

---

# AI MUST NEVER

Hide primary actions.

Require hover to reveal critical functionality.

Create inconsistent interaction patterns.

Remove keyboard accessibility.

Use excessive animations.

Interrupt users unnecessarily.

Reset user context unexpectedly.

Ignore loading states.

---

# Validation Checklist

✓ Hover states

✓ Focus states

✓ Active states

✓ Disabled states

✓ Loading states

✓ Success feedback

✓ Error feedback

✓ Keyboard support

✓ Touch support

✓ Accessible interactions

✓ Animation duration appropriate

✓ Context preserved

✓ Undo where applicable

✓ Retry where applicable

---

# Final Principle

Users should feel confident interacting with the interface.

Every interaction should be predictable, immediate, and reassuring.

If users hesitate before clicking, the interaction design has failed.

---

## 14_ai_validation_rules — AI validation rules

Source: default (14_ai_validation_rules.md)

# 14_ai_validation_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory validation process that every AI-generated interface must pass before it is considered complete.

Generating an interface is only the first step.

Every generated screen must validate itself, identify problems, automatically fix problems where possible, and only then present the final result.

Never consider the first generated UI to be the final UI.

Generation → Validation → Improvement is mandatory.

Validation criteria must follow the reconciled rules in `README.md` and must not invent policies that contradict higher-priority docs (`11` → `01` → domain patterns → …).

---

# AI Design Review Process

Every generated screen follows this workflow.

Requirements

↓

Generate Initial UI

↓

Run Validation

↓

Identify Issues

↓

Fix Issues

↓

Run Validation Again

↓

Repeat Until Score ≥ 95

↓

Return Final UI

---

# Validation Categories

Every screen must be evaluated in the following areas.

1. UX

2. Layout

3. Visual Design

4. Accessibility

5. Content

6. Interaction

7. Responsive Design

8. Performance

9. Technical Quality

No category may fail.

---

# UX Validation

Validate

✓ Purpose obvious

✓ Primary workflow obvious

✓ One primary CTA in page header (no stacked primaries in viewport)

✓ Logical information hierarchy

✓ Low cognitive load

✓ Related information grouped

✓ Navigation predictable

✓ Error prevention exists

✓ Recovery exists

Automatic Failure

✗ Multiple primary workflows

✗ Multiple orange primary buttons in the same viewport

✗ Confusing layout

✗ Missing primary action

---

# Layout Validation

Validate

✓ Proper spacing

✓ Consistent alignment

✓ Grid respected

✓ Balanced layout

✓ No floating elements

✓ Proper section spacing

Automatic Failure

✗ Misaligned content

✗ Random spacing

✗ Broken layout

---

# Design Validation

Validate

✓ Design System followed

✓ Correct typography

✓ Proper colors

✓ Proper icons

✓ Proper shadows

✓ Proper radius

✓ Proper elevation

Automatic Failure

✗ Custom colors

✗ Inconsistent typography

✗ Mixed component styles

---

# Component Validation

Validate

✓ Correct component used

✓ Proper component hierarchy

✓ Existing component reused

✓ Proper variants used

Automatic Failure

✗ Reinventing components

✗ Incorrect controls

---

# Content Validation

Validate

✓ Good page title

✓ Clear labels

✓ Helpful helper text

✓ Meaningful buttons

✓ Good error messages

✓ Professional wording

Automatic Failure

✗ Placeholder labels

✗ Generic errors

✗ Technical jargon

---

# Form Validation

Validate

✓ Labels

✓ Validation

✓ Required fields

✓ Helper text

✓ Logical grouping

✓ Correct input types

Automatic Failure

✗ Placeholder-only labels

✗ Giant forms

✗ Missing validation

---

# Table Validation

Follow `05_table_patterns.md`.

For **static Table** (small read-only sets):

✓ Semantic headers

✓ Status with text (not color alone)

✓ Numbers right-aligned when numeric

Do **not** fail static tables for missing search/sort/pagination.

For **Data Table** (when task needs interaction / large sets):

✓ Search when browsing many named entities

✓ Sorting when comparison is required

✓ Filters when facets exist

✓ Pagination or virtualization for large datasets

✓ Empty / loading / error states for async data

Automatic Failure (Data Table only)

✗ Unsortable columns when comparison is the primary task

✗ No search on large entity directories

✗ Missing empty or loading states for async tables

---

# Dashboard Validation

Validate

✓ KPIs

✓ Alerts

✓ Charts

✓ Activity

✓ Quick Actions

✓ Proper hierarchy

Automatic Failure

✗ Too many widgets

✗ Decorative charts

✗ No business focus

---

# Navigation Validation

Validate

✓ Current location

✓ Breadcrumbs

✓ Search

✓ Responsive navigation

✓ Logical hierarchy

Automatic Failure

✗ Dead ends

✗ Hidden navigation

✗ Deep nesting

---

# Interaction Validation

Validate

✓ Hover

✓ Focus

✓ Active

✓ Loading

✓ Disabled

✓ Success

✓ Error

✓ Retry

✓ Undo

Automatic Failure

✗ No loading

✗ No focus

✗ Missing feedback

---

# Accessibility Validation

Validate

✓ Keyboard support

✓ Focus indicators

✓ Color contrast

✓ Alt text

✓ Labels

✓ ARIA

✓ Screen reader support

Automatic Failure

✗ Accessibility blocker

---

# Responsive Validation

Validate

Desktop

Tablet

Mobile

Landscape

Portrait

Automatic Failure

✗ Horizontal scrolling

✗ Broken layout

✗ Hidden functionality

---

# Performance Validation

Validate

✓ Lazy loading

✓ Skeletons

✓ Optimized images

✓ Progressive loading

✓ Efficient rendering

Automatic Failure

✗ Blank loading screens

✗ Large layout shifts

---

# Visual Inspection

AI should inspect

Text clipping

↓

Component overlap

↓

Broken alignment

↓

Overflow

↓

Uneven spacing

↓

Visual balance

↓

Empty space

↓

Crowding

Every issue should be corrected automatically.

---

# Content Inspection

AI should inspect

Grammar

↓

Consistency

↓

Terminology

↓

Tone

↓

Capitalization

↓

Readability

↓

Accessibility

---

# UX Inspection

AI should inspect

Can users understand this page?

↓

Can users finish their task?

↓

Can users recover from mistakes?

↓

Can users find important actions?

↓

Can users navigate easily?

---

# Automatic Improvements

AI should automatically fix

Spacing

Alignment

Typography

Button hierarchy

Missing labels

Missing loading states

Missing empty states

Missing errors

Missing helper text

Responsive issues

Accessibility issues

Poor wording

Do not require human approval for these fixes.

---

# AI MUST

Run every validation category.

Automatically fix detected issues.

Revalidate after fixes.

Continue until quality threshold is reached.

Never stop after the first generation.

---

# AI MUST NEVER

Skip validation.

Ignore accessibility.

Ignore responsiveness.

Ignore content quality.

Ignore UX.

Output low-quality UI.

Return UI with known issues.

---

# Quality Score

Each category contributes equally.

UX                         10

Layout                     10

Design System              10

Components                 10

Content                    10

Accessibility              10

Responsive                 10

Interaction                10

Performance                10

Technical Quality          10

-------------------------------

Total                     100

---

# Release Rules

Score

95–100

Ready

90–94

Improve Automatically

80–89

Major Revision Required

Below 80

Reject

Automatic release is prohibited below 95.

---

# Blocking Issues

The following automatically fail validation.

• Text clipping

• Overflow

• Component overlap

• Broken navigation

• Missing labels

• Accessibility failure

• Missing loading state

• Missing error state

• Broken responsive layout

• Missing primary action in page chrome

• Multiple primary CTAs in the same viewport

• Incorrect component usage

• Design System violation

• Placeholder-only labels

• Horizontal scrolling that hides critical content with no mobile strategy

• Hidden critical functionality

• Toast-only handling of irreversible destructive actions

• Sheet/Drawer breakpoint ignored (≥640 Sheet / &lt;640 Drawer)

• Missing required region from `.ops4/design-system/screens/` blueprint (collapsed multi-region screen into a single Card/form)

• Thin admin/CRUD scaffold where the locked build prompt specified production-grade multi-panel composition

A screen with any blocker must never be considered complete.

---

# Final Principle

Generating an interface is not success.

A successful interface is one that has been generated, validated, improved, validated again, and proven to meet the standards defined by Aperture Design Governance.

Quality is verified.

Never assumed.

---

## Requirements
- Implement every screen and UI state listed in the locked Design Brain prompt, including all catalog, detail, checkout, dashboard, modal, and notification flows.
- Use the 'Catalog Browse' archetype: persistent collapsible sidebar, slim top bar, and main content focused on painting discovery and transactions.
- Apply the specified Sales Intelligence Dashboard design system: accent colors, typography, component library (Shadcn/ui), and layout tokens.
- Ensure all filters, edge cases, and status variants (empty, loading, error, permission, plan limit, etc.) are present per page data points.
- Use realistic sample data for all fields and implement all required fields, filters, and multi-language support (Bangla & English).
- Build as a Next.js (App Router) frontend with TypeScript, Tailwind CSS, and Shadcn/ui components.
- Keep all work on a preview/feature branch and open a PR; do not merge to the default branch.

## Design Continuity Rules
- Implement the locked Design Brain build prompt as a production-grade full application.
- Implement every screen listed in the locked prompt / screen map — do not ship a subset of CRUD pages.
- Honor screen composition blueprints for workspace screens: required regions must exist; do not collapse multi-region layouts into a single Card/form.
- When Design Pattern Brain auth/register briefs are attached, apply their composition (e.g. centered card) even if prior auth screens were multi-panel.
- Prefer workflow-rich layouts (main + context rail, master-detail, inspector) when the product is an ops/workspace app.
- Use correct control types from the prompt/blueprints (e.g. segmented EMAIL/SMS vs a generic select).
- Follow Aperture guidelines for tokens, accessibility, and interaction — they do not override locked composition or Pattern Brain.
- Do not invent a thinner admin scaffold or theme demo in place of the locked design.

## Technical Rules
- Never push directly to main.
- Always create a dedicated feature or fix branch.
- Create the branch from the repository default branch, then open a PR into that default branch.
- Run lint/build before opening PR.
- Follow existing project structure.
- Follow existing coding conventions.
- Keep files under 400 lines where possible.
- Use proper TypeScript interfaces/types.
- Never allow a browser or screenshot operation to run indefinitely.
- Every browser action must use a maximum timeout of 30 seconds.
- Do not retry the same failed screenshot more than once.
- If visual capture fails, continue using HTTP checks, logs, DOM inspection, build validation, and terminal-based Playwright.
- Screenshot failure must never block implementation, commits, or pull-request creation.
- Base branch: main
- PR target: main
- Open `.ops4/design-system/README.md` plus `01`–`14` for tokens/a11y; locked build prompt + blueprints win for composition.
- Open `.ops4/design-system/patterns/` and APPLY retrieved composition to matching screens (esp. auth); keep product brand tokens.

## Acceptance Criteria
- All screens and UI states from the locked prompt are implemented with correct layouts, regions, and components.
- Responsive design works across mobile and desktop breakpoints.
- All specified fields, filters, and flows are present and functional with realistic sample data.
- Multi-language (Bangla & English) and theme (light/dark) toggles are implemented.
- No deviations from the locked design system or archetype.
- Lint passes
- Build passes
- Pull request is opened to the default branch (not merged)
- Screenshot/browser failures do not block commits or PR creation (max 30s browser timeout; one retry max).
- Screens implement the page-by-page data points inventory (fields, filters, statuses) from this issue.
- In-scope screens (esp. auth/register/login/landing) visibly apply Design Pattern Brain composition under `.ops4/design-system/patterns/` while keeping product brand tokens.

## Agent Instructions
Create a new branch named:
`ai-build/preview-var1-issue-2-implement-catalog-browse-ui-variation-full-app-p`

Base branch: `main`
PR target: `main`

Implement this issue only.
Never push directly to main.
Always create a dedicated feature or fix branch.
Open a Pull Request to the repository default branch.
PR title should be:
AI Build: Implement 'Catalog Browse' UI Variation – Full App Preview Build

PR body should include:
- Summary
- Files changed
- Validation results
- Screenshots of key screens (required for UI builds)
- Checklist of blueprint regions implemented
- Closes #2

This is an INITIAL full-app build from the locked Design Brain.
Implement the locked build prompt fully — every screen, with the specified composition richness.
Do NOT ship a thinner generic admin/CRUD shell.
Do NOT collapse multi-region workspace screens into a single Card/form.
EXCEPTION: authentication/register/login screens follow Design Pattern Brain briefs when present (e.g. centered card).
Aperture guidelines under `.ops4/design-system/` govern tokens, a11y, and interaction — they do not replace screen composition in the locked prompt or Pattern Brain.
When page-by-page data points are provided, use them as the source of truth for fields, tables, filters, and statuses.
When screen blueprints are provided under `.ops4/design-system/screens/`, implement every required region for workspace screens.
When design pattern briefs are provided under `.ops4/design-system/patterns/`, APPLY their composition to matching screens — not optional taste.