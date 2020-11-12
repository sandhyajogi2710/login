import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

export class LoginService{
    constructor(){}

    doLogin(payload){
       return of(payload);
    }
}