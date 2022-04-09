import { Filter } from "../filter/filter.model";

export interface FilterState {
  filters: ReadonlyArray<Filter>;
  selectedFilters: ReadonlyArray<Filter>;
}