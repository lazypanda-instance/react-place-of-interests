import { Col, Container, Row } from "react-bootstrap";
import { IGeoLocation } from "../../../services/GeoService";
import MapBoxView from "../../atoms/map/MapBoxView";

type Props = {
    position: IGeoLocation | undefined
}

const MapWithSearch = (props: Props) => {
    return (
        <Row>
            <Col xs={12} md={6}>
                <h1>My Place - {props?.position?.latitude}, {props?.position?.longitude} </h1>
                <MapBoxView position={props?.position}></MapBoxView>
            </Col>
        </Row>
    );
}

export default MapWithSearch;