import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IncDecButtonsStyles} from './IncDecButtons.styled';
const IncDecButtons = ({
  oneItem,
  quantity,
  dispatch,
  addToCart,
  deleteFromCart,
  decreaseQtyInCart,
  screen,
}) => {
  return (
    <View style={styles.quantityInfo}>
      <TouchableOpacity
        onPress={() =>
          dispatch(addToCart({product: oneItem, quantity: 1, screen: screen}))
        }
        style={styles.incItemCount}>
        <View>
          <Text style={{color: '#0000FF'}}>+</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          quantity > 0
            ? quantity == 1
              ? dispatch(deleteFromCart(oneItem?.id))
              : dispatch(decreaseQtyInCart(oneItem?.id))
            : null;
        }}
        style={styles.decItemCount}>
        <View>
          <Text style={{color: '#FF0000'}}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create(IncDecButtonsStyles);
export default IncDecButtons;
