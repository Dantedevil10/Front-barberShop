import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalscreenComponent } from './pages/principalscreen/principalscreen.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';

const routes: Routes = [
  {path:"agenda", component:AgendamentoComponent},
  {path:"home", component:PrincipalscreenComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
