import React, { useState } from 'react';
import {View, Dimensions, Pressable, Text} from 'react-native';
import {Container, TextInputContainer, CheckBoxContainer, DobContainer} from '../styles/postingStyles.js'
import RNDateTimePicker from '@react-native-community/datetimepicker';


import {Picker} from '@react-native-picker/picker';


import { TextInput, Title, Checkbox, Switch, Subheading, Button  } from 'react-native-paper';

const WIDTH = Dimensions. get('window').width;
const HEIGHT = Dimensions. get('window').height;

const PRIMARYCOLOR = '#4050b5';
const TEXTINPUTHEIGHT = HEIGHT*0.06;
const TEXTINPUTWIDTH = WIDTH*0.85

const TEXTINPUTSTYLE = {width:TEXTINPUTWIDTH, height:TEXTINPUTHEIGHT, marginTop:TEXTINPUTHEIGHT*0.2, marginBottom:TEXTINPUTHEIGHT*0.2}

const TITLESTYLE = {color:'#4050b5'};

export default function Posting_PropertyInfo(){


    const [furnishedChecked, setFurnishedChecked] = useState(false);
    const [petsAllowedChecked, setPetsAllowedChecked] = useState(false);
    const [privateBedroomChecked, setPrivateBedroomChecked] = useState(false);
    const [privateBathroomChecked, setPrivateBathroomChecked] = useState(false);
    const [renewChecked, setRenewChecked]= useState(false);
    const [onsitWasherChecked, setOnsitWasherChecked]= useState(false);

    //Available from and to 
    const [availFrom, setAvailFrom]= useState(new Date());
    const [availTo, setAvailTo] = useState(new Date());

    const [selectedLanguage, setSelectedLanguage] = useState('private_room');

    function postListing () {
        alert("Hello");
    }

    return(
        <View style={{height:HEIGHT*1.5, width:WIDTH*0.85}}>
            <Title style={TITLESTYLE}>Property Information</Title>

            <TextInputContainer>
                <TextInput
                label="Price (per month)"
                style={TEXTINPUTSTYLE}
                outlineColor='purple'
                mode="outlined"
                />

                <TextInput
                label="Location"
                style={TEXTINPUTSTYLE}
                outlineColor='purple'
                mode="outlined"
                />
                
                
            </TextInputContainer>

            <DobContainer>  
                <Subheading  style={{textAlign: 'center' , color:PRIMARYCOLOR }}>Available from</Subheading>
            
                <View style={{width:'50%', }}>
                <RNDateTimePicker  mode='date' value= {availFrom} onChange={(event, date) => setAvailFrom(date)}/>
                </View>
            </DobContainer>
            <DobContainer>  
                <Subheading  style={{textAlign: 'center' , color:PRIMARYCOLOR }}>To</Subheading>
            
                <View style={{width:'50%', }}>
                <RNDateTimePicker  mode='date' value= {availTo} onChange={(event, date) => setAvailTo(date)}/>
                </View>
            </DobContainer>

            <TextInput
            label="About the property"
            multiline = {true}
            dense = {true}
            style={{width:TEXTINPUTWIDTH, height:TEXTINPUTHEIGHT*2.5, marginBottom:TEXTINPUTHEIGHT*0.5}}
            outlineColor='purple'
            mode="outlined"
            />
          
            <Picker
             style={{width:WIDTH*0.85}}
            itemStyle={{height:HEIGHT*0.13}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
            }>
                <Picker.Item label="House" value="house" />
                <Picker.Item label="Private Room" value="private_room" />
                <Picker.Item label="Condo" value="condo" />
                <Picker.Item label="Others" value="others" />
               
            </Picker>
             
            <CheckBoxContainer>
            
                <Checkbox.Item 
                uncheckedColor='black' 
                color= {PRIMARYCOLOR} 
                label="Private bedroom" 
                
                status={privateBedroomChecked ? 'checked' : 'unchecked'} 
                onPress={()=>setPrivateBedroomChecked(!privateBedroomChecked)}
                />
                <Checkbox.Item 
                uncheckedColor='black' 
                color= {PRIMARYCOLOR} 
                label="Private bathroom" 
                
                status={privateBathroomChecked ? 'checked' : 'unchecked'} 
                onPress={()=>setPrivateBathroomChecked(!privateBathroomChecked)}
                />
                <Checkbox.Item 
                uncheckedColor='black' 
                color= {PRIMARYCOLOR} 
                label="Furnished" 
                status={furnishedChecked ? 'checked' : 'unchecked'} 
                onPress={()=>setFurnishedChecked(!furnishedChecked)}
                />

                <Checkbox.Item 
                uncheckedColor='black' 
                color= {PRIMARYCOLOR} 
                label="Pets allowed" 

                status={petsAllowedChecked ? 'checked' : 'unchecked'} 
                onPress={()=>setPetsAllowedChecked(!petsAllowedChecked)}
                />
                <Checkbox.Item 
                uncheckedColor='black' 
                color= {PRIMARYCOLOR} 
                label="Able to renew" 
                
                status={renewChecked ? 'checked' : 'unchecked'} 
                onPress={()=>setRenewChecked(!renewChecked)}
                />

                <Checkbox.Item 
                uncheckedColor='black' 
                color= {PRIMARYCOLOR} 
                label="On site washer and dryer" 
                status={onsitWasherChecked ? 'checked' : 'unchecked'} 
                onPress={()=>setOnsitWasherChecked(!onsitWasherChecked)}
                />
            
            </CheckBoxContainer>
          
            <Button onPress={postListing} style={{width:WIDTH*0.35, height:HEIGHT*0.05, justifyContent:'center', marginTop:TEXTINPUTHEIGHT*0.3}} icon='loading' mode="contained">
                <Text>Submit</Text>
            </Button>

        </View>
    )
}