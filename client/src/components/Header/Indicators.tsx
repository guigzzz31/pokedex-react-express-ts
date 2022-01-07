import {
	Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeCustom } from "../../theme";



type HeaderProps = {
	handlePage?: any,
	pageSelected?: string
}

const useStyles = makeStyles((theme: ThemeCustom) => ({
	container: {
		//	display: "flex"
		position: "relative",
		// backgroundColor: theme.palette.secondary.dark,
		// borderColor: theme.palette.text.secondary,
		// border: "solid",
		// height: 66,
		// width: 66,
		// borderWidth: 6,
		// borderRadius: 90,
		// boxShadow: "inset -20px -20px 60px #4694d2, inset 20px 20px 60px #5ec8ff;"
	},
	red: {
		backgroundColor: theme.palette.primary.dark,
		position: "absolute",
		borderRadius: 90,
		top: 4,
		left: 60,
		width: 9,
		height: 9,
	},
	yellow: {
		backgroundColor: theme.palette.error.light,
		position: "absolute",
		borderRadius: 90,
		top: 4,
		left: 80,
		width: 9,
		height: 9,
	},
	green: {
		backgroundColor: theme.palette.info.main,
		position: "absolute",
		borderRadius: 90,
		top: 4,
		left: 100,
		width: 9,
		height: 9,
	}
}));


export default function Indicators(): JSX.Element {
	const classes = useStyles()

	return (
		<Box className={classes.container}>
			<Box className={classes.red} />
			<Box className={classes.yellow} />
			<Box className={classes.green} />
		</Box>
	)
};