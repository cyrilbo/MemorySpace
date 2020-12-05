import styled from '@core/libs/styled-components';
import { PlayButton } from '@srs/components/PlayButton/PlayButton.component';
import React, { useLayoutEffect } from 'react';

export const usePlayButton = <
  TNavigation extends {
    setOptions: (options: Record<string, unknown>) => void;
  }
>(
  navigation: TNavigation,
  onPress: () => void,
  isDisplayed: boolean,
): void => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (isDisplayed) {
          return (
            <PlayButtonContainer>
              <PlayButton onPress={onPress} />
            </PlayButtonContainer>
          );
        } else {
          return null;
        }
      },
    });
  }, [navigation, onPress, isDisplayed]);
};

const PlayButtonContainer = styled.View(({ theme }) => ({
  marginRight: theme.gridUnit * 2,
}));
