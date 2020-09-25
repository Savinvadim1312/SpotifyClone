import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import albumDetails from '../data/albumDetails';
import { getAlbum } from '../src/graphql/queries';

const AlbumScreen = () => {

  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
        setAlbum(data.data.getAlbum)
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumDetails();
  }, [])

  if (!album) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <FlatList
        data={album.songs.items}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  )
}

export default AlbumScreen;
