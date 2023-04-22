import {Palette, FontFamily, FontSize} from 'styles';
export const HeaderStyles = {
  headerContainer: {
    width: '100%',
    height: 60,
    backgroundColor: Palette.white,
    elevation: 3,
    paddingHorizontal: 18,
    alignItems: 'center',
    flexDirection: 'row',
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowColor: Palette.black,
    shadowOffset: {width: 0, height: 1},
  },
  headerTitle: {
    fontSize: FontSize.Large,
    fontFamily: FontFamily.SemiBold,
    color: Palette.black,
  },
  iconStyle: {marginRight: 6, marginTop: 1},
};
