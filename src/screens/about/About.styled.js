import {Palette, FontFamily, FontSize} from 'styles';
export const AboutStyles = {
  mainContainer: {backgroundColor: Palette.white, flex: 1},
  subContainer: {flex: 1, backgroundColor: Palette.white},
  itemDescription: {
    color: Palette.gray,
    fontSize: FontSize.Regular,
    fontFamily: FontFamily.Regular,
  },
  infoContainer: {flex: 1, padding: 20, alignItems: 'center'},
  image: {height: 120, width: 120, marginBottom: 20},
};
