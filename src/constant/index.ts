export const constant = {
  /**
   * リクエストURL
   */
  REQUEST_URL: {
    development: '',
    production: ``,
  },

  TITLE: 'next掲示板',

  /**
   * リクエストヘッダー
   */
  HEADER: {
    Authorization: 'Bearer abc',
    'Content-Type': 'application/json',
  },

  /**
   * ジャンル(マスタデータ)
   */
  GENRE: {
    0: '音楽・芸能',
    1: 'ゲーム',
    2: 'ネットゲーム',
    3: 'コンピュータ',
    4: 'インターネット',
    5: 'スポーツ',
    6: '同人',
    7: '旅行',
    8: '学校',
    9: '映画',
    10: 'アニメ',
    11: 'マンガ',
    12: 'ビジネス',
    13: '自動車',
    14: '学問',
    15: 'ニュース',
    16: 'ショッピング',
    17: 'ラジオ',
  },

  HOME_SET_COUNT: 'HOME_SET_COUNT',
  HOME_SET_DATA: 'HOME_SET_DATA',
  HOME_SET_PAGINATION: 'HOME_SET_PAGINATION',

  TALKS_SET_COUNT: 'TALKS_SET_COUNT',
  TALKS_SET_DATA: 'TALKS_SET_DATA',
  TALKS_SET_PAGINATION: 'TALKS_SET_PAGINATION',
};
