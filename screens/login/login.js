import React, { useState, useContext } from 'react';
import { View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, ScrollView, Button} from 'react-native'
import { TextInput,  Title, Subheading } from 'react-native-paper';

import {UserContext} from '../../userContext'

const WIDTH = Dimensions. get('window').width;
const HEIGHT = Dimensions. get('window').height;

const TEXTINPUTHEIGHT = HEIGHT*0.06;
const TEXTINPUTWIDTH = WIDTH*0.85

const TEXTINPUTSTYLE = {width:TEXTINPUTWIDTH, height:TEXTINPUTHEIGHT, marginTop:TEXTINPUTHEIGHT*0.2, marginBottom:TEXTINPUTHEIGHT*0.2}


export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useContext(UserContext);

  return (
   
    <ScrollView scrollEnabled='false'>
    <View style={{width:WIDTH,height:HEIGHT,marginTop:HEIGHT*0.3, alignItems:'center'}}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" }>
        
    
                <TextInput
                label="Email"
                style={TEXTINPUTSTYLE}
                onChangeText={(value) => setEmail(value)}
                outlineColor='purple'
                mode="outlined"
                />

                <TextInput
                label="Password"
                style={TEXTINPUTSTYLE}
                onChangeText={(value) => setPassword(value)}
                outlineColor='purple'
                mode="outlined"
                />

        
    </KeyboardAvoidingView>  
    <Button onPress={() => signup(email, password)}  title='Signup'></Button>
    </View>
    </ScrollView>
    
  )
}