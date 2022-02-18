import db from "../../../utils/db";

export default async (req, res) => {
  try {
    const { user_id } = req.body;
    const users = await db.collection("users").get();
    const usersData = users.docs.map((user) => user.data());

    if (usersData.some((user) => user.user_id === user_id)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("users").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};
