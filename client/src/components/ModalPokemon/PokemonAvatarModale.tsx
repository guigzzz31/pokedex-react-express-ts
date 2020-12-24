import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Box from "@material-ui/core/Box";

type AvatarProps = { img: string };

export default function PokemonAvatarModale({ img }: AvatarProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Box>
      <img src={img} alt="me" className={classes.avatar} />
    </Box>
  )
}

//style
interface StyleProps {
  avatar: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  avatar: {
    width: 400,
    height: 400
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);