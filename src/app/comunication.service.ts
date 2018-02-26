import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ComunicationService {

  private comunicationStream: any = new Subject();

  public getValue(): Observable<any> {
    return this.comunicationStream.asObservable();
  }

  public setValue(value: string) {
    return this.comunicationStream.next(value);
  }
}
