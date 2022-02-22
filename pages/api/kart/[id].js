import db from "../../../utils/db";
import {firestore} from 'firebase-admin';

export default async (req, res) => {
    const { id } = req.query;
    const { uid } = req.body
    try {
      if (req.method === "PUT") {
        await db
          .collection("karts")
          .doc(id)
          .update({
            ...req.body,
            updated: new Date().toISOString(),
          });
      } else if (req.method === "GET") {
        const doc = await db.collection("karts").doc(id).get();
        if (!doc.exists) {
          res.status(404).end();
        } else {
          res.status(200).json(doc.data());
        }
      } else if (req.method === "DELETE") {
        const kartRef = db.collection("karts").doc(id)
        await db.collection("Users").doc(uid).update({
            subkarts: firestore.FieldValue.arrayRemove(kartRef),
            updated: new Date().toISOString(),
        })
        await kartRef.delete();
      }
      res.status(200).end();
    } catch (e) {
      res.status(400).end();
    }
  };