import React, { forwardRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
// import PropTypes from 'prop-types';
import { LogBox } from 'react-native';

import { Container, TInput, Real, RealText } from './styles';
// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);

const Input = ({ icon, iconEditable, bgColor, color, error, ...rest }, ref) => {
  return (
    <Container error={error} bgColor={bgColor}>
      {icon && <MaterialIcons name={icon} size={20} color="#999999" />}
      {iconEditable && (
        <Real>
          <RealText>R</RealText>
          <MaterialIcons name="attach-money" size={20} color="#999999" />
        </Real>
      )}
      <TInput color={color} {...rest} ref={ref} />
    </Container>
  );
};

// Input.propTypes = {
//   icon: PropTypes.string,
//   bgColor: PropTypes.string.isRequired,
// };

// Input.defaultProps = {
//   icon: null,
// };

export default forwardRef(Input);
