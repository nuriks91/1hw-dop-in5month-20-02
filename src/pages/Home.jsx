import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (


        <div className="container">
            <div className="col"> <div className="image"><Link to="/thirdpost"> <img src="1t.jpg" alt="" /></Link> </div>
                <div className="name">

                    <h1><Link className='perehod' to="/thirdpost" >Photoshop-Wed-Design</Link></h1>
                    <b className="price">$500</b>

                </div>
                <h6>25 Reviews</h6>
                <div className="opis-name">
                    <p className="opis">A Way with Words is a radio show and podcast that features light-hearted conversation about language change, debates, and differences, as well as new words <br /><br /></p>
                    </div>
                <div className="grafic">
                    <div className="year"><h3>1 year</h3>
                    <p className="course">Course</p>
                    </div>
                    <div className="class-size">
                        <h3>25</h3>

                        <p className="size">Class-size</p>
                        </div>
                    <div className="rabota">
                        <h3>7:00-10:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>


            
            <div className="col">
                <div className="image"><Link to="/thirdpost"><img src="1t.jpg" alt="" /></Link></div> <div className="name">
                <h1><Link className='perehod' to="/thirdpost" >Photoshop-Wed-Design</Link></h1>
                    <b className="price">$650</b>
                    <br />
                </div><h6>25 Reviews</h6>
                <div className="opis-name"><p className="opis">A Way with Words is a radio show and podcast that features light-hearted conversation about language change, debates, and differences, as well as new words <br />  <br /></p></div>
                <div className="grafic"><div className="year"><h3>1 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>25</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>7:00-10:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="1t.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Photoshop-Wed-Design</Link></h1>
                <b className="price">$290</b>
                <br />
            </div><h6>25 Reviews</h6>
                <div className="opis-name"><p className="opis">A Way with Words is a radio show and podcast that features light-hearted conversation about language change, debates, and differences, as well as new words <br /><br /> </p></div>
                <div className="grafic"><div className="year"><h3>1 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>25</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>7:00-10:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Home