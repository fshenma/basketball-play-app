import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { PlayersPage } from "../pages/players/players";
import { GamesPage } from "../pages/games/games";
import {GameOnCourtPage} from "../pages/game-on-court/game-on-court";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public userData: UserData,
    public confData: ConferenceData,
    // public storage: Storage,
    public keyboard: Keyboard
  ) {
    // load the conference data
    confData.load();

    // decide which menu items should be hidden by current login status stored in local storage
     
    this.initializeApp(); 

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Players', component: PlayersPage, icon: 'people'},
      {title: 'Games Scheduled', component: GamesPage, icon: 'calendar'},
      {title: 'Game On Court', component: GameOnCourtPage, icon: 'basketball'},
      {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      
      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
