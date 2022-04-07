import { Navigate, Route, Routes } from 'react-router-dom';
import { TopNav, Main, Footer } from 'govuk-react';

import Form from './pages/Form';
import Start from './pages/Start';
import Crown from './components/Crown'
import MyForm from './pages/MyForm';
import MultiStepForm from './pages/MultiStepForm/MultiStepForm';
import StepByStepForm from './pages/StepByStepForm/StepByStepForm';

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
            <Routes>
            <Route path="/start" element={<Start />} />
            <Route path="/form" element={<Form />} />
            <Route path="/myform" element={<MyForm />} />
            <Route path="/multistep_form" element={<MultiStepForm />} />
            <Route path="/booking_form/*" element={<StepByStepForm />} />
            <Route path="/" element={<Navigate to="/start" />} />
            </Routes>
        </Main>
      <Footer meta={<Footer.MetaCustom>This website is built solely for personal learning purpose. It is <b>not</b> related to any real-world government service.</Footer.MetaCustom>} />
    </div>
  );
}

export default App;
