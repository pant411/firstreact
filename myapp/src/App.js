import './App.css';
import Header from './Header';

function App() {
  return(
    <div>
      <Header title = 'Thaivb.NET' />

      <div className="App">
        <h1>Hello Main Component</h1>
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
    </div>

  );
}

export default App;
