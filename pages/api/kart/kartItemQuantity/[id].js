import { db } from "../../../../utils/firebase/firebase-admin";

export default async (req, res) => {
  try {
    const kart_id = req.query.id;
    const { item_id, item_quantity } = req.body;
    const itemRef = db.collection("items").doc(item_id);
    if (req.method === "PUT") {
      const kartRef = db.collection("karts").doc(kart_id);
      const kartDoc = await kartRef.get();
      const kartItems = kartDoc.data().items;
      const kartItem = kartItems.find((item) => {
        return item.ref.isEqual(itemRef);
      });
      kartItem.quantity = item_quantity;
      kartRef.update({
        items: kartItems,
        created: new Date().toISOString(),
      });
    }
    res.status(200).json({ kart_id, itemRef, item_quantity });
  } catch (e) {
    res.status(400).end();
  }
};
