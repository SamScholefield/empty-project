# EmptyProject

An empty project setup for quick start Angular 5 development. Incorporates the following:

### Angular Material
* Components are loaded from material.module.ts
* Custom theming via custome-theme.scss
When using custom theming both the <div> class in app.component.html AND the overlayContainer in app.module.ts must be edited to fully support light or dark themes (modals, menus, dialogs)

### AngularFire
Requires author firebase config in environment.ts/environment.prod.ts

### Other
* Material Icons - imported via styles.scss
* Roboto Font (300,400,500) - imported via styles.scss
* Animations
* HammerJS -  for touch support on various components

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

## To clone

Use the below where `<my-new-project-directory>` is the author specified name of the directory to be created to hold the clone.

* `$ git clone https://github.com/SamScholefield/empty-project <my-new-project-directory>` 


