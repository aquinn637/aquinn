import { Component, NgZone } from '@angular/core';
import { DemoSharedNgxTranslateNativescriptLoader } from '@demo/shared';
import {} from '@aquinn/ngx-translate-nativescript-loader';

@Component({
	selector: 'demo-ngx-translate-nativescript-loader',
	templateUrl: 'ngx-translate-nativescript-loader.component.html',
})
export class NgxTranslateNativescriptLoaderComponent {
	demoShared: DemoSharedNgxTranslateNativescriptLoader;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNgxTranslateNativescriptLoader();
	}
}
