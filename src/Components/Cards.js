import { useState, useRef } from "react";
import Card from "./Card";
import styled from "styled-components";
import cardList from "./CardList";


export default function Cards() {
  const [cards, setCards] = useState(cardList);


  const [previousCardState, setPreviousCardState] = useState(-1)
  const previousIndex = useRef(-1)

  const matchCheck = (currentCard) => {
    if(cards[currentCard].id === cards[previousCardState].id){
      cards[previousCardState].status = 'active matched'
      cards[currentCard].status = 'active matched'
      setPreviousCardState(-1);
    }else{
      cards[currentCard].status = 'active'
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1)
        cards[currentCard].status = 'unmatch'
        cards[previousCardState].status = 'unmatch'
        setCards([...cards])
    }, 1000);
    }
  }

    const clickHandler = (index) => {
        
        if(index !== previousIndex.current){
            if(cards[index].status === 'active matched'){
                alert('already matched')
            }else{
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
          alert('card currently selected');
        }

    }

  return (
    <Container>
      {cards.map((card, index) => {
        return(
            <Card card={card} key={index} index={index} clickHandler={clickHandler}/>
        )
      })}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  max-width: 18rem;
  height: 18rem;
  display: grid;
  top: 50px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.3rem;
  padding-top: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;


  @media only screen and (max-width: 480px)  {
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5px;
    left: 15px;
    display: grid;
    grid-template-columns: repeat(2, 120px);
    grid-template-rows: repeat(2, 1fr);
}
`;
