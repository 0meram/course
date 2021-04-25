import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {GalleryCon} from "./galleryElements";
import Gallery from "./galleryData"
import { ContactPhoneTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: '100%',
    height: 'auto',
    borderRadius: 4,
  },
}));


export default function ImageGridList() {
  const classes = useStyles();

  return (
    <GalleryCon >
      <GridList cellHeight={500} className={classes.gridList} cols={3}>
        {Gallery.map((pic) => (
          <GridListTile key={"key"} cols={pic.cols || 1}>
            <img src={pic.img} alt={"img"} />
          </GridListTile>
        ))} 
      </GridList>
    </GalleryCon>
  );
}
