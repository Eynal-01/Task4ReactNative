import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { styles } from './Style'

export const Toggle = () => {
  const [isPosts, setIsPosts] = useState(true);

  return (
    <View style={styles.toggleCont}>
      <View style={styles.toggle}>
        <TouchableOpacity 
          style={[styles.toggleButton, isPosts && styles.activeButton]} 
          onPress={() => setIsPosts(true)}>
          <Text style={[styles.togText, isPosts && styles.activeText]}>
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.toggleButton, !isPosts && styles.activeButton]} 
          onPress={() => setIsPosts(false)}>
          <Text style={[styles.togText, !isPosts && styles.activeText]}>
            Photos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
