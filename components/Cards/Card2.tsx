import { View, Text } from "react-native";
import { styles } from "../Style";
import {Image} from "expo-image";

const Card2 = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.image1}>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1354319259/vector/queen-victoria.jpg?s=612x612&w=0&k=20&c=gyNWbXRl_-5ciaT7pF_qsIcqOv9K9GPx11ZT41vhJlM=' }}
        style={styles.image1}
      />
      </View>
      <Text style={styles.title2}>Header</Text>
      <Text style={styles.content2}>
        He'll want to use your yacht, and I don't want this thing smelling like fish.
      </Text>
      <Text style={styles.minute2}>8m ago</Text>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>
        <View style={styles.circle3}></View>
      </View>
        {/* <View style={styles.image2}></View> */}
    </View>
  );
};

export default Card2;