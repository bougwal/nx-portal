import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'tour'
    }, 
    {
        path: 'tour', 
        loadChildren: ()=> import('@packt/visitor').then(m => m.LibsVisitorModule)
    }, 
    {
        path: 'admin', 
        loadChildren: ()=> import('@packt/admin').then(m => m.AdminModule)
    }, 
];
