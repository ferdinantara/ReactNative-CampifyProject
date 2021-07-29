import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

class Logo extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.png')} />
            </View>
        );
    }
}

export default Logo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})