import HomePage from '../pages/landing';
import styles from './App.module.css';
import './styles/fonts.css';

export function App() {
  return (
    <>
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  );
}
