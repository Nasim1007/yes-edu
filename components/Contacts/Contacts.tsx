import Wrapper from '../../components/UI/Wrapper/Wrapper'
import classes from './Contacts.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

const Contacts = () => {
  return (
    <Wrapper className={classes.Wrapper} tagName="section">
      <h2 className={classes.Hidden}>Наши контакты</h2>
      <div className={classes.Contacts}>
        <ul className={classes.List}>
          <li className={classes.Item}>
            <div className={clsx(classes.Link, classes.Contact)}>
              <h3 className={classes.Title}>Контакты</h3>
              <span className={classes.Info}>
                <a href="tel:+992988780909">
                988-78-09-09
              </a>
              <a href="tel: (48) 702-09-09">
              (48) 702-09-09
              </a>
              <a href="mailto:yes.edu.tj@gmail.com">
              yes.edu.tj@gmail.com
              </a>
              </span>

            </div>
          </li>
          <li className={classes.Item}>
            <Link href="https://goo.gl/maps/SEqsPN74oDD3rQU77" target="_blank" className={clsx(classes.Link, classes.Address)}>
              <h3 className={classes.Title}>Адрес</h3>
              <span className={classes.Info}>Душанбе<br/> Айни 24А</span>
            </Link>
          </li>
          <li className={classes.Item}>
            <div className={clsx(classes.Link, classes.Orient)}>
              <h3 className={classes.Title}>Ориентир</h3>
              <span className={classes.Info}>Садбарг, здание<br/> Точиксодиродбанк</span>
            </div>
          </li>
          <li className={classes.Item}>
            <Link href="https://instagram.com/yes.edu.tj?igshid=ZDdkNTZiNTM=" target="_blank" className={clsx(classes.Link, classes.Instagram)}>
              <h3 className={classes.Title}>Инстаграм</h3>
              <span className={classes.Info}>Подпишитесь и <br/>будьте в курсе всех новостей</span>
            </Link>
          </li>
          <li className={classes.Item}>

            <Link href="https://t.me/yesedutj" target="_blank" className={clsx(classes.Link, classes.Telegram)}>
              <h3 className={classes.Title}>Telegram</h3>
              <span className={classes.Info}>Напшите нам!</span>
            </Link>
          </li>
          <li className={classes.Item}>

            <Link href="/" className={clsx(classes.Link, classes.Facebook)}>
              <h3 className={classes.Title}>Facebook</h3>
              <span className={classes.Info}>Подпишитесь и <br/>будьте в курсе всех новостей</span>
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
export default Contacts