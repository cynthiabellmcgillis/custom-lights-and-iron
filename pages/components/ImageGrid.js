import React from "react";
import {motion, MotionConfig} from "framer-motion";

const images = ['drivegate1.jpeg','drivegate2.jpeg'];



function ImageGrid() {
  
  return (
    <div className="img-grid">
      {images &&
        images.map((image,i) => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            className="img-wrap"
            key={i}
          >
            <motion.img
              src={`images/${image}`}
              alt="uploadded pic"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;