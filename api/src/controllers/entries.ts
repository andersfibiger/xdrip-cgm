import { Router } from 'express';
import { Entry } from '../models/entry';
import { EntryService } from '../services/entryService';

const router = Router();

router.post('/entries', async (req, res) => {
  console.log(req.body);
  const entry = req.body as Entry;

  await new EntryService().create(entry);
  res.sendStatus(200);
});

export default router;