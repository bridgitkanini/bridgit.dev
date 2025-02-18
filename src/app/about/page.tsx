"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container max-w-2xl mx-auto py-8 px-4 space-y-8"
    >
      <h1 className="text-5xl font-bold gradient-text light-gradient dark:dark-gradient">
        Hello, my name is Rafael Caferati.
      </h1>
      <p className="text-2xl font-medium text-foreground">
        I am an award-winning full-stack web developer and UI/UX javascript
        specialist.
      </p>
      <p className="text-xl text-muted-foreground">
        Check out my articles, React and React Native UI components at the code
        laboratory.
      </p>
    </motion.div>
  );
}
