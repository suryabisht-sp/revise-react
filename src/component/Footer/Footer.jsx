import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Top Products</h3>
                <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li>Jobs</li>
                    <li>Brand Assets</li>
                    <li>Investor Relations</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Features</h3>
                <ul>
                    <li>Jobs</li>
                    <li>Brand Assets</li>
                    <li>Investor Relations</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <ul>
                    <li>Guides</li>
                    <li>Research</li>
                    <li>Experts</li>
                    <li>Agencies</li>
                </ul>
            </div>
            <div class="footer-section newsletter">
                <h3>Newsletter</h3>
                <p>You can trust us. we only send promo offers,</p>
                <div className='form-subscription'>
                <input type="email" placeholder="Your Email Address"/>
                <button className='btn-footer'>SUBSCRIBE</button>
            </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright © 2024 All rights reserved | This template is made with ♥ by a developer</p>
            <div class="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <path d="M22 2.03C22 1.09 21.1 0 20.09 0H3.91C2.9 0 2 1.09 2 2.03v19.94C2 22.91 2.9 24 3.91 24H12.5v-9.29H9.42v-3.7h3.08V8.1c0-3.07 1.88-4.75 4.63-4.75 1.32 0 2.46.1 2.79.14v3.23h-1.91c-1.5 0-1.79.72-1.79 1.77v2.31h3.6l-.47 3.7h-3.13V24h6.14c1.01 0 1.91-.89 1.91-1.97V2.03z" fill="#1877F2"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <path d="M23.643 4.937c-.835.37-1.73.62-2.675.733a4.698 4.698 0 0 0 2.048-2.592 9.344 9.344 0 0 1-2.964 1.13 4.697 4.697 0 0 0-8.022 4.284A13.303 13.303 0 0 1 1.644 3.15a4.688 4.688 0 0 0-.636 2.363c0 1.63.83 3.067 2.1 3.91a4.675 4.675 0 0 1-2.125-.588v.06a4.696 4.696 0 0 0 3.768 4.599 4.683 4.683 0 0 1-2.12.08 4.696 4.696 0 0 0 4.384 3.26A9.4 9.4 0 0 1 0 19.54a13.215 13.215 0 0 0 7.18 2.106c8.612 0 13.307-7.134 13.307-13.308 0-.204-.004-.41-.014-.613A9.51 9.51 0 0 0 24 4.59a9.64 9.64 0 0 1-2.357.647z" fill="#1DA1F2"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.804 8.205 11.388.599.109.82-.26.82-.577v-2.257c-3.338.727-4.048-1.606-4.048-1.606-.548-1.396-1.338-1.768-1.338-1.768-1.094-.749.083-.734.083-.734 1.21.084 1.84 1.243 1.84 1.243 1.075 1.842 2.823 1.309 3.51 1.002.11-.779.42-1.309.764-1.61-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.468-2.376 1.235-3.214-.124-.303-.535-1.53.117-3.175 0 0 1.005-.322 3.296 1.232.953-.265 1.978-.397 3.003-.402 1.019.005 2.037.138 2.99.403 2.295-1.557 3.287-1.232 3.287-1.232.654 1.646.241 2.864.118 3.167.767.838 1.237 1.903 1.237 3.214 0 4.609-2.805 5.627-5.478 5.923.43.372.82 1.103.82 2.227v3.283c0 .319.217.691.825.576C20.563 21.803 24 17.303 24 12 24 5.373 18.627 0 12 0z" fill="#181717"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <path d="M20.452 20.452h-3.906v-5.572c0-1.329-.028-3.049-1.858-3.049-1.855 0-2.141 1.469-2.141 2.985v5.637H8.609V9.671h3.742v1.56h.051c.521-1.019 1.796-2.096 3.698-2.096 3.954 0 4.683 2.605 4.683 6.001v5.775zM5.395 7.793c-1.233 0-2.244 1.01-2.244 2.233 0 1.222 1.011 2.244 2.244 2.244 1.233 0 2.245-1.021 2.245-2.244 0-1.222-1.012-2.233-2.245-2.233zm1.886 12.659H3.509V9.671h3.772v10.781zM22 0H2C.897 0 0 .897 0 2v20c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2zm0 22H2V2h20v20z" fill="#0077B5"/>
</svg>

            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer