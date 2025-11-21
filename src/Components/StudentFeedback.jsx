import { Link } from "react-router-dom";

export default function StudentFeedback() {
  return (
    <section id="feedback" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left side Text*/}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">
              Share Your Feedback & Improve Our Learning Space
            </h2>
            <p className="text-muted mb-4">
              Your voice matters. Help us understand what’s working and what
              needs to be better — together we build a stronger learning
              community.
            </p>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <Link to="/give-feedback" className="btn btn-primary btn-lg">
                Give Feedback
              </Link>

              <Link to="/view-feedback" className="btn btn-outline-secondary btn-lg">
                View Feedbacks
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Students"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
