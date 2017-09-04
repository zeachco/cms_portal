export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};

const defaultSpace = 'zeachco.com';
const defaultBackend = `https://${defaultSpace}/`;

export const SETTINGS = {
    backend: defaultBackend,
    space: defaultSpace,
    contentType: 'application/json',
};

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
    return fetch(request, {
        credentials: 'same-origin',
    }).then(xhr => xhr.json());
};

export const backend = (service, method = METHODS.GET, data = {}) => {
    const url = `${SETTINGS.backend}api/${service}`;
    return custom(url, method, data);
};

// Dev helpers
if (process.env.NODE_ENV !== 'production') {
    window.SETTINGS = SETTINGS;
    SETTINGS.backend = 'http://127.0.0.1:8080/';
    const fallbackToProd = () => {
        console.error('Local backend did not respond :(\n\n' + // eslint-disable-line no-console
            'CAREFULL!\n API calls will be redirected to production server.\n\n' +
            'If you want to use a local backend, start it then refresh this app');
        SETTINGS.backend = defaultBackend;
    };
    backend('wtf').then(response => {
        if (response.space !== defaultSpace) fallbackToProd();
    }).catch(fallbackToProd);
}

export default backend;
