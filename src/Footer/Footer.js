// import logo from './logo.svg';
// import './App.css';

function Footer() {
  return (
    // <!-- This is a Semantic HTML Change -->
    // <!-- This is an A11y Change -->
    <footer className="bottom" role="contentinfo">
        <div className="center">
            <p>All rights reserved &copy; Fabio Nolasco</p>
            {/* <!-- This is an A11y Change --> */}
            <a href="#top" aria-label="Return to top">Return to top</a>
        </div>
    </footer>
  );
}

export default Footer;
