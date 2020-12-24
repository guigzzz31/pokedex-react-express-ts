import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NumberProps = { id: string };

export default function PokemonNumberModale({ id }: NumberProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Typography className={classes.nameText}>
      {CustomToUpperCase(id)}
    </Typography>
  )
}

//style
interface StyleProps {
  nameText: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  nameText: {
    color: "#9E9E9E",
    fontWeight: 900,
    fontSize: 40,
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);