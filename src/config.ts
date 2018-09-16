import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
        apiKey: "AIzaSyA5iGXEcDqoUXESU3SDx45InkJY098KaSM",
        authDomain: "wscb-1223a.firebaseapp.com",
        databaseURL: "https://wscb-1223a.firebaseio.com",
        projectId: "wscb-1223a",
        storageBucket: "wscb-1223a.appspot.com",
        messagingSenderId: "885739889961"
    }
    
};
