// // import { useEffect, useState, useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";
// // import { getStudents } from "../api/students";
// // import { addResult, getAllResults, updateResult } from "../api/results";
// // import { useNavigate } from "react-router-dom";

// // function TeacherDashboard() {
// //   const { token, logout } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [students, setStudents] = useState([]);
// //   const [results, setResults] = useState([]);

// //   const [form, setForm] = useState({
// //     studentId: "",
// //     subject: "",
// //     marks: ""
// //   });

// //   const [editingId, setEditingId] = useState(null);
// //   const [editForm, setEditForm] = useState({ subject: "", marks: "" });

// //   useEffect(() => {
// //     getStudents(token).then((res) => setStudents(res.data));
// //     fetchResults();
// //   }, [token]);

// //   const fetchResults = () => {
// //     getAllResults(token).then((res) => setResults(res.data));
// //   };

// //   const addHandler = async () => {
// //     try {
// //       await addResult(form, token);
// //       alert("Result added!");
// //       setForm({ studentId: "", subject: "", marks: "" });
// //       fetchResults();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to add result");
// //     }
// //   };

// //   const startEdit = (r) => {
// //     setEditingId(r._id);
// //     setEditForm({ subject: r.subject, marks: r.marks });
// //   };

// //   const cancelEdit = () => {
// //     setEditingId(null);
// //     setEditForm({ subject: "", marks: "" });
// //   };

// //   const saveEdit = async () => {
// //     try {
// //       await updateResult(editingId, editForm, token);
// //       alert("Result updated!");
// //       cancelEdit();
// //       fetchResults();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to update result");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <button
// //         onClick={() => {
// //           logout();
// //           navigate("/");
// //         }}
// //         style={{
// //           padding: "8px 16px",
// //           marginBottom: "20px",
// //           cursor: "pointer",
// //           background: "red",
// //           color: "white",
// //           border: "none"
// //         }}
// //       >
// //         Logout
// //       </button>

// //       <h2>Teacher Dashboard</h2>

// //       <h3>Add Result</h3>

// //       <select
// //         onChange={(e) => setForm({ ...form, studentId: e.target.value })}
// //       >
// //         <option>Select Student</option>
// //         {students.map((s) => (
// //           <option key={s._id} value={s._id}>
// //             {s.name}
// //           </option>
// //         ))}
// //       </select>
// //       <br />

// //       <input
// //         placeholder="Subject"
// //         onChange={(e) => setForm({ ...form, subject: e.target.value })}
// //       />
// //       <br />

// //       <input
// //         placeholder="Marks"
// //         onChange={(e) => setForm({ ...form, marks: e.target.value })}
// //       />
// //       <br />

// //       <button onClick={addHandler}>Add</button>

// //       <h3>All Results</h3>
// //       <ul>
// //         {results.map((r) => (
// //           <li key={r._id} style={{ marginBottom: 8 }}>
// //             <strong>{r.student.name}</strong> —{' '}
// //             {editingId === r._id ? (
// //               <span>
// //                 <input
// //                   value={editForm.subject}
// //                   onChange={(e) => setEditForm({ ...editForm, subject: e.target.value })}
// //                   placeholder="Subject"
// //                 />{' '}
// //                 <input
// //                   value={editForm.marks}
// //                   onChange={(e) => setEditForm({ ...editForm, marks: e.target.value })}
// //                   placeholder="Marks"
// //                 />{' '}
// //                 <button onClick={saveEdit}>Save</button>{' '}
// //                 <button onClick={cancelEdit}>Cancel</button>
// //               </span>
// //             ) : (
// //               <span>
// //                 {r.subject}: {r.marks}{' '}
// //                 <button onClick={() => startEdit(r)} style={{ marginLeft: 8 }}>
// //                   Edit
// //                 </button>
// //               </span>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default TeacherDashboard;

// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { getStudents } from "../api/students";
// import { addResult, getAllResults, updateResult } from "../api/results";
// import { useNavigate } from "react-router-dom";

