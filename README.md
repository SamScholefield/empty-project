# EmptyProject

An empty project setup for quick start Angular 5 development. Incorporates the following:

### Angular Material

#### Component module

Components are loaded from `material.module.ts` (warning: bloated file). Add and remove components as necessary.

#### Custom theme colors

Custom theming color choice via `custom-theme.scss`. Customise a light and a dark theme from this file. Currently, as theme switching is done on a checkbox, it is limited to default or 1 option theme only.

#### Custom theme switch

Theme switching is done using a checkbox via `theming.component.ts` and `theming.service.ts` using `class={{themeClass}}` in the container element (`app.component.html`).

`theming.component.ts` can be placed anywhere (eg. `../users/:id/settings`) and will communicate the theme switch via service.

WARNING: This is my first service/observable/subscription and I can tell it's all sorts of wrong, but it works so hopefully it'll improve over time

TODO: Get user theme preference on init

### AngularFire

Requires author firebase config in `environment.ts` and/or `environment.prod.ts`

TODO: build emptyProject with firebase.auth and guarded routes

### Google Analytics

To properly track a single page application we subscribe to the Router events observable and send the pageview event to Google Analytics when a router event is emitted.

Requires author GA tracking code in `index.html`

This solution wholly provided by [Chidume Nnamdi](https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18)

### Other

#### Material Icons

imported via `styles.scss`

#### Roboto Font (300,400,500)

imported via `styles.scss`

#### Angular Animations

imported via `app.module.ts`

#### HammerJS

imported via `main.ts` for touch support on various Material components

## Versions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2 and uses:

* Angular CLI: 1.7.2
* Node: 7.0.0
* Angular: 5.2.7
* @angular/cdk: 5.2.3
* @angular/material: 5.2.3
* @angular-devkit/build-optimizer: 0.3.2
* @angular-devkit/core: 0.3.2
* @angular-devkit/schematics: 0.3.2
* @ngtools/json-schema: 1.2.0
* @ngtools/webpack: 1.10.1
* @schematics/angular: 0.3.2
* @schematics/package-update: 0.3.2
* typescript: 2.5.3
* webpack: 3.11.0

## To use

Assuming you have Node, NPM and the Angular CLI installed use the below where `<my-new-project-directory>` is the author specified name of the directory to be created to hold the clone.

* `$ git clone https://github.com/SamScholefield/empty-project <my-new-project-directory>`
* `$ cd <my-new-project-directory>`
* `$ npm install`
* `$ ng serve`
