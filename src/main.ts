import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_PIPES } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, } from '@angular/platform-browser';
import 'rxjs/Rx';

import { TRANSLATION_PROVIDERS, TranslateService, TranslatePipe } from './app/translate';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provide(HAMMER_GESTURE_CONFIG, {
    useClass: HammerGestureConfig
  }),
  provideForms(),

  TRANSLATION_PROVIDERS,
  TranslateService,
  provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true })
]);
