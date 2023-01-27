// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const Symptoms = () => {
//     const [symp, setSymp] = useState([
//                 {
//                     name: "Fever",
//                     description: "A fever is a high body temperature. A normal temperature can range from 97 to 100.3 F (36.1 to 38 C).",
//                     common_causes: "Viral or bacterial infections, such as the flu or pneumonia",
//                     treatment: "Treat the underlying cause and drink plenty of fluids to stay hydrated",
//                     when_to_see_a_doctor: "If a fever lasts for more than a few days or is accompanied by severe symptoms",
                
//                     id: '1'
//                 },
//                 {
//                     name: "Cough",
//                     description: "A cough is a reflex that helps clear your airways of mucus, foreign particles and irritants.",
//                     common_causes: "Upper respiratory infections, such as the common cold, bronchitis, and pneumonia",
//                     treatment: "Treat the underlying cause and use cough medicine or inhalers as needed",
//                     when_to_see_a_doctor: "If a cough lasts for more than a few weeks or is accompanied by severe symptoms"
                
//                     , id: '2'
//                 },
//                 {
//                     name: "Headache",
//                     description: "Headaches are a common ailment that can be caused by a variety of factors, including tension, sinus pressure, and migraines.",
//                     common_causes: "Stress, lack of sleep, eye strain, and dehydration",
//                     treatment: "Over-the-counter pain relievers, relaxation techniques, and adequate hydration",
//                     when_to_see_a_doctor: "If headaches are severe or occur frequently"
                
//                     ,
//                     id: '3'
//                 },
//                 {
//                     name: "Diarrhea",
//                     description: "Diarrhea is an increase in the frequency and looseness of bowel movements.",
//                     common_causes: "Infections, food poisoning, and certain medications",
//                     treatment: "Drink plenty of fluids to prevent dehydration, avoid foods that may aggravate diarrhea, and take over-the-counter medication as needed",
//                     when_to_see_a_doctor: "If diarrhea lasts for more than a few days or is accompanied by severe symptoms"
//                 ,
//                 id:'4'
//                 },
//                 {
//                     name: "Sore throat",
//                     description: "A sore throat is a painful, scratchy sensation in the throat.",
//                     common_causes: "Viral or bacterial infections, such as the common cold or strep throat",
//                     treatment: "Gargle with salt water, take over-the-counter pain relievers, and use throat lozenges",
//                     when_to_see_a_doctor: "If a sore throat is accompanied by severe symptoms, such as difficulty breathing or swallowing"
//                 ,id: '5'
//                 }
//             ]
        
        
//   );
//   const handleDelete = (id: string) => {
//     setSymp((curr) => curr.filter((g) => g.id !== id));
//   };

//   const handleQuantityChange = (id: string, data: number) => {
//     setSymp((curr) =>
//       curr.map((g) =>
//         g.id === id
//           ? {
//               ...g,
//               quantity:
//                 data > 0
//                   ? g.quantity + data
//                   : g.quantity > 0
//                   ? g.quantity + data
//                   : 0,
//             }
//           : g
//       )
//     );
//   };
//   return (
//     <div>
//       <Header title='Grocery List' totalItems={Symptoms.length} />
//       {/* <Grocery name='apple' quantity={2} />
//         <Grocery name='orange' quantity={4} />
//         <Grocery name='cucumber' quantity={3} /> */}
//       {symp.map((g) => (
//         <Symptoms
//           name= {g.name}
//           quantity={g.quantity}
//           id={g.id}
//           onDelete={handleDelete}
//           onQuantityChange={handleQuantityChange}
//           key={g.id}
//         />
//       ))}
//     </div>
//   );
// };