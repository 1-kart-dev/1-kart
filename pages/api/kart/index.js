import db from "../../../utils/db";

export default async (req, res) => {
    try {
      const { kart_id } = req.body;
      const karts = await db.collection("karts").get();
      const kartsData = karts.docs.map((kart) => kart.data());
      if (kartsData.some((kart) => kart.kart_id === kart_id)) {
        res.status(400).end();
      } else {
        const { id } = await db.collection("karts").add({
          ...req.body,
          created: new Date().toISOString(),
        });
        res.status(200).json({ id });
      }
    } catch (e) {
      res.status(400).end();
    }
  };
