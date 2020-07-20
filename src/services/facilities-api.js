const BASE_URL = '/api/facilities';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(facility) {
    return fetch(`${BASE_URL}/add`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(facility)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export function update(facility) {
    return fetch(`${BASE_URL}/${facility._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(facility)
    }).then(res => res.json());
}