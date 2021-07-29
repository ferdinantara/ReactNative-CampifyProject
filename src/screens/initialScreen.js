import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Initial extends React.Component {
    static navigationOptions = {
        header: () => {null}
    }
    render() {
        return(
            <View style={{flex:1, alignItems: 'center',backgroundColor: '#fff'}}>
                <View style={{alignItems: 'center', flexDirection:'row', marginTop: 220}}>
                    <Image 
                    source={require('../../assets/images/logo.png')}
                    style={{height: 60, width: 60, marginRight: 10, marginBottom: 10}}
                    />
                    <Text style={styles.txtTitle}>Test Quiz</Text>
                </View>
                <View style={{justifyContent: 'space-between', alignItems:'center', marginTop: 250, height: 115}}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>Masuk</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text>Buat Akun</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    btn: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    }
});