import React, { FunctionComponent } from 'react';
import { PlusIcon } from '../../../../core/icons/Plus/PlusIcon.component';
import { colors } from '../../../../core/theme/colors';
import styled from '../../../../core/theme/styled-components';
import { useCreateTopicMutation } from '../../data/hooks/useCreateTopicMutation.hook';
import { TopicColor } from '../../types/TopicColor.type';

interface Props {
  name: string;
  topicColor: TopicColor;
}

export const CreateTopicButton: FunctionComponent<Props> = ({ name, topicColor }) => {
  const { createTopic } = useCreateTopicMutation();

  return (
    <Container
      onPress={() => createTopic({ name, colorId: topicColor.id })}
      backgroundColor={topicColor.hex}
    >
      <Title>
        {`Add "`}
        <Name>{name}</Name>
        {`"`}
      </Title>
      <PlusIcon color={colors.black} />
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ backgroundColor: string }>(
  ({ theme, backgroundColor }) => ({
    backgroundColor,
    padding: theme.gridUnit * 2,
    flexDirection: 'row',
  })
);

const Title = styled.Text.attrs({ numberOfLines: 1 })(({ theme }) => ({
  color: theme.colors.black,
  flex: 1,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.l,
}));

const Name = styled.Text.attrs({ numberOfLines: 1 })(({ theme }) => ({
  color: theme.colors.black,
  fontFamily: theme.fontFamilies.bold,
}));
