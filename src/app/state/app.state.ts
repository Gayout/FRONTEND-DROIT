import { Filter } from "../filter/filter.model";

export interface AppState {
  filters: ReadonlyArray<Filter>;
}