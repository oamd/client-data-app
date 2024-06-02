import Head from 'next/head';
import Auth from '../components/Auth';
import ClientForm from '../components/ClientForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Head>
        <title>Client Data App</title>
      </Head>
      <main>
        {user ? (
          <div>
            <ClientForm />
            <button onClick={() => auth.signOut()}>Sign Out</button>
          </div>
        ) : (
          <Auth />
        )}
      </main>
    </div>
  );
}
