import {
  Box,
  Grid,
  Typography,
} from "@mui/material";


export default function InfoModale({ misc }: any): JSX.Element {
  return (
    <Box m={1} mt={3}>
      <Grid direction="column" spacing={3} container>
        <Grid item>
          <Grid spacing={2} container>
            <Grid item>
              <Typography
                sx={{
                  color: "#B92941",
                  fontWeight: 900,
                  fontSize: 18,
                }}
              >
                Abilities
              </Typography>
            </Grid>
            {misc.abilities.normal.map((item: any) => {
              return (
                <Grid key={item} item>
                  <Typography sx={{ paddingTop: 2 }}>{item},</Typography>
                </Grid>
              )
            })}
          </Grid>
          <Grid spacing={2} container>
            <Grid item>
              <Typography
                align="center"
                sx={{
                  color: "#B92941",
                  fontWeight: 900,
                  fontSize: 18,
                }}
              >
                Hidden </Typography>
            </Grid>
            {misc.abilities.hidden.map((item: any) => {
              return (<Grid key={item} item>
                <Typography sx={{ paddingTop: 2 }}>{item},</Typography>
              </Grid>)
            })}
          </Grid>
        </Grid>
        <Grid item>

          <Grid spacing={2} container>
            <Grid item >
              <Box>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography
                      sx={{
                        color: "#B92941",
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      female
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.sex.female} %</Typography>
                  </Grid>
                </Grid>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography
                      sx={{
                        color: "#B92941",
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      male
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.sex.male} %</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography
                      sx={{
                        color: "#B92941",
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      height
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.height}</Typography>
                  </Grid>
                </Grid>
                <Grid spacing={2} container>
                  <Grid item>
                    <Typography
                      sx={{
                        color: "#B92941",
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      weight
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{misc.weight}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}