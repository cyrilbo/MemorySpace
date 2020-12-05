import styled from '@core/libs/styled-components';
import React, { useLayoutEffect } from 'react';
import { DarkModeButton } from '../components/DarkModeButton/DarkModeButton.component';

export const useDarkModeButton = <
  TNavigation extends {
    setOptions: (options: Record<string, unknown>) => void;
  }
>(
  navigation: TNavigation,
): void => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DarkModeButtonContainer>
          <DarkModeButton />
        </DarkModeButtonContainer>
      ),
    });
  }, [navigation]);
};

const DarkModeButtonContainer = styled.View(({ theme }) => ({
  marginLeft: theme.gridUnit * 3,
}));
