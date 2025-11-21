
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { getProfile } from "../api/profile";
// import { getMyResults } from "../api/results";
// import { useNavigate } from "react-router-dom";

// function StudentDashboard() {
//   const { token, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState({});
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     getProfile(token).then((res) => setProfile(res.data));
//     getMyResults(token).then((res) => setResults(res.data));
//   }, [token]);

//   return (
//     <div style={{ padding: 20 }}>
      
//       {/* Logout Button */}
//       <button
//         onClick={() => {
//           logout();
//           navigate("/");
//         }}
//         style={{
//           padding: "8px 16px",
//           marginBottom: "20px",
//           cursor: "pointer",
//           background: "red",
//           color: "white",
//           border: "none"
//         }}
//       >
//         Logout
//       </button>

//       <h2>Student Dashboard</h2>

//       <p><strong>Name:</strong> {profile.name}</p>
//       <p><strong>Email:</strong> {profile.email}</p>

//       <h3>My Results</h3>
//       {results.map((r) => (
//         <p key={r._id}>
//           {r.subject}: {r.marks}
//         </p>
//       ))}

//     </div>
//   );
// }

// export default StudentDashboard;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getProfile } from "../api/profile";
import { getMyResults } from "../api/results";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    getProfile(token).then((res) => setProfile(res.data));
    getMyResults(token).then((res) => setResults(res.data));
  }, [token]);

  return (
    <div className="container py-4">

      {/* Logout */}
      <div className="d-flex justify-content-end">
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

      {/* Page Title */}
      <h2 className="text-center mb-4">Student Dashboard</h2>

      {/* Profile Card */}
      <div className="card shadow-sm mb-4" style={{ borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title mb-3">My Profile</h4>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
      </div>

      {/* Results Section */}
      <div className="card shadow-sm" style={{ borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title mb-3">My Results</h4>

          {results.length === 0 ? (
            <p className="text-muted">No results found.</p>
          ) : (
            <table className="table table-bordered table-striped">
              <thead className="table-primary">
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r._id}>
                    <td>{r.subject}</td>
                    <td>{r.marks}</td>
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

export default StudentDashboard;


