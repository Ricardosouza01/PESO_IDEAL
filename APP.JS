import React, {Component} from "react";
import { ImageBackground, StyleSheet, ViewStyleSheet, View, SafeAreaView, Text, TextInput,Imagem, Button, Alert, TouchableOpacity, Platfor } from "react-native";


export default class App extends Component <props>{

constructor(props){
  super(props)
  this.state={altura:0, nome:"", result:0, resultTexto:"", nome:""}
  this.homem=this.homem.bind(this)
  
  this.state={altura:0, nome:"", result:0, resultTexto:"", nome:""}
  this.mulher=this.mulher.bind(this)
 
}

homem(){
  let imc = ((72.7 * this.state.altura)-58).toFixed(2)
  let s=this.state
  s.result = imc
  this.setState(s)

  if(s.result){
        s.resultTexto = "Peso ideal."
      }
}


mulher(){
  let imc = ((62.1 * this.state.altura)-44.7).toFixed(2)
  let s=this.state
  s.result = imc
  this.setState(s)

   if(s.result){
        s.resultTexto = "Peso ideal."
      }
}

    

 render(){
   return (
    <View style={styles.principal}>
      
      <TextInput style={styles.form} placeholder="Altura" keyboardType="numbers-and-punctuation" onChangeText={(altura)=>{this.setState({altura})}}/>
      
      <TouchableOpacity style= {styles.bt} onPress={this.homem}><Text>Homem</Text></TouchableOpacity>
      <TouchableOpacity style= {styles.bt} onPress={this.mulher}><Text>Mulher</Text></TouchableOpacity>

      <Text style={styles.result}>{this.state.result} </Text>
      <Text style={styles.result2}>{this.state.nome}{this.state.resultTexto} </Text>
      
    </View>
  )

}
};

const styles = StyleSheet.create({
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },


  principal:{
    width: 330,
    height: 450,
    alignItems:"center",
    justifyContent:"center",
    padding:30,
    marginBottom: 150,
    

  },

  form:{
    height: 40,
    widht: 320,
    padding: 10,
    fontSize: 20,
    color: "#333",
    backgroundColor: "rgba(250,250,250,0)",
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 20,

  },

  bt:{
    width: 320,
    padding: 1,
    fontSize: 25,
    backgroundColor: "rgba(250,250,250,)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,

  },

  result:{
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 30,
  color: "#2C3A47",
  backgroundColor: "rgba(250,250,250,0)",
  borderColor: "#fff",
  borderBottomWidth: 1,
  marginTop: 20,
  },

  result2:{
    fontSize:18,
    fontWeight: "bold",
    marginTop: 30,
    color: "#2C3A47",
    backgroundColor: "rgba(250,250,250,0)",
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 20,
    },


});
