import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
// import { Subject } from 'rxjs/Subject';

@Injectable()
export class StorageService {

    constructor() { }

    setSessionItem(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    getSessionItem(key: string): string {
        return sessionStorage.getItem(key);
    }

    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    removeSessionItem(key: string): void {
        sessionStorage.removeItem(key);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    clearSession(): void {
        sessionStorage.clear();
    }

    clear(): void {
        localStorage.clear();
    }
}
