import React, {useMemo} from 'react';
import {
  BottomSheetBackdropProps,
  BottomSheetBackgroundProps,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
const CustomBackdrop = ({animatedIndex, style, bottomSheetRef}) => {
  console.log('propssss', bottomSheetRef);
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.5],
      [0, 0.5],
      Extrapolate.CLAMP,
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#000',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return (
    <>
      <TouchableWithoutFeedback onPress={() => bottomSheetRef.current?.close()}>
        <Animated.View style={containerStyle} />
      </TouchableWithoutFeedback>
    </>
  );
};

export default CustomBackdrop;
