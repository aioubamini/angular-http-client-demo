import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



import { Member } from '../model/member';


@Injectable()

export class HeroService {

    private heroesUrl = 'api/members';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' }); // for PUT actions

    constructor(private http: Http) { }

    getMembers(): Promise<Member[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Member[])
            .catch(this.handleError);
    }

    getMember(id: number): Promise<Member> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Member)
            .catch(this.handleError);
    }

    update(member: Member): Promise<Member> {
        const url = `${this.heroesUrl}/${member.id}`;
        return this.http
            .put(url, JSON.stringify(member), { headers: this.headers })
            .toPromise()
            .then(() => member)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}