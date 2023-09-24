import { Component, ViewChild, inject } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;  
  private readonly store = inject(Store);
  public poi$ = this.store.select(PoiSelectors.selectEntity); 

  showInfo(marker: MapMarker, poiId: string | number){
    this.store.dispatch(PoiActions.visitPoi({poiId})); 
    this.info?.open(marker); 
  }
}
