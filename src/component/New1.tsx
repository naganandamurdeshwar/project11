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
                    <p className='text1'>Browse Celebrities</p>
                </div>
                <div className='mt2'>
                    <p className='text2'>Find the perfect celebrity for your special occasion</p>
                </div>
            </div>
            <div className='m2'></div>
            <div className='m5'>
                <p className='text3'>Showing 20 Celebrities</p>
            </div>
            <div className='m4'>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img1} alt="" className='k1' />
                    </div>
                    <div className='bt2'>
                        <div className='j1'>
                            <p className='text5'>Aisha khan</p>
                        </div>
                        <div className='j2'>
                            <p className='text4'>influencers</p>
                        </div>
                        <div className='j3'>
                         <div className='o1'>
                            
                         </div>
                         <div className='o2'></div>
                         <div className='o3'></div>
                        </div>
                    </div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img2} alt="" className='k1' />
                    </div>
                    <div className='bt2'>
                        <div className='j1'>
                            <p className='text5'>Tanvi Mehta</p>
                        </div>
                        <div className='j2'>
                        <p className='text4'>YouTubers</p>
                        </div>
                        <div className='j3'>
                         <div className='o1'></div>
                         <div className='o2'></div>
                         <div className='o3'></div>
                        </div>
                    </div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img3} alt="" className='k1'/>
                    </div>
                    <div className='bt2'>
                        <div className='j1'>
                             <p className='text5'>Meera Patel</p>
                        </div>
                        <div className='j2'>
                            <p className='text4'>influencers</p>
                        </div>
                        <div className='j3'>
                         <div className='o1'></div>
                         <div className='o2'></div>
                         <div className='o3'></div>
                        </div>
                    </div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img4} alt="" className='k1'/>
                    </div>
                    <div className='bt2'>
                         <div className='j1'>
                             <p className='text5'>Amit sharma</p>
                         </div>
                        <div className='j2'>
                             <p className='text4'>Comedians</p>
                        </div>
                        <div className='j3'>
                         <div className='o1'></div>
                         <div className='o2'></div>
                         <div className='o3'></div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default New1