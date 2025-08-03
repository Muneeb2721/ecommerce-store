import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';

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
        path: 'footer-page',
        component: Footer
    }
];
