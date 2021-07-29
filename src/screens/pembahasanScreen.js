import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var index = 0;
let arrnew = []
const jsonData = {"quiz" : {
    "quiz1" : {
      "question1" : {
        "correctoption" : "option3",
        "options" : {
          "option1" : "Kalau ingin mendapat ridho orang tua harus taat kepada Allah",
          "option2" : "Kalau ingin mendapat murka Allah sayangi orang tua",
          "option3" : "Kalau ingin mendapat ridho Allah hormati orang tua",
          "option4" : "Kalau ingin dicintai Allah jauhi orang tua"
        },
        "question" : "“ Ridho Allah ada pada Ridho orang tua, dan murkanya Allah ada pada murka orang tua” maksud hadist tersebut adalah …"
      },
      "question2" : {
        "correctoption" : "option4",
        "options" : {
            "option1" : "Nenek",
            "option2" : "Kakek",
            "option3" : "bapak",
            "option4" : "Ibu"
          },
        "question" : "Orang tua yang harus dihormati terlebih dahulu adalah …"
      },
      "question3" : {
        "correctoption" : "option1",
        "options" : {
            "option1" : "Berbuat baik kepada orang tua",
            "option2" : "Berbuat baik kepada guru",
            "option3" : "Mendoakan semua kaum muslim",
            "option4" : "Berdzikir kepada Allah SWT"
          },
        "question" : "Surat An-Nisa ayat 36 berisi perintah Allah SWT untuk …"
      },
      "question4" : {
        "correctoption" : "option2",
        "options" : {
            "option1" : "Dititipkan di rumah tetangga karena sibuk belajar",
            "option2" : "Merawatnya dengan ikhlas dan penuh kasih sayang",
            "option3" : "Menasehati dengan lemah lembut agar segera sembuh",
            "option4" : "Menyewa suster"
          },
        "question" : "Sikap yang tepat jika orang tua sedang terbaring sakit yaitu …"
      },
      "question5" : {
        "correctoption" : "option3",
        "options" : {
            "option1" : "Wajib",
            "option2" : "Sunah",
            "option3" : "Haram",
            "option4" : "Makruh"
          },
        "question" : "Berkata “ah” kepada orang tua hukumnya …"
      }
    }
  }
}

export default class Pembahasan extends React.Component{
    render() {
        return(
              <ScrollView>
            <View style={styles.Container}>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+1}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question1.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question1.options.option3}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+2}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question2.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question2.options.option4}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+3}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question3.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question3.options.option1}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+4}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question4.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question4.options.option2}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+5}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question5.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question5.options.option3}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+6}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question1.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question1.options.option3}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+7}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question2.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question2.options.option4}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+8}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question3.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question3.options.option1}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+9}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question4.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question4.options.option2}</Text></Text>
                        </View>
                    </View>
                    <View style={styles.ViewCard}>
                        <View style={{width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4'}}>
                          <Text>{index+10}</Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 30, paddingBottom: 10}}>
                            <Text style={{width: 250, overflow: 'hidden'}}>{jsonData.quiz.quiz1.question5.question}</Text>
                            <Text style={{width: 250, overflow: 'hidden'}}>Jawaban : <Text style={{color: '#52DE97'}}>{jsonData.quiz.quiz1.question5.options.option3}</Text></Text>
                        </View>
                    </View>
            </View>
              </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    ViewCard : {
        marginTop: 10,
        marginBottom: 10,
        width: 330,
        // height: 75,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
    }
}); 