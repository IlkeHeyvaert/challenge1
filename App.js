import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import Books from './components/Books';



export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bookshop</Text>
      <Image style={styles.img} source={require('./assets/shopping_card.jpg')}/>
      <Text style={styles.shopping}>1</Text>
    
      
      <View style={styles.booksContainer}>
       <Books title="Fatale liefde" auteur="Carry Slee" beschrijving="Twee jonge vrouwen zitten in hun laatste jaar op de modeacademie. Ze willen samen een bedrijfje beginnen. Ze krijgen allebei problemen met hun vriendje." isbn="ISBN 9789049924218"/>
       <Image style={styles.img2} source={require('./assets/line.jpg')}/>
       <Books title="Voelen zonder filter : een plattegrond van het emotionele landschap" auteur="Fleur Van Groningen" beschrijving="Persoonlijk verslag van de auteur over hoe zij herstelde van traumatische gebeurtenissen uit haar jeugd en heeft leren omgaan met ingewikkelde gevoelens. Met tips voor het reflecteren op en reguleren van complexe emoties." isbn="ISBN 9789463938372"/>
       <Image style={styles.img2} source={require('./assets/line.jpg')}/>
       <Books title="Reminders of him" auteur="Colleen Hoover" beschrijving="Een vrouw hoopt na een tragische fout en een gevangenisstraf op hereniging met haar jonge dochter. Haar familie houdt haar op afstand en er ontwikkelt zich een risicovolle relatie met een man uit haar verleden." isbn="ISBN 9789020548648"/>
       <Image style={styles.img2} source={require('./assets/line.jpg')}/>
       <Books title="Vrede op aarde" auteur="Paul Dini" beschrijving="Superman richt zich op het oplossen van het wereldvoedselprobleem. Kolomstrip in kleur. Vanaf 15 jaar." isbn="ISBN 9789464600032"/>
        <StatusBar style="auto" />
      </View>
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
 
});
