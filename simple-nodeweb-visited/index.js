const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
    client.get("visit", (err, visits) => {
        res.send("Visiter : " + visits);
        client.set("visits", parseInt(visits) + 1);
    });
});

app.listen(8001, () => {
    console.log("Port on 8001");
});
