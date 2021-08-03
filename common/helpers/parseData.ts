import { IntradayPrice } from '../../core/hooks/types';
import X_AXIS_DOMAIN from '../constants/X_AXIS_DOMAIN';

interface ChartParsedData {
  name: string;
  uv: number;
}

const parseData = (
  intradayData: IntradayPrice[],
  isMarketOpen: boolean
): ChartParsedData[] => {
  const domainHours = intradayData.map((e: IntradayPrice) => {
    if (!isMarketOpen && X_AXIS_DOMAIN.some((f) => f === e.minute)) {
      return {
        name: e.minute,
        uv: e.close,
      };
    }
    return {
      name: e.minute,
      uv: e.close,
    };
  });
  const result = domainHours.filter((g) => g !== undefined);
  return result;
};

export default parseData;
