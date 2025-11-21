import React from 'react'

function AboutUs() {
    return (
        <div id="about" className="container py-5">
            <div className="row align-items-center">

                {/* Left: Image */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img
                        src="https://images.jdmagicbox.com/v2/comp/ernakulam/d5/0484px484.x484.181027155021.i4d5/catalogue/luminar-technolab-kakkanad-ernakulam-computer-training-institutes-gtqw1htxkb.jpg"
                        alt="Company"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Right: Content */}
                <div className="col-md-6">
                    <h2 className="fw-bold mb-3">About Our Institution</h2>
                    <p className="text-secondary fs-6">
                        We are committed to delivering high-quality education, exceptional
                        training, and professional guidance. Our mission is to empower students
                        and professionals with skills that shape their future and open doors to
                        endless opportunities.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutUs