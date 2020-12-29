import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import QuizModal from "../../Components/QuizModal/index";
import { Questions } from "../../Types/index";
interface Props {
  history: any;
}

const Index: React.FC<Props> = ({ history }) => {
  const classes = styles();
  const [name, setName] = useState<string>();
  const [questions, setQuestions] = useState<Array<Questions>>();
  const fetchQuestions = async (url: string) => {
    try {
      const data = await (await fetch(url)).json();
      setQuestions(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!history.location.state) {
      history.push("/");
    } else {
      const { name, topic, difficulty } = history.location.state;
      setName(name);
      const difficultyParam = difficulty ? `&difficulty=${difficulty}` : "";
      const topicParam = topic && topic !== "any" ? `&category=${topic}` : "";
      const url = `https://opentdb.com/api.php?amount=10&type=multiple${difficultyParam}${topicParam}&encode=base64`;
      console.log(url);
      fetchQuestions(url);
    }
  }, []);
  return (
    <>
      <Box className={classes.root}>
        <div
          className={classes.upperCircle}
          onClick={() => {
            console.log(questions);
          }}
        ></div>
        <div className={classes.lowerCircle}></div>
        <Grid container item xs={12} className={classes.containerRoot}>
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
        <Grid xs={12} item container justify="center">
          {questions && <QuizModal questions={questions} />}
        </Grid>
      </Box>
    </>
  );
};

export default Index;
