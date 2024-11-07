// import React, { Fragment, useEffect } from "react";
// import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import Loader from "../layout/Loader/Loader";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// import "./Profile.css";

// const Profile = () => {
//   const { user, loading, isAuthenticated } = useSelector((state) => state.user);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     if (isAuthenticated === false) {
//       navigate("/login"); // Use navigate instead of history.push
//     }
//   }, [isAuthenticated, navigate]);

//   // Debugging line to check the user object
//   console.log("User object:", user);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title={`${user?.name}'s Profile`} />
//           <div className="profileContainer">
//             <div>
//               <h1>My Profile</h1>
//               {/* Use optional chaining for avatar URL */}
//               <img
//                 src={user?.avatar?.url || "/Profile.png"} // Fallback image
//                 alt={user?.name}
//               />
//               <Link to="/me/update">Edit Profile</Link>
//             </div>
//             <div>
//               <div>
//                 <h4>Full Name</h4>
//                 <p>{user?.name}</p>
//               </div>
//               <div>
//                 <h4>Email</h4>
//                 <p>{user?.email}</p>
//               </div>
//               <div>
//                 <h4>Joined On</h4>
//                 <p>
//                   {user?.createdAt
//                     ? new Date(user.createdAt).toLocaleDateString()
//                     : "N/A"}
//                 </p>
//               </div>

//               <div>
//                 <Link to="/orders">My Orders</Link>
//                 <Link to="/password/update">Change Password</Link>
//               </div>
//             </div>
//             {/*

//             <div>
//               <Link to="/" className="homeButton">
//                 Home
//               </Link>
//             </div> */}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Profile;

import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login"); // Use navigate instead of history.push
    }
  }, [isAuthenticated, navigate]);

  // Debugging line to check the user object
  console.log("User object:", user);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user?.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {/* Use optional chaining for avatar URL */}
              <img
                src={user?.avatar?.url || "/Profile.png"} // Fallback image
                alt={user?.name}
              />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user?.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user?.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>

            {/* Button to navigate back to Home */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
