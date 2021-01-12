import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {Text, ListItem, Avatar} from 'react-native-elements';
import UserAvatar from 'react-native-avatar-generator';

const ProductScreen = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [listComments, setListComments] = useState([]);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    fetch(`https://jsonplaceholder.ir/comments?_page=${page}&_limit=10`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('---->', page);
        // setListComments(data);
        let newList = [...listComments, ...data];
        newList = newList.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id),
        );
        setListComments(newList);
        setLoding(false);
      });
    // .then(data => setListComments([...listComments, ...data]))
  }, [page]);

  const endReached = () => {
    if (loading) {
      return;
    }
    console.log('++++onEndReached');
    setPage(page + 1);
  };

  const refresh = () => {
    setListComments([]);
    setPage(1);
  };

  return (
    <View>
      {loading && <ActivityIndicator />}
      <FlatList
        data={listComments}
        onEndReached={endReached}
        refreshing={loading}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
            onRefresh={refresh}
          />
        }
        renderItem={(l, i) => {
          return (
            <ListItem
              key={l.item.id.toString()}
              bottomDivider
              onPress={() => {
                navigation.navigate('ProductDetail', {item: l.item});
              }}>
              <UserAvatar
                size={80}
                fontWeight="bold"
                color="#FFFFFF"
                backgroundColor="red"
                firstName={l.item.name}
              />
              <ListItem.Content>
                <ListItem.Title>{l.item.name}</ListItem.Title>
                <ListItem.Subtitle>{l.item.body}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        }}
      />
    </View>
  );
};

export default ProductScreen;
