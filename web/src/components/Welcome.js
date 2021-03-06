import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { FaMapSigns } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { IoIosBeer } from 'react-icons/io'
import { DiRust } from 'react-icons/di'
import { FaJsSquare } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaSlack } from 'react-icons/fa'
import { FaGem } from 'react-icons/fa'

import { mobile } from '../util/css'

export default function Welcome() {
  const { t } = useTranslation()

  return (
    <Container>
      <Hero>
        <Header>{t('title')}</Header>
        <Text>{t('description')}</Text>
      </Hero>
      <List>
        <ListItem>
          <FaMapSigns /> {t('providers.domains')}
        </ListItem>
        <ListItem>
          <FaGithub /> {t('providers.github')}
        </ListItem>
        <ListItem>
          <FaNpm /> {t('providers.npm')}
        </ListItem>
        <ListItem>
          <FaPython /> {t('providers.pypi')}
        </ListItem>
        <ListItem>
          <FaGem /> {t('providers.rubygems')}
        </ListItem>
        <ListItem>
          <DiRust /> {t('providers.rust')}
        </ListItem>
        <ListItem>
          <IoIosBeer /> {t('providers.homebrew')}
        </ListItem>
        <ListItem>
          <FaJsSquare /> {t('providers.jsorg')}
        </ListItem>
        <ListItem>
          <FaAws /> {t('providers.s3')}
        </ListItem>
        <ListItem>
          <FaTwitter /> {t('providers.twitter')}
        </ListItem>
        <ListItem>
          <FaSlack /> {t('providers.slack')}
        </ListItem>
      </List>
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 40px;
  padding-right: 20vw;
  padding-left: 20vw;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.6em;

  ${mobile} {
    text-align: left;
    padding-right: 40px;
    padding-left: 40px;
    font-size: 1.2rem;
  }
`

const Header = styled.h1`
  font-size: 3.5em;
  line-height: 1em;
  padding-bottom: 30px;

  ${mobile} {
    font-size: 3em;
  }
`

const Text = styled.p`
  font-size: 1.2em;
  color: #3c3c3c;
`

const Hero = styled.div``

const List = styled.div`
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-image: linear-gradient(180deg, #ec7951 0%, #f03054 100%);
  color: white;
  border-radius: 4px;
  font-size: 1rem;

  ${mobile} {
    flex-direction: column;
  }
`

const ListItem = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1em;

  ${mobile} {
    margin: 10px 0;
  }

  svg {
    margin-right: 5px;
  }
`
