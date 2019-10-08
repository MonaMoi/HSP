import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewKategoriesComponent} from "./components/overview-kategories/overview-kategories.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailKursComponent} from "./components/detail-kurs/detail-kurs.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'overview-categories', component: OverviewKategoriesComponent},
  {path: 'detail-kurs/:id', component: DetailKursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
