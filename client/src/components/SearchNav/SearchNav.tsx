import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import SearchProps from '../../types/Search';
import ParseColorType from "../../hooks/ParseColorType";
import React from "react";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";


const types: string[] = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel']



export default function SearchNav({ searchName, handleChange, searchNumber, handleChangeNumber, searchType, handleChangeType }: SearchProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);
  console.log("searchNav", searchType)
  return (
    <Box bgcolor='primary'>
      <Grid direction="row" alignItems="center" justify="center" spacing={5} container>
        <Grid item>
          <TextField
            type="text"
            variant="outlined"
            label="name"
            color="secondary"
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
            color="secondary"
            value={searchNumber}
            onChange={handleChangeNumber}
            size="small"
          />

        </Grid>
        <Grid item>
          <FormControl variant="outlined" size="small">
            <InputLabel color="secondary">type</InputLabel>
            <Select
              value={searchType}
              color='secondary'
              onChange={handleChangeType}
              label="type"
              className={classes.menuFieldType}
              renderValue={() =>
                <Box className={classes.typeBoxInput} bgcolor={ParseColorType(searchType)}>
                  {CustomToUpperCase(searchType)}
                </Box>
              }>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {types.map((type: string) => (
                <MenuItem key={type} value={type}>
                  <Box className={classes.typeBox} bgcolor={ParseColorType(type)}>
                    {CustomToUpperCase(type)}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
};

//style
interface StyleProps {
  textFieldName: BaseCSSProperties,
  menuFieldType: BaseCSSProperties,
  typeBox: BaseCSSProperties,
  typeBoxInput: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  textFieldName: {
    minWidth: 350,
  },
  menuFieldType: {
    minWidth: 120,
  },
  typeBox: {
    borderRadius: 9,
    maxWidth: 50,
    color: "#FFF",
    fontWeight: 900,
    padding: 4,
    fontSize: 10,
  },
  typeBoxInput: {
    display: "flex",
    justifyContent: 'center',
    fontSize: 9,
    borderRadius: 9,
    maxWidth: 50,
    padding: 1,
    color: "#FFF",
    fontWeight: 900,
  }
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);