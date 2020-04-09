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

/*import React,{Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      timer:null,
      number: 0,
      startStopText:'Start',
    }
    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }

  startStopButton(){
    //começa ou para o cronometro

    if(this.state.timer == null){
      //inicia o cronometro
      let newS = this.state;
      newS.startStopText = 'Stop';
      this.setState(newS);

      this.state.timer= setInterval(()=>{
        let newState = this.state;
        newState.number +=0.1;
        this.setState(newState);
      },100);
    }else{
      //para o cronometro
      clearInterval(this.state.timer);
      let newState = this.state;
      newState.startStopText = 'Start';
      newState.timer = null;
      this.setState(newState);
    }
  }

  clearButton(){
    clearInterval(this.state.timer);
    let newState = this.state;
    newState.startStopText = 'Start';
    newState.timer = null;
    newState.number = 0;
    this.setState(newState);
  }

  render(){
  return (
    <View style={styles.body}>

      <View  style={styles.tContainer}>
        <Text  style={styles.counterText}>{this.state.number.toFixed(1)}</Text>
        
        <View style={styles.containerBotao}>
          <TouchableOpacity style={styles.botao} onPress={this.startStopButton}>
            <Text style={styles.botaoText}>{this.state.startStopText}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.clearButton}>
            <Text style={styles.botaoText}>Pause</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>@angelina</Text>
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

  footer:{
    position:'absolute',
    bottom:0,
    backgroundColor:'#000',
    opacity:0.4,
    justifyContent:"flex-end",
    alignItems:'center',
    width:'100%',
    height:20,
  },

  footerText:{
    color:'#fff'
  },
  
  tContainer:{
    justifyContent: 'center',
    alignItems:'center'
  },

  counterText:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
  },

  containerBotao:{
    flexDirection:'row',
    padding:20,
  },

  botao:{
    backgroundColor:'#331DF4',
    marginHorizontal: 15,
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

});*/

/*import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View  style={styles.container1}>
        <Text  style={styles.container1text}>0.0</Text>
        
        <View style={styles.containerBotao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoText}>Pause</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221D41',
    justifyContent: 'center',
  },

  container1:{
    justifyContent: 'center',
    alignItems:'center'
  },

  container1text:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
  },

  containerBotao:{
    flexDirection:'row',
    padding:20,
  },

  botao:{
    backgroundColor:'#331DF4',
    margin:20,
    borderRadius:10,
    height:25,
    width:100,
  },

  botaoText:{
    textAlign:'center',
    color:'#221D41',
    fontWeight:'bold',
    marginTop:3,

  }

});
*/