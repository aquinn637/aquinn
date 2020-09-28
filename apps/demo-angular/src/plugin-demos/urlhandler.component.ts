import { Component, NgZone } from '@angular/core';
import { DemoSharedUrlhandler } from '@demo/shared';
import {} from '@aquinn/urlhandler';

@Component({
	selector: 'demo-urlhandler',
	templateUrl: 'urlhandler.component.html',
})
export class UrlhandlerComponent {
	demoShared: DemoSharedUrlhandler;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUrlhandler();
	}
}
