import './new1.css'
import img1 from '../assets/img11.jpg'
import img2 from '../assets/img12.jpg'
import img3 from '../assets/img13.jpg'
import img4 from '../assets/img4.jpeg'
function New1(){
    return(
        <div className='main'>
            <div className='m1'>
                <div className='mt1'>
                    <p>Browse Celebrities</p>
                </div>
                <div className='mt2'>
                    <p>Find the perfect celebrity for your special occasion</p>
                </div>
            </div>
            <div className='m2'></div>
            <div className='m4'>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img1} alt="" className='k1' />
                    </div>
                    <div className='bt2'></div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img2} alt="" className='k1' />
                    </div>
                    <div className='bt2'></div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img3} alt="" className='k1'/>
                    </div>
                    <div className='bt2'></div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img4} alt="" className='k1'/>
                    </div>
                    <div className='bt2'></div>
                </div>
             </div>
        </div>
    )
}
export default New1