// function TeacherDashboard() {
//   const { token, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [students, setStudents] = useState([]);
//   const [results, setResults] = useState([]);

//   const [form, setForm] = useState({
//     studentId: "",
//     subject: "",
//     marks: "",
//   });

//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({ subject: "", marks: "" });

//   useEffect(() => {
//     getStudents(token).then((res) => setStudents(res.data));
//     fetchResults();
//   }, [token]);

//   const fetchResults = () => {
//     getAllResults(token).then((res) => setResults(res.data));
//   };

//   const addHandler = async () => {
//     try {
//       await addResult(form, token);
//       alert("Result added!");

//       setForm({ studentId: "", subject: "", marks: "" });
//       fetchResults();
//     } catch (err) {
//       alert("Failed to add result");
//     }
//   };

//   const startEdit = (r) => {
//     setEditingId(r._id);
//     setEditForm({ subject: r.subject, marks: r.marks });
//   };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditForm({ subject: "", marks: "" });
//   };

//   const saveEdit = async () => {
//     try {
//       await updateResult(editingId, editForm, token);
//       alert("Result updated!");

//       cancelEdit();
//       fetchResults();
//     } catch {
//       alert("Failed to update result");
//     }
//   };

//   return (
//     <div className="container py-4">

//       {/* Logout */}
//       <div className="d-flex justify-content-end mb-3">
//         <button
//           onClick={() => {
//             logout();
//             navigate("/");
//           }}
//           className="btn btn-danger"
//         >
//           Logout
//         </button>
//       </div>

//       <h2 className="text-center mb-4">Teacher Dashboard</h2>

//       {/* Add Result Card */}
//       <div className="card shadow-sm mb-4" style={{ borderRadius: "12px" }}>
//         <div className="card-body">

//           <h4 className="card-title mb-3">Add Result</h4>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Select Student</label>
//             <select
//               className="form-select"
//               value={form.studentId}
//               onChange={(e) => setForm({ ...form, studentId: e.target.value })}
//             >
//               <option value="">Select Student</option>
//               {students.map((s) => (
//                 <option key={s._id} value={s._id}>
//                   {s.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Subject</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter subject"
//               value={form.subject}
//               onChange={(e) => setForm({ ...form, subject: e.target.value })}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Marks</label>
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Enter marks"
//               value={form.marks}
//               onChange={(e) => setForm({ ...form, marks: e.target.value })}
//             />
//           </div>

//           <button className="btn btn-primary w-100" onClick={addHandler}>
//             Add Result
//           </button>
//         </div>
//       </div>

//       {/* Results Table */}
//       <div className="card shadow-sm" style={{ borderRadius: "12px" }}>
//         <div className="card-body">
//           <h4 className="card-title mb-3">All Results</h4>

//           {results.length === 0 ? (
//             <p className="text-muted">No results available.</p>
//           ) : (
//             <table className="table table-bordered table-striped">
//               <thead className="table-primary">
//                 <tr>
//                   <th>Student</th>
//                   <th>Subject</th>
//                   <th>Marks</th>
//                   <th style={{ width: "150px" }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((r) => (
//                   <tr key={r._id}>
//                     <td>{r.student.name}</td>

//                     {/* Editable row */}
//                     {editingId === r._id ? (
//                       <>
//                         <td>
//                           <input
//                             className="form-control"
//                             value={editForm.subject}
//                             onChange={(e) =>
//                               setEditForm({
//                                 ...editForm,
//                                 subject: e.target.value,
//                               })
//                             }
//                           />
//                         </td>
//                         <td>
//                           <input
//                             type="number"
//                             className="form-control"
//                             value={editForm.marks}
//                             onChange={(e) =>
//                               setEditForm({
//                                 ...editForm,
//                                 marks: e.target.value,
//                               })
//                             }
//                           />
//                         </td>

