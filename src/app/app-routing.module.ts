import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Section2Component } from './section2/section2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/test', pathMatch: 'full'},//this is the default path, it must be at the top of the array.
  {path: 'test', component: TestComponent},
  {path: 'section2', component: Section2Component},
  {path:'department-list', component: DepartmentListComponent},
  {path: 'forms',
  component: FormsComponent,
  children: [
    {path: 'tdf', component: TemplateDrivenFormComponent},
    {path: 'reactive-form', component: ReactiveFormComponent}
  ]},
  {path:'department-detail/:id',
  component: DepartmentDetailComponent,
  children: [
    {path: 'overview', component: DepartmentOverviewComponent},
    {path: 'contact', component: DepartmentContactComponent}
  ]},//":id" is a placeholder for the route parameter
  {path: "**", component: PageNotFoundComponent}//this is the wildcard route, it must be to the bottom of the array.
];//this is then passed as an argument in the forRoot() method below

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponent, Section2Component, DepartmentListComponent, DepartmentDetailComponent, PageNotFoundComponent, FormsComponent, TemplateDrivenFormComponent, ReactiveFormComponent]