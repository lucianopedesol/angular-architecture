import { UserEntity } from '../../entities/user-entity';
import { IValidator } from './ivalidator';

export abstract class IUsuarioValidator extends IValidator<UserEntity> {
}
