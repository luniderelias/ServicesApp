import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES_ADMIN: RouteInfo[] = [

    {
        path: '/dashboard/eCommerce', title: 'Dashboard', icon: 'icon-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/lojas', title: 'Lojas', icon: 'icon-screen-desktop', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/lojas/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           // { path: '/lojas/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/categorias', title: 'Categorias', icon: 'icon-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/categorias/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/categorias/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/produtos', title: 'Produtos', icon: 'icon-puzzle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {path: '/produtos/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {path: '/produtos/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/enderecos', title: 'Cidades', icon: 'icon-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/enderecos/cidades/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
            {
                path: '/enderecos/cidades/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/pedidos', title: 'Pedidos', icon: 'icon-note', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: []
    },
];


// Sidebar menu Routes and data
export const ROUTES_STORE_ONE: RouteInfo[] = [

    {
        path: '/lojas', title: 'Lojas', icon: 'icon-screen-desktop', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/lojas/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           // { path: '/lojas/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/categorias', title: 'Categorias', icon: 'icon-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/categorias/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/produtos', title: 'Produtos', icon: 'icon-puzzle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {path: '/produtos/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/enderecos', title: 'Cidades', icon: 'icon-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/enderecos/cidades/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/pedidos', title: 'Pedidos', icon: 'icon-note', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: []
    },
];
