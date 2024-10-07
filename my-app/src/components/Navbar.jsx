// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logoutUser } from '../redux/action'; // Import the logout action
// import styles from './navbar.module.css';
// import { FaRegUserCircle } from 'react-icons/fa';

// function Navbar({ setFilterText }) {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogoutClick = async () => {
//         try {
//             await dispatch(logoutUser()); // Dispatch the logout action
//             navigate('/'); // Redirect to the login page after successful logout
//         } catch (error) {
//             console.error("Error during logout:", error);
//         }
//     };

//     return (
//         <div>
//             <div className={styles.box}>
//                 <div className={styles.left}>
//                     <img src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png" alt="" />
//                     <p>digital<span>flake</span></p>
//                 </div>
//                 <div className={styles.middle}>
//                     {/* Optional filter input */}
//                 </div>
//                 <div className={styles.right} onClick={handleLogoutClick}>
//                     <FaRegUserCircle />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import styles from './navbar.module.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { LOGOUT } from '../redux/actionType';

function Navbar({ setFilterText }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle the modal
    const toast = useToast();

    const handleLogoutClick = () => {
        setIsModalOpen(true); // Open the modal on logout click
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Close modal on cancel
    };

    const handleConfirm = async () => {
        try {
            navigate('/'); // Redirect to the login page
            dispatch({type:LOGOUT})
            toast({
                title: "Logout Success.",
                status: "error",
                position: "top",
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div>
            <div className={styles.box}>
                <div className={styles.left}>
                    <img src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png" alt="" />
                    <p>digital<span>flake</span></p>
                </div>
                <div className={styles.middle}>
                    {/* Optional filter input */}
                </div>
                <div className={styles.right} onClick={handleLogoutClick}>
                    <FaRegUserCircle />
                </div>
            </div>

            {/* Modal for logout confirmation */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Log Out</h2>
                        <p>Are you sure you want to log out?</p>
                        <div className={styles.modalButtons}>
                            <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
                            <button className={styles.confirmButton} onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
