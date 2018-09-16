import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { Config } from '../config';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {PlayerService} from "../services/player-service";
import {OngamePlayerService} from "../services/ongame-player-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {AuthService } from '../services/auth-service';
import { firebaseConfig } from '../config';
import {LoginPage} from "../pages/login/login";
import {PlayersPage} from "../pages/players/players";
import {PlayerDetailPage} from "../pages/player-detail/player-detail";
import {GamesPage} from "../pages/games/games";
import {GameOnCourtPage} from "../pages/game-on-court/game-on-court";
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    PlayersPage,
    PlayerDetailPage,
    GamesPage,
    GameOnCourtPage,
    ScheduleFilterPage,
    SessionDetailPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__basketball_app_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    PlayersPage,
    PlayerDetailPage,
    GamesPage,
    GameOnCourtPage,
    ScheduleFilterPage,
    SessionDetailPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage
  ],
  providers: [
    Config,
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    PlayerService,
    OngamePlayerService,
    ConferenceData,
    UserData,
    WeatherProvider,
    AngularFireAuth,
    AuthService
  ]
})

export class AppModule {
}
