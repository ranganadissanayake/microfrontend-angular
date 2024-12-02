import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent2 } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent2, {
  providers: [
  ]
});
