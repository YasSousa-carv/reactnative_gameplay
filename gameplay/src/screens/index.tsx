import React, {useState} from 'react';
import { View,Text,Image } from 'react-native';
import { styles} from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { StatusBar } from 'expo-status-bar';

export function Signin() {
  const [text,  setText] = useState ("Digite alguma coisa");



  return(

    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent />
         <Image source = {IllustrationImg} style={styles.image} resizeMode='stretch'/>      
    <View style={styles.container}>

      <Text style={styles.title}>
        Organize Suas {`\n`}
        Jogatinas {`\n`}
        facilmente
      </Text>
      <Text style={styles.subtitle}>
        Crie seus grupos para jogas seus games{`\n`}
        favoritos com seus amigos
      </Text>
    </View>
    </View>
  )
} 
