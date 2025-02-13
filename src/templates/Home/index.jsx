import React, { Suspense, useState } from "react";
// import LazyComponent from "./lazy-component";

const loadComponent = () => import('./lazy-component');
const LazyComponent = React.lazy();

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onMouseOver={loadComponent} onClick={() => setShow(s => !s)}>Show {show ? 'LC ON' : 'LC OFF'}</button>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent/>}
      </Suspense>
    </div>
  );
};