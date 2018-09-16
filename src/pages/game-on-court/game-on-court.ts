import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {PlayerService} from "../../services/player-service";
import { PlayersPage } from "../../pages/players/players";
import { OngamePlayerService } from "../../services/ongame-player-service";

/**
 * Generated class for the GameOnCourtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-on-court',
  templateUrl: 'game-on-court.html',
})
export class GameOnCourtPage implements OnInit{

  public players: any;
  public ongamePlayers: any;

  constructor(public navCtrl: NavController, public playerService: PlayerService, public ongamePlayerService: OngamePlayerService) {
    
  } 

  ngOnInit() {
    this.playerService.getAllPlayers().then(
      p => this.players = p
    )     
  }

  ionViewWillEnter() {
    // set sample data
    this.ongamePlayers = this.ongamePlayerService.getAll();
  }

  appType = 'Game started ...';
  playerInRotate = 'players In Rotate';
  weather = 'sunny';

  apps: any = {
    'Score': [
      {
        iconName: 'cog',
        content: 'Monopoly',
        loadFunc: 'score'
        // , price: '$0.99'
      }
      
    ],
    'Players': [
      {
        iconName: 'add',
        content: this.playerInRotate,
        loadFunc: 'loadPlayer'
        // , price: 'GET'
      }
       
    ],
    'TeamStat': [
      {
        iconName: 'cog',
        content: 'Spotify',
        loadFunc: 'stat'
        // ,price: 'OPEN'
      }
      // ,
      // {
      //   name: 'Pandora',
      //   price: 'GET'
      // }
    ]
  };


  getItems(type: any) {
    return this.apps[type];
  }

  load(target) {
    if (target == "loadPlayer")
    {
      this.loadPlayers() ;
    }
  }

  loadPlayers() {
    this.navCtrl.push(PlayersPage,{ isAdd: true  });

  }

  rotate() {
    this.rotateTeam ();
  }

  rotateTeam () { //index, team) {

    // players = eval("$scope." + team + "PlayersOnCourt");

    // if (index < 0 || index >= (this.players.length) || (this.players.length < 6))
    //     return;
    let temp = this.ongamePlayers.shift(); //$scope.people[index];
    //            $scope.people[index] = $scope.people[$scope.people.length-1];
    //            $scope.people[$scope.people.length-1] = temp;     
    this.ongamePlayers.push(temp);
  }
  // getSafariItems(type: any) {
  //   return this.items[type];
  // }

  clearCourt() {

    this.ongamePlayerService.reset();
    this.ongamePlayers = this.ongamePlayerService.getAll();
  }
}

 