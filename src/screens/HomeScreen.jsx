import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../styles";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <Button
        mode="contained"
        onPress={() => { navigation.navigate(AboutScreen);}}>
        Conheça o sobre
      </Button>

      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate(ContactScreen);}}>
        Conheça o contato
      </Button>
    </View>
  );
}