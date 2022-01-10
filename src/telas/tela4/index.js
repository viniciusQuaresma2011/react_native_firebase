import React from 'react';
import {View, TextInput , Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {useNavigation} from '@react-navigation/native';



export default function tela4(){

    const navegacao = useNavigation();

    function navegarParaTela5(){
        navegacao.navigate('tela5');
    }

    function navegarParaTela2(){
      navegacao.navigate('tela2');
  }

    return(
      <KeyboardAvoidingView style={styles.container}>
            
      
                <View style={styles.containerView1} >
                  
                  <Text style={{paddingRight: 150, fontSize: 20}}>Nome</Text>
                  <TextInput  style={styles.inputs} onChangeText={text=>setNome(text)} />

                  <Text style={{paddingRight: 150, fontSize: 20}}>Telefone</Text>
                  <TextInput  style={styles.inputs} onChangeText={text=>setTelefone(text)} />

                    <TouchableOpacity style={styles.botaoAcessar} onPress={navegarParaTela2}>
                        <Text style={styles.campoAcessarAcao}>Salvar</Text>
                    </TouchableOpacity>

                    
                </View>
            
        </KeyboardAvoidingView>
    

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
      
      justifyContent: 'center',

     
      
    },
    containerView2: {
     
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%'
    },
    inputs: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      width: '100%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 7,
      paddingLeft: 200,
      height: -40,
      marginTop: 10,
      
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
    },
    botaocontaCriar: {
      marginTop: 10,
    },
    contaCriarAcao: {
      color: '#FFF'
    }
})
