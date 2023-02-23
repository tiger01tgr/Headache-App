import { advanceTime, convertTime, MIN_IN_MILLISECOND } from '@/constants/time';
import { Pain } from '@/types/types';

// This function is used to format the data for the pain graph
const formatPainGraphData = (pain: Pain[] | undefined, timeStep: number) => {
  if (!pain) return [];

  if (pain.length == 0) return [];

  const data = [];
  data.push({
    name: convertTime(pain[0].time),
    pain: pain[0].threshold
  });

  for (let i = 1; i < pain.length; i++) {
    let currTime = pain[i - 1].time;

    while (
      currTime.getTime() <
      pain[i].time.getTime() - timeStep * MIN_IN_MILLISECOND
    ) {
      currTime = advanceTime(currTime, timeStep);
      data.push({
        name: convertTime(currTime),
        pain: pain[i - 1].threshold
      });
    }
    data.push({
      name: convertTime(pain[i].time),
      pain: pain[i].threshold
    });
  }

  return data;
};

export default formatPainGraphData;
