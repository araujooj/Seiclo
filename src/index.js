/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Walk from './Walk/walk'
import Tutorial from './Tutorial/tutorial'
import Tutorial2 from './Tutorial/pagamento'
import Tutorial3 from './Tutorial/completa'
import Login from './Login/login'
import Cadastro from './Cadastro/cadastro'
import Main from './Main/main';
import Menu from './Drawer/menu'
import Drawer1 from './Drawer/drawer1'
import Drawer2 from './Drawer/drawer2'

export default class App extends Component  {
  render() {
    return (
      <Router
      titleStyle={{ color: '#FFF', alignItems:'center'}}
       navigationBarStyle={{ backgroundColor: '#00a091'}}>
        <Scene key = 'root'>
          <Scene
          key = 'Walk'
          component = {Walk}
          title = 'Walkthrought'
          hideNavBar={true}
           />
           <Scene
          key = 'Tutorial'
          component = {Tutorial}
          title = 'Tutorial'
          hideNavBar={true}
           />
             <Scene
          key = 'Tutorial2'
          component = {Tutorial2}
          title = 'Tutorial2'
          hideNavBar={true}
           />
             <Scene
          key = 'Tutorial3'
          component = {Tutorial3}
          title = 'Tutorial3'
          hideNavBar={true}
           />
           <Scene
          key = 'Login'
          component = {Login}
          title = 'Login'
          hideNavBar={true}
           />
            <Scene
          key = 'Cadastro'
          component = {Cadastro}
          title = 'Cadastro'
          hideNavBar={true}
           />
           <Scene
          key = 'Main'
          component = {Main}
          title = 'Mapa'
          hideNavBar={false}   
          hideBackImage = {true}
           />
         
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
