import React, { useEffect, useState } from 'react'
import { getAllFeedbackAPI, deleteFeedbackAPI, updateFeedbackAPI } from '../Services/allAPI'
// sweetalert Library for better alert messages
import Swal from 'sweetalert2'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
// import { Edit } from 'lucide-react';

function ViewFeedback() {

  const [feedbackList, setFeedbackList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editData, setEditData] = useState(null)
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const navigate=useNavigate()

  const handleEdit = (item) => {
    setShowModal(true)
    setEditData(item)
  }

  // handle Update
  const handleUpdate = async () => {
    const response = await updateFeedbackAPI(editData.id, editData)
    if (response.status === 200) {
      Swal.fire("Updated!", "Feedback updated successfully.", "success");
      setShowModal(false);
      fetchFeedback();
    }
  }


  useEffect(() => {
    // will not directly use async in useEffect its not the better workflow but call here and define outer side
    fetchFeedback()
  }, [])

  // Delete Function
  const handleDelete = async (id) => {

    // console.log("Deleting ID:", id);

    const response = await deleteFeedbackAPI(id);

    if (response.status === 200) {
      Swal.fire("Deleted!", "Feedback removed successfully.", "success");
      fetchFeedback(); // refresh the  list by calling fetchFeedback
    } else {
      Swal.fire("Error!", "Something went wrong!", "error");
    }

  };




  // Fetch Feedback

  const fetchFeedback = async () => {
    const response = await getAllFeedbackAPI()
    // console.log(response.status);
    if (response.status === 200) {
      console.log("Response is ", response.status);
      setFeedbackList(response.data)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  // get user Data from local storage stored from feedback page to edit
  const currentUser=localStorage.getItem("currentUser")




  return (
    <div className="container my-4">
      {isAdmin && (
        <button
          className="btn btn-danger mb-3"
          onClick={() => {
            localStorage.removeItem("isAdmin");
            Swal.fire("Logged Out", "Admin logged out successfully.", "success")
            navigate('/')
          }}
        >
          Logout
        </button>
      )}

      <h2 className="mb-3 fw-bold text-center">Students Feedback</h2>



      {feedbackList.length > 0 ?
        <div className="row">
          {feedbackList?.map((data) => (
            <div className="col-md-4 mb-3" key={data.id}>
              <div className="card shadow-sm rounded-3 position-relative">

                {/* Edit Icon */}
          {
            data.name ==currentUser&&
                  <i onClick={() => handleEdit(data)}
                  className="bi bi-pencil-square text-warning fs-5 position-absolute top-0 end-0 m-3 me-5 cursor-pointer"
                ></i>
          }

                {/* Delete Icon */}
                {
                  isAdmin &&
                  <i
                    onClick={() => handleDelete(data.id)}
                    className="bi bi-trash text-danger fs-5 position-absolute top-0 end-0 m-3 cursor-pointer"
                  ></i>
                }


                <div className="card-body">
                  <h5 className="fw-bold">{data.name}</h5>
                  <p className="text-primary fw-semibold">{data.course}</p>
                  <p className="mb-1">
                    <span className="fw-semibold">Rating:</span>{" "}
                    {"⭐".repeat(Number(data?.rating || 0))}
                  </p>
                  <p className="text-muted">{data.message}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
        :
        <p className="text-center text-muted">No feedbacks yet...</p>
      }

      {showModal && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title fw-bold">Edit Feedback</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">

                {/* NAME */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editData.name}
                    onChange={e => setEditData({ ...editData, name: e.target.value })}
                  />
                </div>

                {/* COURSE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Course</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editData.course}
                    onChange={e => setEditData({ ...editData, course: e.target.value })}
                  />
                </div>

                {/* RATING */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Rating</label>
                  <select
                    className="form-select"
                    value={editData.rating}
                    onChange={e => setEditData({ ...editData, rating: e.target.value })}
                  >
                    <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option value="4">⭐⭐⭐⭐ Very Good</option>
                    <option value="3">⭐⭐⭐ Good</option>
                    <option value="2">⭐⭐ Needs Improvement</option>
                    <option value="1">⭐ Poor</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={editData.message}
                    onChange={e => setEditData({ ...editData, message: e.target.value })}
                  ></textarea>
                </div>

              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleUpdate}>Save Changes</button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>

  )
}

export default ViewFeedback