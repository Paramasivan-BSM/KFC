// import React from 'react'

// const UserInfoCard = ({show}) => {




//   return (
//     <div className='card'>
//       <div className="card-body">
//         <p className='h3'>{show}</p>
//         {/* <p className='h3'>{show.Pwd}</p> */}

//       </div>
//     </div>
//   )
// }

// export default UserInfoCard
import React from 'react';

const UserInfoCard = ({ show }) => {
  return (
    <div className="card">
      <div className="card-body">
        {show && (
          <>
            <p className="h3">{show.Name}</p>
            <p className="h3">{show.Pwd}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
