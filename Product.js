import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

function Products({name}) {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.item}>{name}</Text>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({

    item:{
        textAlign:"center",
        backgroundColor: "pink",
        color: "black",
        fontSize: 20,
        marginVertical: 6,
        width: "100%"
        
      },
      itemContainer:{
        width:220
        
      },
});
