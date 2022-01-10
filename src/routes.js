import React from "react";
import{ NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';


const FiscalDasRotas = createStackNavigator();

import tela1 from "./telas/tela1/index";
import tela2 from "./telas/tela2/index";
import createUser from "./telas/tela3/index";
import tela4 from "./telas/tela4/index";
import criarLogin from "./telas/tela5/index";

import UsuarioForm from "./UsuarioForm";

export default function Routes(){
    return(
        <NavigationContainer>
            <FiscalDasRotas.Navigator>
                
                <FiscalDasRotas.Screen options={{headerShown: false,}} name='tela1' component={tela1} />
                <FiscalDasRotas.Screen options={{headerShown: false,}} name='tela2' component={tela2} />
                <FiscalDasRotas.Screen options={{headerShown: false,}} name='createUser' component={createUser} />
                <FiscalDasRotas.Screen options={{headerShown: false,}} name='tela4' component={tela4} />
                <FiscalDasRotas.Screen options={{headerShown: false,}} name='criarLogin' component={criarLogin} />
            </FiscalDasRotas.Navigator>
        </NavigationContainer>
    );
}