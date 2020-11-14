import React, { useLayoutEffect } from 'react';
import styled from '../../../core/theme/styled-components';
import { PlayButton } from '../components/PlayButton/PlayButton.component';

export const usePlayButton = <
  TNavigation extends { setOptions: (options: Record<string, unknown>) => void }
>(
  navigation: TNavigation
): void => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <PlayButtonContainer>
          <PlayButton color={tintColor} />
        </PlayButtonContainer>
      ),
    });
  }, [navigation]);
};

const PlayButtonContainer = styled.View(({ theme }) => ({
  marginRight: theme.gridUnit * 2,
}));
