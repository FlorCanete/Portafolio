import { motion } from 'framer-motion';

export default function Button (props) {
    return (
        <motion.a
            className='bg-[#FF715B] px-4 py-2 rounded-xl text-white font-semibold text-lg cursor-pointer'
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }},
                hover: {
                scale:1.2,
                rotate: -3,
                boxShadow:"0 0 40px #fca5a5",
                transition: { type: "spring",stiffness: 400, damping: 10 }
                },
                tap: {
                    scale: 0.9,
                    rotate: 0
                }
            }}
            href={props.href}
        >
            { props.name }
        </motion.a>
    )
}