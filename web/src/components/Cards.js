import React, { useState } from 'react'
import styled from 'styled-components'

import { AvailabilityContainer } from './Availability'
import { mobile } from '../util/css'

export function Card({ title, nameList = [], alternativeList = [], children }) {
  const [revealAlternatives, setRevealAlternatives] = useState(false)

  function onClick() {
    setRevealAlternatives(true)
  }

  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardList>
        {nameList.map((name) => (
          <AvailabilityContainer key={name}>
            {children(name)}
          </AvailabilityContainer>
        ))}
        {revealAlternatives &&
          alternativeList.map((name) => (
            <AvailabilityContainer key={name}>
              {children(name)}
            </AvailabilityContainer>
          ))}
        {alternativeList.length > 0 && !revealAlternatives ? (
          <ShowAlternativesButton onClick={onClick}>
            show more
          </ShowAlternativesButton>
        ) : null}
      </CardList>
    </CardWrapper>
  )
}

export const Cards = styled.div``

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  ${mobile} {
    flex-direction: column;
  }
`

const CardWrapper = styled.div`
  padding: 40px;

  ${mobile} {
    margin-bottom: 40px;
    padding: 0px;
  }
`

const CardTitle = styled.div`
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: bold;

  ${mobile} {
    padding-left: 20px;
  }
`

const CardList = styled.div`
  border-radius: 2px;

  ${mobile} {
    padding: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 0;
  }
`

const ShowAlternativesButton = styled.div`
  margin-top: 5px;
  display: inline-block;
  padding: 5px 0;
  border: none;
  border-bottom: 1px dashed black;
  cursor: pointer;
  font-family: monospace;
  font-size: 0.8em;
`
