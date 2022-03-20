import useStyles from "./Style";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Stack from '@mui/material/Stack';

export default function ImgVideoUpload() {
    const classes = useStyles();
    const Input = styled('input')({
        display: 'none',
    });
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="image-button-file">
                <Input accept="image/*" id="image-button-file" multiple type="file" />
                <IconButton aria-label="upload picture" component="span" className={classes.uploadimagebutton}>
                    <PhotoCamera />
                </IconButton>
            </label>
            <label htmlFor="video-button-file">
            <Input accept="video/mp4,video/x-m4v,video/*" id="video-button-file" multiple type="file" />
            <IconButton aria-label="upload picture" component="span" className={classes.uploadvideobutton} style={{ml: "20px"}}>
                    <VideoLibraryIcon />
                </IconButton>
            </label>
        </Stack>
    );
};