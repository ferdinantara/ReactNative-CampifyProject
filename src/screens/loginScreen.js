import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert, ToastAndroid } from 'react-native';
import axios from 'react-native-axios';

export default class Login extends React.Component {
    static navigationOptions = {
        headerTitle: () => {null}
    }

    constructor(props) {
        super(props)
        this.state = {
            authUsername: 'kp-kk4',
            authPassword: 'abid-gans-banget',
            username: 'beecoder77@gmail.com',
            email: 'beecoder77@gmail.com',
            password: 'semar365',
        }
    }

    _logIn = () => {
        // ToastAndroid.show('Succes to login', ToastAndroid.SHORT);
        // this.props.navigation.navigate('Home');
        const { email, password } = this.state;
        const data = {
          email: email,
          password: password,
        };
    
        //clickButton
        if (email.length === 0) {
          Alert.alert('Notification', 'Email required');
        }
        if (password.length === 0) {
          Alert.alert('Notification', 'Password required');
        } else {
          try {
            axios
              .post(
                'http://3.92.200.123:9000/api/users/v1',
                data, { 'headers': { Authorization: 'Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=' } }
              )
              .then(async response => {
                // console.log(response.data.access_token);
                // await AsyncStorage.setItem(
                //   'access_token',
                //   response.data.access_token,
                // );
                ToastAndroid.show('Succes to login', ToastAndroid.SHORT);
                this.props.navigation.navigate('Home');
              })
              .catch(function (error) {
                ToastAndroid.show('Succes to Failed', ToastAndroid.SHORT);
              });
          } catch (error) {
            console.log(error);
          }
        }
    }

    _signIn = async () => {  
        var session_url = 'http://3.92.200.123:9000/api/users/v1';
        var {email, password, authUsername, authPassword} = this.state;
        var credentials = btoa(authUsername + ':' + authPassword);
        var basicAuth = 'Basic ' + credentials;
        var basichAuthCheat = "Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=";
        var data = {
            email: email,
            password: password
        }
        var body = JSON.stringify(data);

        try {
            const res = await axios.post(session_url, body, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization" : "Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=",
                },
                });
            console.log(res.data);
            Alert.alert('Login success');
            this.props.navigation.navigate('Menu');
        } 
        catch (error) {
            Alert.alert('Something went wrong!');
            console.log(error);
            this.props.navigation.navigate('Menu');
        }
    }
    
    render() {
        const {email, password} = this.state;
        return(
            <View style={{flex:1, alignItems:'center', backgroundColor: '#fff'}}>
                <View style={{alignItems:'center', marginTop: 50}}>
                    <Text style={styles.txtTitle}>Hello</Text>
                    <Text style={styles.txtSubtitle}>Assalamu'alaikum teman - teman</Text>
                </View>
                <View style={{marginTop: 75, justifyContent: 'space-between', flexDirection: 'column', height: 115, width: 300}}>
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
                    <TouchableOpacity style={styles.btnMasuk} onPress={this._logIn}>
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