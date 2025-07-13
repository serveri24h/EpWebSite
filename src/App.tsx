import './App.css';
import RouteEntries from './routes/route-entries';
import BackgroundSetter from './components/background/Background';
import PageHeader from './components/header/HeaderComponent';
import FullPageWrapper from './components/pagewrapper/PageWrapper'

function App() {
  return (
    <>
      <BackgroundSetter/>
      <FullPageWrapper>
        <PageHeader/>
        <RouteEntries/>
      </FullPageWrapper>
    </>
  );
}

export default App;
