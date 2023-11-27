import React from 'react';

const Doctor = () => {
  return (
    <section id="doctors" className="doctors">
      <div className="container">

        <div className="section-title">
          <h2>Doctors</h2>
          <p>Our team of dedicated healthcare professionals is at the heart of our commitment to your well-being. Our experienced and compassionate doctors bring expertise from various specialties to provide you with the highest quality care. They are here to listen, diagnose, and guide you on your path to better health. Meet our exceptional team of doctors who are ready to serve you and make a difference in your healthcare journey.</p>
        </div>

        <div className="row">

          {/* Doctor 1 */}
          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={require("../assets/img/doctors/doctors-1.jpg").default} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Vinod Singhal</h4>
                <span>Chief Medical Officer</span>
                <p>Leading with experience and innovation</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={require("../assets/img/doctors/doctors-2.jpg").default} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Sneha Sharma</h4>
                <span>Anesthesiologist</span>
                <p>Ensuring safety and comfort during surgery</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={require("../assets/img/doctors/doctors-3.jpg").default} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>William D'Souza</h4>
                <span>Cardiologist</span>
                <p>Passionate about heart health and prevention</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor 4 */}
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={require("../assets/img/doctors/doctors-4.jpg").default} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Anam Khan</h4>
                <span>Neurosurgeon</span>
                <p>Surgical precision for neurological care</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          {/* Add more doctors following the same structure */}

        </div>

      </div>
    </section>
  );
};

export default Doctor;
