import React,  {useState} from 'react';
import {View, TextInput , Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {useNavigation} from '@react-navigation/native';



export default function createUser(){

    const navegacao = useNavigation();

    const [ nome, setNome] = useState('')
    const [ telefone, setTelefone] = useState('')

    function navegarParaTela4(){
        navegacao.navigate('tela4');
    }

    function voltarParaLista(){
      navegacao.navigate('tela2');
    }


    

    return(
        <View style={styles.container}>
            
       
            
            <KeyboardAvoidingView style={styles.container}>
              <Text style={styles.textoCabecalho}>Adicionar Usuario </Text>
                <View style={styles.container}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>Nome</Text>
                  <TextInput  style={styles.textInput} onChangeText={nome=>setNome(nome)} value={nome} />


                  <Text style={{textAlign: 'center', fontSize: 20}}>Telefone</Text>
                  <TextInput  style={styles.textInput} onChangeText={telefone=>setTelefone(telefone)} value={telefone} />
                </View>

                <View style={styles.containerView2} >
                   

                    <TouchableOpacity style={styles.botaoAcessar} >
                        <Text style={styles.campoAcessarAcao}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoVoltar} onPress={voltarParaLista} >
                        <Text style={styles.campoVoltarAcao}>Voltar à Lista</Text>
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
      width: '80%',
      marginTop: -50
    },
   
    botaoAcessar: {
      backgroundColor: '#00ff00',
      height: 45,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      padding: 7,
      margin: 5
    },
    botaoVoltar: {
      backgroundColor: '#ff4500',
      height: 45,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      padding: 7,
      margin: 5
    },
    campoAcessarAcao: {
      color: 'black',
      fontSize: 18,
    },
    campoVoltarAcao: {
      color: 'black',
      fontSize: 18,
    },  
    botaocontaCriar: {
      marginTop: 10,
    },
    contaCriarAcao: {
      color: '#FFF'
    },
    textInput: {
      width: '150%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 0,
      padding: 10,
      marginBottom: 5,
      textAlign: 'center'
      
    },
    textoCabecalho: {
      backgroundColor: 'azure',
      color: 'black',
      padding: 15,
      marginBottom: 5,
      borderBottomWidth: 1,
      fontSize: 30,
      borderRadius: 7,
      marginTop: 10,
      
    },
    
})
