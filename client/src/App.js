import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InternalMedicine from './pages/InternalMedicine';
import Cardiology from './components/InternalMedicine/Cardiology';
import Pulmonology from './components/InternalMedicine/Pulmonology';
import Gastroenterology from './components/InternalMedicine/Gastroenterology';
import Endocrinology from './components/InternalMedicine/Endocrinology';
import Nephrology from './components/InternalMedicine/Nephrology';
import Surgery from './pages/Surgery';
import PreoperativeCare from './components/Surgery/PreoperativeCare';
import Pediatrics from './pages/Pediatrics';
import Neonatology from './components/Pediatrics/Neonatology';
import ObGyn from './pages/ObGyn';
import PregnancyComplications from './components/ObGyn/PregnancyComplications';
import Psychiatry from './pages/Psychiatry';
import MoodDisorders from './components/Psychiatry/MoodDisorders';
import Biostats from './pages/Biostats';
import StudyDesigns from './components/Biostats/StudyDesigns';
import StudyPlan from './pages/StudyPlan';
import QuizSection from './pages/QuizSection';
import UserAccount from './pages/UserAccount';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/internal-medicine" exact component={InternalMedicine} />
        <Route path="/internal-medicine/cardiology" component={Cardiology} />
        <Route path="/internal-medicine/pulmonology" component={Pulmonology} />
        <Route path="/internal-medicine/gastroenterology" component={Gastroenterology} />
        <Route path="/internal-medicine/endocrinology" component={Endocrinology} />
        <Route path="/internal-medicine/nephrology" component={Nephrology} />
        <Route path="/surgery" exact component={Surgery} />
        <Route path="/surgery/preoperative-care" component={PreoperativeCare} />
        <Route path="/pediatrics" exact component={Pediatrics} />
        <Route path="/pediatrics/neonatology" component={Neonatology} />
        <Route path="/obgyn" exact component={ObGyn} />
        <Route path="/obgyn/pregnancy-complications" component={PregnancyComplications} />
        <Route path="/psychiatry" exact component={Psychiatry} />
        <Route path="/psychiatry/mood-disorders" component={MoodDisorders} />
        <Route path="/biostats" exact component={Biostats} />
        <Route path="/biostats/study-designs" component={StudyDesigns} />
        <Route path="/study-plan" component={StudyPlan} />
        <Route path="/quiz" component={QuizSection} />
        <Route path="/account" component={UserAccount} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
