import { Observable } from 'rxjs';
import { DriverEntity } from '../../entities/driver-entity';
import { IRepository } from './irepository';

export abstract class IMotoristaRepository extends IRepository<DriverEntity>    {
  abstract disableEnable(id: number, status: boolean): Observable<DriverEntity>;
}
