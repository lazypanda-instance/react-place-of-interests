import { Container } from 'react-bootstrap';
import Footer from './components/organisms/Footer';
import Layout from './components/organisms/Layout';

const App = (props: any) => {
  return (
    <Layout {...props}>
      <Container>Layout</Container>
      <Footer />
    </Layout>
  );
}

export default App;
