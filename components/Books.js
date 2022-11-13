import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';



const Books = props => { 
    return (
        <View style={styles.books}>
        <View style={styles.booksDetail}>
          <Text style={styles.booktitle} onPress={() => Alert.alert('Book title pressed')}>{props.title} </Text>
          <Text style={styles.auteur}>{props.auteur}</Text>
          <Text style={styles.beschrijving}>{props.beschrijving}</Text>
          <Text style={styles.isbn}>{props.isbn}</Text>
          <Button title="Read" color="black" onPress={() => Alert.alert('Book title read')}/>
        </View>
        </View>
 );
}

const styles = StyleSheet.create({
    booktitle: {
      fontSize: 20,
      
    },
    booksDetail: {
        margin: '4%', 
    },
    beschrijving: {
        margin: '2%',
    },
  });

  export default Books;