import { IGeoLocation } from "../../../services/GeoService";
import MapBoxView from "../../atoms/map/MapBoxView";

type Props = {
    position: IGeoLocation | undefined
}

const MapWithSearch = (props: Props) => {
    return (
        <>
        <MapBoxView position={props?.position}></MapBoxView>
        </>
    );
}

export default MapWithSearch;