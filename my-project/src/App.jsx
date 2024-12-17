
import Layout from "./components/Layout"

import {createBrowserRouter , RouterProvider, createRoutesFromElements, Route} from "react-router-dom"
import Homepages from "./pages/Homepages"
import ProductDetail from "./pages/ProductDetail"
import Shop from "./pages/Shop"
import Cartt from "./pages/Cartt"




function App() {
 let router = createBrowserRouter(createRoutesFromElements(
<Route element={<Layout/>}>
<Route index element={<Homepages/>}></Route>
<Route path="/shop" element={<Shop/>}></Route>

<Route path="/shop/:id" element={<ProductDetail/>}></Route>
<Route path="/cart" element={<Cartt/>}></Route>


</Route>

 ))

  return (
   <>
<RouterProvider router={router}/>
   </>
  )
}

export default App
