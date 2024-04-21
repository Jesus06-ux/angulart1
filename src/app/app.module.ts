import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponentComponent } from './paginas/inicio-component/inicio-component.component';
import { NosotrosComponentComponent } from './paginas/nosotros-component/nosotros-component.component';
import { ContactenosComponentComponent } from './paginas/contactenos-component/contactenos-component.component';
import { PublicacionesComponentComponent } from './paginas/publicaciones-component/publicaciones-component.component';
import { MenuComponentComponent } from './paginas/menu-component/menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    NosotrosComponentComponent,
    ContactenosComponentComponent,
    PublicacionesComponentComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
