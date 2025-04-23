import styles from './elements.module.css';

const LightButton = ({ children, className, onClick }: {
    children: React.ReactNode
    className?: string,
    onClick?: () => void,
}) => {

    return <button className={`${styles.lightButton} ${className ? className : ''}`} onClick={() => {onClick && onClick()}}>
        {children}
    </button>
}

export default LightButton;