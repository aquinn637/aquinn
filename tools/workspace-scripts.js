const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@aquinn/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @aquinn/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@aquinn': {
			// @aquinn/inappbrowser
			inappbrowser: {
				build: {
					script: 'nx run inappbrowser:build.all',
					description: '@aquinn/inappbrowser: Build',
				},
			},
			// @aquinn/store-update
			'store-update': {
				build: {
					script: 'nx run store-update:build.all',
					description: '@aquinn/store-update: Build',
				},
			},
			// @aquinn/ngx-translate-nativescript-loader
			'ngx-translate-nativescript-loader': {
				build: {
					script: 'nx run ngx-translate-nativescript-loader:build.all',
					description: '@aquinn/ngx-translate-nativescript-loader: Build',
				},
			},
			// @aquinn/urlhandler
			urlhandler: {
				build: {
					script: 'nx run urlhandler:build.all',
					description: '@aquinn/urlhandler: Build',
				},
			},
			// @aquinn/store-update
			'store-update': {
				build: {
					script: 'nx run store-update:build.all',
					description: '@aquinn/store-update: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			inappbrowser: {
				script: 'nx run inappbrowser:focus',
				description: 'Focus on @aquinn/inappbrowser',
			},
			'store-update': {
				script: 'nx run store-update:focus',
				description: 'Focus on @aquinn/store-update',
			},
			'ngx-translate-nativescript-loader': {
				script: 'nx run ngx-translate-nativescript-loader:focus',
				description: 'Focus on @aquinn/ngx-translate-nativescript-loader',
			},
			urlhandler: {
				script: 'nx run urlhandler:focus',
				description: 'Focus on @aquinn/urlhandler',
			},
			'store-update': {
				script: 'nx run store-update:focus',
				description: 'Focus on @aquinn/store-update',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
