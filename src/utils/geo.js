export const INVALID_POSITION = {
    accuracy: -1,
    coords: {
        lat: 55.755826,
        lng: 37.6173,
    },
};

export const getGeolocation = fn => {
    if (!window.navigator.geolocation) {
        fn(INVALID_POSITION);
        return;
    }
    window.navigator.geolocation.getCurrentPosition(position => {
        fn({
            accuracy: position.coords.accuracy,
            coords: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            },
        });
    });
};
