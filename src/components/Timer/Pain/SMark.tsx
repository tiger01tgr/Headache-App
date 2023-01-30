import { SliderMark } from '@chakra-ui/react';
import React from 'react';

const labelStyles = {
  mt: '2',
  ml: '-1.5',
  fontSize: 'sm'
};

interface Props {
  threshold: number;
}

// Slider mark for the pain slider

const SMark: React.FC<Props> = ({ threshold }) => {
  return (
    <SliderMark value={threshold} {...labelStyles}>
      {threshold}
    </SliderMark>
  );
};

export default SMark;
