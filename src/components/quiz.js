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
import Animbutton from './animbutton';

const { width, height } = Dimensions.get('window')
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
      "question" : "1.    “ Ridho Allah ada pada Ridho orang tua, dan murkanya Allah ada pada murka orang tua” maksud hadist tersebut adalah …"
    },
    "question2" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "Nenek",
          "option2" : "Kakek",
          "option3" : "bapak",
          "option4" : "Ibu"
        },
      "question" : "2.    Orang tua yang harus dihormati terlebih dahulu adalah …"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Berbuat baik kepada orang tua",
          "option2" : "Berbuat baik kepada guru",
          "option3" : "Mendoakan semua kaum muslim",
          "option4" : "Berdzikir kepada Allah SWT"
        },
      "question" : "3.    Surat An-Nisa ayat 36 berisi perintah Allah SWT untuk …"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Dititipkan di rumah tetangga karena sibuk belajar",
          "option2" : "Merawatnya dengan ikhlas dan penuh kasih sayang",
          "option3" : "Menasehati dengan lemah lembut agar segera sembuh",
          "option4" : "Menyewa suster"
        },
      "question" : "4.    Sikap yang tepat jika orang tua sedang terbaring sakit yaitu …"
    },
    "question5" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "Wajib",
          "option2" : "Sunah",
          "option3" : "Haram",
          "option4" : "Makruh"
        },
      "question" : "5.    Berkata “ah” kepada orang tua hukumnya …"
    }
  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0

    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }

  }
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++

      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/5)
     }
  }
  _answer(status,ans){

    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }

  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>

        <Animbutton countCheck={_this.state.countCheck} onColor={"#52DE97"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
      </View>)
    });

    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>
        <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
          <View style={styles.oval} >
             <Text style={styles.welcome}>
               {this.state.question}
             </Text>
          </View>
          <View>
          { options }
          </View>
          <View style={{flexDirection:"row"}}>
            <View style={{flexDirection: 'row'}}>
              {/* <TouchableOpacity onPress={() => this.prev()} >
                <View style={{margin: 10,paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"green"}}>
                  <Text>Prev</Text>
                </View>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => this.next()} >
                <View style={{width: 140,height: 60, borderWidth: 1, borderRadius: 30, backgroundColor: '#FAFAFA', borderColor: '#FE0000', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#FE0000', fontSize: 18}}>Selanjutnya</Text>
                </View>
              </TouchableOpacity >
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: '#C4C4C4'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});