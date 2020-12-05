import { Spacer } from '@core/components/Spacer/Spacer.component';
import { OutlinedRightArrowIcon } from '@core/icons/OutlinedRightArrow/OutlinedRightArrowIcon.component';
import styled from '@core/libs/styled-components';
import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import { useDeleteTopicMutation } from '@topic/data/hooks/useDeleteTopicMutation.hook';
import { Topic } from '@topic/types/Topic.type';
import { getColorFromTopicColorId } from '@topic/utils/getColorFromTopicColorId.utils';
import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';

interface Props {
  topic: Topic;
  onPress?: () => void;
}
export const WideTopicListItem: FunctionComponent<Props> = ({ topic, onPress }) => {
  const { deleteTopic } = useDeleteTopicMutation();
  const theme = useTheme();

  return (
    <Container
      backgroundColor={getColorFromTopicColorId(topic.colorId)}
      onPress={onPress}
      onLongPress={() =>
        Alert.alert(
          'Deletion',
          'Are you sure you want to delete this topic? All the cards associated to it will be deleted as well.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Yes',
              style: 'destructive',
              onPress: () => deleteTopic({ topicId: topic.id }),
            },
          ],
        )
      }
      disabled={!onPress}>
      <Name>{topic.name}</Name>
      <Spacer width={2} />
      <OutlinedRightArrowIcon color={theme.colors.topicBackgroundHighlight} size={30} />
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ backgroundColor: string }>(
  ({ theme, backgroundColor }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.gridUnit * 4,
    backgroundColor,
    borderRadius: 10,
  }),
);

const Name = styled.Text(({ theme }) => ({
  color: theme.colors.topicBackgroundHighlight,
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSizes.xxxl,
  flex: 1,
}));
