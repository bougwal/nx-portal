import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PoiEntity } from './+state/poi.models';

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private readonly http = inject(HttpClient); 

  getAll(): Observable<PoiEntity[]>{
    return this.http.get<PoiEntity[]>('assets/poi.json')
  }
}
