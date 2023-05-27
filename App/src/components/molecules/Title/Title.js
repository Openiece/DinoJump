import "./Title.css";

// assets
import Mario from "../../../assets/img/gif/bg.png";

const Title = () => {
  return (
    <div className="title-container">
        <img style={{borderRadius:'50px',}} src={Mario} alt="" className="mario-logo"/>
        <h1 className="title">Dino Jump</h1>
    </div>
  )
}
export default Title;