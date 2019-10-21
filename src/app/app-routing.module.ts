import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const rotas = [

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