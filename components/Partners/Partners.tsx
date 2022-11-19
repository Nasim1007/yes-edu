import classes from './Partners.module.scss'
import Wrapper from '../UI/Wrapper/Wrapper'
import H3 from '../UI/Typography/H3/H3'
import H2 from '../UI/Typography/H2/H2'
import { IPartner } from '../../models/IPartner'
import Image from 'next/image'

interface PartnersProps {
  partnerList: IPartner[]
}

function Partners({partnerList}: PartnersProps) {

  if (!partnerList) return null

  return (
    <Wrapper tagName="section" className={classes.Section}>
      <H3 tagName="h2">Партнеры</H3>
      <H2 tagName="h3">Кто с нами работает</H2>

      <ul className={classes.List}>
        {partnerList.map(({id, name, logo}) => (
          <li key={id} className={classes.Item}>
            <Image
              src={logo}
              alt={name}
              className={classes.Logo}
              width={144}
              height={144}
              title={name}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Partners