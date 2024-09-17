import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../Style';
import {Image} from "expo-image";

const Card = () => {
  return (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
    <Image
        source={{ uri: 'https://media.istockphoto.com/id/1354319259/vector/queen-victoria.jpg?s=612x612&w=0&k=20&c=gyNWbXRl_-5ciaT7pF_qsIcqOv9K9GPx11ZT41vhJlM=' }}
        style={styles.image3}
      />
    </View>
    <View>
        <View style={styles.topContainer1}>
            <Text style={styles.title}>Header</Text>
            <Text style={styles.minute}>8m ago</Text>
        </View>
        <Text style={styles.content}>He'll want to use your yatch, and I 
          don't want this thing smelling like fish</Text>
    </View>
    
  </View>
  )
}

export default Card