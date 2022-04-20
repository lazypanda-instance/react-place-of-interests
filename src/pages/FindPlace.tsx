import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyMap from "../components/organisms/MyMap";
import { getGeoData, IGeoLocation } from "../services/GeoService";
import { useViewPortSize } from "../services/HelperService";
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

    let { windowWidth, isMobile } = useViewPortSize();


    return (
        <PlaceSection>
            {currentPosition && 
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <MyMap position={currentPosition}></MyMap>
                        </Col>
                        <Col>
                            <>Place details - News - nearest place to visit</>
                        </Col>
                    </Row>
                </Container>
            }
        </PlaceSection>
    );
}

export default FindPlace;