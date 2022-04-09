import { createReducer, on } from '@ngrx/store';

import { LoadFilters, SelectFilterAction } from './filter.actions';
import { Filter } from '../../filter/filter.model';
import { FilterState } from '../filter.state';

export const initialState: FilterState = {
  filters: [],
  selectedFilters: [],
}

export const filtersReducer = createReducer(
  initialState,
  on(LoadFilters, onLoadFilters),
  on(SelectFilterAction, onSelectFilterAction),
);

function onLoadFilters(
  state: FilterState,
  { filters } : { filters: Filter[] },
): FilterState {
  return {
    ...state,
    filters: filters.map((f, index) => ({ ...f , id: index })),
  }
};

function onSelectFilterAction(
  state: FilterState,
  filter : Filter,
): FilterState  {
  const selectedFilters = state.selectedFilters;

  if (selectedFilters.some(f => f.id === filter.id)) {
    return {
      ...state,
      selectedFilters: selectedFilters.filter(f => f.id !== filter.id),
    };
  }

  return {
    ...state,
    selectedFilters: [...selectedFilters, filter],
  };
}
