import {
	Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeCustom } from "../../theme";


const useStyles = makeStyles((theme: ThemeCustom) => ({
	container: {
		position: "relative",
		backgroundColor: theme.palette.secondary.dark,
		borderColor: theme.palette.text.secondary,
		border: "solid",
		height: 66,
		width: 66,
		borderWidth: 6,
		borderRadius: 90,
		boxShadow: "inset -20px -20px 60px #4694d2, inset 20px 20px 60px #5ec8ff;"
	},
	subContainer: {
		backgroundColor: theme.palette.secondary.main,
		position: "absolute",
		borderRadius: 70,
		top: 12,
		left: 10,
		width: 18,
		height: 18,
	},
	bulb: {
		backgroundColor: theme.palette.secondary.light,
		position: "absolute",
		borderRadius: 70,
		top: 14,
		left: 14,
		width: 9,
		height: 9,
	},
}));


export default function LightBulb(): JSX.Element {
	const classes = useStyles()
	return (
		<Box className={classes.container}>
			<Box className={classes.subContainer} />
			<Box className={classes.bulb} />
		</Box>
	)
};
