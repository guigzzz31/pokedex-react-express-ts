import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import SearchProps from '../../types/Search';

export default function SearchNav({ searchName, handleChange, searchNumber, handleChangeNumber }: SearchProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <Box bgcolor='primary'>
      <Grid direction="row" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
          <TextField
            type="text"
            variant="outlined"
            label="name"
            value={searchName}
            onChange={handleChange}
            size="small"
            className={classes.textFieldName}
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            variant="outlined"
            label="number"
            value={searchNumber}
            onChange={handleChangeNumber}
            size="small"
          />

        </Grid>
        <Grid item>
          <TextField
            type="text"
            variant="outlined"
            label="type"
            size="small"
          // value={searchType}
          // onChange={handleChangeType}
          />
        </Grid>
      </Grid>
    </Box>
  )
};

//style
interface StyleProps {
  textFieldName: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  textFieldName: {
    minWidth: 350,
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);