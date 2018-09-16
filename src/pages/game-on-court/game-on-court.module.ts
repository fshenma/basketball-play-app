import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameOnCourtPage } from './game-on-court';

@NgModule({
  declarations: [
    GameOnCourtPage,
  ],
  imports: [
    IonicPageModule.forChild(GameOnCourtPage),
  ],
})
export class GameOnCourtPageModule {}
