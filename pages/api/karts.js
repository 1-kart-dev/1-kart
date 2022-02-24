import { db } from "../../utils/firebase/firebase-admin";

export default async (req, res) => {
  try {
    const karts = await db.collection("karts").orderBy("created").get();
    const kartsData = karts.docs.map((kart) => ({
      kart_id: kart.id,
      ...kart.data(),
    }));
    res.status(200).json({ kartsData });
  } catch (e) {
    res.status(400).end();
  }
};
