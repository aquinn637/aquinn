import { Component, NgZone } from '@angular/core';
import { DemoSharedInappbrowser } from '@demo/shared';

@Component({
	selector: 'demo-inappbrowser',
	templateUrl: 'inappbrowser.component.html',
})
export class InappbrowserComponent {

	demoShared: DemoSharedInappbrowser;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedInappbrowser();
	}
}
