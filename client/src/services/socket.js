
import io from "socket.io-client";
import React from "react";

//export const socket = io.connect("http://192.168.4.1:7000");
export const socket = io.connect("http://localhost:7000");
export const SocketContext = React.createContext();




