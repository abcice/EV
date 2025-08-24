import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/auth/LoginForm/LoginForm';
import SignUpForm from '../../components/auth/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}