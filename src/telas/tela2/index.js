import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextBase, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../../firebaseConfig';
import { Button, Icon, ListItem } from 'react-native-elements';
import Usuarios from '../../Usuarios';



export default function tela2() {

    function confirmUserDeletion(usuario){
        Alert.alert('Excluir usuario', 'Deseja excluir usuario?',[
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + usuario.id)
                }
            },
            {
                text: 'Nao'
            }
        ])
    }

    function getActions(usuario){
        return (
            <>
                <Button
                    onPress={() => navegacao.navigate('UserForm', usuario)}
                    type='clear'
                    icon={<Icon name="edit" size={25} color="orange" /> }
                />
                 <Button
                    onPress={() => confirmUserDeletion(usuario)}
                    type='clear'
                    icon={<Icon name="delete" size={25} color="red" /> }
                />
            </>
        )
    }

    
    function getUsuarioObj({ item: usuario}){
        return (

            <ListItem style={styles.lista}
                key={usuario.id}
                title={usuario.nome}
                subtitle={usuario.telefone}
                bottomDivider
                rightElement={getActions(usuario)}
                onPress={() => navegacao.navigate('UserForm', usuario)}    
            />
        )
    }


    const navegacao = useNavigation();

    function navegarParaTelaLogin() {
        navegacao.navigate('App');
    }
    function cadastrarUsuario() {
        navegacao.navigate('criarLogin');
    }

    const dados = [
        { key: 'Joao da silva ' },
        { key1: '81 98688-5044' },
        { key: 'Irineu de Carvalho' },
        { key1: '81 98652-5694' },
        { key: 'Claurus Matheins' },
        { key1: '81 98594-7564' },
        { key: 'Kroteui del Pinhas' },
        { key1: '81 98558-1248' },

    ]

    function logOutFirebase() {
        firebase.auth().signOut().then(function () {
            alert('Deslogado com sucesso')
            window.location.reload();
            navegarParaTelaLogin();
        }).catch(function (error) {
            alert('Falha')
        });
    }

    function criarUsuarioNovo() {
        navegacao.navigate('createUser');
    }

   

 

    return (





        <View style={styles.container}>

            <TouchableOpacity onPress={criarUsuarioNovo}>
                <Text style={styles.textoCabecalho}>Contatos + </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOutFirebase}>
                <Text style={styles.botaoSair}>Sair </Text>
            </TouchableOpacity>

            <FlatList
                data={dados}
                //renderItem={getUsuarioObj}
                renderItem={({ item }) => <Text style={styles.textoItem}>{item.key} + {item.key1}</Text>}
            />


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textoItem: {
        fontSize: 30,
        color: '#34495e',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'

    },
    textoCabecalho: {
        backgroundColor: '#00ff7f',
        color: 'black',
        padding: 5,
        borderBottomWidth: 1,
        borderRadius: 10,
        fontSize: 30,
        marginLeft: 197
    },
    botaoSair: {
        marginLeft: -180,
        marginTop: -50,
        backgroundColor: '#ff4500',
        borderRadius: 10,
        fontSize: 30,
       
        padding: 5
    },
    lista: {
        width: 30
    }
});