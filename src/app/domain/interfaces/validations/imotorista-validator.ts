import { ValidationResult } from 'ts.validator.fluent/dist';
import { DriverEntity } from '../../entities/driver-entity';
import { IValidator } from './ivalidator';

export abstract class IMotoristaValidator extends IValidator<DriverEntity>{
}
