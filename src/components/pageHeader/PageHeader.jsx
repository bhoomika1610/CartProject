import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderStyles} from './PageHeader.styled';
import {Icon, IconNames} from 'icons';

const PageHeader = ({title, back}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {back ? (
        <Icon
          iconName={IconNames.BackArrowIcon}
          height={28}
          width={28}
          style={styles.iconStyle}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : null}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create(HeaderStyles);
export default PageHeader;
