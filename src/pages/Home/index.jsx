import React, { useState, useEffect } from 'react';
import { Logo, Main, SectionBill, Title, SectionTip, Button, SectionAmount, SectionResult, Div, TipAmount, TipValue, Reset, SectionData, SectionDataResult } from './style';

export function Home() {
  
  const [bill, setBill] = useState()
  const [people, setPeople] = useState()
  const [total, setTotal] = useState(() => {
    return 0
  })

  useEffect(() => {
    if(bill != null && people != null){
      setTotal(bill / people)
    }
  }, [bill, people])
  
  console.log(bill, people, total)

  return (
    <>
      <Logo></Logo>
      <Main>
        <SectionData>
          <Title>Bill</Title>
          <SectionBill>
                <input type="text" placeholder="0" onChange={ e => setBill(e.target.value)} value={bill}/>
          </SectionBill>
          <Title>Select Tip %</Title>
          <SectionTip>
            <Button>5%</Button>
            <Button>10%</Button>
            <Button>15%</Button>
            <Button>25%</Button>
            <Button>50%</Button>
            <input class="custom" type="text" placeholder="Custom" onChange={e => custom(e.target.value)}/>
          </SectionTip>
          <Title>Number of People</Title>
          <SectionAmount>
          <input class="amount" type="text" placeholder="0" onChange={ e => setPeople(e.target.value)}  value={people}/>
          </SectionAmount>
        </SectionData>
        <SectionDataResult>
          <SectionResult>
            <Div>
              <TipAmount>Tip Amount <span>/ person</span></TipAmount>
            </Div>
            <Div>
              <TipValue>${total}</TipValue>
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
