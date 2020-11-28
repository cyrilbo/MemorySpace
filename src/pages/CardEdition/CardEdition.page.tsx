import { EditCardForm } from '@card/components/EditCardForm/EditCardForm.component';
import { Card } from '@card/types/Card.type';
import { useCloseModalButton } from '@core/hooks/useCloseModalButton.hook';
import styled from '@core/theme/styled-components';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '@navigation/RootNavigator/RootNavigator.routes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from 'react';

type CardEditionScreenNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.CardEdition
>;

type CardEditionScreenRouteProp = RouteProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.CardEdition
>;

type Props = {
  navigation: CardEditionScreenNavigationProp;
  route: CardEditionScreenRouteProp;
};

export const CardEdition: FunctionComponent<Props> = ({ navigation, route }) => {
  const closeModal = () => navigation.goBack();
  const openSelectTopicModal = () => navigation.navigate(RootNavigatorRouteNames.TopicSelection);
  useCloseModalButton(navigation, closeModal);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [card, setCard] = useState<Card | null>(null);
  useEffect(() => {
    if (route.params?.topic) {
      setSelectedTopic(route.params.topic);
    }
    if (route.params?.card) {
      setCard(route.params.card);
    }
  }, [route.params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: card ? 'Card Edition' : 'Create a new card',
    });
  }, [navigation, card]);
  return (
    <Container>
      <EditCardForm
        openSelectTopicModal={openSelectTopicModal}
        selectedTopic={selectedTopic}
        onCardEdited={closeModal}
        card={card}
      />
    </Container>
  );
};

const Container = styled.View({ flex: 1 });
