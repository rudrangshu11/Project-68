import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class facebook extends React.Component {
    render(){
        return(
            <View style={{
                flex : 1,
                justifyContent : 'center',
                alignItems : 'center',
                textSize : 30,
                color : 'blue'
            }}>
                <Text>Facebook</Text>
            </View>
        );
    }
}