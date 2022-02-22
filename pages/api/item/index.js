import db from "../../../utils/db";

export default async (req, res) => {
  try {
    const { item_id } = req.body;
    const items = await db.collection("items").get();
    const itemsData = items.docs.map((item) => item.data());

    if (itemsData.some((item) => item.item_id === item_id)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("items").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};