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
		position: "relative",
		backgroundColor: theme.palette.secondary.main,
		borderColor: theme.palette.text.secondary,
		border: "solid",
		height: 66,
		width: 66,
		borderWidth: 4,
		borderRadius: 90,
	},
	selected: {
		//backgroundColor: theme.palette.primary.main,
		borderColor: theme.palette.text.secondary,
		display: "flex",
		justifyContent: "center",
		border: "solid",
		borderWidth: 2,
		borderRadius: 18,
		padding: 12,
	},
	textSelected: {
		color: theme.palette.text.secondary,
		fontWeight: 800,
		letterSpacing: 3,
		fontSize: 16,
	},
	unselected: {
		//backgroundColor: theme.palette.primary.main,
		display: "flex",
		justifyContent: "center",
		border: "solid",
		borderColor: theme.palette.primary.light,
		borderWidth: 2,
		borderRadius: 18,
		padding: 12,
	},
	textUnselected: {
		color: theme.palette.primary.light,
		fontWeight: 800,
		letterSpacing: 3,
		fontSize: 16,
	},
}));


export default function LightBulb({ handlePage, pageSelected }: HeaderProps): JSX.Element {
	const classes = useStyles()
	console.log("currentTab", pageSelected)

	return (
		<Box className={classes.container}>

		</Box>
	)
};
