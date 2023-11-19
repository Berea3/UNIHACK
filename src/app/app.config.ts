import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {findTailwindConfigurationFile} from "@angular-devkit/build-angular/src/utils/tailwind";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({paramsInheritanceStrategy: 'always'})),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideAnimations(),
    importProvidersFrom(HttpClientModule, MatFormFieldModule, MatSelectModule, MatDividerModule, MatButtonModule, )
  ]
};
