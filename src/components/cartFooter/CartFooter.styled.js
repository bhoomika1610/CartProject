import {FontFamily, Palette, FontSize} from 'styles';
export const FooterStyles = {
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingVertical: 10,
    backgroundColor: Palette.lightestGray,
  },
  heading: {
    fontFamily: FontFamily.SemiBold,
    fontSize: FontSize.Regular,
    textAlign: 'center',
    color: Palette.gray,
  },
  subHeading: {fontSize: FontSize.Medium, color: Palette.black},
};
