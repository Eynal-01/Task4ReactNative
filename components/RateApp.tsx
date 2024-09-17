import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Style'

export const RateApp = () => {
  return (
    <View style={styles.rateCont}>
        <View style={styles.wCont}>
        <View style={styles.starCont}>
           
</View>
        <Text style={styles.headTxt}>Rate our app</Text>
        <Text style={styles.appInfo}>Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.</Text>
        <Text style={styles.likeApp}>I love it!</Text>
        <Text style={styles.dont}>Don’t like the app? Let us know.</Text>
        </View>
    </View>
  )
}
