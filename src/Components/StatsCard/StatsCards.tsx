import React from "react";

import styles from "./styles.module.scss";
import { title } from "process";

interface StatsCardProps {
    title: string;
    value: number;
}


export const StatsCards: React.FC<StatsCardProps> = ({title, value}) => {
    return(
        <article className={styles.stats_card}>
            <h2>{title}</h2>
            <span>{value}</span>
        </article>
    )
}