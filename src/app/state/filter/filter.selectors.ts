import { createFeatureSelector } from '@ngrx/store';
import { Filter } from './filter.model';

export const selectFilters = createFeatureSelector<ReadonlyArray<Filter>>('filters');
