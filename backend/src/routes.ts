import express from 'express';
import pool from './db';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/tasks', (req, res) => {
  const SelectQuery = 'SELECT id, description, status FROM todos where status != 2 order by status , id';
  pool.query(SelectQuery, (err, result) => {
    if (err) {
      console.log(err)
      res.send([])
    }
    res.send(result.rows)
    
  })
});

router.post('/addTask', (req, res) => {
  const description = req.body.description;
  console.log(description);
  pool.query('insert into todos(description) values($1);', [description], (err, result) => {
    console.log(result);
    if (err) {
      res.send(err.message);
    } else {
      res.status(200).send('Task added successfully');
    }
    
  });

});

router.put('/updateStatus/:id', async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  pool.query('UPDATE todos SET status = $1 WHERE id = $2', [status, id], (err, result) => {
    console.log(result);
    res.send('Task updated successfully');
  });

});

router.put('/updateTask/:id', async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  pool.query('UPDATE todos SET description = $1 WHERE id = $2', [description, id], (err, result) => {
    console.log(err);
    console.log(result);
    res.send('Task updated successfully');
  });

});

export default router;
