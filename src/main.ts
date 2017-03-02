import './polyfills';

import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@angular/core';

import { AppModule }                from './app/app.module';

declare var ENVIRONMENT: string; // Webpack DefinePlugin.

if (ENVIRONMENT === "production") {
    enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule);