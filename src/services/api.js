export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};

export const BACKEND_URL = 'https://zeachco.com/';
// export const BACKEND_URL = '/';
export const SPECIAL_PARAMS = '?_domain_=zeachco.com';
// export const SPECIAL_PARAMS = '';

export const backend = (service, method = METHODS.GET, data = {}) => {
    const url = `${BACKEND_URL}api/${service}${SPECIAL_PARAMS}`;
    const options = {method};
    if (method !== METHODS.GET) options.body = JSON.stringify(data);
    const request = new Request(url, options);
    request.headers.set('Content-Type', 'application/json');
    return fetch(request).then(xhr => xhr.json());
};

export const custom = (url, method = METHODS.GET, data = {}) => {
    const options = {method};
    if (method !== METHODS.GET) options.body = JSON.stringify(data);
    const request = new Request(url, options);
    return fetch(request).then(xhr => xhr.json());
};

export default backend;
