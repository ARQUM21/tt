import React, { useEffect, useState } from 'react'
import { deletereq, getreq, putreq } from '../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask, updateTask, deleteTask as deleteTaskAction } from '../store/features/TasksReducer';
import { useNavigate } from 'react-router-dom';

const TaskListing = () => {
  const dispatch = useDispatch();
  const allTask = useSelector((state) => state?.tasks);
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  const getAllTasks = async () => {
    try {
      const response = await getreq('/tasks');
      const data = response?.data?.data;
      dispatch(getAllTask(data));
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await deletereq(`/tasks/delete/${id}`);
      console.log(response);
      dispatch(deleteTaskAction(id)); // Update the Redux store
    } catch (error) {
      console.log(error);
    }
  }

  const editTask = async (task) => {
    try {
      const response = await putreq(`/tasks/update/${task._id}`, task);
      console.log(response);
      dispatch(updateTask(task));
      setEditData(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTasks();
  }, [])

  return (
    <div>
      <div className='tasks'>
        <button onClick={() => navigate('/add')}>ADD task +</button>
        {allTask?.task?.length === 0 ? "No Task found" :
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due_Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                allTask?.task?.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td>
                        {editData?._id === item?._id ? (
                          <input
                            type="text"
                            value={editData.title}
                            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                          />
                        ) : (
                          item?.title
                        )}
                      </td>
                      <td>
                        {editData?._id === item?._id ? (
                          <input
                            type="text"
                            value={editData.description}
                            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                          />
                        ) : (
                          item?.description
                        )}
                      </td>
                      <td>
                        {editData?._id === item?._id ? (
                          <input
                            type="date"
                            value={editData.due_date}
                            onChange={(e) => setEditData({ ...editData, due_date: e.target.value })}
                          />
                        ) : (
                          item?.due_date
                        )}
                      </td>
                      <td>
                        {editData?._id === item?._id ? (
                          <button onClick={() => editTask(editData)}>Save</button>
                        ) : (
                          <>
                            <button onClick={() => deleteTask(item?._id)}>Delete</button>
                            <button onClick={() => setEditData(item)}>Edit</button>
                          </>
                        )}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default TaskListing