import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { IMotoristaUsecase } from '../../interfaces/usecases/imotorista-usecase';
import { IMotoristaRepository } from '../../interfaces/repository/imotorista-repository';
import { IMotoristaValidator } from '../../interfaces/validations/imotorista-validator';
import { DriverEntity } from '../../entities/driver-entity';
import { UsecaseService } from '../base/usecase.service';
import { IRepository } from '../../interfaces/repository/irepository';
import { IValidator } from '../../interfaces/validations/ivalidator';

@Injectable({
  providedIn: 'root'
})
export class MotoristaUsecaseService extends UsecaseService<DriverEntity> implements IMotoristaUsecase {

  constructor(
    private motoristaRepository: IMotoristaRepository,
    repository: IRepository<DriverEntity>,
    validator: IValidator<DriverEntity>
  ) {
    super(repository, validator)
  }


  disableEnable(id: number, status: boolean): Observable<DriverEntity> {
    return this.motoristaRepository.disableEnable(id, status);
  }

}
