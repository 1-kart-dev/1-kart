import { db } from "../../../../utils/firebase/firebase-admin";
import { firestore } from "firebase-admin";

export default async (req, res) => {
  try {
    const kart_id = req.query.id;
    console.log(req.query);
    const { item_id, item_quantity } = req.body;
    const itemRef = db.collection("items").doc(item_id);
    if (req.method === "PUT") {
      await db
        .collection("karts")
        .doc(kart_id)
        .update({
          items: firestore.FieldValue.arrayUnion({
            ref: itemRef,
            quantity: item_quantity == null ? 1 : item_quantity,
          }),
          updated: new Date().toISOString(),
        });
    } else if (req.method === "DELETE") {
      await db
        .collection("karts")
        .doc(kart_id)
        .update({
          items: firestore.FieldValue.arrayRemove({
            ref: itemRef,
            quantity: item_quantity,
          }),
          updated: new Date().toISOString(),
        });
    }
    res.status(200).json({ kart_id });
  } catch (e) {
    res.status(400).end();
  }
};
