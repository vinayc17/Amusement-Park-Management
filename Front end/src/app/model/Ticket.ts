import { Activity } from './Activity';
import { Customer } from './Customer';

export interface Ticket {
  id: number;
  customer: Customer;
  activity: Activity;
  dateTime: string;
  status: string;
}
