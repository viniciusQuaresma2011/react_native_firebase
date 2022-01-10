import React, { useState } from 'react'
import { Text, View, TextInput , StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export default ({ route, navigation }) => {
    const [usuario, setUsuario] = useState(route.params ? route.params : {})

    const navegacao = useNavigation();

    function retornaTela2(){
        navegacao.navigate('tela2')
    }
    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={nome => setUsuario({ ...usuario, nome })}
                placeholder='Digite o nome'
                value={usuario.nome}
            />

            <Text>Telefone</Text>
            <TextInput
                style={styles.input}
                onChangeText={telefone => setUsuario({ ...usuario, telefone })}
                placeholder='Digite o nome'
                value={usuario.nome}
            />
            <Button
                title="Salvar"
                onPress={retornaTela2}
                
            />
        </View>

    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})