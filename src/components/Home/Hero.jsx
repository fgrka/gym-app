
import  heroImg from "../../assets/hero.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <h1>NO PAIN<br/> NO GAIN<br/></h1>
            <img src={heroImg} alt="workout man" />
        </div>
    );
};

export default Hero;