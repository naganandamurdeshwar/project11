import './new1.css'
import img1 from '../assets/img11.jpg'
function New1(){
    return(
        <div className='main'>
            <div className='m1'></div>
            <div className='m2'></div>
            <div className='m4'>
                <div className='bottom1'>
                    <div className='bt1'>
                        <img src={img1} alt="" className='k1' />
                    </div>
                    <div className='bt2'></div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'></div>
                    <div className='bt2'></div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'></div>
                    <div className='bt2'></div>
                </div>
                <div className='bottom1'>
                    <div className='bt1'></div>
                    <div className='bt2'></div>
                </div>
             </div>
        </div>
    )
}
export default New1