import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaSlack } from 'react-icons/fa'
import { Card } from '../Cards'
import { DedicatedAvailability } from '../Availability'

export default function SlackCard({ name }) {
  const { t } = useTranslation()
  const lowerCase = name.toLowerCase()

  return (
    <Card title={t('providers.slack')} nameList={[lowerCase]}>
      {(name) => (
        <DedicatedAvailability
          name={name}
          service="slack"
          link={`https://${name}.slack.com`}
          suffix=".slack.com"
          icon={<FaSlack />}
        />
      )}
    </Card>
  )
}
