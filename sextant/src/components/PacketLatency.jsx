import { useState, useEffect } from "react";

const PacketLatency = () => {
    const [packetLatency, setPacketLatency] = useState('');
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:55455");
        ws.addEventListener("open", (data) => {
            console.log("open for connections!");
        })

        ws.addEventListener("message", (message) => {
            const messageReceivedTime = message.data;
            //console.log(messageReceivedTime);
            const epochNow = new Date().getTime()
            //console.log(epochNow);
            const latency = epochNow - messageReceivedTime;
            setPacketLatency(latency);
        })
    }, []) // no dependancy array, constant refresh
    return (
        <div>
            <p id="epoch-p">{ packetLatency }s</p>
        </div>
    )
}

export default PacketLatency;