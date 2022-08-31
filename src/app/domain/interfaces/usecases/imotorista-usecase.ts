import { Observable } from 'rxjs';
import { DriverEntity } from '../../entities/driver-entity';
import { IUsecase } from './iusecase';

export abstract class IMotoristaUsecase extends IUsecase<DriverEntity> {
  abstract disableEnable(id: number, status: boolean): Observable<DriverEntity>;
}
