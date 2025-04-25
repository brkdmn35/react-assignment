import styles from './elements.module.css';

const Description = ({ children, className }: {
    children: React.ReactNode
    className?: string
}) => {

    return <p className={`${styles.description} ${className ? className : ''}`}>
        {children}
    </p>
}

export default Description;