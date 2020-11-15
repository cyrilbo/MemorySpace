import { BlurView } from '@react-native-community/blur';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { EyeIcon } from '../../../../core/icons/Eye/EyeIcon.component';
import { colors } from '../../../../core/theme/colors';
import styled from '../../../../core/theme/styled-components';

interface Props {
  answer: string;
  isVisible: boolean;
  onToggleVisibilityPress: () => void;
}

export const BlurableAnswer: FunctionComponent<Props> = ({
  answer,
  isVisible,
  onToggleVisibilityPress,
}) => {
  return (
    <Container>
      <Answer>{answer}</Answer>
      {!isVisible ? (
        <Blur blurType="light" blurAmount={2} reducedTransparencyFallbackColor="#FFF">
          <TouchableOpacity onPress={onToggleVisibilityPress}>
            <EyeIcon color={colors.black} size={30} />
          </TouchableOpacity>
        </Blur>
      ) : null}
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  padding: theme.gridUnit * 4,
}));

const Answer = styled.Text({});

const Blur = styled(BlurView)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
});
