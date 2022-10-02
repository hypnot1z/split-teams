import styles from './Button.module.css'

function Button(props) {
  const { children } = props
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  )
}

export default Button
