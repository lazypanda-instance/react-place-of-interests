import { useEffect, useState } from "react";
import MyMap from "../components/organisms/MyMap";
import { getGeoData, IGeoLocation } from "../services/GeoService";
import { PlaceSection } from "../styles/theme/global";

const FindPlace = () => {
    const [currentPosition, setCurrentPosition] = useState<IGeoLocation>();
    useEffect(() => {
        const getMyCurrentPosition = async () => {
            const geoData = await getGeoData();
            setCurrentPosition(geoData);
        }

        getMyCurrentPosition();
    }, []);


    return (
        <PlaceSection>
            {currentPosition && 
                <div>
                    <h1>My Place - {currentPosition?.latitude}, {currentPosition?.longitude} </h1>
                    <MyMap position={currentPosition}></MyMap>
                </div>
            }
        </PlaceSection>
    );
}

export default FindPlace;