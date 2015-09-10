
'use strict';

var React = require('react-native');
//var FB = require('fb');
// var FBSDKLogin = require('react-native-fbsdklogin');
// var FBSDKCore = require('react-native-fbsdkcore');
var Login = require('./js/Login');
var person = require('./js/PersonDB');
var Featured = require('./js/Featured');
var Search = require('./js/Search');
this.tokenString;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} = React;

// var {
//   FBSDKLoginButton,
// } = FBSDKLogin;

// var {
//   FBSDKGraphRequest,
//   FBSDKGraphRequestManager,
//   FBSDKAccessToken
// } = FBSDKCore;

// var fetchMyId = new FBSDKGraphRequest((error, result) => {
//  if (error) {
//    console.log('Error making request.', error);
//  } else {
//   console.log('FB id received')
//  }
// }, '/me', {}, this.tokenString, "v2.4", "GET");

// var fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
//  if (error) {
//    console.log('Error making request.', error);
//  } else {
//    require('./js/PersonDB').fish(result.data);
//  }
// }, '/me/friends', {}, this.tokenString, "v2.4", "GET");
// //fetchFriendsRequest.start();

// FBSDKGraphRequestManager.batchRequests([fetchFriendsRequest, fetchMyId], function (error) {
//  if (error) {
//    console.log("ERROR", error);
//  }
// }, 60);

var Katfish = React.createClass({

  render: function() {
            //
    window.Katfish = this;
    if(!this.state){
      this.getToken();
      return (
        <Image
        source={{uri: 'http://chrissalam.com/bash/sailing.png'}}
        style={styles.loginImage}>
        <Login style={styles.loginContainer}/>
        </Image>
        );
    }
    else {
      return require('./js/TabBar')();
    }
  },
  getToken: function(){
    this.userID = person.ID
    // FBSDKAccessToken.getCurrentAccessToken((token) => {
    //   if (token) {
    //     // A non-null token indicates that the user is currently logged in.
    //     console.log('TOKEN: ', token);
    //     this.tokenString = token.tokenString;
    //     this.userID = token.userID;
    //   } else console.log('there is no token')
    // });
  },
});

var styles = require('./js/styles.js');

AppRegistry.registerComponent('Katfish', () => Katfish);