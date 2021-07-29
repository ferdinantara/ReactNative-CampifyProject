import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class materi extends React.Component {
    static navigationOptions = {
        headerTitle: () => {null}
    }
    render() {
        return(
            <View style={Styles.container}>
                <ScrollView>
                    <View style={{alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                        <Text style={{fontSize: 28, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10}}>Birrul Walidain</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../../assets/images/image1.png')} style={Styles.imgStyle} />
                    </View>
                    <View style={Styles.textContainer}>
                        <Text style={Styles.textLatin}>
                            Birrul walidain artinya berbakti kepada orang tua. Birrul walidain adalah hal yang diperintahkan dalam agama. Menghormati orang tua hukumnya wajib. Oleh karena itu bagi seorang muslim, berbuat baik dan berbakti kepada orang tua bukan sekedar memenuhi tuntunan norma susila dan norma kesopanan, namun yang utama adalah dalam rangka menaati perintah Allah Ta’ala dan Rasul-Nya shallallahu ‘alaihi wa sallam. Allah Ta’ala berfirman:
                        </Text>
                        <Text style={Styles.textArab}>
                            وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا   
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Sembahlah Allah dan janganlah kamu mempersekutukan-Nya dengan sesuatu pun. Dan berbuat baiklah kepada kedua orang tua” (QS. An Nisa: 36).
                        </Text>
                        <Text style={Styles.textLatin}>
                            Perhatikanlah, dalam ayat ini Allah Ta’ala menggunakan bentuk kalimat perintah. Allah Ta’ala juga berfirman:
                        </Text>
                        <Text style={Styles.textArab}>
                            قُلْ تَعَالَوْا اَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ اَلَّا تُشْرِكُوْا بِهٖ شَيْـًٔا وَّبِالْوَالِدَيْنِ اِحْسَانًاۚ 
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Katakanlah: “Marilah kubacakan apa yang diharamkan atas kamu oleh Tuhanmu, yaitu: janganlah kamu mempersekutukan sesuatu dengan Dia, berbuat baiklah terhadap kedua orang tua..” (QS. Al An’am: 151).
                        </Text>
                        <Text style={Styles.textLatin}>
                            Dalam ayat ini juga digunakan bentuk kalimat perintah. Allah juga berfirman:
                        </Text>
                        <Text style={Styles.textArab}>
                            وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِنْدَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُلْ لَهُمَا قَوْلًا كَرِيمًا
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Dan Tuhanmu telah memerintahkan supaya kamu jangan menyembah selain Dia dan hendaklah kamu berbuat baik pada ibu bapakmu dengan sebaik-baiknya. Jika salah seorang di antara keduanya atau kedua-duanya sampai berumur lanjut dalam pemeliharaanmu, maka sekali-kali janganlah kamu mengatakan kepada keduanya perkataan "ah" dan janganlah kamu membentak mereka dan ucapkanlah kepada mereka perkataan yang mulia.” (QS. Al Isra: 23).
                        </Text>
                        <Text style={Styles.textArab}>
                            وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Dan rendahkanlah dirimu terhadap mereka berdua dengan penuh kesayangan dan ucapkanlah: "Wahai Tuhanku, kasihilah mereka keduanya, sebagaimana mereka berdua telah mendidik aku waktu kecil" (Q.S Al Isra 24).
                        </Text>
                        <Text style={Styles.textLatin}>
                            Dalam ayat ini kita tidak boleh melaksanakan perintah orang tua yang menyalahi aturan Allah :
                        </Text>
                        <Text style={Styles.textArab}>
                            وَإِنْ جَاهَدَاكَ عَلَىٰ أَنْ تُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا ۖ وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا ۖ وَاتَّبِعْ سَبِيلَ مَنْ أَنَابَ إِلَيَّ ۚ ثُمَّ إِلَيَّ مَرْجِعُكُمْ فَأُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُونَ
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Dan jika keduanya memaksamu untuk mempersekutukan dengan Aku sesuatu yang tidak ada pengetahuanmu tentang itu, maka janganlah kamu mengikuti keduanya, dan pergaulilah keduanya di dunia dengan baik, dan ikutilah jalan orang yang kembali kepada-Ku, kemudian hanya kepada-Kulah kembalimu, maka Kuberitakan kepadamu apa yang telah kamu kerjakan.” (Q.S Luqman 15).
                        </Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
                            Hadist Birrul Walidain
                        </Text>
                        <Text style={Styles.textLatin}>
                            Dari Abdullah bin ’Amru radhiallahu ‘anhuma, ia berkata, Rasulullah shallallahu ‘alaihi wa sallam bersabda,
                        </Text>
                        <Text style={Styles.textArab}>
                            رِضَى الرَّبِّ فِي رِضَى الوَالِدِ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Ridha Allah tergantung pada ridha orang tua dan murka Allah tergantung pada murka orang tua” (Hasan. at-Tirmidzi : 1899,  HR. al-Hakim : 7249, ath-Thabrani dalam al-Mu’jam al-Kabiir : 14368, al-Bazzar : 2394).
                        </Text>
                        <Text style={Styles.textLatin}>
                            Birrul walidain juga diperintahkan oleh Rasulullah shallallahu ‘alaihi wa sallam. Ketika beliau ditanya oleh Abdullah bin Mas’ud radhiyallahu ‘anhu:
                        </Text>
                        <Text style={Styles.textArab}>
                            أيُّ العَمَلِ أحَبُّ إلى اللَّهِ؟ قالَ: الصَّلاةُ علَى وقْتِها، قالَ: ثُمَّ أيٌّ؟ قالَ: ثُمَّ برُّ الوالِدَيْنِ قالَ: ثُمَّ أيٌّ؟ قالَ: الجِهادُ في سَبيلِ اللَّهِ قالَ: حدَّثَني بهِنَّ، ولَوِ اسْتَزَدْتُهُ لَزادَنِي
                        </Text>
                        <Text style={Styles.textTerjemahan}>
                            “Amal apa yang paling dicintai Allah ‘Azza Wa Jalla?”. Nabi bersabda: “Shalat pada waktunya”. Ibnu Mas’ud bertanya lagi: “Lalu apa lagi?”.Nabi menjawab: “Lalu birrul walidain”. Ibnu Mas’ud bertanya lagi: “Lalu apa lagi?”. Nabi menjawab: “Jihad fi sabilillah”. Demikian yang beliau katakan, andai aku bertanya lagi, nampaknya beliau akan menambahkan lagi (HR. Bukhari dan Muslim).
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
        fontSize: 16
    },
    textArab: {
        fontSize: 24
    },
    textTerjemahan: {
        fontSize: 16,
        fontStyle: 'italic'
    }

});