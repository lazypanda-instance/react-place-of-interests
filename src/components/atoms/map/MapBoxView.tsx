import { IGeoLocation } from "../../../services/GeoService";
import styles from './MapBoxView.module.scss';
import mapboxgl, { Marker, Popup } from "mapbox-gl";
import { memo, useEffect, useRef, useState } from "react";
import { CustomContainer } from "../../../styles/theme/global";

type Props = {
    position: IGeoLocation | undefined
}

const MapBoxView = (props: Props) => {
    const [map, setMap] = useState<mapboxgl.Map>();
    const mapNode = useRef(null);

    useEffect(() => {
        const node = mapNode.current;
        if (!globalThis.document || node === null) return;

        let latitude = props.position?.latitude ? props.position?.latitude : 0;
        let longitude = props.position?.longitude ? props.position?.longitude : 0;

        const mapboxMapView = new mapboxgl.Map({
            container: node,
            style: 'mapbox://styles/mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGF6eXBhbmRhdGVjaCIsImEiOiJjbDIwbmNzaWIweTBpM2tucmd2NWVmcmUyIn0.xHRYdqThrlxR2UqVXXwDGw',
            center: [longitude, latitude],
            zoom: 16
        });
        setMap(mapboxMapView);

        showAnnotation(mapboxMapView, longitude, latitude);

        return () => {
            mapboxMapView.remove();
        }
    }, [props.position]);

    const showAnnotation = (mapView: any, long: number, lat: number) => {
        if (mapView) {
            //   this.removeAnnotation();

            const markerHTML = document.createElement('div');
            markerHTML.className = styles['marker'];
            markerHTML.id = 'marker-point';
            // markerHTML.onclick = this.onMarkerClick.bind(undefined, iteratedObject);

            const marker = new Marker(markerHTML).setLngLat({lon: long, lat: lat});
            marker.addTo(mapView);

            const popUp = new Popup({
                closeButton: true,
                closeOnClick: false,
                anchor: 'bottom',
                offset: 25
            });
            popUp.setLngLat({lon: long, lat: lat});
            const popUpTitle = 'Your Location'
            const htmlText = `<div><p><strong>${popUpTitle}</strong></p></div>`;
            popUp.setHTML(htmlText).addTo(mapView);
        }
    }

    return (
        <>
            <CustomContainer ref={mapNode} className={styles['mapStyle']}></CustomContainer>
        </>
    );
}

export default memo(MapBoxView);