import Header from './component/Hd';
import Footer from './component/Ft';
import Worksswiper from './component/Worksswiper';
import Preinterview from './component/Preinterview';

function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper></Worksswiper>
      <Preinterview leng="kr" contentid="portfolio" objnm="predb1" title="포트폴리오" num="0"></Preinterview>      
      <Preinterview leng="kr" contentid="me" objnm="predb2" title="그누보드" num="1"></Preinterview>
      <Preinterview leng="kr" contentid="preInterview" objnm="predb1" title="기획서" num="0"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
