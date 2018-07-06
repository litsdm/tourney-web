import React from 'react';
import Slider from 'react-slick';
import { node, string } from 'prop-types';
import styles from './Category.scss';

const Category = ({ children, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div className={styles.Category}>
      <p className={styles.Title}>
        {title}
      </p>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

Category.propTypes = {
  children: node.isRequired,
  title: string.isRequired
};

export default Category;
