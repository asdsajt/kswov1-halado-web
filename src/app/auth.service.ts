import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    getToken(): string {
        return 'kswov1-token-13579';
    }

    isAuthenticated(): boolean {
        return true;
    }

}
