import Header from './component/Hd';
import Footer from './component/Ft';
import Worksswiper from './component/Worksswiper';
import Preinterview from './component/Preinterview';

function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper></Worksswiper>
      <Preinterview contentid="portfolio" title="포트폴리오" num="0"></Preinterview>      
      <Preinterview contentid="me" title="그누보드" num="1"></Preinterview>
      <Preinterview contentid="preInterview" title="기획서" num="0"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
