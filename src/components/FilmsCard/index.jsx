import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardActionArea,
    Typography,
    CardActions,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";
import { Details, FilmContent, FilmMedia, Summary } from "./styles";
import { makeStyles } from "@material-ui/core/styles";

// ▒█▀▄▀█ ▒█▀▀▀ ▀▀█▀▀ ░█▀▀█ ▒█▀▀▄ ░█▀▀█ ▀▀█▀▀ ░█▀▀█
// ▒█▒█▒█ ▒█▀▀▀ ░▒█░░ ▒█▄▄█ ▒█░▒█ ▒█▄▄█ ░▒█░░ ▒█▄▄█
// ▒█░░▒█ ▒█▄▄▄ ░▒█░░ ▒█░▒█ ▒█▄▄▀ ▒█░▒█ ░▒█░░ ▒█░▒█
const imageUrl = "https://image.tmdb.org/t/p/original";

// ▒█▀▀▀█ ▀▀█▀▀ ▒█░░▒█ ▒█░░░ ▒█▀▀▀ ▒█▀▀▀█
// ░▀▀▀▄▄ ░▒█░░ ▒█▄▄▄█ ▒█░░░ ▒█▀▀▀ ░▀▀▀▄▄
// ▒█▄▄▄█ ░▒█░░ ░░▒█░░ ▒█▄▄█ ▒█▄▄▄ ▒█▄▄▄█
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function FilmsCard({ filmeData, imageHeight, ...props }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <Summary aria-controls="panel1a-content" id="panel1a-header">
                    <FilmMedia
                        component="img"
                        alt={filmeData.title}
                        height={imageHeight}
                        image={imageUrl + filmeData.poster_path}
                        title={filmeData.title}
                    />
                </Summary>
                <Details>
                    <FilmContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className="titleMaxLines"
                        >
                            {filmeData.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className="description"
                        >
                            {filmeData.overview}
                        </Typography>
                    </FilmContent>
                </Details>
                <CardActions>
                    {/* <Button size="small" color="primary">
                        Share
                    </Button> */}
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Accordion>
        </div>
    );
}

FilmsCard.propTypes = {
    imageHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto"]),
    ]),
};

FilmsCard.defaultProps = {
    filmesData: [],
    imageHeight: "auto",
};
