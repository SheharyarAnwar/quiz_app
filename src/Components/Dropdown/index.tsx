import { Grid, TextField } from "@material-ui/core";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
interface Options {
  title: string;
  value: number | string;
}
interface Props {
  data: Array<Options> | Array<string>;
  label: string;
  selectionChangeHandler: (label: string, value: any) => void;
}
const isOptions = (data: Array<any>): boolean => {
  if (typeof data[0] === "object") {
    return true;
  }
  return false;
};
const Index: React.FC<Props> = ({ data, label, selectionChangeHandler }) => {
  const onSelectionChange = (e: React.ChangeEvent<{}>, value: any) => {
    selectionChangeHandler(label, value);
  };
  return (
    <>
      <Grid item container style={{ marginTop: "2%" }} justify="center" xs={12}>
        <Grid item xs={6} sm={4} lg={3}>
          <Autocomplete
            id="select-on-focus"
            onChange={onSelectionChange}
            disableClearable
            getOptionLabel={(options): any => {
              if (isOptions(data)) {
                return options.title;
              } else {
                return options;
              }
            }}
            fullWidth={true}
            options={data as any}
            selectOnFocus
            renderInput={(params) => <TextField {...params} label={label} />}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
