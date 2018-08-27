import {Injectable} from "@angular/core";
import {PLAYERS} from "./mock-players";

@Injectable()
export class PlayerService {
  private players: any;

  constructor() {
    this.players = PLAYERS;
  }

  getAll() {
    return this.players;
  }

  getItem(id) {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].id === parseInt(id)) {
        return this.players[i];
      }
    }
    return null;
  }

  remove(item) {
    this.players.splice(this.players.indexOf(item), 1);
  }
}
