import logo from './logo.svg';
import './App.css';
import { KakaoMap } from './KakaoMap.js';

function App() {
  return (
    <div className="App">
      <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=04ad023ee1f6e53bdc0a6f4d48b6209e"></script>
      <KakaoMap />
    </div>
  );
}

export default App;