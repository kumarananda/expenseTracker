/** @format */

import React, { useEffect, useRef } from "react";
import "./FullScreenModal.css";

const FullScreenModal = ({ children, modalOpen = false, setModalOpen, MBoxWidth, outCickHide, ZIndex }) => {
  // modal state
  const ref = useRef(null);

  useEffect(() => {
    if (outCickHide) {
      let handler = e => {
        if (!ref.current.contains(e.target)) {
          setModalOpen(false);
          // console.log(menuRef.current.contains(e.target));
        }
      };

      if (modalOpen) {
        document.addEventListener("mousedown", handler);
      }

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });

  return (
    <>
      {/* <!-- MODAL BOX  --> */}
      {modalOpen && (
        <div scroll="no" style={{ zIndex: `${ZIndex ? ZIndex : 99999999}` }} className="modal-blur-box">
          <div ref={ref} className="refWraper">
            <div style={{ width: `${MBoxWidth ? MBoxWidth + "px" : "500px"}` }} className="modal-card">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
