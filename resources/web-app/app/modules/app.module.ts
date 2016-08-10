import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppMainComponent} from "../app-main/app-main.component";
import {routing} from "../app-routes/app.routes";
import {GlobalService} from "../services/GlobalService";
import {JobService} from "../services/JobService";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {AppHeaderComponent} from "../app-header/app-header.component";
import {AppFooterComponent} from "../app-footer/app-footer.component";
import {JobListComponent} from "../job-list/job-list.component";
import {ProjectListComponent} from "../project-list/project-list.component";
import {ProjectViewComponent} from "../project-view/project-view.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TaskService} from "../services/TaskService";
import {ProjectService} from "../services/ProjectService";

@NgModule({
	declarations: [
		AppMainComponent,
		HomeComponent,
		AppHeaderComponent,
		AppFooterComponent,
		JobListComponent,
		ProjectListComponent,
		ProjectViewComponent,
		NotFoundComponent
	],
	imports: [
		routing,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule
	],
	bootstrap: [
		AppMainComponent
	],
	providers: [
		GlobalService,
		JobService,
		TaskService,
		ProjectService
	]
})

export class AppModule {
}