import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { InappbrowserComponent } from './inappbrowser.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: InappbrowserComponent }])],
	declarations: [InappbrowserComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class InappbrowserModule {}
