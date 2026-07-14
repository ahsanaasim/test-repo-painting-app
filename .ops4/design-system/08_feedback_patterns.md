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