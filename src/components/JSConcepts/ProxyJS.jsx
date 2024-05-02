import React from 'react'
const ProxyJS = () => {

  // We can use it if we want to check will assigning value to age that if value is string or number

  const userProfile = {
    name: 'Alice',
    age: 30
  } 

  userProfile.age = "age";

  console.log("userprofile", userProfile);

  const proxyUserProfile = new Proxy(userProfile, {  // (target, handler)
    set: function (target, prop, value) {
      console.log(target, prop, value)
      if(prop === "age" && typeof value !== "number") {
        throw new Error("Age must be a number");
      }

      target[prop] = value;
      return true;
    }
  });

  const checkProxy = () => {
    try {
      proxyUserProfile.age = "khiqd";
    } catch(error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <h2>Proxy</h2>
      <button onClick={checkProxy} >Check Working</button>
    </>
  )
}

export default ProxyJS