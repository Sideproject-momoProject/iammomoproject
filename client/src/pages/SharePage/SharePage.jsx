import React, { useState } from 'react';
import styled from 'styled-components';
import ModalOthersCard from '../../components/Modal/ModalOthersCard';
import ShareDate from '../../components/SharePage/ShareDate';
import ShareQuestion from '../../components/SharePage/ShareQuestion';
import theme from '../../theme';

export default function SharePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [cardId, setCardId] = useState();
  const url = 'http://52.79.45.37:8080/api';
  const userId = localStorage.getItem('userId');

  return (
    <WrapMain>
      <ShareDate setIsClicked={setIsClicked} setCardId={setCardId} userId={userId} url={url} />
      <ShareQuestion setIsClicked={setIsClicked} setCardId={setCardId} userId={userId} url={url} />
      {isClicked ? <ModalOthersCard setIsClicked={setIsClicked} cardId={cardId} url={url} /> : ''}
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.pantone};
`