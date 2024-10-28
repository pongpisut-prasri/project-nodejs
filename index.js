const express = require('express');
const app = express();
require('dotenv').config
const employeeRoutes = require('./routes/employee-routes');
const { mongoConnection } = require('./utils/database_connection');

const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send('success');
});

app.use("/employee", employeeRoutes);

const startServer = async () => {
    try {
        await mongoConnection();

        app.listen(process.env.NODE_PORT, () => {
            console.log("Server started at http://localhost:3000");
        });
    } catch (error) {
        console.error("Failed to start the server due to database connection error:", error);
    }
};

startServer();
