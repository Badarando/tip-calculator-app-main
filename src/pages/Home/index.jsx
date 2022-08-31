import React, { useState} from 'react';
import { Logo, Main, SectionBill, Title, SectionTip, Button, SectionAmount, SectionResult, Div, TipAmount, TipValue, Reset, SectionData, SectionDataResult } from './style';

export function Home() {
  // let billValue = '';
  // let numPeople = '';
  // let numCustom = '';

  // function bill(value) {
  //   billValue = value;
  //   console.log(billValue);
  // }

  // function people(value) {
  //   numPeople = value;
  //   console.log(numPeople);
  // }

  // function custom(value) {
  //   numCustom = value;
  //   console.log(numCustom);
  // }
  // const [billValue, setBillValue] = useState()
  // const [people, setPeople] = useState()
  // const [custom, setCustom] = useState()

  // const [total = billValue / people , setTotal] = useState()

  return (
    <>
      <Logo></Logo>
      <Main>
        <SectionData>
          <Title>Bill</Title>
          <SectionBill>
                <input type="text" placeholder="0" onChange={ e => setBillValue(e.target.value)}/>
          </SectionBill>
          <Title>Select Tip %</Title>
          <SectionTip>
            <Button>5%</Button>
            <Button>10%</Button>
            <Button>15%</Button>
            <Button>25%</Button>
            <Button>50%</Button>
            <input class="custom" type="text" placeholder="Custom" onChange={e => setCustom(e.target.value)}/>
          </SectionTip>
          <Title>Number of People</Title>
          <SectionAmount>
          <input class="amount" type="text" placeholder="0" onChange={ e => setPeople(e.target.value)}/>
          </SectionAmount>
        </SectionData>
        <SectionDataResult>
          <SectionResult>
            <Div>
              <TipAmount>Tip Amount <span>/ person</span></TipAmount>
            </Div>
            <Div>
              <TipValue>$</TipValue>
            </Div>
            <Div>
              <TipAmount>Total <span>/ person</span></TipAmount>
            </Div>
            <Div>
              <TipValue>$32.79</TipValue>
            </Div>
            <Reset>Reset</Reset>
          </SectionResult>
        </SectionDataResult>
      </Main> 
    </>
  )
}
