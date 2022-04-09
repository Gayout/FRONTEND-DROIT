import { Customer } from '../customer/customer.model';
export interface Filter<T = any> {
  id?: number;
  type?: string;
  self: T;
  label: string;
  filter: (project: any) => boolean;
}

export const CUSTOMER_FILTER_TYPE = 'customer';

export class CustomerFilter implements Filter<Customer> {
  public label: string = '';
  public readonly type: string = CUSTOMER_FILTER_TYPE;

  constructor(public self: Customer) {
    this.label = self.name;
  }

  public filter(project: any) {
    return project.customer === this.self;
  }
}

export const DROIT_FILTER_TYPE = 'droit';

export class DroitFilter implements Filter<Customer> {
  public label: string = '';
  public readonly type: string = DROIT_FILTER_TYPE;

  constructor(public self: Customer) {
    this.label = self.name;
  }

  public filter(project: any) {
    return project.droit === this.self;
  }
}

export const PHOTO_FILTER_TYPE = 'photo';

export class PhotoFilter implements Filter<Customer> {
  public label: string = '';
  public readonly type: string = PHOTO_FILTER_TYPE;

  constructor(public self: Customer) {
    this.label = self.name;
  }

  public filter(project: any) {
    return project.photo === this.self;
  }
}
