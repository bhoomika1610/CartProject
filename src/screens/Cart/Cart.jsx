import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {CartStyles} from './Cart.styled';
import {useDispatch, useSelector} from 'react-redux';
import {ProductsliceActions} from 'slices';
import {CartFooter, FlatlistItem, PageHeader} from 'components';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.product.cartList);
  let numberOfItems = 0;
  let totalPrice = 0;
  cartProducts.map(oneProduct => {
    numberOfItems += oneProduct.quantity;
    totalPrice += oneProduct.quantity * oneProduct.product.price;
  });

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <PageHeader title={'Cart'} />

        {cartProducts?.length > 0 ? (
          <FlatList
            data={cartProducts}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <FlatlistItem
                  item={item}
                  dispatch={dispatch}
                  addToCart={ProductsliceActions.addToCart}
                  decreaseQtyInCart={ProductsliceActions.decreaseQtyInCart}
                  deleteFromCart={ProductsliceActions.deleteFromCart}
                  screen={'cart'}
                />
              );
            }}
          />
        ) : (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          </View>
        )}
        {cartProducts?.length > 0 && (
          <CartFooter numberOfItems={numberOfItems} totalPrice={totalPrice} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(CartStyles);

export default Cart;
