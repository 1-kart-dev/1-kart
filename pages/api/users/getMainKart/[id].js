import { db } from "../../../../utils/firebase/firebase-admin";

export default async (req, res) => {
  const { id } = req.query;
  try {
    if (req.method === "GET") {
        const doc = await db.collection("Users").doc(id).get();
        if (!doc.exists) {
            res.status(404).end();
          } else {
            const kartRefs = doc.data().subkarts;
            const kartData = await Promise.all(kartRefs.map(async (kartRef) => {
              const kartDoc = await kartRef.get();
              return kartDoc.data();
            }))
            res.status(200).json(kartData[0]);
        }
    } 
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};