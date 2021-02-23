import React,{useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import axios from 'axios'
function App() {

  const [apiResponse, setAPIResponse] = useState("");

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('http://localhost:9000/testAPI')
      setAPIResponse(response.apiResponse)
    }
    
fetchData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <p className="App-intro">{apiResponse}</p>

    </div>
  );
}

export default App;
