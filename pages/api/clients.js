import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, dob } = req.body;
    try {
      await addDoc(collection(db, 'clients'), {
        name,
        phone,
        dob
      });
      res.status(200).json({ message: 'Client data added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add client data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
