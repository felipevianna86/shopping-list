import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import './CustomCard.css';

const CustomCard = (props) => (
  <div className={props.containerClass}>
    <Link to={props.link}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          {props.image && (
            <CardMedia
              image={props.image}
              component="img"
              className="card-img"
              title="image"
              height="100"
            />
          )}

          <CardContent className="card-content">{props.children}</CardContent>
        </CardActionArea>
        {props.footer && (
          <div>
            <Divider />
            <CardActions className="card-footer">{props.footer}</CardActions>
          </div>
        )}
      </Card>
    </Link>
  </div>
);

CustomCard.propTypes = {
  footer: PropTypes.element,
  children: PropTypes.element.isRequired,
  containerClass: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CustomCard;
