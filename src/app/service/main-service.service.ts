import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    constructor(public http$: HttpClient) { }

    public getDetails() {
        const url = `https://1.api.fy23ey05.careers.ifelsecloud.com/`;
        return this.http$.get(url);
    }
}
