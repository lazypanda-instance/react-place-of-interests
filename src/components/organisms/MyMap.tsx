import { IGeoLocation } from "../../services/GeoService";
import MapWithSearch from "../molecules/map-box-with-search/MapWithSearch";

type Props = {
    position: IGeoLocation | undefined
}

const MyMap = (props: Props) => {
    return (
        <>
            <MapWithSearch position={props?.position}></MapWithSearch>
        </>
    );
}

export default MyMap;