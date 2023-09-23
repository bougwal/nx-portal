import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  
  private readonly store = inject(Store);
  public poi$ = this.store.select(PoiSelectors.selectEntity); 
}
