import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Your Heroes were fetched, my lord');
    return of(HEROES);
  }
}
