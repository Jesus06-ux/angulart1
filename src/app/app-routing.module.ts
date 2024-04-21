import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent } from './paginas/inicio-component/inicio-component.component';
import { ContactenosComponentComponent } from './paginas/contactenos-component/contactenos-component.component';
import { NosotrosComponentComponent } from './paginas/nosotros-component/nosotros-component.component';
import { PublicacionesComponentComponent } from './paginas/publicaciones-component/publicaciones-component.component';


//ruta de navegacion
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponentComponent },
  { path: 'contactenos', component: ContactenosComponentComponent },
  { path: 'nosotros', component: NosotrosComponentComponent },
  { path: 'publicaciones', component: PublicacionesComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
