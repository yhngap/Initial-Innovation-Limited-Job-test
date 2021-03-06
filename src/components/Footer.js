import React from 'react'
import '../App.css'

function Footer() {
    return (
        <footer class="footer" role="contentinfo">
            <h2 class="footer-title-sr-only">頁腳開始</h2>
                <div class="container">
                    <section class="footer-info">
                        <article class="footer-info-col footer-info-col--small footer-info-col--logo" data-section-type="footer-webPages">
                            <a href="https://olay.com.hk/">
                                <img class="footer-logo-image" src="https://olay.com.hk/content/common/logo-olay-white.png"></img>
                            </a>
                        </article>
                        <article class="footer-info-col footer-info-col--small footer-info-col--social"
                            data-section-type="footer-webPages">
                                <div class="footer-social">
                                    <h3 class="footer-info-heading">關注我們</h3>
                                                            </div>
                        </article>
                        <article class="footer-info-col footer-info-col--small footer-info-col--pages1" data-section-type="footer-webPages">
                                <h3 class="footer-info-heading js-footer-info-heading">客戶服務</h3>
                                <ul class="footer-info-list">
                                        <li>
                                            <a href="https://olay.com.hk/orderstatus">訂單狀態</a>
                                        </li>
                                        <li>
                                            <a href="https://olay.com.hk/exchange-refund-policy">退貨 / 換貨政策</a>
                                        </li>
                                        <li>
                                            <a href="https://olay.com.hk/delivery">送貨</a>
                                        </li>
                                        <li>
                                            <a href="https://olay.com.hk/faq">常見問題 </a>
                                        </li>
                                        <li>
                                            <a href="https://olay.com.hk/purchase-policy">產品購買須知及注意事項</a>
                                        </li>
                                </ul>
                        </article>
                        <article class="footer-info-col footer-info-col--small footer-info-col--pages2" data-section-type="footer-webPages">
                                <h3 class="footer-info-heading">
                                    <a href="https://www.pg.com/privacy/chineseT/privacy_statement.shtml " target="_blank">隱私權</a>
                                </h3>
                                <div class="footer-info-list"></div>
                        </article>
                        <article class="footer-info-col footer-info-col--small footer-info-col--pages3" data-section-type="footer-webPages">
                                <h3 class="footer-info-heading">
                                    <a href="https://olay.com.hk/contactus" target="_blank">聯繫我們</a>
                                </h3>
                                <div class="footer-info-list"></div>
                        </article>
                    </section>
                    <div class="footer-copyright">
                        <p class="powered-by">Copyright &copy; 2021 OLAY <span class="rights">All rights reserved.</span> </p>
                        <ul class="footer-bottom-list">
                            <li>
                                <a href="https://www.pg.com/privacy/chineseT/privacy_statement.shtml#iba" target="_blank">AdChoices<img class="AdChoices-image" src="https://cdn11.bigcommerce.com/s-f8et57gva1/stencil/9dfd2210-5a17-0139-8bd2-02c05056eb2b/e/6d19d740-3078-0139-7b17-0242ac110007/img/AdChoices.png" /></a>
                            </li>
                            <li class="and-item">
                                        <a href="https://www.pg.com/zh_HK/terms_conditions/index.shtml" target="_blank">條款</a>
                                        <a href="https://www.pg.com/zh_HK/terms_conditions/index.shtml" target="_blank">協議</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
