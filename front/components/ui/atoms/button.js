import Link from 'next/link';
import IconComponent from './iconComponent';

import styles from './button.module.scss';

export default function Button({ title, href, type, iconName, iconColor, iconRight, clickFn, style }) {
  const button = 
    <a className={`${styles.btn} ${styles[type]} ${iconRight && styles.iconRight}`} onClick={clickFn ? () => clickFn() : null} style={style}>
      {!iconRight &&  iconName ? <IconComponent name={iconName} color={iconColor}/> : null}
      {title ? title : null}
      {iconRight &&  iconName ? <IconComponent name={iconName} color={iconColor}/> : null }
    </a>

  return (
    href ? <Link href={href}>{button}</Link> : button
  )
}
