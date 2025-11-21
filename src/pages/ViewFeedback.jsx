import React, { useEffect, useState } from 'react'
import { getAllFeedbackAPI, deleteFeedbackAPI } from '../Services/allAPI'
// sweetalert Library for better alert messages
import Swal from 'sweetalert2'
import 'bootstrap-icons/font/bootstrap-icons.css';

function ViewFeedback() {

  const [feedbackList, setFeedbackList] = useState([])

  useEffect(() => {
    // will not directly use async in useEffect its not the better workflow but call here and define outer side
    fetchFeedback()
  }, [])

  // Delete Function
  const handleDelete = async (id) => {
    
    console.log("Deleting ID:", id);

      const response = await deleteFeedbackAPI(id);

      if (response.status === 200) {
        Swal.fire("Deleted!", "Feedback removed successfully.", "success");
        fetchFeedback(); // refresh the  list by calling
      } else {
        Swal.fire("Error!", "Something went wrong!", "error");
      }
    
  };


  // Fetch Feedback

  const fetchFeedback = async () => {
    const response = await getAllFeedbackAPI()
    // console.log(response.status);
    if (response.status === 200) {
      // console.log(response.status);
      setFeedbackList(response.data)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }



  return (
    <div className="container my-4">
      <h2 className="mb-3 fw-bold text-center">Students Feedback</h2>

      {feedbackList.length > 0 ?
        <div className="row">
          {feedbackList.map((data) => (
            <div className="col-md-4 mb-3" key={data.id}>
              <div className="card shadow-sm rounded-3 position-relative">
                {/* Delete Icon */}
                <i onClick={() => handleDelete(data.id)} className="bi bi-trash text-danger fs-5 position-absolute top-0 end-0 m-3 cursor-pointer">

                </i>

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
    </div>
  )
}

export default ViewFeedback