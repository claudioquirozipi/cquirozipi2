import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export interface ABChildrenProps {
  A: any;
  reverse?: boolean;
}

const ABChildren: React.FC<ABChildrenProps> = (props) => {
  const { A, children, reverse } = props;
  return (
    <Box mb={12}>
      <Grid
        container
        spacing={6}
        direction={reverse ? "row-reverse" : "row"}
        justify="center"
      >
        <Grid item sm={6}>
          {A}
        </Grid>
        <Grid item sm={4} container direction="column" justify="center">
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ABChildren;
