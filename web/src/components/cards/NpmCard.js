import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaNpm } from 'react-icons/fa'
import { Card } from '../Cards'
import { DedicatedAvailability } from '../Availability'

export default function NpmCard({ name }) {
  const { t } = useTranslation()
  const lowerCase = name.toLowerCase()

  return (
    <Card
      title={t('providers.npm')}
      nameList={[lowerCase]}
      alternativeList={[`${lowerCase}-js`]}>
      {(name) => (
        <>
          <DedicatedAvailability
            name={name}
            service="npm"
            link={`https://www.npmjs.com/package/${name}`}
            icon={<FaNpm />}
          />
          <DedicatedAvailability
            name={name}
            service="npm-org"
            link={`https://www.npmjs.com/org/${name}`}
            prefix="@"
            suffix=" (Organization)"
            icon={<FaNpm />}
          />
        </>
      )}
    </Card>
  )
}
