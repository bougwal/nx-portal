import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';
import { PoiService } from '../poi.service';

@Injectable()
export class PoiEffects {
  private actions$ = inject(Actions);
  private readonly poiservice = inject(PoiService); 


  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      switchMap(()=> this.poiservice.getAll()),
      switchMap(poi => of(PoiActions.loadPoiSuccess({ poi: poi}))),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.loadPoiFailure({ error }));
      })
    )
  );
}
