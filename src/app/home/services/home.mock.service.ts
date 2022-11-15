import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";

import {IHomeService} from "./home.service.interface";

@Injectable({
  providedIn: 'root'
})
export class HomeMockService implements IHomeService {

  apiData = [
    'first -> First random data asdakd aksdankjsdna',
    'second -> Second random data pokgd,m piucn ',
    'third -> Third random data qwxbj p qa[lmc qs ',
    'fourth -> Fourth random data qwrtrtkpoy eoi rugeiugoeiug ',
  ];

  getData(index: number): Observable<string> {
    return of(this.apiData[index]).pipe(delay(1000));
  }

}
