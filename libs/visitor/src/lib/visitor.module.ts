import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { VisitorComponent } from './visitor.component';

@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    RouterModule.forChild([{ path: '', component: VisitorComponent }])],
    declarations: [VisitorComponent], 
    exports: [VisitorComponent]
})
export class LibsVisitorModule {}
