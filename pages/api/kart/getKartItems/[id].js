import { db } from "../../../../utils/firebase/firebase-admin";

export default async (req, res) => {
  const { id } = req.query;
  try {
    if (req.method === "GET") {
        const doc = await db.collection("karts").doc(id).get();
        if (!doc.exists) {
            res.status(404).end();
          } else {
            const itemArray = doc.data().items;
            const itemData = await Promise.all(itemArray.map(async (item) => {
              const itemDoc = await item.ref.get();
              const itemData = {
                  quantity: item.quantity,
                  ...itemDoc.data(),
              }
              return itemData;
            }))
            res.status(200).json(itemData);
        }
    } 
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};