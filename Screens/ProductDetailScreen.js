import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {Card, Button} from 'react-native-elements';
import UserAvatar from 'react-native-avatar-generator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

//Destructure
const ProductDetailScreen = ({route, navigation}) => {
  const item = route.params.item;

  useLayoutEffect(() => {
    navigation.setOptions({title: 'جزئیات ' + item.name});
  }, [item]);

  const share = () => {
    Share.open({title: 'محصول ', message: item.body})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };
  return (
    <View>
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <Card.Divider />
        <UserAvatar
          size={100}
          fontWeight="bold"
          color="#FFFFFF"
          backgroundColor="red"
          firstName={item.name}
        />
        <Text style={{marginBottom: 10}}>{item.body}</Text>
        <Button
          onPress={share}
          icon={<Icon name="share-alt" size={15} color="white" />}
          title=" اشتراک گذاری "
        />
      </Card>
    </View>
  );
};

export default ProductDetailScreen;
