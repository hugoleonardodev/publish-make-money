import https from 'https';
import { ClientRequest } from 'http';

import { BASE_URL } from '../../common/constants';

import TOKEN_PUBLISHABLE from '../../common/constants/TOKEN_PUBLISHABLE';

/**
 * Handles HTTP requests of type "GET" to IEX API.
 * @symbol : four letters string for a Nasdaq company. Ex: MSFT = Microsoft.
 * You need to create a IEX API user to get a publishable free token .
 * Check https://cloud.iexapis.com/ for more informations.
 */

const getCompanyQuoteBySymbol = (symbol = 'MSFT'): Promise<ClientRequest> => {
  return new Promise((resolve, _reject) => {
    https.get(`${BASE_URL}${symbol}/quote/${TOKEN_PUBLISHABLE}`, (response) => {
      response.on('data', (data) => {
        return resolve(JSON.parse(data));
      });
    });
  });
};

export default getCompanyQuoteBySymbol;
