import './home.css'
import HomeImgDoodles from '../../assets/img/doodles mixed round.png'
import HomeImgGroup from '../../assets/img/Group 2346.png'
import HomeImgVector from '../../assets/img/Vector 187.png'
import HomImgDownload from '../../assets/img/download.png'
import HomeImgFrame from '../../assets/img/Frame 7.png'
function HomePage(){
    return(
        <div className="home">
            <div className='home-page'>
                <div className="home-left">
                        <div>
                            <img src={HomeImgVector} alt="Vector" />
                        </div>
                    <div className='home-box'>
                        <h1>CREATIVE UI <span className='designer'>DESIGNER</span></h1>
                    <div className='home-btn-box'>
                        <button className='home-btn-me'>Hire me</button>
                        <button className='home-btn-cv'>Download CV <img src={HomImgDownload} alt="download" /> </button>
                    </div>
                    </div>
                </div>
                <div className="home-right">
                    <img src={HomeImgDoodles} alt="doodles mixed round" width={514} height={514} className="img1"/>
                    <img src={HomeImgGroup} alt="Group" width={400} height={472.65} className="img2"/>
                </div>
        </div>
            <div className='home-img-frame'>
                <img src={HomeImgFrame} alt="frame" />
            </div>
        </div>
    )
}
export default HomePage