import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());  // Make sure to use this middleware to parse JSON body

app.post('/api/reservations', async (req, res) => {
  try {
    const reservation = await prisma.reservation.create({
      data: {
        time: req.body.time,
        duration_in_minutes: req.body.duration_in_minutes,
        number_of_people: req.body.number_of_people,
        waiter_id: req.body.waiter_id,
        status: req.body.status,
        comment: req.body.comment,
        customer_name: req.body.customer_name,
        customer_phone_number: req.body.customer_phone_number,
      },
    });
    res.status(201).json(reservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(5005, () => {
  console.log('Server is running on http://localhost:5005');
});
