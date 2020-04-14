import React,{Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      cronometro:null,
      number: 0,
    }
    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
    this.pauseButton = this.pauseButton.bind(this);
  }

  startStopButton(){
      if(this.state.number == 0){
      
      let newS = this.state;
      this.setState(newS);

      this.state.cronometro= setInterval(()=>{
        let newState = this.state;
        newState.number +=0.1;
        this.setState(newState);
      },100);
    }
  }

  clearButton(){
    clearInterval(this.state.cronometro);
    let newState = this.state;
    newState.cronometro = null;
    newState.number = 0;
    this.setState(newState);
  }
  

  pauseButton(){

    if(this.state.cronometro == null){
       
        if(this.state.number != 0){
        let newS = this.state;
        this.setState(newS);
  
        this.state.cronometro= setInterval(()=>{
          let newState = this.state;
          newState.number +=0.1;
          this.setState(newState);
        },100);
        }
      }else{
      clearInterval(this.state.cronometro);
      let newState = this.state;
      newState.cronometro = null;
      this.setState(newState);
    }
  }

  render(){
  return (
    <View style={styles.body}>

      <View  style={styles.tContainer}>
        <Text style={styles.counterText2}>cronômetro</Text>
        <View style={styles.timer}>
          <View style={styles.timer2}>
            <Text  style={styles.counterText}>{this.state.number.toFixed(1)}</Text>
          </View>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity style={styles.botao} onPress={this.startStopButton}>
            <Text style={styles.botaoText}>start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.pauseButton}>
            <Text style={styles.botaoText}>pause</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.clearButton}>
            <Text style={styles.botaoText}>clean</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#221D41',
    justifyContent: 'center',
  },
  
  tContainer:{
    justifyContent: 'center',
    alignItems:'center'
  },

  counterText:{
    color:'#fff',
    fontSize:50,
    fontWeight:'500',
    
  },

  counterText2:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
  },

  timer:{
    width:190,
    height:190,
    backgroundColor:'#fff',
    borderRadius:95,
    justifyContent:'center',
    alignItems:'center',

  },

  timer2:{
    backgroundColor:'#221D41',
    justifyContent:'center',
    alignItems:'center',
    width:180,
    height:180,
    borderRadius:90,
  },

  containerBotao:{
    flexDirection:'row',
    padding:20,
  },

  botao:{
    backgroundColor:'#331DF4',
    marginHorizontal: 10,
    borderRadius:10,
    height:40,
    width:70,
    justifyContent:'center',
    alignItems:'center',
  },

  botaoText:{
    color:'#fff',
    fontWeight:'bold',
  }

});
