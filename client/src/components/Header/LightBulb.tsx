import {
	Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeCustom } from "../../theme";
import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

import { flash } from "react-animations"


const flashAnimation = keyframes`${flash}`

const useStyles = makeStyles((theme: ThemeCustom) => ({
	container: {
		position: "relative",
		backgroundColor: theme.palette.secondary.main,
		borderColor: theme.palette.text.secondary,
		border: "solid",
		height: 56,
		width: 56,
		borderWidth: 6,
		borderRadius: 90,
	},
	subContainer: {
		backgroundColor: theme.palette.secondary.main,
		position: "absolute",
		borderRadius: 70,
		top: 12,
		left: 10,
		width: 14,
		height: 14,
	},
	bulb: {
		backgroundColor: theme.palette.secondary.light,
		position: "absolute",
		borderRadius: 70,
		top: 14,
		left: 14,
		width: 7,
		height: 7,
	},
}));

const Flash = styled('div')({
	//white
	color: "#e1f2fe",
	//dark blue
	backgroundColor: "#2D92D0",
	height: 56,
	width: 56,
	borderRadius: 90,
	animation: `1.8s ${flashAnimation} 3`,
	boxShadow: "6px 6px 12px #f4ffff,-6px -6px 12px #f4ffff",

});

const Flash2 = styled('div')({
	position: "absolute",
	color: "#e1f2fe",
	backgroundColor: "#52AEF7",
	borderRadius: 90,
	top: 12,
	left: 10,
	width: 14,
	height: 14,
	animation: `1s ${flashAnimation} 3`,
	boxShadow: "20px 20px 60px #bfced8, -20px -20px 60px #ffffff;"
});

const Flash3 = styled('div')({
	position: "absolute",
	color: "#fff",
	backgroundColor: "#7AC2F9",
	top: 14,
	left: 14,
	width: 7,
	height: 7,
	borderRadius: 90,
	animation: `1.8s ${flashAnimation} 3`
});

export default function LightBulb(): JSX.Element {
	const classes = useStyles()
	return (
		<Box className={classes.container}>
			<Box className={classes.subContainer} />
			<Box className={classes.bulb} />
			<Flash />
			<Flash2 />
			<Flash3 />
		</Box>
	)
};
