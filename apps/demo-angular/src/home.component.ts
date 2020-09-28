import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'inappbrowser',
		},
		{
			name: 'ngx-translate-nativescript-loader',
		},
		{
			name: 'store-update',
		},
		{
			name: 'urlhandler',
		},
	];
}
