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
                <MyMap position={currentPosition}></MyMap>
            }
        </PlaceSection>
    );
}

export default FindPlace;