const BASE_URL = '/api/facilities/add';

export function create(facility) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(facility)
    }).then(res => res.json());
  }