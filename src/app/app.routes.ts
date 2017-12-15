import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StagecastSocialMediaComponent } from './components/stagecast-social-media/stagecast-social-media.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'social-media',
        component: StagecastSocialMediaComponent,
        data: { title: 'Stagecast Social Media' }
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home page', lang: 'en' },
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page not found' }
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);