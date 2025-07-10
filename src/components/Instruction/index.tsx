import classes from "./instruction.module.css";

interface IInstructionProp {
  children?: React.ReactNode;
}

export const Instruction: React.FC<IInstructionProp> = (prop) => {
  const {
    children = "Click on images but make sure to not click on anymore than once!",
  } = prop;

  return <div className={classes.instruction}>{children}</div>;
};
