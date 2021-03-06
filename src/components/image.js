import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  display: block;
  text-align: center;
  width: 100%;
`;

const Image = ({ src, alt, onLoad }) =>
  src && <Img src={src} alt={alt} onLoad={onLoad} />;

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onLoad: PropTypes.bool,
  }),
};

export default Image;
