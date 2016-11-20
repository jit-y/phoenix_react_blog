import { CALL_API } from 'redux-api-middleware';

export const fetchArticles = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/articles',
      method: 'GET',
      types: [
        'REQUEST_FETCH_POSTS',
        {
          type: 'SUCCESS_FETCH_POSTS',
          payload: (action, store, res) => res.json().then(payload => payload),
        },
        'FAILURE_FETCH_POSTS',
      ],
    }
  }
}

export const addArticle = (payload) => {
  return {
    [CALL_API]: {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      endpoint: '/api/articles',
      method: 'POST',
      body: JSON.stringify(payload),
      types: [
        'REQUEST_ADD_ARTICLE',
        {
          type: 'SUCCESS_ADD_ARTICLE',
          payload: (action, store, res) => res.json().then(payload => payload),
        },
        'FAILURE_ADD_ARTICLE',
      ],
    }
  }
}
