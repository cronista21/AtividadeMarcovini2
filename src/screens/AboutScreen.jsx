import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../styles";
import ContactScreen from "./ContactScreen";


export default function AboutScreen( navigation ) {
  return (
    <View style={styles.container}>
      <Text>Olá, aqui é o sobre</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate(ContactScreen)
          }}>
        Conheça o contato
      </Button>
    </View>
  );
}