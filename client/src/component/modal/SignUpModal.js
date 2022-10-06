// import React, { useEffect } from 'react';
// // react-redux, redux 설치함
// import { useDispatch } from 'react-redux';
// import SignUp from '../SignUp';
// import { setSignUpModal } from '../../actions/modalAction';
// import { stopScroll, clearStopScroll } from '../../utils/ModalScrollPrevent';
// import styled from "styled-components";

// export const SignUpModalContainer = styled.div`
//   width: 300px;
//   height: 450px;
//   align-items: center;
// `

// function SignUpModal() {
//   const dispatch =  useDispatch();

//   // 스크롤 방지
//   useEffect(() => {
//     stopScroll();
//     return () => {
//       clearStopScroll();
//     };
//   }, []);

//   const handleCloseSignUpModal = () => {
//     dispatch(setSignUpModal(false));
//   };

//   return (
//     <>
//       <div 
//         aria-hidden='true'
//         className='SignUpModalContainer'
//         onClick={handleCloseSignUpModal}>
//         <div
//           className='SignUpModal'
//           aria-hidden='true'
//           onClick={(e) => e.stopPropagation()}
//           >
//             <div className='SignUpModal_SignUp'>
//               <SignUp handleCloseSignUpModal={handleCloseSignUpModal}/>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default SignUpModal;
