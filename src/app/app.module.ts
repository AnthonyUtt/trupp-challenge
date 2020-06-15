import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material components
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProfileContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
