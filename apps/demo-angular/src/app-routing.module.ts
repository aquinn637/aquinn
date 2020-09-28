import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'inappbrowser', loadChildren: () => import('./plugin-demos/inappbrowser.module').then((m) => m.InappbrowserModule) },
	{ path: 'ngx-translate-nativescript-loader', loadChildren: () => import('./plugin-demos/ngx-translate-nativescript-loader.module').then((m) => m.NgxTranslateNativescriptLoaderModule) },
	{ path: 'store-update', loadChildren: () => import('./plugin-demos/store-update.module').then((m) => m.StoreUpdateModule) },
	{ path: 'urlhandler', loadChildren: () => import('./plugin-demos/urlhandler.module').then((m) => m.UrlhandlerModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
