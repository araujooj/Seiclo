import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native'

import {Actions} from 'react-native-router-flux';

const Tutorial3 = () => {
    return(
        <View style={styles.container}>
        <View style = {styles.overlayContainer}>
            <View style = {styles.whiteContainer}>
              <View style ={styles.circle}>
              <Image source = {require('./Icone3.png')} style = {styles.header}>
                </Image>
              </View>
            <Text style = {styles.title}>Complete seu Perfil</Text>

          <View style = {styles.contentView}>
          <Text style = {styles.contentText}>Cadastre-se e pague a tarifa
            pelo site ou aqui mesmo pelo aplicativo, para poder utilizar as bicicletas
            </Text>
          </View>
        
            </View>
            <View style={[{ width: "70%", margin: 55, backgroundColor: "red" }]}>
          <Button
            onPress = {()=> Actions.Login()}
            title="Próximo"
            color="#00a091"
          />
        </View> 
     
 
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,54,65, .9)',
  
  },
  whiteContainer:{
    width:'70%',
    height:'70%',
    marginLeft: '15%',
    marginTop: '15%',
    borderWidth:2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'space-between',
  },
  circle:{
    width:120,
    height:120,
    borderRadius:100,
    backgroundColor: 'rgba(0,0,0, .1)', 
    marginTop: '30%',
  },
  header:{
    width:95,
    height:95,
    marginTop: '10%',
    marginLeft: '10%',
  },
  title:{
    fontSize: 25,
    color:'rgba(0,0,0, .9)',
  },
  contentView:{
    height:'5%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'20%'
  },
  contentText:{
    fontSize:20,
    color:'rgba(0,0,0, .8)',
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
    margin: 15,
  },
  buttonContainer:{
    borderColor: '#fff',
    borderWidth:2,
    width: '70%',
    alignItems:'center',
    justifyContent:'space-between',
  }
  });
export default Tutorial3;