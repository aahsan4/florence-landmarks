import express from 'express';
import landmarks from '../data/landmarks.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(landmarks);
});

router.get('/:slug', (req, res) => {
  const landmark = landmarks.find(l => l.slug === req.params.slug);
  if (!landmark) {
    return res.status(404).json({ error: 'Landmark not found' });
  }
  res.json(landmark);
});

export default router;