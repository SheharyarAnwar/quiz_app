import { Box, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import Dropdown from "../../Components/Dropdown/index";
import { ReactComponent as Arrow } from "../../Assets/arrow.svg";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { ReactComponent as Left } from "../../Assets/left.svg";
import { ReactComponent as Right } from "../../Assets/right.svg";
import { useHistory } from "react-router-dom";
import { PushedStateParams } from "../../Types/index";

const Index: React.FC<{}> = () => {
  const classes = styles();
  const ref: any = useRef();
  const history = useHistory();
  const [difficulty, setDifficulty] = useState<string>();
  const [topic, setTopic] = useState<string>();
  const [name, setName] = useState<string>();

  const logoAnimationHandler = () => {
    const circleArray = Array.from(document.getElementsByClassName("st0"));

    circleArray.forEach((elem, i) => {
      elem.animate(
        [
          { positions: "absolute", zIndex: 10, transform: "rotate(-40deg)" },
          { positions: "absolute", zIndex: 10, transform: "rotate(0deg)" },
        ],
        {
          duration: 200,
          delay: i * 200,
        }
      );
    });
  };
  useEffect(() => {
    logoAnimationHandler();
  }, []);
  const onNameChanged = (e: any) => {
    setName(e.target.value);
  };
  const selectionChangeHandler = (label: string, value: any): void => {
    if (label === "Difficulty") {
      setDifficulty((value as string).toLowerCase());
    }
    if (label === "Topic") {
      setTopic(value.value.toString());
    }
  };
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const stateToBePushed: PushedStateParams = {
      difficulty: difficulty as string,
      name: name as string,
      topic: topic as string,
    };
    history.push({ pathname: "/quiz", state: stateToBePushed });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Box className={classes.root}>
        <Left className={classes.leftBezier} />
        <Right className={classes.rightBezier} />
        <Grid container>
          <Grid container justify="center" item xs={12}>
            <Logo ref={ref} width={180} />
          </Grid>
          <Grid
            item
            style={{ marginTop: "4%" }}
            container
            justify="center"
            xs={12}
          >
            <Grid item xs={6} sm={4} lg={3}>
              <TextField
                required={true}
                onChange={onNameChanged}
                label="Name"
                fullWidth={true}
              />
            </Grid>
          </Grid>
          <Dropdown
            selectionChangeHandler={selectionChangeHandler}
            data={["Easy", "Medium", "Hard"]}
            label="Difficulty"
          />
          <Dropdown
            selectionChangeHandler={selectionChangeHandler}
            data={topics}
            label="Topic"
          />
          <Grid
            item
            container
            style={{ marginTop: "6%" }}
            justify="center"
            xs={12}
          >
            <button type="submit" className={classes.button}>
              <Arrow width={80} />
            </button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default Index;

const topics = [
  { title: "Any Category", value: "any" },
  { title: " General Knowledge", value: 9 },
  { title: "   Entertainment: Books", value: 10 },
  { title: "Entertainment: Film", value: 11 },
  { title: "Entertainment: Music", value: 12 },
  { title: "Entertainment: Musicals & Theatres", value: 13 },
  { title: " Entertainment: Television", value: 14 },
  { title: " Entertainment: Video Games", value: 15 },
  { title: "Entertainment: Board Games", value: 16 },
  { title: " Science & Nature", value: 17 },
  { title: "Science: Computers", value: 18 },
  { title: "Science: Mathematics", value: 19 },
  { title: " Mythology", value: 20 },
  { title: "  Sports", value: 21 },
  { title: " Geography", value: 22 },
  { title: "  History", value: 23 },
  { title: " Politics", value: 24 },
  { title: " Art", value: 25 },
  { title: "Celebrities", value: 26 },
  { title: "Animals", value: 27 },
  { title: "Vehicles", value: 28 },
  { title: "Entertainment: Comics", value: 29 },
  { title: "Science: Gadgets", value: 30 },
  { title: "Entertainment: Japanese Anime & Manga", value: 31 },
  { title: "Entertainment: Cartoon & Animations", value: 32 },
];
