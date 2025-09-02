// "use client";
import Image from "next/image";
import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

export function Button({ onClick }: ButtonProps) {
  return (
    <button className={styles.primary} onClick={onClick}>
      <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
      Random Pokémon
    </button>
  );
}
