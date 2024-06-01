import express from 'express';
import authRoutes from './routes/route.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
