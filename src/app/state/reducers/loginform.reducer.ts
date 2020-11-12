import { LoginForm } from '../../loginform/loginform.model';
import { Action } from '@ngrx/store';

export const LOGIN_FORM = 'LOGIN_FORM';

export function validateForm(state: LoginForm[] = [], action) {
  switch (action.type) {
    case LOGIN_FORM:
        return [...state, action.payload];
    default:
        return state;
    }
}
