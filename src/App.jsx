import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import { Spinner } from "@chakra-ui/react"
import AnimatedRoutes from "./components/animatedroutes"
import Footer from "./components/footer"
import { Video } from "./components/video"

const App = () => (
      <BrowserRouter>
        <Suspense fallback={<Spinner/>}>
          <Video/> 
        </Suspense>
        <AnimatedRoutes />
        <Footer />
    </BrowserRouter>
)

export default App
