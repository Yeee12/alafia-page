import './topbar.css'

const Topbar = () => {
    return (
        <div className='topbar' id='topbar'>
            <div className="left">
            <div className="imgContainer">
            <img src='assets/Asset20.png' alt=''/>
            </div>
<h2 className='head'>alafia</h2>
            </div>
            <div className="right">
                <div className="outline">
                <a href='#Event' className='b'>Blog</a>
                    <a href='#Event' className='e'>Event</a>
                    <a href='#Solution' className='s'>Solution</a>
                    <a href="#Book a call">
  <button className='c'>Book a call</button>
</a>
<a href="#Sign in" >
  <button className='i'>Sign in</button>
</a>
                </div>
            </div>
           </div>
    )
}

export default Topbar
