import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native'

import { Icon } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';


const Login = () => {
    return(
        <View style={styles.container}>
        <View style = {styles.overlayContainer}> 

        <View style={styles.formularios}>
 <TextInput placeholder = "CPF" keyboardType="numeric"
     style ={[ styles.codeHighlightContainer, styles.homeScreenFilename]}
      />
    
    <TextInput placeholder = "Senha" keyboardType="numeric" 
    style ={[ styles.codeHighlightContainer, styles.homeScreenFilename]}
   secureTextEntry = {true}
     />
</View>
    <View style= {styles.forgotView}>
        <Text style= {styles.forgotText}
        >
            Esqueceu sua senha?
        </Text>
    </View>
    <View style={[{ width: "81%", margin: 35, }]}>
          <Button
            onPress = {()=> Actions.Main()}
            title="LOGIN"
            color="#00a091"
          />
        </View> 
  
        <View style = {styles.registerView}>
        <Text style = {styles.registerText} onPress = {()=> Actions.Cadastro()}>
            Não tem uma conta? Registre-se
        </Text>
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
      formularios: {
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop:'30%'
      },
      homeScreenFilename: {
        marginVertical: 7,
      },
      codeHighlightContainer: {
        width: '100%',
        backgroundColor:'#fbfbfb',
        borderRadius: 3,
        paddingHorizontal: 4,
      },
    forgotView:{
    marginLeft:'47%'
    },
    forgotText:{
        fontSize: 20,
        color: '#fff',
        textDecorationLine: 'underline' 
    },
    socialView:{
        marginBottom:'30%',
        },
        socialText:{
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
        },
        registerView:{
            margin:'15%',
        },
        registerText:{
            fontSize:20,
            color: '#fff',
            textAlign: 'center',
        }
        
  });
  
export default Login;