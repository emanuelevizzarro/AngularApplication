import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
/* import { ProjectDashboardComponent } from './modules/project/pages/project-dashboard/project-dashboard.component';
import { ProjectDetailComponent } from './modules/project/pages/project-detail/project-detail.component';
import { ProjectListComponent } from './modules/project/components/project-list/project-list.component';
import { ProjectFormComponent } from './modules/project/components/project-form/project-form.component'; */
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
//import { SharedModule } from './shared/shared.module';
import { ProjectModule } from './modules/project/project.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
/* import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';
 */
@NgModule({
  declarations: [
    AppComponent,
    /* ProjectDashboardComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent, */
    //HomeComponent,
    NavbarComponent,
    /* ,
    SectionHeaderComponent, */
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    //ProjectModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    /*  SharedModule, */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
