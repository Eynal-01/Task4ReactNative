import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Style'

export const Name = () => {
  return (
   <View style={styles.infoCont}>
    <Text style={styles.name}>Victoria Robertson</Text>
    <Text style={styles.info}>A mantra goes here</Text>
   </View>
  )
}
