import React, { useState } from 'react';

import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions, ScrollView, SafeAreaView} from 'react-native';

import Posting_PersonalInfo from './postings/posting_personalInfo.js'

import Posting_PropertyInfo from './posting_propertyInfo.js'


const WIDTH = Dimensions. get('window').width;
const HEIGHT = Dimensions. get('window').height;



const SCROLLVIEWSTYLE = { height:HEIGHT, width:WIDTH, display:'flex',paddingLeft:WIDTH*0.075, paddingRight:WIDTH*0.075,backgroundColor:'white'}
export default function Posting(){

    
    return(
        
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
       
        
        <ScrollView style={SCROLLVIEWSTYLE} >
            
            <Posting_PersonalInfo/>    
           
            <Posting_PropertyInfo/>
                
        </ScrollView>
      
        </KeyboardAvoidingView>
       
       
    )
}


