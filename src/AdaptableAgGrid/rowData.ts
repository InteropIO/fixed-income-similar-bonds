export interface SimilarBond {
  Id: number;
  ISIN: string;
  Description: string;
  Security: string;
  Yield: number;
  Maturity: number;
  TransactionType: 'BID' | 'ASK';
  Venue: string;
  Broker: string;
  Price: number;
  Currency: string;
  IssuerLEI: string;
  LEI: string;
  Industry: string;
}

export const rowData: SimilarBond[] = [
  {
    Id: 1,
    ISIN: 'XS1782803503',
    Description: 'SHBASS 1 1/4 03/02/28',
    Security: 'SHBASS',
    Yield: 1.25,
    Maturity: 1835557176000,
    TransactionType: 'BID',
    Venue: 'MA',
    Broker: 'JP',
    Price: 101.1,
    Currency: 'EUR',
    IssuerLEI: 'Svenska Handelsbanken AB',
    LEI: 'NHBDILHZTYCNBV5UYZ31',
    Industry: 'Major Banks',
  },
  {
    Id: 2,
    ISIN: 'XS1794344827',
    Description: 'DNBNO 1 1/8 03/20/28',
    Security: 'DNBNO',
    Yield: 1.125,
    Maturity: 1837112376000,
    TransactionType: 'BID',
    Venue: 'UBS',
    Broker: 'UBS',
    Price: 101,
    Currency: 'EUR',
    IssuerLEI: 'DNB Bank ASA',
    LEI: '549300GKFG0RYRRQ1414',
    Industry: 'Major Banks',
  },
  {
    Id: 3,
    ISIN: 'XS2250008245',
    Description: 'MS 0.495 10/26/29',
    Security: 'MS',
    Yield: 0.495,
    Maturity: 1887656376000,
    TransactionType: 'ASK',
    Venue: 'CITI',
    Broker: 'CITI',
    Price: 101.3,
    Currency: 'EUR',
    IssuerLEI: 'Morgan Stanley',
    LEI: 'IGJSJL3JD5P30I6NJZ34',
    Industry: 'Investment Banks/Brokers',
  },
  {
    Id: 4,
    ISIN: 'XS2524143554',
    Description: 'RABOBK 3 7/8 11/30/32',
    Security: 'RABOBK',
    Yield: 3.875,
    Maturity: 1985374776000,
    TransactionType: 'ASK',
    Venue: 'MA',
    Broker: 'GS',
    Price: 99,
    Currency: 'EUR',
    IssuerLEI: 'Cooperatieve Rabobank UA',
    LEI: 'DG3RU1DBUFHT4ZF9WN62',
    Industry: 'Regional Banks',
  },
  {
    Id: 5,
    ISIN: 'FR001400E797',
    Description: 'BPCEGP 4 11/29/32',
    Security: 'BPCEGP',
    Yield: 4,
    Maturity: 1985288376000,
    TransactionType: 'ASK',
    Venue: 'TWEB',
    Broker: 'UBS',
    Price: 104,
    Currency: 'EUR',
    IssuerLEI: 'BPCE SA',
    LEI: '9695005MSX1OYEMGDF46',
    Industry: 'Regional Banks',
  },
  {
    Id: 6,
    ISIN: 'XS2432530637',
    Description: 'SANSCF 0 1/2 01/14/27',
    Security: 'SANSCF',
    Yield: 0.5,
    Maturity: 1799873976000,
    TransactionType: 'ASK',
    Venue: 'NEPTUNE',
    Broker: 'HSBC',
    Price: 92,
    Currency: 'USD',
    IssuerLEI: 'Santander Consumer Finance SA',
    LEI: '5493000LM0MZ4JPMGM90',
    Industry: 'Finance/Rental/Leasing',
  },
  {
    Id: 7,
    ISIN: 'DE000BHY0SP0',
    Description: 'BHH 3 05/11/26',
    Security: 'BHH',
    Yield: 3,
    Maturity: 1778446776000,
    TransactionType: 'BID',
    Venue: 'Bloomberg',
    Broker: 'BARC',
    Price: 106,
    Currency: 'USD',
    IssuerLEI: 'Berlin Hyp AG',
    LEI: '529900C4RSSBWXBSY931',
    Industry: 'Finance/Rental/Leasing',
  },
  {
    Id: 8,
    ISIN: 'US172967LP48',
    Description: 'C 3.668 07/24/28',
    Security: 'C',
    Yield: 3.668,
    Maturity: 1847998776000,
    TransactionType: 'BID',
    Venue: 'NEPTUNE',
    Broker: 'MS',
    Price: 103.5,
    Currency: 'USD',
    IssuerLEI: 'Citigroup Inc.',
    LEI: '6SHGI4ZSSLCXXQSBB395',
    Industry: 'Major Banks',
  },
];