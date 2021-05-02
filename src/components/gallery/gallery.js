import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {GalleryCon} from "./galleryElements";
import {Gallery , GalleryData2} from "./galleryData"

const useStyles = makeStyles(() => ({
  gridList: {
    width: '100%',
    height: 'auto',
    borderRadius: 4,
    paddingTop: 4,
  },
}));


export default function ImageGridList() {
  const classes = useStyles();

  return (
    <GalleryCon >
      <GridList cellHeight={350} className={classes.gridList} cols={3}>
        {Gallery.map((pic) => (
          <GridListTile key={"key"} cols={pic.cols || 1}>
            <img src={pic.img} alt={"img"} />
          </GridListTile>
        ))} 
      </GridList>
      <GridList cellHeight={350} className={classes.gridList} cols={3}>
        {GalleryData2.map((pic2) => (
          <GridListTile key={"key"} cols={pic2.cols || 1}>
            <img src={pic2.img} alt={"img"} />
          </GridListTile>
        ))} 
      </GridList>
    </GalleryCon>
  );
}
