"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppStore } from "@/src/store";

type CollapserProps = {
  width: number;
  children: React.ReactNode;
};

export default function Collapser({ width, children }: CollapserProps) {
  const { visible } = useAppStore((state) => ({
    visible: state.sidebarVisible,
  }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="h-screen flex flex-col items-end justify-stretch"
          animate={{ width: width }}
          exit={{ width: 0 }}
          style={{ width: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
