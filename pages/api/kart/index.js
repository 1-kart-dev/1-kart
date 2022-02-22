import db from "../../../utils/db";
import {firestore} from 'firebase-admin';

export default async (req, res) => {
    try {
      const { kart_id, uid } = req.body;
      const karts = await db.collection("karts").get();
      const kartsData = karts.docs.map((kart) => kart.data());
      if (kartsData.some((kart) => kart.kart_id === kart_id)) {
        res.status(400).end();
      } else {
        const kartRef = db.collection("karts").doc();
        const {id} = kartRef;

        await kartRef.set({
          kart_id: id,
          ...req.body,
          created: new Date().toISOString(),
        });

        await db.collection("Users").doc(uid).update({
          subkarts: firestore.FieldValue.arrayUnion(kartRef),
        });
        res.status(200).json({ id });
      }
    } catch (e) {
      res.status(400).end();
    }
  };
