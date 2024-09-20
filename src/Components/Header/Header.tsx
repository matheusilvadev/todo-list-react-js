import React from "react";



import styles from "./styles.module.scss";
import { StatsCards } from "../StatsCard/StatsCards";

export const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyToDo</h1>

          <span>Welcome</span>
        </div>

        <div>
          <StatsCards title="Total de Tarefas" value={6} />
          <StatsCards title="Tarefas Pendentes" value={4} />
          <StatsCards title="Tarefas Concluidas" value={2} />
        </div>
      </div>
    </header>
  );
};
