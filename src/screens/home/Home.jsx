import React, {useEffect, useCallback} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {HomeStyles} from './Home.styled';
import {useDispatch, useSelector} from 'react-redux';
import Api from 'api';
import {ProductsliceActions} from 'slices';
import {Loader, FlatlistItem, PageHeader} from 'components';

const Home = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  useEffect(() => {
    dispatch(Api.fetchProducts());
  }, []);

  function renderItem(item, index) {
    let cartValue = 0;
    products.product?.cartList?.map(oneProduct => {
      item?.item?.id == oneProduct?.product?.id
        ? (cartValue = oneProduct?.quantity)
        : null;
    });

    return (
      <>
        <FlatlistItem
          item={item}
          dispatch={dispatch}
          addToCart={ProductsliceActions.addToCart}
          decreaseQtyInCart={ProductsliceActions.decreaseQtyInCart}
          deleteFromCart={ProductsliceActions.deleteFromCart}
          screen={'home'}
          cartValue={cartValue}
        />
      </>
    );
  }

  const keyExt = useCallback(item => item?.id?.toString(), []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <PageHeader title={'Products'} />
        {products.product.isLoading ? <Loader /> : null}
        <View style={{flex: 1}}>
          <FlatList
            data={products?.product?.productList}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            keyExtractor={keyExt}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(HomeStyles);
export default Home;
