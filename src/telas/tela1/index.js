import { StatusBar } from 'expo-status-bar';

import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, StyleSheet, Text,Image,  TextInput, TouchableOpacity, NativeAppEventEmitter , KeyboardAvoidingView} from 'react-native';
import firebase from '../../../firebaseConfig';

import {NavigationContainer, useNavigation} from '@react-navigation/native';




export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  

  function loginFirebase(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
     .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
    
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        navegacao.navigate('tela2')
        console.log("Logado" + user.uid)
      }else{
        
        console.log('nao logado!')
      }
    });
  }, [])

  /* function logOutFirebase(){
    firebase.auth().signOut().then(function(){
      alert('Deslogado com sucesso')
    }).catch(function(error){
      alert('Falha')
    });
  } */

  /* function createUserFirebase(){


    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  } */




  const cadastro = () => {
    if(cadastro != null){
      alert("preencha os campos");
    }
    
  }

  const navegacao = useNavigation();

    function criarLoginParaUsuario(){
        navegacao.navigate('criarLogin');
    }
   


  return (
    
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      <StatusBar hidden />
      <View>
        <Image style={{ width: 100, height: 100, borderRadius:  50, margin: 14}}  source={{uri: 'https://th.bing.com/th/id/OIP.HAlzz7_SUXjXKwsKkyBmJQHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7'}} />
        
      
      </View>
      
      <StatusBar hidden/>
      
      
      <Text style={{textAlign: 'center', fontSize: 20}}>Email</Text>
      <TextInput  style={styles.textInput} onChangeText={email=>setEmail(email)} value={email} />

    

      <Text style={{textAlign: 'center', fontSize: 20}}>senha</Text>
      <TextInput  style={styles.textInput} onChangeText={senha=>setSenha(senha)}  value={senha}/>

      <TouchableOpacity onPress={()=>loginFirebase()}>
        <Text style={styles.botaoLogin}>Login</Text>
        
      </TouchableOpacity>

     

      <TouchableOpacity  onPress={()=>{ criarLoginParaUsuario}}>
        <Text style={styles.botaoCadastrar}>Criar Usuario</Text>
      </TouchableOpacity>
      
      

    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefd5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  textInput: {
    width: '75%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 0,
    paddingLeft: 10,
    marginBottom: 5,
    
  },
  botaoLogin:{
    borderRadius: 2,
    margin: 10,
    backgroundColor: '#00ffff',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 235,
    textAlign: 'center',
    fontSize: 30,
    
    
    fontWeight: '500',
    color: 'black',
    borderRadius: 7,
    
  },
  botaoCadastrar: {
    textDecorationColor: 'white',
    borderRadius: 2,
    margin: 1,
    backgroundColor: '#adff2f',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 235,
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
    borderRadius: 7,
  }
  


});

