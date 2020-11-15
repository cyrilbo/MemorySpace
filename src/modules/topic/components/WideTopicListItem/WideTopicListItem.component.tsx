import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { OutlinedRightArrowIcon } from '../../../../core/icons/OutlinedRightArrow/OutlinedRightArrowIcon.component';
import { colors } from '../../../../core/theme/colors';
import styled from '../../../../core/theme/styled-components';
import { useDeleteTopicMutation } from '../../data/hooks/useDeleteTopicMutation.hook';
import { Topic } from '../../types/Topic.type';
import { getHexFromTopicColorId } from '../../utils/getHexFromTopicColorId.utils';

interface Props {
  topic: Topic;
  onPress?: () => void;
}
export const WideTopicListItem: FunctionComponent<Props> = ({ topic, onPress }) => {
  const { deleteTopic } = useDeleteTopicMutation();

  return (
    <Container
      backgroundColor={getHexFromTopicColorId(topic.colorId)}
      onPress={onPress}
      onLongPress={() =>
        Alert.alert(
          'Deletion',
          'Are you sure you want to delete this topic? All the cards associated to this topic will be deleted as well.',
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
          ]
        )
      }
      disabled={!onPress}
    >
      <Name>{topic.name}</Name>
      <Spacer width={2} />
      <OutlinedRightArrowIcon size={12} color={colors.darkGrey} />
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ backgroundColor: string }>(
  ({ theme, backgroundColor }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.gridUnit * 2,
    paddingVertical: theme.gridUnit * 4,
    backgroundColor,
    borderRadius: 10,
  })
);

const Name = styled.Text(({ theme }) => ({
  color: theme.colors.black,
  fontWeight: 'bold',
  flex: 1,
  fontSize: 20,
}));
