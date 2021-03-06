import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import ParseColorType from "../../hooks/ParseColorType";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";

import SearchProps from '../../types/Search';
import { types } from './types';


export default function SearchNav({ searchName, handleChange, searchNumber, handleChangeNumber, searchType, handleChangeType }: SearchProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);
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
            className={classes.textFieldNumber}
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
          <FormControl className={classes.textFieldNumber} variant="outlined" size="small">
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
  textFieldNumber: BaseCSSProperties
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  textFieldName: {
    minWidth: 350,
    backgroundColor: "#FFFFFF"
  },
  textFieldNumber: {
    backgroundColor: "#FFFFFF"
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