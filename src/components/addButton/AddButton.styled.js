import {FontFamily, Palette, FontSize} from 'styles';
export const AddButtonStyles = {
  addButtonMainContainer: {flex: 1},

  addButtonContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    borderColor: Palette.black,
  },
  cartIconContainer: {
    backgroundColor: Palette.white,
    padding: 4,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  addButtonTextContainer: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderLeftWidth: 1,
    backgroundColor: Palette.gray,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontFamily: FontFamily.Medium,
    fontSize: FontSize.Regular,
    color: Palette.white,
  },
};
