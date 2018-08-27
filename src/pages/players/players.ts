import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PlayerService} from "../../services/player-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {
  // list of players
  public players: any;

  constructor(public nav: NavController, public playerService: PlayerService) {
    // set sample data
    this.players = playerService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }
}
