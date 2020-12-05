import { Spacer } from '@core/components/Spacer/Spacer.component';
import { KoIcon } from '@core/icons/Ko/KoIcon.component';
import { OkIcon } from '@core/icons/Ok/OkIcon.component';
import styled from '@core/libs/styled-components';
import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  onFailurePress?: () => void;
  onSuccessPress?: () => void;
}

export const ResultForm: FunctionComponent<Props> = ({ onSuccessPress, onFailurePress }) => {
  const theme = useTheme();
  return (
    <Container>
      <TouchableOpacity onPress={onFailurePress}>
        <KoIcon color={theme.colors.topicBackgroundHighlight} size={42} />
      </TouchableOpacity>
      <Spacer width={10} />
      <TouchableOpacity onPress={onSuccessPress}>
        <OkIcon color={theme.colors.topicBackgroundHighlight} size={42} />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
