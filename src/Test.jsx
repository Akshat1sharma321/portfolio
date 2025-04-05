// import { useState } from "react";
// import { motion } from "framer-motion";
// const Test = () => {
//   const [open, setOpen] = useState(false);
//   const varients = {
//     visible: {
//       opacity: 1,
//       x: 100,
//       transition: {
//         duration: 2,
//         delay: 1,
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         mass: 1,
//       },
//     },
//     hidden: {
//       opacity: 0,
//     },
//   };
//   const items = ["item1", "item2", "item3", "item4", "item5"];

//   return (
//     <div className="course">
//       <motion.ul initial="hidden" animate="visible" variants={varients}>
//         {items.map((item) => (
//           <motion.li key={item}>{item}</motion.li>
//         ))}
//       </motion.ul>
//     </div>
//   );
// };

// export default Test;
