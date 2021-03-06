import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import axios from 'axios';
// import testData from '../../database/testData.json';

export default function ModalOthersCard({setIsClicked, cardId, url}) {
  const [AllPost, setAllPost] = useState([])
  const fetchGETpost = async() => {
    const res = await axios.get(`${url}/post`);
    res.data.map((post) => {
      return setAllPost((prev) => [...prev, post])
    })
  }
  useEffect(() => {
    fetchGETpost();
  }, [])

  const modalCloseSec = (e) => {
    if (e.target.tagName === 'ARTICLE' || e.target.tagName === 'BUTTON') {
      setIsClicked((prev) => !prev); 
    }
  }

  return (
    AllPost.map((data) => {
      if (data.id === +cardId) {
        return (
          <SecModalShareCard key={data.id} onClick={modalCloseSec}>
            <WrapShare>
              <WrapColorBox readOnly value={data.content}></WrapColorBox>
              <WrapTxt>
                <TxtTitle>{data.topic}</TxtTitle>
                <BtnClose>
                  X<TxtHide>글 상세보기창 닫기</TxtHide>
                </BtnClose>
              </WrapTxt>
            </WrapShare>
          </SecModalShareCard>
        )
      }
    })
  )
}

const SecModalShareCard = styled.article`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
`
const WrapShare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px #00000050;
  border-radius: 10px;
  width:90vw;
  height: 53vh;
  padding: 2vw;
  font-family: ${theme.font.basic_font};
  background-color: ${theme.color.mellow};
  list-style: none;
`
const WrapColorBox = styled.textarea`
  border: 1px solid ${theme.color.camel};
  border-radius: 10px;
  width: 100%;
  height: 40vh;
  margin-bottom: 10px;
  padding: 10px;
  line-height: 1.7rem;
  font-size: 1rem;
  font-family: ${theme.font.basic_font};
  background-color: ${theme.color.pantone};
  overflow-y: scroll;
  resize: none;
  cursor: default;
`
const WrapTxt = styled.div`
  width: 100%;
  padding: 7px 4px;
  text-align: left;
`
const TxtTitle = styled.strong`
  width: 85%;
  margin-bottom: 3px;
  line-height: 1.3rem;
  font-size: 1.1rem;
  font-weight: 700;
`
const BtnClose = styled.button`
  position: absolute;
  right: 2vw;
  bottom: 10px;
  box-shadow: 2px 1px 5px 1px #00000050;
  border-radius: 100%;
  padding: 4px 7px;
  background-color: ${theme.color.camel};
  cursor: pointer;
`
const TxtHide = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`