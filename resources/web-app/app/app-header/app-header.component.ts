import {Component} from "@angular/core";
import {GlobalService} from "../services/GlobalService";

@Component({
	selector: 'app-header',
	templateUrl: 'app/app-header/app-header.component.html',
	styleUrls: ['app/app-header/app-header.component.css']
})

export class AppHeaderComponent {

	private jobs: number = 0;

	constructor(private globalService: GlobalService) {
		globalService.jobsCountEmitter.subscribe(value => {
			this.jobs = value;
		});
	}

}