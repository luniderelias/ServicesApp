export const environment = {
	production: false,
	AdMobFreeBannerConfig: {
		isTesting: true,
		autoShow: true
	},
	firebase: {
		apiKey: 'AIzaSyC_XK8JWBdU85Q1YdED3XBfL67vyh1lvYc',
		authDomain: 'services-app-pentecoste.firebaseapp.com',
		databaseURL: 'https://services-app-pentecoste.firebaseio.com',
		projectId: 'services-app-pentecoste',
		storageBucket: 'services-app-pentecoste.appspot.com',
		messagingSenderId: '983922821843',
		appId: '1:983922821843:web:bf079d50af158165'
	},
	stripe_publish_key: 'pk_test_nqykHcHCdCnWPJCD6pguqShK',
	google_project_number: '762391382612',
	fb_app: 344774959730129,
	fb_v: 'v3.2',
	paypal_sandbox_client_id: 'Ac-QK_Lkar46qQDWcp1kega6aPk13SxXv3dkCVX7A2Nlw7BViP3JyDUQQg-6W386yjgaeEHTuaO9BxGx',
	paypal_live_client_id: '',
	languages: {
		'en': 'English',
		'vi': 'Vietnamese'
	},
	menu: [{
		name: 'Produtos',
		path: '/home',
		component: 'HomePage',
		icon: 'md-search',
	},{
		name: 'Categorias',
		path: '/categories',
		component: 'CategoriesPage',
		icon: 'md-albums',
	}, {
		name: 'Meus Pedidos',
		path: '/orders',
		component: 'OrdersPage',
		icon: 'md-clipboard',
	}, {
		name: 'Lista de Desejos',
		path: '/wishlist',
		component: 'WishlistPage',
		icon: 'md-heart-empty',
	}, /* {
		name: 'Mapa',
		path: '/map',
		component: 'MapPage',
		icon: 'md-compass',
	}, */ {
		name: 'Configurações',
		path: '/settings',
		component: 'SettingPage',
		icon: 'md-create',
	},
	/*{
		name: 'ChatList',
		path: '/chat-list',
		component: 'ChatListPage',
		icon: 'chatboxes',
	}, */
	],


	themes: [{
		name: 'Orange',
		primary: '#ff9800',
		secondary: '#7d65e8',
		tertiary: '#ffab40',
		light: '#fff3e0',
		medium: '#ffdaa3',
		dark: '#1a1714'
	}],
};