export interface IGeoLocation {
    isSupported: boolean;
    isAccepted: boolean;
    latitude: number;
    longitude: number;
    position: GeolocationPosition | null;
    error?: GeolocationPositionError | null;
}

export const getGeoData = () => {
    return new Promise<IGeoLocation>((resolve, error) => {
        let myGeoData: IGeoLocation;

        if (!navigator.geolocation) {
            myGeoData = {
                isSupported: false,
                isAccepted: false,
                latitude: 0,
                longitude: 0,
                position: null
            }
            error(myGeoData);
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                myGeoData = {
                    isSupported: true,
                    isAccepted: true,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    position: position
                }

                resolve(myGeoData);
            }, (positionError) => {
                myGeoData = {
                    isSupported: true,
                    isAccepted: false,
                    latitude: 0,
                    longitude: 0,
                    position: null,
                    error: positionError
                }

                error(myGeoData);
            });
        }
    });


}