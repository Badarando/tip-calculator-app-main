import React from 'react';
import { Logo, Main, SectionBill, Title, SectionTip, Button, SectionAmount, SectionResult, Div, TipAmount, TipValue, Reset } from './style';

export function Home() {
  return (
    <>
      <Logo></Logo>
      <Main>
        <Title>Bill</Title>
        <SectionBill>
          <input type="text" placeholder="0"/>
        </SectionBill>
        <Title>Select Tip %</Title>
        <SectionTip>
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
          <input class="custom" type="text" placeholder="Custom" />
        </SectionTip>
        <Title>Number of People</Title>
        <SectionAmount>
        <input class="amount" type="text" placeholder="0"/>
        </SectionAmount>
        <SectionResult>
          <Div>
            <TipAmount>Tip Amount <span>/ person</span></TipAmount>
          </Div>
          <Div>
            <TipValue>$4.27</TipValue>
          </Div>
          <Div>
            <TipAmount>Total <span>/ person</span></TipAmount>
          </Div>
          <Div>
            <TipValue>$32.79</TipValue>
          </Div>
          <Reset>Reset</Reset>
        </SectionResult>
      </Main>
      
    </>
  )
}
