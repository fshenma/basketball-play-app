import { Injectable } from "@angular/core";
// import {PLAYERS} from "./mock-players";

@Injectable()
export class OngamePlayerService {
  private ongamePlayers: any[] = [];

  constructor() {
    // this.ongamePlayers = PLAYERS;
  }

  getAll() {
    return this.ongamePlayers;
  }

  getItem(id) {
    for (var i = 0; i < this.ongamePlayers.length; i++) {
      if (this.ongamePlayers[i].id === parseInt(id)) {
        return this.ongamePlayers[i];
      }
    }
    return null;
  }

  add(item) {
    if (this.ongamePlayers.indexOf(item) === -1) {
      this.ongamePlayers.push(item);
    }
  }

  remove(item) {
    this.ongamePlayers.splice(this.ongamePlayers.indexOf(item), 1);
  }

  reset() {
    this.ongamePlayers = [];
  }
}
