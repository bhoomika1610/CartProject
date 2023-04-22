import {FontFamily, Palette} from 'styles';
export const IncDecButtonsStyles = {
  incItemCount: {
    borderWidth: 1,
    minWidth: 35,
    alignItems: 'center',
    padding: 6,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderRightWidth: 0,
    backgroundColor: Palette.lightBlue,
    borderColor: Palette.paleGrayBorder,
  },
  decItemCount: {
    borderWidth: 1,
    minWidth: 35,
    alignItems: 'center',
    padding: 6,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderLeftWidth: 0,
    backgroundColor: Palette.lightRed,
    borderColor: Palette.paleGrayBorder,
  },

  quantityInfo: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  quantityContainer: {
    borderWidth: 1,
    minWidth: 50,
    alignItems: 'center',
    padding: 6,
    borderColor: Palette.paleGrayBorder,
  },
  quantity: {
    fontFamily: FontFamily.SemiBold,
    color: Palette.black,
  },
};
