import React from "react";
import RegistrationForm from "./components/RegistrationForm";

/*
      Task: Registration Form with Validation.
      
      Build:
      Name.
      Email.
      Age.
      Submit button.

      Requirements:
      Show error if age < 18.
      Show success message if valid.
      Use conditional rendering.
      Use state properly.
*/

function App(){
  return(
    <div>
      <RegistrationForm/>
    </div>
  )
}
export default App;