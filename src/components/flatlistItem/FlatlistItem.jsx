import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatlistItemStyles} from './FlatlistItem.styled';
import AddButton from '../addButton/AddButton';
import IncDecButtons from '../incDecButtons/IncDecButtons';
import SingleProductDetails from '../singleProductDetails/SingleProductDetails';
import {Icon, IconNames} from 'icons';
import {useNavigation} from '@react-navigation/native';

const FlatlistItem = ({
  addToCart,
  decreaseQtyInCart,
  deleteFromCart,
  item,
  dispatch,
  screen,
  cartValue,
}) => {
  let oneItem = screen == 'cart' ? item.product : item.item;
  let quantity = screen == 'cart' ? item?.quantity : cartValue;

  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemSubcontainer}>
        <View>
          <Image style={styles.itemImage} source={{uri: oneItem.image}} />
          <View style={styles.itemIcon}></View>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.itemTitle}>{oneItem?.title}</Text>
          <SingleProductDetails
            oneItem={oneItem?.category}
            detailHeading={'Category:'}
          />
          <SingleProductDetails
            oneItem={oneItem?.rating?.rate + '/5'}
            detailHeading={'Ratings:'}
          />
          <SingleProductDetails
            oneItem={'$' + oneItem?.price}
            detailHeading={'Price:'}
          />
        </View>
      </View>
      <View style={styles.quantityInfoContainer}>
        {quantity > 0 ? (
          <IncDecButtons
            oneItem={oneItem}
            quantity={quantity}
            dispatch={dispatch}
            addToCart={addToCart}
            decreaseQtyInCart={decreaseQtyInCart}
            deleteFromCart={deleteFromCart}
            screen={screen}
          />
        ) : (
          <AddButton
            oneItem={oneItem}
            dispatch={dispatch}
            quantity={quantity}
            addToCart={addToCart}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            screen == 'cart'
              ? dispatch(deleteFromCart(oneItem?.id))
              : navigation.navigate('About', {
                  image: oneItem?.image,
                  description: oneItem?.description,
                });
          }}>
          <Icon
            iconName={screen == 'cart' ? IconNames.BinIcon : IconNames.InfoIcon}
            height={22}
            width={22}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(FlatlistItemStyles);
export default FlatlistItem;
