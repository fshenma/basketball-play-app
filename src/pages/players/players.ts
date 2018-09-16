import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PlayerService } from "../../services/player-service";
import { OngamePlayerService } from "../../services/ongame-player-service";
import { PlayerDetailPage } from "../player-detail/player-detail";
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {
  public isAdd: boolean;

  // list of players
  public players: any;

  constructor(public nav: NavController, public navParams: NavParams, public playerService: PlayerService, public ongamePlayerService: OngamePlayerService) {

  }

  ionViewWillEnter() {
    // set sample data
    this.playerService.getAllPlayers().then(
      p => this.players = p
    ) 
    // this.dataProvider.load().subscribe((data: any) => {
    this.isAdd = this.navParams.data.isAdd;
  }

  addPlayerToGame(player, event) {
    this.ongamePlayerService.add(player);
    event.target.parentNode.textContent = "In Game";    //.style.display='none';
  }

  // view player detail
  viewDetail(id) {
    if (!this.isAdd) {
      this.nav.push(PlayerDetailPage, { id: id });
    }
  }

  
}
