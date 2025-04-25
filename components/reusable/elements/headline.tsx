import styles from './elements.module.css';

const Headline = ({ children, className }: {
    children: React.ReactNode
    className?: string
}) => {

    return <h2 className={`${styles.headline} ${className ? className : ''}`}>
        {children}
    </h2>
}

export default Headline;