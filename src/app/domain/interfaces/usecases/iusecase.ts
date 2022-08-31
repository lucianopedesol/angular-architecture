import { Observable } from "rxjs";

export abstract class IUsecase<T> {
  abstract get(id?: number): Observable<T>;
  abstract insert(param: T): Observable<T>;
  abstract update(param: T): Observable<T>;
}
