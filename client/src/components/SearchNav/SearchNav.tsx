import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";


import ParseColorType from "../../hooks/ParseColorType";
import CustomToUpperCase from "../../hooks/CustomToUpperCase";

import SearchProps from '../../types/Search';
import { types } from './types';


export default function SearchNav({ searchName, handleChange, searchNumber, handleChangeNumber, searchType, handleChangeType }: SearchProps): JSX.Element {
  return (
    <Box bgcolor='primary'>
      <Box sx={{ display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
        <Box>
          <TextField
            type="text"
            variant="outlined"
            label="name"
            color="secondary"
            value={searchName}
            onChange={handleChange}
            size="small"
            sx={{
              minWidth: 350,
              backgroundColor: "#FFFFFF"
            }}
          />
        </Box>
        <Box>
          <TextField
            sx={{ backgroundColor: "#FFFFFF" }}
            type="number"
            variant="outlined"
            label="number"
            color="secondary"
            value={searchNumber}
            onChange={handleChangeNumber}
            size="small"
          />

        </Box>
        <Box>
          <FormControl
            sx={{ backgroundColor: "#FFFFFF" }}
            variant="outlined"
            size="small"
          >
            <InputLabel color="secondary">type</InputLabel>
            <Select
              value={searchType}
              color='secondary'
              onChange={handleChangeType}
              label="type"
              sx={{ minWidth: 120, }}
              renderValue={() =>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: 'center',
                    fontSize: 9,
                    borderRadius: 9,
                    maxWidth: 50,
                    padding: 1,
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
                      padding: 4,
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
    </Box>
  )
};