import { Platform } from 'react-native';
import { colors } from './colors';

const ANDROID_ELEVATION = 10;
const SHADOW_OFFSET = {
  width: 0,
  height: 6,
};
const SHADOW_RADIUS = 6;
const SHADOW_OPACITY = 0.7;

export const shadow = Platform.select({
  ios: {
    shadowColor: colors.lightBlue,
    shadowOffset: SHADOW_OFFSET,
    shadowRadius: SHADOW_RADIUS,
    shadowOpacity: SHADOW_OPACITY,
  },
  android: {
    elevation: ANDROID_ELEVATION,
  },
});

export const darkShadow = Platform.select({
  ios: {
    shadowColor: colors.nightRider,
    shadowOffset: SHADOW_OFFSET,
    shadowRadius: SHADOW_RADIUS,
    shadowOpacity: SHADOW_OPACITY,
  },
  android: {
    elevation: ANDROID_ELEVATION,
  },
});
