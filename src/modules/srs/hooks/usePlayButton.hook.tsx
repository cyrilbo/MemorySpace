import React, { useLayoutEffect } from 'react';
import styled from '../../../core/theme/styled-components';
import { PlayButton } from '../components/PlayButton/PlayButton.component';

export const usePlayButton = <
  TNavigation extends {
    setOptions: (options: Record<string, unknown>) => void;
  }
>(
  navigation: TNavigation,
  onPress: () => void
): void => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <PlayButtonContainer>
          <PlayButton color={tintColor} onPress={onPress} />
        </PlayButtonContainer>
      ),
    });
  }, [navigation, onPress]);
};

const PlayButtonContainer = styled.View(({ theme }) => ({
  marginRight: theme.gridUnit * 2,
}));
