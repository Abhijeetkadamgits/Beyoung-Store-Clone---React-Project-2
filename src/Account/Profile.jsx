import React, { useState, useEffect } from 'react'

function Profile() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    // Retrieve the name and email from sessionStorage
    const storedUserName = sessionStorage.getItem('userInfoN');
    const storedUserEmail = sessionStorage.getItem('userInfoE');
    // Update the state with the retrieved name & email
    if (storedUserName && storedUserEmail) {
      setUserName(storedUserName);
      setUserEmail(storedUserEmail);
    }
  }, []);
// get the first later of User 
const getFirstLetter = () => {
    if (userName) {
        const nameArray = userName.split(' ');
        if (nameArray.length >= 2) {
            const [firstName, lastName] = nameArray;
            return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
        } else {
            return userName.charAt(0).toUpperCase();
        }
    }
    return '';
};
  return (
    <div className='profile-details'>
      <div className="profile-picture">
        <div className="profile-letter">{getFirstLetter()}</div>
      </div>
      <div className="profile-info">
        <h1 className='u-name'>{userName}</h1>
        <h3 className='u-email'>{userEmail}</h3>
        
      </div>
      </div>
  )
}

export default Profile