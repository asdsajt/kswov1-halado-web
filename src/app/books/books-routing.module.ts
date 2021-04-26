import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from '../book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookAddingComponent } from '../book-adding/book-adding.component';
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
    { path: '',
        component: BooksComponent,
        canActivate: [AuthGuard],
        children: [{
            path: '',
            canActivateChild: [AuthGuard],
            children: [
                {
                    path: '',
                    component: BookListComponent
                },
                {
                    path: 'details/:eventId',
                    component: BookDetailsComponent
                },
                {
                    path: 'add',
                    component: BookAddingComponent
                }
            ]
        }]
    },
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: '**', component: BookListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class BooksRoutingModule { }
