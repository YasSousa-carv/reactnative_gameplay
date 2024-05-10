import React, {useState} from 'react';
import { View,Text, TextInput } from 'react-native';
import { styles} from './styles';

export function Signin() {
  const [text,  setText] = useState ("Digite alguma coisa");



  return(

    <View style={styles.container}> 
    <Text>
        SEJA BEM VINDO AO MUNDO JOIAS FALSAS        
    </Text>
   <TextInput style={styles.input}
   onChangeText={setText}
   />

     <Text>
      Você digitou: {text}
     </Text>       
    </View>
  )
} 
