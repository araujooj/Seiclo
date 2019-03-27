import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import MapView from 'react-native-maps'

export default class MapIndex extends Component {
    state = {
        region: null,
    }

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            ({ coords: {latitude, longitude}}) => {
                this.setState({
                region:{
                     latitude,
                     longitude,
                     latitudeDelta:0.0143,
                    longitudeDelta:0.0134,}});
            }, //sucesso
            () => {}, //erro
            {
                timeout:2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }
  render() {
    return (
      <View style = {{flex:1,}}>
        <MapView 
        style = {{flex:1}}
        region = {{
          latitude: -24.9424825,
          longitude: -53.4866639,
          latitudeDelta:0.0143,
          longitudeDelta:0.0134,
        }}
        showsUserLocation
        loadingEnabled
        />
     <View style = {styles.whiteContainer}>
     <Image 
     source = {require('./perfil.jpg')} 
     style = {styles.header}
     ></Image>
      <View style = {styles.top}>
           <Text style={styles.nameText}>Gabriel Araújo </Text>
      </View>
      <View style = {styles.container}>
      <View style = {styles.timeView}>
          <Text style = {styles.timeText}>
           Tempo Restante: ---
          </Text>
          </View>

          <View style = {styles.distanceView}>
          <Text style = {styles.distanceText}>
            Distância Percorrida: ---
          </Text>
        </View>
      </View>
        

     </View>
   </View>
    )
  }
}

const styles = StyleSheet.create({
  whiteContainer:{
    width:'100%',
    height:'28%',
    borderWidth:2,
    borderColor: '#00a091',
    backgroundColor: '#00a091',
   },
  top:{
    width: '60%',
    height:'20%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  header:{
    width:50,
    height:50,
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'center'
  },
  nameText:{
    fontSize:20,
    color:'#fff',
    textAlign: 'center',
  },
  distanceView:{
    width: '40%',
    height:'5%',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flex:1,
    marginRight: '50%',
    marginTop: '10%',
    position: 'absolute'
  },
  distanceText:{
    fontSize:15,
    color:'#fff',
    textAlign: 'center',
  },
  timeView:{
    width: '40%',
    height:'5%',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    flex:1,
    marginLeft: '50%',
    marginTop: 53,
    position:"absolute"
  },
  timeText:{
    fontSize:15,
    color:'#fff',
    textAlign: 'center',
  },
  container:{
    width: '100%',
  }
})
