import WebSocket from "ws"
import express from "express"

const app = express()
const httpServer = app.listen(3003)

const wss = new WebSocket.Server({ server: httpServer });

wss.on('connection', (socket: WebSocket) => {
    socket.on('error', console.error);

    socket.on('message',function message(data,isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                 client.send(data, { binary: isBinary });
            }
        })
    })
    console.log(`The number of users connected `,socket.listenerCount)
    socket.send('Hello! Message From Server!!');
});