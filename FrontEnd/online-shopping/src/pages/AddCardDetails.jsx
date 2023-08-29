// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const AddCardDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-user"));
//   const priceToPay = location.state.priceToPay;

//   const [card, setCard] = useState({
//     cardName: "",
//     cardNumber: "",
//     validThrough: "",
//     cvv: "",
//   });

//   const handleCardInput = (e) => {
//     setCard({ ...card, [e.target.name]: e.target.value });
//   };

//   const payAndOrder = () => {
//     fetch("http://localhost:8080/api/user/order?userId=" + user.id, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((result) => {
//         console.log("result", result);
//         result.json().then((res) => {
//           console.log(res);
//         });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const payForOrder = (e) => {
//     e.preventDefault(); // Prevent the form from submitting by default

//     // Basic validations
//     if (!card.cardName || !card.cardNumber || !card.validThrough || !card.cvv) {
//       toast.error("Please fill in all card details.", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//       return;
//     }

//     // You can add more specific validations for card number, validThrough, and CVV here if needed.

//     // Assuming you have more specific validations functions like validateCardNumber, validateValidThrough, validateCVV
//     // Example:
//     // if (!validateCardNumber(card.cardNumber)) {
//     //   toast.error("Invalid card number.", {
//     //     position: "top-center",
//     //     autoClose: 2000,
//     //   });
//     //   return;
//     // }

//     // If all validations pass, proceed with payment and order
//     payAndOrder();
//     toast.success("Products Ordered Successfully!!!", {
//       position: "top-center",
//       autoClose: 1000,
//     });
//     navigate("/home");
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center">
//         <div className="card form-card border-color" style={{ width: "25rem" }}>
//           <div className="card-header bg-color custom-bg-text">
//             <h5 className="card-title text-center">Payment Details</h5>
//           </div>
//           <div className="card-body text-color custom-bg">
//             <form onSubmit={payForOrder}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   <b> Name on Card</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="cardName"
//                   onChange={handleCardInput}
//                   value={card.cardName}
//                   required
                  
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="cardNumber" className="form-label">
//                   <b> Card Number</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="cardNumber"
//                   name="cardNumber"
//                   onChange={handleCardInput}
//                   value={card.cardNumber}
//                   required

//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="validThrough" className="form-label">
//                   <b>Valid Through</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="validThrough"
//                   name="validThrough"
//                   onChange={handleCardInput}
//                   value={card.validThrough}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="cvv" className="form-label">
//                   <b>CVV</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="cvv"
//                   name="cvv"
//                   onChange={handleCardInput}
//                   value={card.cvv}
//                   required
                
//                 />
//               </div>

//               <input
//                 type="submit"
//                 className="btn custom-bg-text bg-color"
//                 value={"Pay Rs" + priceToPay}
//               />

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCardDetails;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  const priceToPay = location.state.priceToPay;

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    validThrough: "",
    cvv: "",
  });

  const handleCardInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const isNameValid = /^[a-zA-Z\s]*$/.test(card.cardName);
  const isDateValid = /^\d{2}\/\d{2}$/.test(card.validThrough);
  const isCVVValid = /^\d{3}$/.test(card.cvv);
  const isCardNumberValid = /^\d{16}$/.test(card.cardNumber);

  const isDateAfterToday = () => {
    const [month, year] = card.validThrough.split("/");
    const currentDate = new Date();
    const inputDate = new Date(`20${year}`, month - 1); // Month is 0-indexed

    return inputDate > currentDate;
  };

  const payAndOrder = () => {
    // Your payment and order logic here
  };

  const payForOrder = (e) => {
    e.preventDefault(); // Prevent the form from submitting by default

    // Basic validations
    if (!isNameValid || !isDateValid || !isCVVValid || !isCardNumberValid) {
      toast.error("Please enter valid card details.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // Check if date is after today's date
    if (!isDateAfterToday()) {
      toast.error("Please enter a date that is after today's date.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // If all validations pass, proceed with payment and order
    payAndOrder();
    toast.success("Products Ordered Successfully!!!", {
      position: "top-center",
      autoClose: 1000,
    });
    navigate("/home");
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div className="card form-card border-color" style={{ width: "25rem" }}>
          <div className="card-header bg-color custom-bg-text">
            <h5 className="card-title text-center">Payment Details</h5>
          </div>
          <div className="card-body text-color custom-bg">
            <form onSubmit={payForOrder}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b> Name on Card</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="cardName"
                  onChange={handleCardInput}
                  value={card.cardName}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="validThrough" className="form-label">
                  <b>Valid Through (MM/YY)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validThrough"
                  name="validThrough"
                  onChange={handleCardInput}
                  value={card.validThrough}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  <b>CVV (3 digits)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  name="cvv"
                  onChange={handleCardInput}
                  value={card.cvv}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  <b> Card Number (16 digits)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={handleCardInput}
                  value={card.cardNumber}
                  required
                />
              </div>

              <input
                type="submit"
                className="btn custom-bg-text bg-color"
                value={"Pay Rs" + priceToPay}
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCardDetails;
