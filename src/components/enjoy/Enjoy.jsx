import './enjoy.css'

const Enjoy = () => {
    return (
        <div className='enjoy' id='enjoy'>
             <div className="check">
            <h2>
            Enjoy more in Alafia by reading<br/>
             some post on our <a href='#go' className='go'>Blog</a>
            </h2>
            </div>
            <div className="imgContainer4">
                <div className="img-wrapper">
                <img src='assets/Rectangle 10.png' alt=''className='img'/>
                <h2 className='h2'>Morning Rituals for a Balanced Day.</h2>
                <p className='p'>Start your day with intention. Dedicate the first moment to prayer, gratitude, and a healthy braekfast. Setting a positive tone early can help you maintain a balanced outlook throughout the day. Discover how morning rituals can nuture your faith and wellness journey.</p>
                </div>
           <div className="img-wrapper">
           <img src='assets/Rectangle 11.png' alt='' className='img'/>
           <h2 className='h2'>Nourishing Your Body and Spirit.</h2>
           <p className='p'>Food is more than sustenance - it's an opportunity to honor your body as a temple. Explore faith-inspired recipes that combine nutrition with the joy of preparing and sharing meals. Nourish your body and spirit simultaneously through
mindful eating practices.</p>
           </div>
        <div className="img-wrapper">
        <img src='assets/Rectangle 12.png' alt='' className='img'/>
        <h2 className='h2'>Mindfulness in
Movement.
</h2>
<p className='p'>Turn everyday activities into mindful moments.Whether <br/>you're walking, exercising, or even cleaning, practice mindfulness. Pay attention to each step, breath, or movement. This simple practice can enhance your spiritual connection, reduce stress, and promote a sense of presence in your actions.</p>
        </div>
        </div>
    </div>
    )
}

export default Enjoy
