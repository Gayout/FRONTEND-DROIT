import { createReducer, on } from '@ngrx/store';

import { changeFilters } from './filter.actions';
import { Filter } from '../../filter/filter.model';

export const initialState: ReadonlyArray<Filter> = [];

export const filtersReducer = createReducer(
  initialState,
  on(changeFilters, (state, { filters }) => filters)
);