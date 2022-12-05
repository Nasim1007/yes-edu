import classes from "./Advantages.module.scss"
import Wrapper from "../../UI/Wrapper/Wrapper"
import clsx from 'clsx'
import Link from 'next/link'

const Advantages = () => {
  return (
    <Wrapper className={classes.Wrapper} tagName="section">
      <h2 className={classes.Hidden}> Наши контакты</h2>
      <div className={classes.Contacts}>
        <ul className={classes.List}>
          <li className={classes.Item}>
            <div className={clsx(classes.Link, classes.Salary)}>
              <h3 className={classes.Title}>Зарплата</h3>
              <span className={classes.Info}>Выплата вовремя и <br/>без задержек</span>
            </div>
          </li>
          <li className={classes.Item}>
            <div className={clsx(classes.Link, classes.Work)}>
              <h3 className={classes.Title}>График работы</h3>
              <span className={classes.Info}>Индивидуальный для<br/> каждого учителя</span>
            </div>
          </li>
          <li className={classes.Item}>
            <div className={clsx(classes.Link, classes.United)}>
              <h3 className={classes.Title}>Коллектив</h3>
              <span className={classes.Info}>Дружелюбный и  <br/>приветливый</span>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
export default Advantages