import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { TopoComponent } from './layout/topo/topo.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [SharedModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, NavComponent, TopoComponent, FooterComponent]
})
export class LayoutModule {}
