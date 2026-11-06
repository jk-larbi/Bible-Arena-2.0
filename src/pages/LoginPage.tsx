import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';

export default function LoginPage() {
  const nav = useNavigate();

  return (
    <main className="mx-auto max-w-lg p-6">
      <AuthForm onDone={() => nav('/profile')} />
    </main>
  );
}
