import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../styles";


export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text>Olá, aqui é o contato</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        >
        volte a home
      </Button>
    </View>
  );
}