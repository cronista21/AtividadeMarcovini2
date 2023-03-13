import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../styles";
import AboutScreen from "./AboutScreen";


export default function ContactScreen( navigation ) {
  return (
    <View style={styles.container}>
      <Text>Olá, aqui é o contato</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate(AboutScreen);}}>
        vá ao sobre
      </Button>
    </View>
  );
}