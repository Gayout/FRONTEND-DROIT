import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CUSTOMER_FILTER_TYPE, DROIT_FILTER_TYPE, PHOTO_FILTER_TYPE } from '../../filter/filter.model';
import { FilterState } from '../filter.state';

export const selectFilterFeature = createFeatureSelector<FilterState>('filters');

export const selectFilters = createSelector(
  selectFilterFeature,
  (state) => state.filters,
);
export const selectSelectedFilters = createSelector(
  selectFilterFeature,
  (state) => state.selectedFilters,
);

export const selectCustomerFilters = createSelector(
  selectFilters,
  (filters) => filters.filter(f => f.type === CUSTOMER_FILTER_TYPE),
)

export const selectDroitFilters = createSelector(
  selectFilters,
  (filters) => filters.filter(f => f.type === DROIT_FILTER_TYPE),
)

export const selectPhotoFilters = createSelector(
  selectFilters,
  (filters) => filters.filter(f => f.type === PHOTO_FILTER_TYPE),
)
