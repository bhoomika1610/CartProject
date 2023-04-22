import React, {useMemo} from 'react';
import {SvgFromUri} from 'react-native-svg';

import IconNames from './IconNames';
import icons from './Icons';

export default function Icon({iconName, uri, ...props}) {
  const IconSvg = useMemo(
    () => icons[iconName || IconNames.VERTICAL_THREE_DOTS],
    [iconName],
  );
  const renderItem = uri ? (
    <SvgFromUri uri={uri} {...props} />
  ) : iconName ? (
    <IconSvg {...props} />
  ) : null;

  return renderItem;
}
