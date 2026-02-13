"use client";

import { initSocket } from "@/socket/initSocket";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initSocket(dispatch);
  }, [dispatch]);

  return <>{children}</>;
}
