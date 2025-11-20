import { useState } from "react";

export default function AddFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    rating: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // later: axios.post("http://localhost:3000/feedbacks", formData)
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">

          {/* CARD */}
          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h3 className="fw-bold text-center mb-4">
                Add Your Feedback
              </h3>

              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* COURSE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Course / Batch
                  </label>
                  <input
                    type="text"
                    name="course"
                    className="form-control"
                    placeholder="Eg: MERN Stack, Python, Data Science"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* RATING */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Rating
                  </label>
                  <select
                    name="rating"
                    className="form-select"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose rating...</option>
                    <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option value="4">⭐⭐⭐⭐ Very Good</option>
                    <option value="3">⭐⭐⭐ Good</option>
                    <option value="2">⭐⭐ Needs Improvement</option>
                    <option value="1">⭐ Poor</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Feedback (minimum 20 characters)
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Share your experience..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* BTN */}
                <button className="btn btn-primary w-100 py-2 fw-semibold">
                  Submit Feedback
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
