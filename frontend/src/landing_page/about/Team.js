import React from 'react';

function Team() {
    return (  
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className="text-center ">People</h1>
            </div>
            

            <div className='row p-3 text-muted ' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-5 text-center'>
                   <img src="media/images/adarshSingh.jpg.jpeg"  alt="Adarsh Singh" className="img-fluid" style={{borderRadius:"100%", width:"60%"}}/>
                   <h4 className='mt-5'>Adarsh Singh</h4>
                   <h6>Full Stack Developer | Computer Science Student</h6>

                </div>
                <div className='col-6 p-3'>
                    <p>Hi, I’m Adarsh Singh — a Computer Science student with a strong passion for building real-world, scalable web applications.</p>

                    <p>I believe technology should not just work, but solve meaningful problems efficiently. From designing intuitive user interfaces to building structured backend systems, I enjoy turning complex ideas into simple and powerful digital solutions.</p>

                    <p>I am driven by curiosity, consistency, and the desire to grow as a software engineer who builds impactful products. Every day, I challenge myself to learn something new and apply it in real projects like this one.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}} >TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;