import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  user = {
    name: 'Toni Kusnandar',
    profileImage: 'assets/img/avatar/pp.jpg',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 0,
    following: 0,
    posts: 0
  };
  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/img/background/background-3.jpg',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/img/background/background-4.jpg',
      date: 'June 28, 2016',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
