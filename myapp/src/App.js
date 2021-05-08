import logo from './logo.svg';
import './App.css';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  return(
    <div className="App">
      <h1>Hello ReactWorld!!!</h1>
      <table border="1">
        <tr>
          <td>รหัสสินค้า</td>
          <td>ชื่อหนังสือ</td>
          <td>ราคาสินค้า</td>
        </tr>
        <tr>
          <td>0788</td>
          <td>การใช้งานภาษา c#</td>
          <td>355</td>
        </tr>   
        <tr>
          <td>1788</td>
          <td>การใช้งานภาษา javascript</td>
          <td>112</td>
        </tr>        
      </table>
    </div>
  );
}

export default App;
