const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User list for the world');
});

router.get('/:id', (req, res) => {
    res.send(`User ${req.params.id}`);
});

router.post('/adduser', async (req, res) => {
    try{
        const { usercollection } = req.dbConnection;
        console.log(usercollection)
        const user = req.body; // User data from the request body
        console.log(user)
        const result = await usercollection.insertOne(user, function(err, res) {
            if (err) console.log('Error: We should see this', err);
            console.log("1 document inserted");
            db.close();
        });
        res.status(201).send(`User created with ID: ${result.insertedId}`);    
    } catch(e){
        console.error('Error in inserting user:',e);
        res.status(500).send('Error inserting user');
    } 
});

module.exports = router;