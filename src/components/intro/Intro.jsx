import './intro.css'

const Intro = () => {
    return (
        <div className='intro' id='intro'>
                <div className="left">
                    <div className="boom">
                    <h2>
      Elevate Your Wellness<br />
      With Faith-Centered <br />
      Living.
      <p className='bot'>Experience Alafia: Where Your Spiritual Journey Meets<br/> Holistic Well-Beign</p>
      </h2>
    </div>
                </div>
                <div className="eff">
                    <a href='#get'>
                        <button className='yup1'>Get Started</button></a>
                        <a href='#join'>
                        <button className='yup2'>Join our wellness community</button></a>
                </div>
                <div className="right">
                    <div className="imgContainer8">
                    <img src='assets/Group 8.png' alt='' className='eight'/>
                    </div>
                </div>

                </div>

                
    )
}

export default Intro
