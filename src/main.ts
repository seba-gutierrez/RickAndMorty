import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavbarComponent } from './app/navbar/navbar.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(NavbarComponent,
).catch(err => console.error(err));