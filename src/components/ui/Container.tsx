import styles from '../../scss/ui/Container.module.scss'

type ContainerProps = {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

export default Container