import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'tour', 
        loadChildren: ()=> import('@packt/libs/visitor').then(m => m.LibsVisitorModule)
    }, 
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'tour'
    }
];
