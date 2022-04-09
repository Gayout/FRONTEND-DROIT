import { createAction, props } from "@ngrx/store";
import { Filter } from "../../filter/filter.model";

export const LOAD_FILTER_ACTION = '[FILTER] Load filter'
export const SELECT_FILTER_ACTION = '[FILTER] Select filter'

export const LoadFilters = createAction(
  LOAD_FILTER_ACTION,
  props<{ filters: Filter[] }>(),
)

export const SelectFilterAction = createAction(
  SELECT_FILTER_ACTION,
  props<Filter>(),
);
