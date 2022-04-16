import { IGeoLocation } from "../../../services/GeoService";
import styles from './MapBoxView.module.scss';
import mapboxgl from "mapbox-gl";
import { memo, useEffect, useRef, useState } from "react";
import { CustomContainer } from "../../../styles/theme/global";

type Props = {
    position: IGeoLocation | undefined
}

const MapBoxView = (props: Props) => {
    const [map, setMap] = useState<mapboxgl.Map>();
    const mapNode = useRef(null);

    console.log('Map initialize');

    useEffect(() => {
        const node = mapNode.current;
        if (typeof window === 'undefined' || node === null) return;

        let latitude = props.position?.latitude ? props.position?.latitude : 0;
        let longitude = props.position?.longitude ? props.position?.longitude : 0;

        const mapboxMapView = new mapboxgl.Map({
            container: node,
            style: 'mapbox://styles/mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGF6eXBhbmRhdGVjaCIsImEiOiJjbDIwbmNzaWIweTBpM2tucmd2NWVmcmUyIn0.xHRYdqThrlxR2UqVXXwDGw',
            center: [longitude, latitude],
            zoom: 10
        });
        setMap(mapboxMapView);

        return () => {
            mapboxMapView.remove();
            console.log('Map removed');
        }
    }, [props.position]);

    return (
        <>
        <CustomContainer ref={mapNode} style={{ width: "500px", height: "500px" }}></CustomContainer>
        </>
    );
}

export default memo(MapBoxView);