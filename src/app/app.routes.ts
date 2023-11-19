import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component')
    },
    {
        path: 'animal-add',
        loadComponent: () => import('./animal/animal-form/animal-form.component')
        // component: AnimalFormComponent
    },
    {
        path: "**",
        redirectTo: ''
    }];

