import Hero from "../components/hero";
import { motion } from "framer-motion";

const Info = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <Hero />
        </motion.div>
    )
}

export default Info