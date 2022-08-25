import React from 'react';
import { Logo, Main, SectionBill, Title, SectionTip, Button } from './style';

export function Home() {
  return (
    <>
      <Logo></Logo>
      <Main>
        <Title>Bill</Title>
        <SectionBill>
          <input type="text" placeholder="0"/>
        </SectionBill>
        <Title>Select Tip%</Title>
        <SectionTip>
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
        </SectionTip>
      </Main>
      
    </>
  )
}
