import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="https://github.com/Openiece" target="_blank" rel="noreferrer" className="copyright-link">Openiece</a>
    </div>
  )
}
export default Footer