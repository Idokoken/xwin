import React from "react";
import { tablet } from "../Responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";

const Wrapper = styled.div`
  font-family: var(--primary-font);
  margin: 0;
  padding: 30px 0;
  background-color: black;
  color: white;

}
a:hover{
    color: rgba(219, 26, 165, 0.5);
    font-weight: 600;
 }
.content{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${tablet({ flexDirection: "row" })}
}
.item{
    flex: 100%;
    ${tablet({ flex: "22%" })}
}
.item h3{
    color: var(--primary-color);
    font-weight: 700;
    font-style: italic;
}
.item h4{

}
.footerItem{
  margin: 20px 0;
}
.footerItem a{
   text-decoration: none;
   color: rgba(255, 255, 255, 0.7);

}
.contact div{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.contact span{
   color: rgba(255, 255, 255, 0.7);
   font-size: 16px;
}
.contact .address-icon{
    height: 20px;
    width: 20px;
    color: white;
}
.item-brand{
      margin-right: 20px;
      ${tablet({ marginTop: "20px" })}
 }
.footerlogo{
    display: flex;
    align-items: center;
}
.footerIcons{
    display: flex;
    align-items: center;
    mrgin-left: 0;
}
.rule{
    border: 2px solid white;
}
.copyWright {
    display: flex;
    justify-content: center;
    align-items: center;
  }
.copyWright p{
    margin: 0;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
    padding: 15px;
    width: 35px;
    height: 35px;
    color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
    background: white;
}
.footerIcons, h5{
    margin: 20px;
    margin-left: 0;
}

.brand{
    height: 20px;
    width: 20px;
}

`;

function Footer() {
  return (
    <Wrapper>
      <div className="content mx-3">
        <div className="item">
          <h4>Company</h4>
          <div className="footerItem">
            <Link to="/">About Us</Link>
          </div>
          <div className="footerItem">
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div className="footerItem">
            <Link to="/about-us">FAQs</Link>
          </div>
          <div className="footerItem">
            <Link to="/gallery">Security</Link>
          </div>
        </div>
        <div className="item">
          <h4>Platfrom</h4>
          <div className="footerItem">
            <Link to="/contact-us">Buy Crypto</Link>
          </div>
          <div className="footerItem">
            <Link to="/contact-us">Sell Crypto</Link>
          </div>
          <div className="footerItem">
            <Link to="/contact-us">Market</Link>
          </div>
          <div className="footerItem">
            <Link to="/contact-us">Wallet</Link>
          </div>
        </div>
        <div className="item">
          <h4>Resources</h4>
          <div className="footerItem">
            <Link to="/terms-and-conditions">Terms of Service</Link>
          </div>
          <div className="footerItem">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="footerItem">
            <Link to="/contact-us">Portfolio</Link>
          </div>
        </div>

        <div className="item">
          <div className="footerlogo">
            <Link href="/">
              <img src="/images/brand.png" alt="brand" height="40" width="40" />
            </Link>
            <h3 className="ms-2">XWin</h3>
          </div>
          <div className="contact">
            <div className="my-5">
              <span>
                Trade, manage, and explore digital assets with a simple and
                secure crypto platform.
              </span>
            </div>

            <div className="mb-2">
              <i className="fa-solid fa-envelope-circle-check address-icon"></i>
              <span className="ms-3">Info@xwin.com</span>
            </div>
          </div>
          <h5>Follow XWin on</h5>
          <div className="footerIcons">
            <Link to="" target="_blank" className="icon">
              <i className="fa-brands fa-facebook brand"></i>
            </Link>
            <Link to="" target="_blank" className="icon">
              <i className="fa-brands fa-tiktok"></i>
            </Link>
            <Link to="" target="_blank" className="icon">
              <i className="fa-brands fa-instagram brand"></i>
            </Link>
            <Link to="" target="_blank" className="icon">
              <i className="fa-brands fa-youtube brand"></i>
            </Link>
          </div>
        </div>
      </div>
      <hr className="rule" />
      <div className="copyWright mt-5">
        <p className="">
          XWin &copy; <span>{new Date().getFullYear()}</span>, All Right
          Reserved to XWin
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
