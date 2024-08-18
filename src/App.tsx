import { Provider } from "react-redux"
import { store } from "./redux/store"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import { PersistGate } from "redux-persist/integration/react"/

 

function App() {
  
  return (
    <Provider store={store}>
      <ToastContainer/>
        <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
