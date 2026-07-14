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