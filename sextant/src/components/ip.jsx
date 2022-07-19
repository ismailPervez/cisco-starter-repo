import { useState, useEffect } from 'react';

const Ip = ({ ipv = 4 }) => {
    const [ipAddr, setIpAddr] = useState('');

    useEffect(() => {
        if (ipv === 4) {
            fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                setIpAddr(data.ip);
            })
        }

        else if (ipv === 6) {
            // can't reach an endpoint to target IPV6
            // ipify package causes errors
            fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                setIpAddr(data.ip);
            })
        }
    }, [ipv]) // component on mount
    return (
        <div>
            <p>ismailpervez's Public IP: { ipAddr }</p>
        </div>
    )
}

export default Ip;