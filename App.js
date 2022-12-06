import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import {styles} from './styles'

import { useFonts, Roboto_300Light, Roboto_500Medium } from '@expo-google-fonts/roboto';

let organizado = []
export default function App() {

  const [frase, setFrase] = useState(null);
  const [loading, setLoading] = useState(false);

  function renderizarFrase(){
    organizado = []
    setFrase(null) 
    setLoading(true)
   const options = {
      method: 'GET'
    };    
    fetch('https://api.quotable.io/random?tags=famous-quotes', options)
      .then(response => response.json())
      .then(response => {
        
        let frase2 = (traduzir(response['content']))     
        let autor = response['author']
   
        frase2.then((message) => {  
          frase2 = message.responseData.translatedText;
          organizado.push(frase2)
          organizado.push(autor)
          setFrase(organizado)          
          setLoading(false)   
      });      
      
    })
    .catch(err => console.error(err));

  }
 
  async function traduzir(texto){
    var data = await fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en-GB|pt-BR}&de=feijo801@gmail.com`);       
    return await data.json();       
  }


  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_500Medium
  });
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
         {loading && (
            <View style={styles.loadingScreen}>
            <ActivityIndicator color="white" size="large"></ActivityIndicator>
            </View>
          )}
     
        <Text style={styles.titulo}>Gerador de citações</Text>
        <TouchableOpacity color='black' style={styles.botao} onPress={renderizarFrase}><Text style={styles.textoBotao}>Gerar</Text></TouchableOpacity>
        <StatusBar style="auto" />

        
        {frase &&                     
          <View style={styles.resultado}>                             
            <Text style={styles.textResultado}>{frase[0]}</Text>
            <Text style={styles.textAutor}>Autor: {frase[1]}</Text>            
    
          </View>                      
        }

      </View>
    );
  }
}

