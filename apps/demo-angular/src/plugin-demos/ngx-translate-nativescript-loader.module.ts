import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NgxTranslateNativescriptLoaderComponent } from './ngx-translate-nativescript-loader.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NgxTranslateNativescriptLoaderComponent }])],
	declarations: [NgxTranslateNativescriptLoaderComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NgxTranslateNativescriptLoaderModule {}
