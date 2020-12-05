import { CrossIcon } from '@core/icons/Cross/CrossIcon.component';
import styled from '@core/theme/styled-components';
import React, { useLayoutEffect } from 'react';

export const useCloseModalButton = <
  TNavigation extends {
    setOptions: (options: Record<string, unknown>) => void;
  }
>(
  navigation: TNavigation,
  closeModal: () => void,
): void => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OpenEditCardModalButtonContainer onPress={() => closeModal()}>
          <CrossIcon />
        </OpenEditCardModalButtonContainer>
      ),
    });
  }, [navigation, closeModal]);
};

const OpenEditCardModalButtonContainer = styled.TouchableOpacity(({ theme }) => ({
  marginRight: theme.gridUnit * 2,
}));
