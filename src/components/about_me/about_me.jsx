import './about_me.css'
import AboutMeVector141 from '../../assets/img/Vector 141.png'
import AboutMeLightbulb from '../../assets/img/lightbulb.png'
import AboutMeVector186 from '../../assets/img/Vector 186.png'
import AboutMeGroup62 from '../../assets/img/Group 62.png'
import AboutMeDoodleItems from '../../assets/img/doodle.png'
import AboutMeEllipse3 from '../../assets/img/Ellipse 3.png'


function AboutMe() {
    return(
        <div className='about_me'>
            <div className="about-me-left">
                <div className="about-me-box1">
                    <img src={AboutMeVector141} alt="Vector 141" />
                </div>
                <div className="about-me-box2">
                    <h1>About <span className='box2-me'>me</span></h1>
                    <img src={AboutMeLightbulb} alt="lighblub" />
                </div>
                <div className="about-me-box3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <a href="#">Read more</a></p>
                </div>
                <div className="about-me-box4">
                    <img src={AboutMeVector186} alt="Vector 187" />
                </div>
            </div>
            <div className="about-me-right">
                <div className="about-me-doodle">
                    <img src={AboutMeDoodleItems} alt="doodle items" />
                </div>
                <div className="about-me-group62">
                    <img src={AboutMeGroup62} alt="Group 62" />
                    <img src={AboutMeEllipse3} alt="Ellipse 3" />
                </div>
            </div>
        </div>
    )    
}
export default AboutMe