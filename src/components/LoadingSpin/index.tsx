import classes from "./loadingSpin.module.css";

import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

export const LoadingSpin: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Icon className={classes.spin} path={mdiLoading} size={1.5}></Icon>
    </div>
  );
};