//                         <td>
//                           <button
//                             className="btn btn-success btn-sm me-2"
//                             onClick={saveEdit}
//                           >
//                             Save
//                           </button>
//                           <button
//                             className="btn btn-secondary btn-sm"
//                             onClick={cancelEdit}
//                           >
//                             Cancel
//                           </button>
//                         </td>
//                       </>
//                     ) : (
//                       <>
//                         <td>{r.subject}</td>
//                         <td>{r.marks}</td>
//                         <td>
//                           <button
//                             className="btn btn-sm btn-warning"
//                             onClick={() => startEdit(r)}
//                           >
//                             Edit
//                           </button>
//                         </td>
//                       </>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherDashboard;



import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getStudents } from "../api/students";
import { addResult, getAllResults, updateResult } from "../api/results";
import { getProfile } from "../api/profile";
import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const [profile, setProfile] = useState({});

  const [form, setForm] = useState({
    studentId: "",
    subject: "",
    marks: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ subject: "", marks: "" });

  // Fetch students, results, and profile
  useEffect(() => {
    getStudents(token).then((res) => setStudents(res.data));
    fetchResults();
    getProfile(token).then((res) => setProfile(res.data));
  }, [token]);

  const fetchResults = () => {
    getAllResults(token).then((res) => setResults(res.data));
  };

  // Add new result
  const addHandler = async () => {
    try {
      await addResult(form, token);
      alert("Result added!");

      setForm({ studentId: "", subject: "", marks: "" });
      fetchResults();
    } catch (err) {
      alert("Failed to add result");
    }
  };

  // Start edit mode
  const startEdit = (r) => {
    setEditingId(r._id);
    setEditForm({ subject: r.subject, marks: r.marks });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ subject: "", marks: "" });
  };

  // Save edited result
  const saveEdit = async () => {
    try {
      await updateResult(editingId, editForm, token);
      alert("Result updated!");
      cancelEdit();
      fetchResults();
    } catch {
      alert("Failed to update result");
    }
  };

  return (
    <div className="container py-4">

      {/* Logout Button */}
      <div className="d-flex justify-content-end mb-3">
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>

      <h2 className="text-center mb-4">Teacher Dashboard</h2>

      {/* Teacher Profile */}
      <div className="card shadow-sm mb-4" style={{ borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title mb-3">My Profile</h4>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      </div>

      {/* Add Result Card */}
      <div className="card shadow-sm mb-4" style={{ borderRadius: "12px" }}>
        <div className="card-body">

          <h4 className="card-title mb-3">Add Result</h4>

          <div className="mb-3">
            <label className="form-label fw-semibold">Select Student</label>
            <select
              className="form-select"
              value={form.studentId}
              onChange={(e) => setForm({ ...form, studentId: e.target.value })}
            >
              <option value="">Select Student</option>
              {students.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Marks</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter marks"
              value={form.marks}
              onChange={(e) => setForm({ ...form, marks: e.target.value })}
            />
          </div>

          <button className="btn btn-primary w-100" onClick={addHandler}>
            Add Result
          </button>
        </div>
      </div>

      {/* Results Table */}
      <div className="card shadow-sm" style={{ borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title mb-3">All Results</h4>

          {results.length === 0 ? (
            <p className="text-muted">No results available.</p>
          ) : (
            <table className="table table-bordered table-striped">
              <thead className="table-primary">
                <tr>
                  <th>Student</th>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {results.map((r) => (
                  <tr key={r._id}>
                    <td>{r.student.name}</td>

                    {editingId === r._id ? (
                      <>
                        <td>
                          <input
                            className="form-control"
                            value={editForm.subject}
                            onChange={(e) =>
                              setEditForm({ ...editForm, subject: e.target.value })
                            }
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={editForm.marks}
                            onChange={(e) =>
                              setEditForm({ ...editForm, marks: e.target.value })
                            }
                          />
                        </td>

                        <td>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={saveEdit}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{r.subject}</td>
                        <td>{r.marks}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() => startEdit(r)}
                          >
                            Edit
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>

            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
