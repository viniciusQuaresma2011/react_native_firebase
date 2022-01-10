import React,  {useState} from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../../firebaseConfig';

export default function criarLogin() {

  const navegacao = useNavigation();


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  function navegarParaTela1() {
    navegacao.navigate('tela1');
  }
  function navegarParaTela2() {
    navegacao.navigate('tela2');
  }

  function criarLoginParaUsuario() {
    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
    
  }

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={navegarParaTela1}>

        <View style={styles.containerTitulo}>
          <Text style={styles.textoCabecalho}>Contatos  </Text>
        </View>
      </TouchableOpacity>


      <KeyboardAvoidingView style={styles.container}>


        <View style={styles.containerView2} >



          <Text style={{ paddingRight: 150, fontSize: 20 }}>Email</Text>
          <TextInput style={styles.inputs} autoCorrect={false} onChangeText={email => setEmail(email)} value={email} />

          <Text style={{ paddingRight: 150, fontSize: 20 }}>Senha</Text>
          <TextInput style={styles.inputs} autoCorrect={false} onChangeText={senha => setSenha(senha)} value={senha} />

          <TouchableOpacity onPress={() => { criarLoginParaUsuario()}}>
            <View style={styles.botaoAcessar}>
              <Text style={styles.campoAcessarAcao}>Criar Usuario</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navegarParaTela1}>
            <View style={styles.botaoAcessar} onPress={navegarParaTela1}>
              <Text style={styles.campoExcluirAcao}>Excluir</Text>

            </View>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </View>



  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerView1: {
    flex: 1,
    justifyContent: 'center',

  },
  containerView2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  inputs: {
    backgroundColor: '#FFF',
    width: '300%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 200,

  },
  botaoAcessar: {
    backgroundColor: '#35AAFF',
    height: 45,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 7
  },


  campoAcessarAcao: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },

  campoExcluirAcao: {
    color: 'red',


    fontSize: 18,
  },
  botaocontaCriar: {
    height: 240,
    backgroundColor: '#35AAFF',
    padding: 7,
    marginTop: 20,

  },
  contaCriarAcao: {

  },
  textoCabecalho: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    borderBottomWidth: 1,
    fontSize: 30,
  },
})
