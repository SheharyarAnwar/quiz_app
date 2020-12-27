import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles";
interface Props {
  history: any;
}
interface Questions {
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  category: string;
  difficulty: string;
  type: string;
}
const Index: React.FC<Props> = ({ history }) => {
  const classes = styles();
  const [name, setName] = useState<string>();
  const [questions, setQuestions] = useState<Array<Questions>>();
  const fetchQuestions = async (url: string) => {
    console.log(url);
    try {
      const data = await (await fetch(url)).json();
      setQuestions(data.results);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    console.log(history.location.state);
    if (!history.location.state) {
      console.log("To be implemented");
    } else {
      const { name, topic, difficulty } = history.location.state;
      setName(name);
      const difficultyParam = difficulty ? `&difficulty=${difficulty}` : "";
      const topicParam = topic ? `&category=${topic}` : "";
      const url = `https://opentdb.com/api.php?amount=10&type=multiple${difficultyParam}${topicParam}`;
      fetchQuestions(url);
    }
  }, []);
  return (
    <>
      <Box className={classes.root}>
        <div className={classes.upperCircle}></div>
        <div className={classes.lowerCircle}></div>
        <Grid container xs={12} className={classes.containerRoot}>
          <Grid
            item
            container
            xs={4}
            className={classes.textContainer}
            justify="flex-end"
          >
            <Typography variant="h1">Welcome</Typography>
            <Typography variant="h6">{name}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Index;
