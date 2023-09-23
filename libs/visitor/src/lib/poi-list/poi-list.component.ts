import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit{

  private readonly store = inject(Store); 
  public readonly pois$ = this.store.select(PoiSelectors.selectAllPoi);

  ngOnInit(): void {
      this.store.dispatch(PoiActions.initPoi())
  }

}
