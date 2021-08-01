import https from 'https';

import { BASE_URL } from '../../common/constants';
import { IntradayPrice } from '../../core/hooks/useStocks';
import TOKEN_PUBLISHABLE from '../../common/constants/TOKEN_PUBLISHABLE';

/**
 * Handles HTTP requests of type "GET" to IEX API. Retuns an array with quotes.
 * @symbol : four letters string for a Nasdaq company. Ex: MSFT = Microsoft.
 * You need to create a IEX API user to get a publishable free token .
 * Check https://cloud.iexapis.com/ for more informations.
 */

const getCompanyQuoteBySymbol = (symbol = 'MSFT'): Promise<IntradayPrice[]> => {
  return new Promise((resolve, _reject) => {
    https.get(
      `${BASE_URL}${symbol}/intraday-prices/${TOKEN_PUBLISHABLE}`,
      (response) => {
        response.on('data', (data) => {
          // console.log(data);
          const string = new TextDecoder().decode(data);
          const sliced = string.slice(1, string.length - 1);
          // console.log(string);
          // console.log(sliced);
          // console.log('first sliced char', sliced[0]);
          // console.log('second sliced char', sliced[1]);
          // console.log('third sliced char', sliced[2]);
          // console.log('fouth sliced char', sliced[3]);
          // console.log('fifth sliced char', sliced[4]);
          const array = sliced.split('}');
          // console.log(array.length);
          const parseArray = array.map((e, i) => {
            if (i > 0 && i < array.length - 1) {
              const sli = e.slice(1);
              const joi = sli + '}';
              const obj = JSON.parse(joi);
              return obj;
            }
          });
          // console.log(parseArray.length);

          // console.log(sliced.split('}'));
          // console.log('last sliced char', sliced[sliced.length - 1]);
          // console.log(parseArray);
          parseArray.pop();
          const result = [
            ...parseArray.slice(1),
            ...parseArray.slice(parseArray.length - 1),
          ];
          // console.log(result.length);
          return resolve(result);
        });
      }
    );
  });
};

export default getCompanyQuoteBySymbol;
