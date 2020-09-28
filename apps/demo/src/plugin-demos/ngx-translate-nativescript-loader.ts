import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNgxTranslateNativescriptLoader } from '@demo/shared';
import {} from '@aquinn/ngx-translate-nativescript-loader';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNgxTranslateNativescriptLoader {}
