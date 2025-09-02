import { PropsWithChildren } from "react";
import styles from "./Section.module.css";

type SectionProps = PropsWithChildren<{
  headline?: string;
}>;

export function Section({ headline, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>{headline}</h2>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
