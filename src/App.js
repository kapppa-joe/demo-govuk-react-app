import { TopNav, Main, Footer, SearchBox } from 'govuk-react';
import Crown from './components/Crown'
import DefaultBreadCrumbs from './components/DefaultBreadCrumbs';
import Start from './pages/Start';

function App() {
  return (
    <div className="App">
      <TopNav 
        company={
          <TopNav.Anchor href="#" target="new">
          <TopNav.IconTitle icon={<Crown height="32" width="36"/>}>GOV.UK</TopNav.IconTitle>
          </TopNav.Anchor>
        } 
        serviceTitle={<TopNav.NavLink href="#">Alpaca Appointment Service</TopNav.NavLink>}
      />
        <Main>
          <DefaultBreadCrumbs />
          <Start />
        </Main>
      <Footer meta={<Footer.MetaCustom>This website is built solely for personal learning purpose. It is <b>not</b> related to any real-world government service.</Footer.MetaCustom>} />
    </div>
  );
}

export default App;
