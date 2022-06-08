import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Button} from 'react-native';
import {TextInputContainer, DobContainer} from '../../styles/postingStyles.js'

import RNDateTimePicker from '@react-native-community/datetimepicker';


import {Picker} from '@react-native-picker/picker';

import { TextInput,  Title, Subheading } from 'react-native-paper';

const PRIMARYCOLOR = '#4050b5';

const WIDTH = Dimensions. get('window').width;
const HEIGHT = Dimensions. get('window').height;

const TEXTINPUTHEIGHT = HEIGHT*0.06;
const TEXTINPUTWIDTH = WIDTH*0.85

const TEXTINPUTSTYLE = {width:TEXTINPUTWIDTH, height:TEXTINPUTHEIGHT, marginTop:TEXTINPUTHEIGHT*0.2, marginBottom:TEXTINPUTHEIGHT*0.2}
const TITLESTYLE = {color:'#4050b5', marginTop:TEXTINPUTHEIGHT*0.2,};

export default function Posting_PersonalInfo(){


    const [gender, setGender] = useState('Male')
    //Pick age
    const [selectedLanguage, setSelectedLanguage] = useState();

    //Dob 
    const [dob, setDob] = useState(new Date());

   

    return(
        <View>
             <Title style={TITLESTYLE}>Personal Information</Title>

            
                <TextInputContainer>
                <TextInput
                label="First Name"
                style={TEXTINPUTSTYLE}
                outlineColor='purple'
                mode="outlined"
                />

                <TextInput
                label="Last Name"
                style={TEXTINPUTSTYLE}
                outlineColor='purple'
                mode="outlined"
                />
                
            </TextInputContainer>

            <DobContainer>  
                <Subheading  style={{textAlign: 'center' , color:PRIMARYCOLOR }}>Date of birth</Subheading>
            
                <View style={{width:'50%', }}>
                <RNDateTimePicker  mode='date' value= {dob} onChange={(event, date) => setDob(date)}/>
                </View>
            </DobContainer>

            <Picker
            selectedValue={selectedLanguage}
            itemStyle={{height:HEIGHT*0.15, }}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
            }>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>

            <TextInput
            label="Education"
            style={TEXTINPUTSTYLE, {marginTop: 0}}
            outlineColor='purple'
            mode="outlined"
            />

            <TextInput
            label="Occupation"
            style={TEXTINPUTSTYLE}
            outlineColor='purple'
            mode="outlined"
            />          


            <TextInput
            label="About Myself"
            multiline = {true}
            dense = {true}
            style={{width:TEXTINPUTWIDTH, height:TEXTINPUTHEIGHT*2,  marginTop:TEXTINPUTHEIGHT*0.2}}
            outlineColor='purple'
            mode="outlined"
            />
        </View>
    )
}