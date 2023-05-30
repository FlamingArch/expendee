import { motion, AnimatePresence } from "framer-motion";
import AppBar from "./AppBar";
import { Button } from ".";
import { IconClose } from "./Icons";
import { ModalSheetProps } from "../types/modalSheet";

export default function ModalSheet({
  visible,
  onClose,
  title,
  children,
  actions,
}: ModalSheetProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          style={{ opacity: 0, y: -200 }}
          className="grid place-content-center inset-0 p-4 fixed backdrop-blur-sm"
        >
          <div className="rounded-xl backdrop-blur-xl bg-page dark:bg-page-dark bg-opacity-70 dark:bg-opacity-70 shadow-2xl w-[50vmin] h-[50vmin] overflow-scroll">
            <AppBar
              sticky
              padding={{
                top: 8,
                bottom: 4,
                left: 8,
                right: 8,
              }}
              heading={title}
              actions={actions}
              leading={
                onClose && (
                  <Button
                    buttonStyle="action"
                    onClick={onClose}
                    Icon={IconClose}
                  />
                )
              }
            />
            <div className="flex flex-col p-10 pt-0 mb-20 gap-4 h-full">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
