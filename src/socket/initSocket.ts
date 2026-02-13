"use client";
import { AppDispatch } from "@/store/store";
import { socket } from "./socket";
import { addExhibit } from "@/store/slices/exhibitSlice";

export const initSocket = (dispatch: AppDispatch) => {
  socket.connect();

  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  socket.on("connect_error", (err) => {
    console.error("Socket error:", err.message);
  });

  socket.on("newPost", (post) => {
    dispatch(addExhibit(post));
  });
};
