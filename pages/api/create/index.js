export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({"text": "create"})
    } else if (req.method === 'POST') {te
        res.status(200).json({text: 'posted'})
    }
}