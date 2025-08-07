import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Shop } from './shop/shop';
import { SingleProduct } from './single-product/single-product';
import { Notifications } from './notifications/notifications';

export const routes: Routes = [
    
    {
    path: '',
    redirectTo: 'header-page',
    pathMatch: 'full' // ✅ Important
  },
    {
        path: 'header-page',
        component: Header
    }
    ,
    {
        path: 'home-page',
        component: Home
    }
    ,
    {
        path: 'shop-page',
        component: Shop
    }
    ,
    {
        path: 'single-product-page',
        component: SingleProduct
    }
    ,
    {
        path: 'notifications-page',
        component: Notifications
    }
    ,
    {
        path: 'footer-page',
        component: Footer
    }
];
