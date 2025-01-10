require('dotenv').config({path:'../.env'});
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const OpenAI = require("openai");



const app = express();
app.use(express.json());
app.use(cors());


// Data Base

// const db= mysql.createConnection({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME
// });

// app.get('/test',(req,res)=> {
//     const sql = "Select * FROM test";
//     db.query(sql,(err,data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     });
// });



// Assistant API

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

app.post("/ask", async (req, res) => {
    const { query } = req.body; // Get the user's query from the request body

    if (!query) {
        return res.status(400).json({ error: "Query is required" });
    }

    try {
        // Create a thread
        const thread = await openai.beta.threads.create();

        // Send user query to OpenAI
        const message = await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: query,
        });

        // Run the assistant with specific instructions
        const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
            assistant_id: "asst_f4mvI44aMJgf2gK6DQSSsYET",
        });

        if (run.status === "completed") {
            // Fetch the messages from the thread
            const messages = await openai.beta.threads.messages.list(run.thread_id);

            // Collect responses from the assistant
            const responses = messages.data
                .reverse()
                .map((message) => `${message.role} > ${message.content[0].text.value}`);

            return res.json({ responses });
        } else {
            return res.status(200).json({ status: run.status });
        }
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return res.status(500).json({ error: "Failed to process the query" });
    }
});


// Testing

app.get("/",(re,res)=> {
    return res.json("From backend side");
});

app.listen(4000,()=>{
    console.log("listening");
});
