function Modal({children}) {
  return (
    <div className="modal" >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}


export default Modal;
