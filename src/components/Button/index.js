import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Text, Loading, IconContainer } from './styles';

const Button = ({
  width,
  heigth,
  fontSize,
  children,
  loading,
  bgColor,
  border,
  color,
  icon,
  colorIcon,
  ...rest
}) => {
  return (
    <Container icon width={width} heigth={heigth} bgColor={bgColor} border={border} {...rest}>
      {icon && (
        <IconContainer>
          <MaterialIcons name={icon} size={82} color={colorIcon} />
        </IconContainer>
      )}
      {loading ? (
        <Loading size={28} />
      ) : (
        <Text color={color} fontSize={fontSize}>
          {children}
        </Text>
      )}
    </Container>
  );
};

// Button.propTypes = {
//   loading: PropTypes.bool,
//   bgColor: PropTypes.string.isRequired,
// };

export default Button;
