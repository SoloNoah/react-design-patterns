import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';
function App() {
  const [likesArr, setLikesArr] = useState([]);

  useEffect(() => {
    const localLikes = localStorage.getItem('likes');
    if (localLikes) {
      setLikesArr(JSON.parse(localLikes));
    } else setLikesArr([]);
  }, []);

  const TLV = { Key: '215854', LocalizedName: 'Tel Aviv' };
  const JRSM = { Key: '215852', LocalizedName: 'Jerusalem' };
  return (
    <div className='App'>
      <h1>Render prop</h1>
      <Card city={TLV} likes={likesArr} setLikesArr={setLikesArr} />
      <Card city={JRSM} likes={likesArr} setLikesArr={setLikesArr} />
    </div>
  );
}

export default App;
