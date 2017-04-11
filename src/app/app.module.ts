import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Main App
import { AppComponent }            from './app.component';
// Main Module
import { AppRoutingModule }        from './app-routing.module';
// Component Module
import { HeroesModule }            from './heroes/heroes.module';
import { LoginRoutingModule }      from './login-routing.module';
// Child Component
import { ComposeMessageComponent } from './compose-message.component/compose-message.component';
import { LoginComponent }          from './login.component';
import { PageNotFoundComponent }   from './not-found.component';
// Service
import { DialogService }           from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
