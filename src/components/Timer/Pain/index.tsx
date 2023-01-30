import { Pain } from '@/hooks/types';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SMark from './SMark';

const thresholds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  updateGraph: boolean;
  setUpdateGraph: (updateGraph: boolean) => void;
  addPainActiveSess: (pain: Pain) => void;
}

// Slider for adding pain to the current session
const PainSlider: React.FC<Props> = ({
  updateGraph,
  setUpdateGraph,
  addPainActiveSess
}) => {
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  const addPain = (val: number) => {
    const pain: Pain = {
      threshold: val,
      time: new Date(),
      location: ''
    };
    addPainActiveSess(pain);
    setUpdateGraph(!updateGraph);
  };

  return (
    <Slider
      defaultValue={1}
      min={1}
      max={10}
      step={1}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onChangeEnd={(val) => addPain(val)}
    >
      {thresholds.map((num, i) => (
        <SMark threshold={num} key={i} />
      ))}
      <SliderTrack bg="blue.100" w="md">
        <Box position="relative" />
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="red.400"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default PainSlider;
