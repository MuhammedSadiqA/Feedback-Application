import { useState } from "react";
import { addFeedbackAPI } from "../Services/allAPI";
// sweetalert Library for better alert messages
import Swal from 'sweetalert2'

export default function AddFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    rating: "",
    message: "",
  });
  // console.log(formData);




  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await addFeedbackAPI(formData)
    // console.log(response.status); checking status to use conditional statement
    if (response.status == 201 || response.status == 200) {
      Swal.fire({
        title: "Good job!",
        text: "You successfully updated the feedback!",
        icon: "success"
      });
      setFormData({ name: "", course: "", rating: "", message: "" })
    }


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
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={e => setFormData({ ...formData, course: e.target.value })}
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
                  onChange={e => setFormData({ ...formData, rating: e.target.value })}
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
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              {/* BTN */}
              <button onClick={handleSubmit} className="btn btn-primary w-100 py-2 fw-semibold">
                Submit Feedback
              </button>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
