import React from 'react';
import Heart from './Heart';
import Rating from './Rating';
import {productdata} from './Data.js'

function Product(index) {
  console.log(index)
  const position = index + 1
  return (
    <>
    <li class="product">
      <article class="card " data-event-type="list" data-entity-id="" data-position={position} data-name={productdata[index]['cardtitle']} data-product-category={productdata[index]['category']} data-product-brand={productdata[index]['brand']} data-product-price={productdata[index]['price_']}>
        <figure class="card-figure">
          <a href={productdata[index]['href']} data-event-type="product-click"> 
            <div class="card-img-container">
              <img src={productdata[index]['imghref']} alt={productdata[index]['title']} title={productdata[index]['title']} data-sizes="auto"
              srcset={productdata[index]['srcset']}
              data-srcset={productdata[index]['datasrcset']}
              class="lazyload card-image"/>
            </div>
          </a>
          <Heart />
        </figure>
        <div class="card-body">
          <h3 class="card-title">
            <a href={productdata[index]['href']} data-event-type="product-click">{productdata[index]['cardtitle']}</a>
          </h3>
          <p class="card-description">{productdata[index]['carddescript']}</p>
          <div class="card-price" data-test-info-type="price">
            <div class="price-section price-section--withoutTax" >
              <span class="price-label" ></span>
              <span class="price-now-label" style={{display:'none' }}></span>
              <span data-product-price-without-tax class="price price--withoutTax">{productdata[index]['price']}</span>
            </div>
          </div>
          {Rating(index) }
          <div class="card-actions">
            <div class="js-product-has-options" data-product-id={productdata[index]['id']}>            
              <button type="button" data-url="/cart.php?action=add&amp;product_id=128&amp;attribute[135]=136" data-event-type="product-click" class="button button--primary event_buy_now_add_to_cart js-card-addToCart" data-product-id="128" data-card-product-sku="82327679" data-action-detail="82327679" data-wait-message="加入購物車…">加入購物車</button>
            </div> 
            <a href={productdata[index]['href']} data-event-type="product-click" class="button-link" data-product-id={productdata[index]['id']}>
              <span>產品詳情</span>
            </a>
          </div>  
        </div>
      </article>
    </li>
    </>
  );
}

export default Product;
