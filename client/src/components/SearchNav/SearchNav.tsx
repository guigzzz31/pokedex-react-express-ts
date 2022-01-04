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
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles((theme: ThemeCustom) => ({
  textInput: {
    // display: "flex",
    // alignContent: "center",
    //backgroundColor: theme.palette.text.secondary,
    // borderColor: "#fff",
    // // borderWidth: 1,
    //borderRadius: 30,
    //borderColor: theme.palette.primary.light,
    //boxShadow: "9px 9px 18px #c9c8c3, -9px -9px 18px #ffffff",
  },
}));

const CssTextField = styled(TextField)({

  '& label.Mui-focused': {
    color: '#e1f2fe',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e1f2fe',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e1f2fe',
    },
    '&:hover fieldset': {
      borderColor: '#e1f2fe',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e1f2fe',
    },
  },
});

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
        <CssTextField
          type="text"
          variant="outlined"
          label="Name"
          value={searchName}
          onChange={handleChange}
          size="small"
          InputLabelProps={{
            style: {
              color: '#e1f2fe'
            }
          }}
          InputProps={{
            style: {
              color: '#e1f2fe'
            }
          }}
          className={classes.textInput}
        />
      </Box>
      <Box m={2}>
        <CssTextField
          className={classes.textInput}
          type="number"
          //variant="outlined"
          label="Number"
          color="info"
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
          <InputLabel>Type</InputLabel>
          <Select
            value={searchType}
            color="info"
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