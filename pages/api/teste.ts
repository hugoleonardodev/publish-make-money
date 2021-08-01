import { NextApiRequest, NextApiResponse } from 'next';

import { getCompanyIntradayPricesBySymbol } from '../../services/api';

export default async function teste(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const result = await getCompanyIntradayPricesBySymbol('AAPL');

  return res.json(result);
}
