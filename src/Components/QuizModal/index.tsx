import { Box, Grid, Typography } from "@material-ui/core";
import {
  CSSTransition,
  SwitchTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles";
import { Base64 } from "js-base64";
import SingleOption from "./SingleOption/index";
import { QuizModalProps } from "../../Types/index";

const Index: React.FC<QuizModalProps> = ({ questions }) => {
  const firstUpdate = useRef(true);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [pickedAnswer, setPickedAnswer] = useState<string>();
  const [result, setResult] = useState<number>(0);
  const [testComplete, setTestComplete] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false);
  const classes = styles();
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(currentQuestion, questions.length - 1);
    if (currentQuestion == questions.length - 1) {
      setTestComplete(true);
      return;
    }
    const originalAnswer = Base64.decode(
      questions[currentQuestion].correct_answer
    ) as string;

    if (originalAnswer === pickedAnswer) {
      setResult((prev) => prev + 1);
    }
    setCurrentQuestion((prev) => prev + 1);
  }, [pickedAnswer]);
  const handleAnswerPicked = (answer: string) => {
    setPickedAnswer(answer);
    setTransition((prev) => !prev);
  };
  const shuffleArray = (correct: string, incorrect: Array<string>) => {
    const tempArray: Array<string> = new Array(incorrect.length + 1).fill("");
    const x = [...incorrect];
    //1.9 == 1
    const correctAnswerPos = Math.floor(Math.random() * incorrect.length + 1);
    const shuffled = tempArray.map((val, i) => {
      if (i === correctAnswerPos) {
        return correct;
      } else {
        return x.pop();
      }
    });
    return shuffled;
  };
  const renderedQuestions: Array<ReactNode> | undefined = useMemo(
    () =>
      questions?.map((val, i) => {
        const shuffeledArray = shuffleArray(
          val.correct_answer,
          val.incorrect_answers
        );
        return (
          <>
            <Grid item key={i} className={classes.heading}>
              <Typography variant="subtitle1">
                {Base64.decode(val.question)}
              </Typography>
            </Grid>
            {shuffeledArray.map((valx, i2) => {
              // console.log(valx, j++);
              const decoded = Base64.decode(valx as string);
              return (
                <SingleOption
                  handleAnswerPicked={handleAnswerPicked}
                  key={i2}
                  option={decoded}
                />
              );
            })}
          </>
        );
      }),
    [questions]
  );
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={currentQuestion} timeout={1000} classNames={"anim"}>
          <Grid
            xs={10}
            sm={6}
            md={5}
            lg={4}
            item
            container
            className={classes.root}
            justify="center"
            alignItems="center"
          >
            {!testComplete &&
              renderedQuestions &&
              renderedQuestions[currentQuestion]}

            {testComplete && (
              <Box
                justifyContent="space-around"
                alignItems="center"
                display="flex"
                flexDirection="column"
                style={{ width: "100%", height: "40vh" }}
              >
                <Typography color="primary" variant="h6">
                  Result:
                </Typography>
                <Typography variant="body1">
                  {result}/{questions.length}
                </Typography>
              </Box>
            )}
          </Grid>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Index;
