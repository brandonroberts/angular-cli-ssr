import { bootstrapApplication } from '@angular/platform-browser';
import { renderApplication } from '@angular/platform-server';

import { config } from './app/app.config.server';
import { AppComponent } from './app/app.component';

export default function bootstrap() {
  return bootstrapApplication(AppComponent, config);
}

export { renderApplication }