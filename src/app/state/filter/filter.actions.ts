import { createAction, props } from "@ngrx/store";
import { Filter } from "../../filter/filter.model";

export const CHANGE_FILTERS_ACTION = '[FILTER] Change filters'

export const changeFilters = createAction(
  CHANGE_FILTERS_ACTION,
  props<{ filters : Filter[] }>(),
);
