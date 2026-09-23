import React, { useRef, useEffect } from "react";
import styles from "./Number.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Number() {
  const { ref, inView } = useInView({
    triggerOnce: false, // ตรวจจับครั้งเดียว
    threshold: 0.1, // ปรากฏ 10% ขึ้นไปถึงจะนับว่า visible
  });

  return (
    <>
      <div className={styles.number_con}>
        <div className={styles.number_items}>
          <h3>
            <div ref={ref}>
              {inView ? <CountUp start={0} end={100} duration={5} /> : null} +
            </div>
          </h3>
          <p>Project Delivered</p>
        </div>
        <div className={styles.number_items}>
          <h3>
            <div ref={ref}>
              {inView ? <CountUp start={0} end={50} duration={5} /> : null} +
            </div>
          </h3>
          <p>Companies Helped</p>
        </div>
        <div className={styles.number_items}>
          <h3>
            <div ref={ref}>
              {inView ? <CountUp start={0} end={10} duration={5} /> : null} +
            </div>
          </h3>
          <p>Years of experience</p>
        </div>
        <div className={styles.number_items}>
          <h3>
            <div ref={ref}>
              {inView ? <CountUp start={0} end={200} duration={5} /> : null} +
            </div>
          </h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </>
  );
}

export default Number;