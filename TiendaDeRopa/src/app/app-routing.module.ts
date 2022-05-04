import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ArticuloService } from './home/articulo.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'acerca', component:AcercaComponent},
{path: 'articulo/:id', component:ArticuloService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
