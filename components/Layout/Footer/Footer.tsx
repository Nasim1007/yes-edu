import Wrapper from '../../UI/Wrapper/Wrapper'
import classes from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={classes.Footer}>
      <Wrapper className={classes.Wrapper}>
        <Link href="/">
          <Image
            className={classes.Logo}
            src="/assets/img/logo.png"
            alt="Yes Edu"
            width={104}
            height={84}
          />
        </Link>
        <ul className={classes.Menu}>
          <li className={classes.Item}>
            <Link className={classes.Link} href="/courses">
              Наши курсы
            </Link>
          </li>
          <li className={classes.Item}>
            <Link className={classes.Link} href="/about">
              О нас
            </Link>
          </li>
          <li className={classes.Item}>
            <Link className={classes.Link} href="/">
              Главная страница
            </Link>
          </li>
          <li className={classes.Item}>
            <Link className={classes.Link} href="/vacancies">
              Вакансии
            </Link>
          </li>
        </ul>
        <ul className={classes.Social}>
          <li className={classes.SocialItem}>
            <a href="https://instagram.com/yes.edu.tj?igshid=ZDdkNTZiNTM=" target="_blank" title="Instagram">
              <img
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={classes.SocialItem}>
            <a href="https://t.me/yesedutj" target="_blank" title="Telegram">
              <img
                src="/assets/icons/telegram.svg"
                alt="Telegram"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={classes.SocialItem}>
            <a href="#" title="Facebook">
              <img
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </a>
          </li>
        </ul>
      </Wrapper>
    </footer>
  )
}

export default Footer