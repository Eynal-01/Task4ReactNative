import React from 'react'
import { styles } from './Style'
import { View, Text } from 'react-native'
import { Image } from 'expo-image';

export const Header = () => {
  return (
    <View style={styles.headerCont}>
        <View style={styles.wordCont}>
         <Text style={styles.back}>Settings</Text>
        <Text style={styles.feed}>Profile</Text>
        <Text style={styles.filter}>Logout</Text>
        <View style={styles.imgCont}>
        <Image
        source={{ uri: 'https://media.istockphoto.com/id/1354319259/vector/queen-victoria.jpg?s=612x612&w=0&k=20&c=gyNWbXRl_-5ciaT7pF_qsIcqOv9K9GPx11ZT41vhJlM=' }}
        style={styles.image}
      />
        </View>
        </View>
    </View>
  )
}
