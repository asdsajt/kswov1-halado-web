import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
        canLoad: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
