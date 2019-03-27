import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    KeyboardAvoidingView,
    CheckBox

} from 'react-native'
import { withFormik } from 'formik';

const Cadastro = (props) => {
    return(
            <KeyboardAvoidingView style = {styles.container}>
                <View style = {styles.whiteContainer}>

        <View style = {styles.circle}></View>

                <View style={styles.formularios}>
          <TextInput
          value ={props.values.name} placeholder = 'Nome'
          onChangeText = {text => props.setFieldValue('name', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
            <TextInput
          value ={props.values.email} placeholder = 'Email'
          onChangeText = {text => props.setFieldValue('email', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
           <TextInput
          value ={props.values.cpf} placeholder = 'CPF' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('cpf', text)}
          style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
          <TextInput
          value ={props.values.password} placeholder = 'Senha (6 dígitos)' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('password', text)}
          secureTextEntry = {true} style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />
      <TextInput
          value ={props.values.ConfirmPassword} placeholder = 'Confirmar Senha' keyboardType = 'number-pad'
          onChangeText = {text => props.setFieldValue('ConfirmPassword', text)}
          secureTextEntry = {true} style = {[styles.homeScreenFilename, styles.codeHighlightContainer]}
          />

    
     <CheckBox/><Text>Aceito os Termos de Uso</Text>
     <View style={[{ width: "70%", margin: 55}]}>
          <Button
             onPress={props.handleSubmit}
            title="Cadastrar"
            color="#00a091"
          />
        </View> 
</View>
</View>
 </KeyboardAvoidingView>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,54,65, .9)',
      width:'100%',
      height:'100%',
    
    },
    whiteContainer:{
      width:'90%',
      height:'90%',
      marginLeft: '5%',
      marginTop: '5%',
      borderWidth:2,
      borderColor: '#fff',
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'space-between',
    },
    circle:{
      width:80,
      height:80,
      borderRadius:100,
      backgroundColor: 'rgba(0,0,0, .1)', 
      marginTop: '3%'
    },
    formularios: {
        alignItems: 'center',
        width:'100%',
        marginBottom: '35%',
      },
      homeScreenFilename: {
        marginVertical: 3,
      },
      codeHighlightContainer: {
        width: '80%',
        backgroundColor:'#fbfbfb',
        borderRadius: 1,
        paddingHorizontal: 4,
      },
      contentContainer: {
        paddingVertical: 5
      }
    });

export default withFormik({
  mapPropsToValues: () => ({ 
    name: '',
    email: '', 
    cpf:'',
    password: '',
    ConfirmPassword: '',
   }),

  handleSubmit: () => {
    alert('Cadastrado com sucesso');
  }
})(Cadastro);;
