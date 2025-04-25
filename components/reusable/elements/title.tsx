import styles from './elements.module.css';

const Title = ({ children, className }: {
    children: React.ReactNode
    className?: string
}) => {

    return <p className={`${styles.title} ${className ? className : ''}`}>
        {children}
    </p>
}

export default Title;