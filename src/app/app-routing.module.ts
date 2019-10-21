import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteSomar } from './somar';

export const rotas = [
    { path: 'index', pathMatch: 'full', redirectTo: 'localhost:4200' },
    ...RouteSomar
]

/*
    Criação do módulo para gerenciar as rotas da aplicação angular
*/

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }