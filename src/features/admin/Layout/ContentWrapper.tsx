import React from "react";
import { Head } from "../../../vibe/components/Head";
import { AnimatePresence, motion } from "framer-motion";

const ContentWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 1000 }}
        className="p-4"
      >
        <Head title={title} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentWrapper;
