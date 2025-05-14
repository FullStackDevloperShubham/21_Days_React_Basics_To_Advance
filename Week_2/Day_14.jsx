Day 14 : React Portals – Rendering Outside the DOM Tree

What are Portals?
React Portals let you render children into a different part of the DOM, outside the parent component’s hierarchy.

Used mainly for:

Modals

Tooltips

Toast notifications

Dropdowns

Why Use Portals?
Normally, components are rendered within their parent DOM tree. But if you need to render something like a modal on top of everything (outside), you need a portal

How to Use Portals
1️⃣ Create a DOM node in public/index.html:

<!-- Inside body -->
<div id="modal-root"></div>

Create a component using ReactDOM.createPortal:

import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}

Use the Modal:

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && (
        <Modal>
          <div className="modal-box">
            <h2>Hello from Portal!</h2>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
}