import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedInappbrowser } from '@demo/shared';
import {} from '@aquinn/inappbrowser';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedInappbrowser {}
