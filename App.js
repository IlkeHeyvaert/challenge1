import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bookshop</Text>
      <Image style={styles.img} source={require('./assets/shopping_card.jpg')}/>
      <Text style={styles.shopping}>1</Text>
    <View>
      <Text style={styles.booktitle}>Fatale liefde</Text>
      <Text>Carry Slee</Text>
      <Text>Twee jonge vrouwen zitten in hun laatste jaar op de modeacademie. Ze willen samen een bedrijfje beginnen. Ze krijgen allebei problemen met hun vriendje.</Text>
      <Text>ISBN 9789049924218</Text>
      <Button title="Read" color="black"/>
    </View>
    <View>
      <Image style={styles.img2} source={require('./assets/line.jpg')}/>
    </View>
    <View>
      <Text>Voelen zonder filter : een plattegrond van het emotionele landschap</Text>
      <Text>Fleur Van Groningen</Text>
      <Text>Persoonlijk verslag van de auteur over hoe zij herstelde van traumatische gebeurtenissen uit haar jeugd en heeft leren omgaan met ingewikkelde gevoelens. Met tips voor het reflecteren op en reguleren van complexe emoties.</Text>
      <Text>ISBN 9789463938372</Text>
      <Button title="Read" color="black"/>
    </View>
    <View>
      <Image style={styles.img2} source={require('./assets/line.jpg')}/>
    </View>
    <View>
      <Text>Reminders of him</Text>
      <Text>Colleen Hoover</Text>
      <Text>Een vrouw hoopt na een tragische fout en een gevangenisstraf op hereniging met haar jonge dochter. Haar familie houdt haar op afstand en er ontwikkelt zich een risicovolle relatie met een man uit haar verleden.</Text>
      <Text>ISBN 9789020548648</Text>
      <Button title="Read" color="black"/>
    </View>
    <View>
      <Image style={styles.img2} source={require('./assets/line.jpg')}/>
    </View>
    <View>
      <Text>Vrede op aarde</Text>
      <Text>Paul Dini</Text>
      <Text>Superman richt zich op het oplossen van het wereldvoedselprobleem. Kolomstrip in kleur. Vanaf 15 jaar.</Text>
      <Text>ISBN 9789464600032</Text>
      <Button title="Read" color="black"/>
    </View>
      
      
      
      
      <StatusBar style="auto" />
    </ScrollView>
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
    fontWeight: 'bold',
  },
  img: {
    width: '10%',
    height: 45,
    marginTop: -65,
    marginLeft: 320,
  },
  shopping: {
    fontSize: 20,
    marginLeft: 360,
    marginTop: -15,
  },
  booktitle: {
    fontSize: 20,

  }
});
