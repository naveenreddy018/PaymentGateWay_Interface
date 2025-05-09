



// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import RazorpayLanding from './components/mainPage/mainInterface'
// import JasvikPay from './components/signUpPage/signUpPage'

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<RazorpayLanding /> } />
//         <Route  path="/sign" element={ <JasvikPay/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'

// import PaymentSolutionsApp from './components/Feature1/Feature'
// import PaymentFeatures from './components/Feature1/Feature'
import RazorpayLanding from './components/MainInterFace/mainInterface'
import FooterLinks from './components/PaymentFeatures/Resources'

function App() {
  return (
    <div>
      {/* <PaymentFeatures /> */}
      <RazorpayLanding />
      {/* <FooterLinks /> */}
    </div>
  )
}

export default App
