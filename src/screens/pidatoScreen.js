import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class pidato extends React.Component {
    static navigationOptions = {
        headerTitle: () => {null}
    }
    render() {
        return(
            <View style={Styles.container}>
                <ScrollView>
                <View style={{alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10}}>Pidato</Text>
                </View>
                <View style={Styles.textContainer}>
                    <Text style={Styles.textLatin}>
                        Assalamualaikum Warahmatullahi Wabarakatuh
                    </Text>
                    <Text style={Styles.textLatin}>
                        Bapak/ibu-ibu dan seluruh hadirin wal hadirat yang senantiasa dirahmati oleh Allah SWT.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Marilah pertama-tama kita menghaturkan puja dan puji syukul Alhamdulillah kehadirat Allah SWT yang telah memberikan banyak-banyak kenikmatan yang tak akan dapat kita hitung. Shalawat serta salam tak lupa juga marilah kita sampaikan keoada nabi kita Muhammad SAW yang telah membawa umat manusia dari jaman jahiliah yang begitu gelap gulita ke ajaman yang penuh berkah dengan cahaya yang terang benderang.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Bapak/ibu-ibu dan seluruh hadirin wal hadirat yang senantiasa dirahmati oleh Allah SWT.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Sebelum saya memulai pidato saya kali ini, maka perkenankanlan saya disini untuk memberikan sedikit ilmu kepada hadirin sekalian dengan tema Birrul Walidain.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Birrul Walidain atau berbakti kepada kedua orang tua dalam agama kita merupakan salah satu kebaikan bahwa suatu kewajiban yang sangat krusial bahkan Birrul Walidain termasuk ke dalam 3 hal yang selalu Allah sandingan dalam AL Quran yaitu Dirikanlah shalat dan tunaikanlah zakat, taatilah Allah dan Rosulnya dan yang ketiga adalah bersyukurkan kepada Allah dan kepada orang tua. Melihat hal tersebut tentunya Birrul Walidain benar-benar suatu hal yang sangat penting dan merupakan suatu ibadah yang paling agung di dalam Islam setelah mentauhidkan Allah.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Kewajiban berbakti kepada orang tua ini bahkan bisa dibilang mutlak dan hukumnya fardhu ain. Sehingga siapapun orang tua, apapun pekerjaannya, apapu jabatannya, bagaimana kehidupan pribadinya semua tak bisa menghalangi kita untuk tiak berbakti kita kepada orang tua.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Dalam sebuah firman Allah QS AL Lukman ayat 14 di sebutkan :
                    </Text>
                    <Text style={Styles.textLatin}>
                        "dan Kami perintahkan kepada manusia (berbuat baik) kepada dua orang ibu- bapanya; ibunya telah mengandungnya dalam Keadaan lemah yang bertambah- tambah, dan menyapihnya dalam dua tahun. bersyukurlah kepadaku dan kepada dua orang ibu bapakmu, hanya kepada-Kulah kembalimu"
                    </Text>
                    <Text style={Styles.textLatin}>
                        Bapak/ibu-ibu dan seluruh hadirin wal hadirat yang senantiasa dirahmati oleh Allah SWT.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Orang tua merupakan pintu gerbang yang menghubungkan antara dunia manusia dengan akherat. Adanya kita sekarang ini di dunia tak lain dan tak bukan adalah karena adanya keberadaan orang tua kita. Disamping itu karena beliau pulalah kemudian kita bisa tubuh dan berembang hingga kita sekarang ini. bahkan tanpa mengeluh, tanpa protes dan dengan hati ikhlas tetap saja mendampingi kita dengan penuh kesabaran. Sehingga melihat segala perjuanganya, bahkan bumi seisinya tak akan bisa membalas segala kebaikan yang telah orang tua berikan kepada kita. Sehingga pada akhirnya cara kita membalasnya hanya dengan cara berbakti kepadanya.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Bapak/ibu-ibu dan seluruh hadirin wal hadirat yang senantiasa dirahmati oleh Allah SWT.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Kiranya cukup sekian pidato yang dapat saya sampaikan kurang lebihnya sekali lagi saya mohon maaf.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Akhirul Kalam.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Wabillahi Taufiq Walhidayah.
                    </Text>
                    <Text style={Styles.textLatin}>
                        Wassalamualaikum Warahmatullahi Wabarakatuh. 
                    </Text>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imgStyle: {
        borderRadius: 10,
    },
    textContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
    },
    textLatin: {
        fontSize: 16,
        marginBottom: 10,
    },
    textArab: {
        fontSize: 24
    },
    textTerjemahan: {
        fontSize: 16,
        fontStyle: 'italic'
    }

});