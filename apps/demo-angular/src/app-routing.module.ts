import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'inappbrowser', loadChildren: () => import('./plugin-demos/inappbrowser.module').then((m) => m.InappbrowserModule) },
	{ path: 'store-update', loadChildren: () => import('./plugin-demos/store-update.module').then((m) => m.StoreUpdateModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
