# quarkGUI

[![Build Status](https://travis-ci.org/benjamindehli/quarkGUI.svg?branch=master)](https://travis-ci.org/benjamindehli/quarkGUI)
[![npm version](https://badge.fury.io/js/quark-gui.svg)](https://badge.fury.io/js/quark-gui)
[![Bower version](https://badge.fury.io/bo/quark-gui.svg)](https://badge.fury.io/bo/quark-gui)

Webpack GUI framework based on atomic design

## Clone or install quarkGUI
### Clone:
- Clone the repository: `git clone https://github.com/benjamindehli/quarkGUI.git`

### Install:
- Install with [npm](https://www.npmjs.com): `npm install quark-gui`
- Install with [yarn](https://github.com/yarnpkg/yarn): `yarn add quark-gui`
- Install with [Bower](https://bower.io): `bower install quark-gui`

- After installation copy file with Sass variables: `cp -r node_modules/quark-gui/setup/** ./`

## Run with development environment

```
npm run dev
```

## Build for production
```
npm run build
```

## Modules
### Atoms
- Buttons
  - [Action button](src/modules/00-atoms/buttons/action-button.md)
  - [Button](src/modules/00-atoms/buttons/button.md)
  - [Toggle button](src/modules/00-atoms/buttons/toggle-button.md)
- Form elements
  - [Checkbox](src/modules/00-atoms/form-elements/checkbox.md)
  - [Input field](src/modules/00-atoms/form-elements/input-field.md)
  - [Radio button](src/modules/00-atoms/form-elements/radio-button.md)
  - [Select list](src/modules/00-atoms/form-elements/select-list.md)
- Media
  - [Image](src/modules/00-atoms/media/image.md)
- Sections
  - [Grid item](src/modules/00-atoms/sections/grid-item.md)

### Molecules
- Buttons
  - [Button row](src/modules/01-molecules/buttons/button-row.md)
- Form elements
  - [Checkbox](src/modules/01-molecules/form-elements/checkbox.md)
  - [Input field](src/modules/01-molecules/form-elements/input-field.md)
  - [Radio button](src/modules/01-molecules/form-elements/radio-button.md)
  - [Select list](src/modules/01-molecules/form-elements/select-list.md)
- Lists
  - [Dragable list](src/modules/01-molecules/lists/dragable-list.md)
- Menus
  - [Action bar menu](src/modules/01-molecules/menus/action-bar-menu.md)
- Messaging
  - [Modal](src/modules/01-molecules/messaging/modal.md)
- Navigation
  - [Breadcrumbs](src/modules/01-molecules/navigation/breadcrumbs.md)
  - [List navigation](src/modules/01-molecules/navigation/list-navigation.md)
  - [Primary navigation](src/modules/01-molecules/navigation/primary-navigation.md)
  - [Sidebar navigation](src/modules/01-molecules/navigation/sidebar-navigation.md)
- Sections
  - [Grid](src/modules/01-molecules/sections/grid.md)

### Organisms
- Cards
  - [Card](src/modules/02-organisms/cards/card.md)
- Global
  - [Footer](src/modules/02-organisms/global/footer.md)
  - [Header](src/modules/02-organisms/global/header.md)
  - [Sidebar](src/modules/02-organisms/global/sidebar.md)
- Menus
  - [Action bar](src/modules/02-organisms/menus/action-bar.md)
  - [List menu](src/modules/02-organisms/menus/list-menu.md)



