import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { ChartDataset } from 'chart.js';
import { Subscription } from 'rxjs';
import { AdminService } from './admin.service';

@Component({
  selector: 'packt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  private store = inject(Store); 
  private adminService = inject(AdminService);

  dataSets: ChartDataset[] = []; 
  labels: string[] = []; 

  ngOnInit(): void {
      this.subscription = this.store.select(PoiSelectors.selectAllPoi).subscribe(pois=> this.buildChart(pois)); 
      this.store.dispatch(PoiActions.initPoi()); 
  }

  ngOnDestroy(): void {
  this.subscription?.unsubscribe();    
  }

  private buildChart(pois: PoiEntity[]){
    this.labels = pois.map(poi=> poi.name); 
    this.dataSets = [{
      data: this.adminService.getStatistics(pois)
    }]
  }
}
