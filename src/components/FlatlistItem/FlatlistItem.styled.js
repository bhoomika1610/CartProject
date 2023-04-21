import {FontFamily, Palette} from 'styles';
export const FlatlistItemStyles = {
  itemContainer: {
    width: '93%',
    alignSelf: 'center',
    flex: 1,
    paddingTop: 11,
    paddingBottom: 10,
  },
  itemSubcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemImage: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    letterSpacing: -0.34,
    fontFamily: FontFamily.SemiBold,
    color: Palette.black,
  },
  quantityInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
};
