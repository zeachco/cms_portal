export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};

export const SETTINGS = {
    backend: 'https://zeachco.com/',
    space: 'zeachco.com',
    contentType: 'application/json',
};
if (process.env.NODE_ENV !== 'production') {
    window.SETTINGS = SETTINGS;
    SETTINGS.backend = 'http://127.0.0.1:8080/';
}

export const custom = (url, method = METHODS.GET, data = {}) => {
    const headers = new Headers({
        'Content-Type': SETTINGS.contentType,
        'x-space': SETTINGS.space,
    });
    const options = {
        method,
        headers,
    };
    if (method !== METHODS.GET) options.body = JSON.stringify(data);
    const request = new Request(url, options);
    return fetch(request).then(xhr => xhr.json());
};

export const backend = (service, method = METHODS.GET, data = {}) => {
    const url = `${SETTINGS.backend}api/${service}`;
    return custom(url, method, data);
};

export default backend;
