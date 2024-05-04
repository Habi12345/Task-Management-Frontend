import React from "react";
import { Button } from "../../components/ui/button";

function SignError({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "450px",
            height: "250px",
            transform: "translate(-50%, -50%)",
            backgroundColor: "dimgrey",
            border: "3px solid black",
            padding: "10px",
            borderRadius: "25px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure it's above other elements
            color: "#fff", // Text color
          }}
        >
          {/* <p>All fields must be filled</p> */}
          <div style={{ marginBottom: "10px", fontSize: "1.7rem" }}>
            All fields must be filled
          </div>
          <Button
            onClick={onClose}
            style={{
              background: "none",
              color: "#fff", // Button text color
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "20px",
            }}
          >
            x
          </Button>
        </div>
      )}
    </>
  );
}

export default SignError;
