import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartAModule } from './part-a/part-a.module';
import { PartBModule } from './part-b/part-b.module';
import { PartCModule } from './part-c/part-c.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartAModule,
    PartBModule,
    PartCModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
