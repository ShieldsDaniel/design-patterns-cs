import { Observable } from "./Observable.interface";

export interface Observer {
  update(context: Observable): void;
}
