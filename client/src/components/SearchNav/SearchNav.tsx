import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import ParseColorType from "../../hooks/ParseColorType";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";

import SearchProps from '../../types/Search';
import { types } from './types';
import { ThemeCustom } from "../../theme";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: ThemeCustom) => ({
  textInput: {
    // display: "flex",
    // alignContent: "center",
    backgroundColor: theme.palette.primary.light,
    // borderColor: "#fff",
    // // borderWidth: 1,
    //borderRadius: 30,
    //boxShadow: "9px 9px 18px #c9c8c3, -9px -9px 18px #ffffff",
  },
}));

export default function SearchNav({ searchName, handleChange, searchNumber, handleChangeNumber, searchType, handleChangeType }: SearchProps): JSX.Element {
  const matches = useMediaQuery('(min-width:700px)');
  const classes = useStyles()
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: !matches ? "column" : "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box m={2}>
        <TextField
          type="text"
          variant="outlined"
          label="Name"
          value={searchName}
          onChange={handleChange}
          size="small"
          color={"info"}
          className={classes.textInput}
          sx={{
            backgroundColor: "#FFFFFF",
            fontSize: "32px"
          }}
        />
      </Box>
      <Box m={2}>
        <TextField
          className={classes.textInput}
          type="number"
          //variant="outlined"
          label="Number"
          color="secondary"
          value={searchNumber}
          onChange={handleChangeNumber}
          size="small"
        />

      </Box>
      <Box m={2}>
        <FormControl
          className={classes.textInput}
          variant="outlined"
          size="small"
        >
          <InputLabel color="secondary">Type</InputLabel>
          <Select
            value={searchType}
            color='secondary'
            onChange={handleChangeType}
            label="Type"
            sx={{ minWidth: 120, }}
            renderValue={() =>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: 'center',
                  fontSize: 9,
                  borderRadius: 9,
                  maxWidth: 50,
                  color: "#FFF",
                  fontWeight: 900
                }}
                bgcolor={ParseColorType(searchType)}
              >
                {CustomToUpperCase(searchType)}
              </Box>
            }>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {types.map((type: string) => (
              <MenuItem key={type} value={type}>
                <Box
                  sx={{
                    borderRadius: 9,
                    maxWidth: 50,
                    color: "#FFF",
                    fontWeight: 900,
                    padding: 1,
                    fontSize: 10,
                  }}
                  bgcolor={ParseColorType(type)}>
                  {CustomToUpperCase(type)}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
};