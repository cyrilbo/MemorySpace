import { Spacer } from '@core/components/Spacer/Spacer.component';
import { KoIcon } from '@core/icons/Ko/KoIcon.component';
import { OkIcon } from '@core/icons/Ok/OkIcon.component';
import { colors } from '@core/theme/colors';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  onFailurePress?: () => void;
  onSuccessPress?: () => void;
}

export const ResultForm: FunctionComponent<Props> = ({ onSuccessPress, onFailurePress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onFailurePress}>
        <KoIcon color={colors.black} size={42} />
      </TouchableOpacity>
      <Spacer width={10} />
      <TouchableOpacity onPress={onSuccessPress}>
        <OkIcon color={colors.black} size={42} />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
