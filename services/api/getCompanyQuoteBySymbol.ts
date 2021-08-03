import https from 'https';

import { BASE_URL } from '../../common/constants';
import { CompanyQuote } from '../../core/hooks/types';
import TOKEN_PUBLISHABLE from '../../common/constants/TOKEN_PUBLISHABLE';

/**
 * Handles HTTP requests of type "GET" to IEX API. Returns company quotes object.
 * @symbol : four letters string for a Nasdaq company. Ex: MSFT = Microsoft.
 * You need to create a IEX API user to get a publishable free token .
 * Check https://cloud.iexapis.com/ for more informations.
 */

const getCompanyQuoteBySymbol = (symbol = 'MSFT'): Promise<CompanyQuote> => {
  return new Promise((resolve, _reject) => {
    https.get(`${BASE_URL}${symbol}/quote/${TOKEN_PUBLISHABLE}`, (response) => {
      response.on('data', (data) => {
        return resolve(JSON.parse(data));
      });
    });
  });
};

export default getCompanyQuoteBySymbol;
