import React from 'react';
import { StyleSheet ,View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}){
    const pressHandler = () => {
        navigation.goBack();
      }
    return(
        <View style ={globalStyles.container}>
        <Text style = {globalStyles.titleText}> ReviewDetails </Text>
           <Text>{ navigation.getParam('title') }</Text>
           <Text>{ navigation.getParam('body') }</Text>
           <Text>{ navigation.getParam('rating') }</Text>
        </View>
    )
}


