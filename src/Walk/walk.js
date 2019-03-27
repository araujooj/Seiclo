import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import {Actions} from 'react-native-router-flux';

const Walk = () => {
    return(
        <ImageBackground 
        source = {require('./CIDADE.png')}
        style = {styles.container}
        >
        <View style = {styles.overlayContainer}>

            <View style = {styles.top}>
                <Image source = {require('./BIKE.png')} style = {styles.header}>
                </Image>
            </View>
        <View style = {styles.textView}>
        <Text style = {styles.title}>
            SEICLO
        </Text>
        </View>

        <View style = {styles.contentView}>
            <Text style = {styles.content}>
            Cascavel agora
            possui compartilhamento de bicicletas.
            Que tal colaborar com o meio ambiente e fazer exercício?
            </Text> 
        </View>
                <TouchableOpacity style = {styles.botao}
                 onPress = {()=> Actions.Tutorial()}
                ><Text style = {styles.buttonText}>Como funciona?</Text></TouchableOpacity>
        </View>
        </ImageBackground>
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
      backgroundColor: 'rgba(0,54,65, .8)'
    },
    top:{
      height:'50%',
      alignItems:'center',
      justifyContent:'center',
    },
    header:{
      width:'45%',
      height:'50%',
      borderRadius:100,
      borderColor: '#fff',
      borderWidth:1,
  
    },
    textView:{
      height:'3%',
      alignItems:'center',
      justifyContent:'center',
    },
    title:{
     color:'#fff',
     fontSize:45,
    },
    contentView:{
      height:'25%',
      alignItems:'center',
      justifyContent:'center',
    },
    content:{
     color:'#fff',
     fontSize:25,
     textAlign: 'center',
     margin: 15
    },
    botao:{
    alignSelf :'center',
    width: '60%',
    height: '7%',
    padding:5,
    backgroundColor:'rgba(255,255,255, .3)',
    borderRadius:45
    },
    buttonText:{
      fontSize:25,
      alignSelf:'center',
      color:'#fff'
    }
  });
export default Walk;