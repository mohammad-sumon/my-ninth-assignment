import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-orange-600 font-bold text-3xl mb-4">Welcome to Blog Page</h2>
      <div className="border-solid border-2 border-orange-600 mb-4 p-4 rounded-md">
        <h3 className="text-2xl text-orange-500">What is the purpose of React Router ?</h3>
        <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
      </div>
      <div className="border-solid border-2 border-orange-600 mb-4 p-4 rounded-md">
        <h3 className="text-2xl text-orange-500">How does Context API works ?</h3>
        <p>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they are passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it. We now have a few components, and we certainly increased the reusability and maintainability of our example application. But, in the future, if this application grows in size and we feel the need to break these components into smaller components, we might have a problem. Passing data through props over and over can cause problems for your application. Sometimes you might pass more props than you need or even forget to pass props that you do need, rename props through the components without noticing, etc. If you are passing data through props from the parent component to a fourth- or fifth-level component, you are not reusing and writing maintainable code, and this might prejudice your application in the future. This is what we call “prop-drilling.” This can frustrate and slow down your development in the mid- to long-term—passing props over and over again to your components will cause future problems in your application. That is one of the main problems that Context API came to solve for us. Context API</p>
      </div>
      <div className="border-solid border-2 border-orange-600 mb-4 p-4 rounded-md">
        <h3 className="text-2xl text-orange-500">What is the useRef hook in React ?</h3>
        <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
      </div>
    </div>
  );
};

export default Blog;
