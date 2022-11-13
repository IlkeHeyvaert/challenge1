import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookshop</Text>
      <Image style={styles.img} source={require('./assets/shopping_card.jpg')}/>
      <Text style={styles.shopping}>1</Text>
    <View>
      <Text>Book title 1</Text>
      <Text>Auteur</Text>
      <Text>Lorem ipsum</Text>
      <Text>ISBN</Text>
      <Button title="Read" color="black"/>
    </View>
    <View>
      <Text>Book title 2</Text>
      <Text>Auteur</Text>
      <Text>Lorem ipsum</Text>
      <Text>ISBN</Text>
      <Button title="Read" color="black"/>
    </View>
    <View>
      <Text>Book title 3</Text>
      <Text>Auteur</Text>
      <Text>Lorem ipsum</Text>
      <Text>ISBN</Text>
      <Button title="Read" color="black"/>
    </View>
    <View>
      <Text>Book title 4</Text>
      <Text>Auteur</Text>
      <Text>Lorem ipsum</Text>
      <Text>ISBN</Text>
      <Button title="Read" color="black"/>
    </View>
      
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
  },
  header: {
    fontSize: 30,
    margin: 30,
    marginTop: 40,
  },
  img: {
    width: '10%',
    height: 45,
    marginTop: -65,
    marginLeft: 320,
  },
  shopping: {
    fontSize: 20,
  }
});
