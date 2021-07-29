import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import axios from 'react-native-axios';

export default class Register extends React.Component {
    static navigationOptions = {
        headerTitle: () => {null}
    }

    constructor(props) {
        super(props)
        // default data
        this.state = {
            email: 'eve.holt@reqres.in',
            password: 'pistol',
            name: ''
        }
    }

    _signUp = async () => {
        const {email, password} = this.state;
        const accountData = {email, password}
        try {
            const res = await axios.post('https://reqres.in/api/register', accountData);
            console.log(res.data);
            Alert.alert('Register Success');
            this.props.navigation.navigate('Menu');
        } catch (error) {
            Alert.alert('Wrong Username or Password');
            console.log(error)
        }
    }
    
    render() {
        const {email, password, name} = this.state;
        return(
            <View style={{flex:1, alignItems:'center'}}>
                <View style={{alignItems:'center', marginTop: 50}}>
                    <Text style={styles.txtTitle}>Membuat Akun</Text>
                    <Text style={styles.txtSubtitle}>Buat akun untuk memulai proses belajar</Text>
                </View>
                <View style={{marginTop: 75, justifyContent: 'space-between', flexDirection: 'column', height: 200, width: 300}}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Username"
                    placeholderTextColor="#808080"
                    value={name}
                    onChangeText={name => this.setState({ name })}
                    />
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Username"
                    placeholderTextColor="#808080"
                    value={email}
                    onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                    style={styles.inputBox}
                    secureTextEntry={true}
                    maxLength={32}
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    value={password}
                    onChangeText={password => this.setState({ password })}
                    />
                </View>
                <View style={{height: 100, width: 300, justifyContent: 'flex-end', flexDirection: 'row', width: 300}}>
                    <TouchableOpacity style={styles.btnMasuk} onPress={this._signUp}>
                        <Text style={{fontSize: 18, fontWeight: 'normal', color: '#808080'}}>Masuk</Text>
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
    txtSubtitle: {
        fontSize: 14,
        fontWeight: 'normal'
    },
    inputBox: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 15,
        borderColor: '#808080'
    },
    btnMasuk: {
        width: 125,
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    }
});