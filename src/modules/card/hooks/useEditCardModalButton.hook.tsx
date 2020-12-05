import { PlusIcon } from '@core/icons/Plus/PlusIcon.component';
import styled from '@core/theme/styled-components';
import React, { useLayoutEffect } from 'react';

export const useOpenEditCardModalButton = <
  TNavigation extends {
    setOptions: (options: Record<string, unknown>) => void;
  }
>(
  navigation: TNavigation,
  openEditCardModal: () => void,
): void => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OpenEditCardModalButtonContainer onPress={() => openEditCardModal()}>
          <PlusIcon />
        </OpenEditCardModalButtonContainer>
      ),
    });
  }, [navigation, openEditCardModal]);
};

const OpenEditCardModalButtonContainer = styled.TouchableOpacity(({ theme }) => ({
  marginRight: theme.gridUnit * 3,
}));
