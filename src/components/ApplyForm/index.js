import React, { useEffect } from "react"
import { Oval } from "react-loader-spinner"
import Cookies from "js-cookie"
import { useForm } from "react-hook-form"

import "./index.css"

const ApplyForm = (props) => {
  const { handleTaskData, loading, type } = props
  const task = props.task || {}
  const [users, setUsers] = React.useState([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const userName = JSON.parse(localStorage.getItem("user")).name

  const onSubmit = (data) => {
    if (type === "create") {
      handleTaskData(data)
    } else {
      handleTaskData({ ...data, id: task._id })
    }
    /* reset() */
  }

  //fetch all users
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }

    const getUsers = async () => {
      const response = await fetch(
        "https://pps-atr8.onrender.com/api/users",
        options
      )
      const json = await response.json()
      if (response.ok) {
        setUsers(json)
      }
    }

    getUsers()

    return () => {
      setUsers([])
    }
  }, [])

  return (
    <div className="create-task-popup-container">
      <h4 className="Form-Title">{type === "create" ? "Apply Leave" : "Update Leave"}</h4>
      <div className="create-task-form-container">
        <form className="create-task-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="create-task-form-input">
          <label htmlFor="name">Name</label>
          <select
             id="name"
            name="name"
            value={task.name}
            {...register("name")}
            className="task-input-field"
>
  <option value="N. Sivaram Prasad" selected={task.category === "N. Sivaram Prasad"}>N. Sivaram Prasad</option>
<option value="K. Srinivasa Rao" selected={task.category === "K. Srinivasa Rao"}>K. Srinivasa Rao</option>
<option value="P. A. V Krishna Rao" selected={task.category === "P. A. V Krishna Rao"}>P. A. V Krishna Rao</option>
<option value="G. Prasad" selected={task.category === "G. prasad"}>G. Prasad</option>
<option value="K. Bhaskara Rao" selected={task.category === "K. Bhaskara Rao"}>K. Bhaskara Rao</option>
<option value="B. Krishnaiah" selected={task.category === "B. Krishnaiah"}>B. Krishnaiah</option>
<option value="M. Praveen Kumar" selected={task.category === "M. Praveen Kumar"}>M. Praveen Kumar</option>
<option value="N. Srinivasa Rao" selected={task.category === "N. Srinivasa Rao"}>N. Srinivasa Rao</option>
<option value="K. Sai Prasanth" selected={task.category === "K. Sai Prasanth"}>K. Sai Prasanth</option>
<option value="P. Ratna Prakash" selected={task.category === "P. Ratna Prakash"}>P. Ratna Prakash</option>
<option value="P. Ravi Kumar" selected={task.category === "P. Ravi Kumar"}>P. Ravi Kumar</option>
<option value="K. Suresh Kumar" selected={task.category === "K. Suresh Kumar"}>K. Suresh Kumar</option>
<option value="S. Ratna Babu" selected={task.category === "S. Ratna Babu"}>S. Ratna Babu</option>
<option value="Mastanaiah Naidu Yasam" selected={task.category === "Mastanaiah Naidu Yasam"}>Mastanaiah Naidu Yasam</option>
<option value="P. Sreedhar" selected={task.category === "P. Sreedhar"}>P. Sreedhar</option>
<option value="BBK. Prasad" selected={task.category === "BBK. Prasad"}>BBK. Prasad</option>
<option value="Surekha Peravali" selected={task.category === "Surekha Peravali"}>Surekha Peravali</option>

         </select>
         <label htmlFor="leavetype">Leave Type</label>

         <select
            id="leavetype"
            name="leavetype"
            value={task.leavetype}
            {...register("leavetype")}
            className="task-input-field"
>
  <option value="Casual Leave" selected={task.category === "Casual Leave"}>Casual Leave</option>
<option value="Earn Leave" selected={task.category === "Earn Leave"}>Earn Leave</option>
<option value="One Hour" selected={task.category === "One Hour"}>One Hour</option>
<option value="Medical Leave" selected={task.category === "Medical Leave"}>Medical Leave</option>
<option value="Meternity Leave" selected={task.category === "Meternity Leave"}>Meternity Leave</option>
<option value="Special Casual Leave" selected={task.category === "Special Casual Leave"}>Special Casual Leave</option>
        </select>

           
          </div>
          <br/>
          <div className="btn-container-pop">
         <div className="create-task-form-input">
            <label htmlFor="dueDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              // min={new Date().toISOString().split("T")[0]}
              defaultValue={
                (() => {
                  const dateObject = new Date(task?.startDate)
                  const year = dateObject.getFullYear()
                  const month = String(dateObject.getMonth() + 1).padStart(
                    2,
                    "0"
                  )
                  const day = String(dateObject.getDate()).padStart(2, "0")
                  return `${year}-${month}-${day}`
                })() || ""
              }
              {...register("startDate", { required: true })}
              className="task-input-field"
            />
            {errors.startDate && (
              <span className="task-error-msg">*Start Date is required</span>
            )}
          </div>
          <br/>
          <div className="create-task-form-input">
            <label htmlFor="dueDate"> End Date</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              // min={new Date().toISOString().split("T")[0]}
              defaultValue={
                (() => {
                  const dateObject = new Date(task?.expiryDate)
                  const year = dateObject.getFullYear()
                  const month = String(dateObject.getMonth() + 1).padStart(
                    2,
                    "0"
                  )
                  const day = String(dateObject.getDate()).padStart(2, "0")
                  return `${year}-${month}-${day}`
                })() || ""
              }
              {...register("expiryDate", { required: false })}
              className="task-input-field"
            />
            {errors.startDate && (
              <span className="task-error-msg">*End Date is required</span>
            )}
          </div></div>
<div className="btn-container-pop">
          <button type="submit" className="create-btn">
            {loading ? (
              <Oval
                height={25}
                width={25}
                color="#ccc"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#fff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : type === "create" ? (
              "Apply Self"
            ) : (
              "Update"
            )}
          </button>
          <button type="submit" className="create-btn">
            {loading ? (
              <Oval
                height={25}
                width={25}
                color="#ccc"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#fff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : type === "create" ? (
              "Apply For Others"
            ) : (
              "Update"
            )}
          </button>
</div>
        </form>
      </div>
    </div>
  )
}

export default ApplyForm