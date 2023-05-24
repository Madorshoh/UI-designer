import './works.css'
import WorksImgCourse from '../../assets/img/Course Website Landing Page Thumbnail 1.png'
import WorksImgGroup33 from '../../assets/img/Group 33.png'
import WorksImgGroup1 from '../../assets/img/Group 1.png'


function Works(){
    return(
        <div className='works-container'>
            <div className="works-header">
                <h1>My recent <span className='works-my'>works</span></h1>
            </div>
            <div className="works-btns">
                <button className="works-btns-btn1">All</button>
                <button className="works-btns-btn2">UI</button>
                <button className="works-btns-btn3">UX</button>
                <button className="works-btns-btn4">Web Design</button>
            </div>
            <div className="works-boxes">
                <div className="works-boxes-box">
                    <img src={WorksImgCourse} alt="Course Website Landing Page Thumbnail 1.png" />

                </div>
                <div className="works-boxes-box">
                    <img src={WorksImgGroup33} alt="Group 33.png" />
                </div>
                <div className="works-boxes-box">
                    <img src={WorksImgGroup1} alt="Group 1.png" />
                </div>
            </div>
        </div>
    )
}
export default Works