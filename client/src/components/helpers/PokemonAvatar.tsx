import { Theme, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import CardMedia from '@material-ui/core/CardMedia';

type AvatarProps = { img: string };

export default function PokemonAvatar({ img }: AvatarProps): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <CardMedia image={img} className={classes.avatar} />
  )
}

//style
interface StyleProps {
  avatar: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>

let baseStyle: StyleProps = {
  avatar: {
    width: 126,
    height: 117
  },
}
const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);