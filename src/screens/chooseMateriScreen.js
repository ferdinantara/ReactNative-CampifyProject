import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class chooseMateri extends React.Component {
    static navigationOptions  = {
        headerTitle: () => {null}
    }

    render() {
        return(
            <View style={{flex:1, alignItems: 'center', backgroundColor: '#fff'}}>
                <View style={{alignItems: 'center', marginTop: 90}}>
                    <Text style={styles.txtTitle}>Hello</Text>
                    <Text style={styles.txtSubTitle}>Mari kita awali belajar dengan Basmallah</Text>
                </View>
                <View style={{alignItems:'center', marginTop: 50}}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Materi')}>
                        <Text>Materi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Pidato')}>
                        <Text>Pidato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Video')}>
                        <Text>Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 64,
        fontWeight: 'bold'
    },
    txtSubTitle: {
        fontSize: 14,
        fontWeight: '100'
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