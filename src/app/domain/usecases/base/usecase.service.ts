import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IRepository } from '../../interfaces/repository/irepository';

import { IUsecase } from '../../interfaces/usecases/iusecase';
import { IValidator } from '../../interfaces/validations/ivalidator';

@Injectable({
  providedIn: 'root'
})
export abstract class UsecaseService<T> implements IUsecase<T> {

  constructor(
    private Repository: IRepository<T>,
    private Validator: IValidator<T>
  ) { }

  get(id?: number): Observable<T> {
    if (id) {
      return this.Repository.get(id);
    } else {
      return this.Repository.get();
    }
  }
  insert(param: T): Observable<T> {
    const validator = this.Validator.validateFields(param);

    if (validator.IsValid) {
      return this.Repository.insert(param);
    } else {
      return throwError(validator.Errors);
    }
  }
  update(param: T): Observable<T> {
    const validator = this.Validator.validateFields(param);

    if (validator.IsValid) {
      return this.Repository.update(param);
    } else {
      return throwError(validator.Errors);
    }
  }

}
