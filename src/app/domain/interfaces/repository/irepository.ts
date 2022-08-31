import { Observable } from 'rxjs';

export abstract class IRepository<T> {
  abstract get(id?: number): Observable<T>;
  abstract insert(param: T): Observable<T>;
  abstract update(param: T): Observable<T>;
}
