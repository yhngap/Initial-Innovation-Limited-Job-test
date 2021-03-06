import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Product from './components/Product';
import Breadcrumb from './components/Breadcrumb';
import Listcount from './components/Listcount';
import Footer from './components/Footer';
import {productdata} from './components/Data'

function App() {
  const datalength = productdata.length
  const [...result] = Array(datalength).keys();
  return ( 
    <body class="page-category">
      <div class="body" id='main-content' data-currency-code="HKD" data-currency-token="$">
        <div class="container"></div>
        <div class="category-banner"></div>
        <div class="container">
          <Breadcrumb />
          <main class="full-page-content" id="product-listing-container">
            <Listcount />
            <form action="/compare" method="POST" data-list-name="Category: 暢銷產品" data-product-compare="">
              <ul class="productGrid">
                {/* ...{productprinter.map(i =>  {{Product(1)};})} */}
                {result.map(i => {return Product(i);})} 
              </ul>
            </form>
          </main>
        </div>
        <Footer />
      </div>
    </body>

  );
}

export default App;
