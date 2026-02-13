"use client";

import dynamic from "next/dynamic";

const ControlBar = dynamic(
  () => import("@/components/UI/ControlBar").then((m) => m.ControlBar),
  { ssr: false }
);

export default ControlBar;
