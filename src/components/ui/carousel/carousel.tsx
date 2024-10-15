"use client";
import { HTMLAttributeAnchorTarget, MouseEventHandler, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Link from "next/link";
import type { DictionaryProps } from "@/types/i18n/dictionary-props.type";

import styles from "./carousel.module.css";

export type CarouselItem = {
  image: string;
  alt: string;
  content?: CarouselContent;
};

type ContentLinkAction = {
  type: "link";
  href: string;
  target?: HTMLAttributeAnchorTarget;
};

type ContentButtonAction = {
  type: "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type CarouselContentAction = {
  text?: string;
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
} & (ContentLinkAction | ContentButtonAction);

type CarouselContent = {
  title?: {
    text: string;
    className?: string;
  };
  action?: CarouselContentAction;
  shadow?: boolean;
};

type CarouselI18n = DictionaryProps["dictionary"]["components"]["carousel"];

export type CarouselProps = {
  items: CarouselItem[];
  actions?: "below" | "inside";
  showThumbnails?: boolean;
  dictionary: CarouselI18n;
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  showThumbnails,
  actions = "inside",
  dictionary,
}) => {
  const [[itemCount, direction], setItemCount] = useState([0, 0]);
  const activeItemIndex = itemCount;
  const activeItem = items[activeItemIndex];

  const swipeToImage = (swipeDirection: 1 | -1) => {
    let newImage = itemCount + swipeDirection;

    if (newImage < 0) newImage = items.length - 1;
    else if (newImage >= items.length) newImage = 0;

    setItemCount([newImage, swipeDirection]);
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
    if (imageId > activeItemIndex) {
      changeDirection = 1;
    } else if (imageId < activeItemIndex) {
      changeDirection = -1;
    }
    if (!changeDirection) setItemCount([imageId, changeDirection!]);
  };

  return (
    <>
      <div className={styles["slider-container"]}>
        <div className={styles.slider}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={itemCount}
              style={{
                backgroundImage: `url(${items[activeItemIndex].image})`,
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
            >
              {activeItem.content && <Content content={activeItem.content} />}
            </motion.div>
          </AnimatePresence>
          <button
            className={clsx(styles.action, styles.left)}
            onClick={() => swipeToImage(-1)}
            aria-label={dictionary.a11y["Prev-slide"]}
          >
            <ChevronLeft />
          </button>
          <button
            className={clsx(styles.action, styles.right)}
            onClick={() => swipeToImage(1)}
            aria-label={dictionary.a11y["Next-slide"]}
          >
            <ChevronRight />
          </button>
        </div>

        {actions === "below" && (
          <div className="w-full mt-4 flex flex-cols justify-around">
            <Button
              aria-label={dictionary.a11y["Prev-slide"]}
              onClick={() => swipeToImage(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              aria-label={dictionary.a11y["Next-slide"]}
              onClick={() => swipeToImage(1)}
            >
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
                  [styles.active]: i === activeItemIndex,
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

const Content = ({ content }: { content: CarouselContent }) => {
  return (
    <div
      className={clsx(styles.content, "flex flex-col gap-2", {
        [styles.shadowed]: content.shadow,
      })}
    >
      {content.title && (
        <h1
          className={clsx(
            content.title.className,
            "text-xl font-bold text-white"
          )}
        >
          {content.title.text}
        </h1>
      )}
      {content.action?.type === "button" && (
        <Button
          color={content.action.color ?? "primary"}
          className="max-w-40"
          onClick={content.action.onClick}
        >
          {content.action.text}
        </Button>
      )}
      {content.action?.type === "link" && (
        <Link
          target={content.action.target}
          href={content.action.href}
          className={clsx({
            [`text-${content.action.color}`]: content.action.color,
            link: !content.action.color,
          })}
        >
          {content.action.text}
        </Link>
      )}
    </div>
  );
};
