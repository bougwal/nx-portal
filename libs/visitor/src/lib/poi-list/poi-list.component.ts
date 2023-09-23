import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit{

  private readonly store = inject(Store); 

  ngOnInit(): void {
      this.store.dispatch(PoiActions.initPoi())
  }

}
