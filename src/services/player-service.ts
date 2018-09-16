import {Injectable} from "@angular/core";
import {PLAYERS} from "./mock-players";

@Injectable()
export class PlayerService {
  // private players: any;

  // constructor() {
  //   this.players = PLAYERS;
  // }

  getAllPlayers() {
    return Promise.resolve (PLAYERS);
  }

  getItem(id) {
    for (var i = 0; i < PLAYERS.length; i++) {
      if (PLAYERS[i].id === parseInt(id)) {
        return PLAYERS[i];
      }
    }
    return null;
  }

  remove(item) {
    PLAYERS.splice(PLAYERS.indexOf(item), 1);
  }
}
