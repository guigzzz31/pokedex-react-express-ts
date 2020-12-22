import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";

import CustomToUpperCase from "../../hooks/CustomToUpperCase";

type NameProps = { name: string };

export default function PokemonName({ name }: NameProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Typography className={classes.nameText}>
      {CustomToUpperCase(name)}
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
    color: "#000",
    fontWeight: 900,
    fontSize: 18,
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);