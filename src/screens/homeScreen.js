import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Home extends React.Component {
    render() {
        return(
            <View style={{flex:1, alignItems: 'center', backgroundColor: '#fff'}}>
                <View style={{alignItems: 'center', flexDirection:'row', marginTop: 120}}>
                    <Image 
                    source={require('../../assets/images/logo.png')}
                    style={{height: 60, width: 60, marginRight: 10, marginBottom: 10}}
                    />
                    <Text style={styles.txtTitle}>Test Quiz</Text>
                </View>
                <View style={{alignItems:'center', marginTop: 70}}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('ChooseMateri')}>
                        <Text>Belajar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Quiz')}>
                        <Text>Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Exam</Text>
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
        marginBottom: 20
    }
});