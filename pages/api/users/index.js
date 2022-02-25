import { db } from "../../../utils/firebase/firebase-admin";
import {firestore} from 'firebase-admin';

export default async (req, res) => {
  try {
    const { uid } = req.body;
    const users = await db.collection("Users").get();
    const usersData = users.docs.map((user) => user.data());

    if (usersData.some((user) => user.uid === uid)) {
      res.status(400).end();
    } else {    
      const kartRef = db.collection("karts").doc();
      const {id} = kartRef;

      await kartRef.set({
        kart_id: id,
        kart_name: "Kart",
        items: [],
        uid: uid,
        created: new Date().toISOString(),
      });

      await db.collection("Users").doc(uid).set({
        ...req.body,
        subkarts: [kartRef],
        created: new Date().toISOString(),
      });

      res.status(200).json({ uid });
    }
  } catch (e) {
    res.status(400).end();
  }
};
