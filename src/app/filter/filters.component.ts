import { Component, OnInit  } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { LoadFilters, SelectFilterAction } from '../state/filter/filter.actions';

import { selectCustomerFilters, selectDroitFilters, selectFilters, selectPhotoFilters } from '../state/filter/filter.selectors';
import { CustomerFilter, DroitFilter, Filter, PhotoFilter } from './filter.model';

const mockedFilters = [
  new CustomerFilter(
    {
      id: 'KD',
      name: 'Kelly Delly'
    },
  ),
  new CustomerFilter(
    {
      id: 'KJL',
      name: 'KJL',
    },
  ),
  new DroitFilter(
    {
      id: 'exp',
      name: 'Expiré',
    },
  ),
  new DroitFilter(
    {
      id: 'ongoing',
      name: 'En cours',
    },
  ),
  new PhotoFilter(
    {
      id: 'pack',
      name: 'Photo sur fond blanc',
    },
  ),
  new PhotoFilter(
    {
      id: 'mes',
      name: 'Photo mise en scène',
    },
  ),
];
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public customerFilter$: Observable<ReadonlyArray<Filter>>;
  public droitFilter$: Observable<ReadonlyArray<Filter>>;
  public photoFilter$: Observable<ReadonlyArray<Filter>>;

  constructor(
    private _store: Store
  ) {
    this.customerFilter$ = this._store.select(selectCustomerFilters);
    this.droitFilter$ = this._store.select(selectDroitFilters);
    this.photoFilter$ = this._store.select(selectPhotoFilters);
   }

  public ngOnInit(): void {
    this._store.dispatch(LoadFilters({ filters: mockedFilters }));
  }

  public trackByFn(index: number) {
    return index;
  }

  public selectFilter(event: Event, box: MatCheckbox, filter: Filter) {
    if (event.target === box._elementRef.nativeElement) {
      box.toggle();
      this.onSelectedFilter(filter);
    }
  }

  public onSelectedFilter(filter: Filter) {
    console.log(filter);
    this._store.dispatch(SelectFilterAction(filter))
  }
}
