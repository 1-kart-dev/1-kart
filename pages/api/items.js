import { db } from "../../utils/firebase/firebase-admin";

export default async (req, res) => {
  try {
    const items = await db.collection("items").orderBy("created").get();
    const itemsData = items.docs.map((item) => ({
      item_id: item.id,
      ...item.data(),
    }));
    res.status(200).json({ itemsData });
  } catch (e) {
    res.status(400).end();
  }
};
