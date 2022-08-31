import { ValidationResult } from 'ts.validator.fluent/dist';

export abstract class IValidator<T> {
  abstract validateFields(param: T): ValidationResult;
}
