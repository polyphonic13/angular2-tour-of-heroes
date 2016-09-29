import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable()
export class HeroSearchService {
  // private heroesUrl = 'http://localhost:8997/api/heroes';

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    let url = HeroService.API_URL;
    return this.http
      .get(`${url}/?name=${term}`)
      .map((r: Response) => r.json().data as Hero[]);
  }
}
