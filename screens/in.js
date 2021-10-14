import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class insta extends React.Component {
    render(){
        return(
            <View style={{
                flex : 1,
                justifyContent : 'center',
                alignItems : 'center',
                colour : 'pink'
            }}>
                <Text>Instagram</Text>
            </View>
        );
    }
}