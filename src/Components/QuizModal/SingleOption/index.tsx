import { Box, Grid, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import styles from "../styles";
interface Props {
  option: string;
  handleAnswerPicked: (answer: string) => void;
}
const Index: React.FC<Props> = ({ option, handleAnswerPicked }) => {
  const classes = styles();
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const optionHovered = (caller: string) => {
    const num: number = caller === "in" ? 1 : 0;
    const val = innerRef.current as HTMLDivElement;
    val.animate([{ transform: `scale(${num})` }], {
      duration: 400,
      easing: "linear",
    }).onfinish = () => {
      val.style.transform = `scale(${num})`;
    };
  };
  const handleOptionClick = () => {
    handleAnswerPicked(option);
  };
  return (
    <>
      <Grid item xs={12} className={classes.options}>
        <Box
          onMouseLeave={() => optionHovered("out")}
          onMouseEnter={() => optionHovered("in")}
          onClick={handleOptionClick}
          component="div"
          display="flex"
          alignItems="center"
        >
          <div ref={outerRef} className={classes.radioOption}>
            <div ref={innerRef} className={classes.radioOptionSelection}></div>
          </div>
          <Typography variant="body2">{option}</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Index;
