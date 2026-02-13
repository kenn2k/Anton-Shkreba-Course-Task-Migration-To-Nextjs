"use client";
import { io } from "socket.io-client";

export const socket = io(
  `${process.env.NEXT_PUBLIC_SOCKET_URL}/notifications`,
  {
    transports: ["websocket"],
    autoConnect: false,
    reconnection: true,
    reconnectionDelay: 1000,
  }
);
