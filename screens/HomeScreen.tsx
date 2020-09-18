import * as React from 'react';
import { StyleSheet, FlatList, View  } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <FlatList
         data={albumCategories}
         renderItem={({ item }) => (
           <AlbumCategory
             title={item.title}
             albums={item.albums}
           />
         )}
         keyExtractor={(item) => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
