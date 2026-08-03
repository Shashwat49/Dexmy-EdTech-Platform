import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import config from '../config';

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
    const socketRef = useRef(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        socketRef.current = io(config.socketUrl, { autoConnect: false });

        socketRef.current.on('connect', () => setConnected(true));
        socketRef.current.on('disconnect', () => setConnected(false));

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const connect = () => socketRef.current?.connect();
    const disconnect = () => socketRef.current?.disconnect();
    const emit = (event, data) => socketRef.current?.emit(event, data);
    const on = (event, cb) => socketRef.current?.on(event, cb);
    const off = (event) => socketRef.current?.off(event);

    return (
        <SocketContext.Provider value={{ connected, connect, disconnect, emit, on, off }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketContext = () => {
    const ctx = useContext(SocketContext);
    if (!ctx) throw new Error('useSocketContext must be used within SocketProvider');
    return ctx;
};

export default SocketContext;
