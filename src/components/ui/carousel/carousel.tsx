"use client";
import { useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import styles from "./carousel.module.css";

export type CarouselItem = {
  image: string;
  alt: string;
};

export type CarouselProps = {
  items: CarouselItem[];
  actions?: "below" | "inside";
  showThumbnails?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  showThumbnails,
  actions = "inside",
}) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = imageCount;

  const swipeToImage = (swipeDirection: 1 | -1) => {
    let newImage = imageCount + swipeDirection;

    if (newImage < 0) newImage = items.length - 1;
    else if (newImage >= items.length) newImage = 0;

    setImageCount([newImage, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection: number | null = null;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    if (!changeDirection) setImageCount([imageId, changeDirection!]);
  };

  return (
    <>
      <div className={styles["slider-container"]}>
        <div className={styles.slider}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${items[activeImageIndex].image})`,
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className={styles.image}
            />
          </AnimatePresence>
          <button
            className={clsx(styles.action, styles.left)}
            onClick={() => swipeToImage(-1)}
          >
            <ChevronLeft />
          </button>
          <button
            className={clsx(styles.action, styles.right)}
            onClick={() => swipeToImage(1)}
          >
            <ChevronRight />
          </button>
        </div>

        {actions === "below" && (
          <div className="w-full mt-4 flex flex-cols justify-around">
            <Button onClick={() => swipeToImage(-1)}>
              <ChevronLeft />
            </Button>
            <Button onClick={() => swipeToImage(1)}>
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>

      {showThumbnails && (
        <div className={styles.thumbnails}>
          {items.map(({ image, alt }, i) => (
            <div
              key={i}
              onClick={() => skipToImage(i)}
              className={styles["thumbnail-container"]}
            >
              <img loading="lazy" src={image} alt={alt} />
              <div
                className={clsx(styles["active-indicator"], {
                  [styles.active]: i === activeImageIndex,
                })}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Carousel;

const sliderVariants = {
  incoming: (direction: 1 | -1) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: 1 | -1) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};
