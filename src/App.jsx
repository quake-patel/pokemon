import DetailPage from "./DetailPage";
import Home from "./Home";
import SeasonInfo from "./SeasonInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seasoninfo' element={<SeasonInfo />} />
        <Route path='/detailPage' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
