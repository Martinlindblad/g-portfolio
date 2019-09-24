import React, { Suspense } from "react";
import LandingPage from './landingPage';


const FrontPage = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
      () =>
          import("./frontPage.js")
 
    );
  });

export default () => (

    // <div>
    //  <LandingPage /> 
    //  </div> 
    <div className="indexContainer">
    <Suspense fallback={<LandingPage />}>
    <FrontPage />
    </Suspense>
    </div>
);