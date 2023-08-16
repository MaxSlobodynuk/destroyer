import React, { useState, useEffect, useRef } from "react";
import styles from "./Categories.module.css";
import { ReactComponent as Angle } from "../assets/angle.svg";
import { getAllCategories, getSubCategories } from "../api/categories";

const Categories = ({ setIsCatalogOpen, isCatalogOpen }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  // useEffect(()=>{
  //   categories.length > 0 && setCategories((prev) => {
  //       return prev.map(category => ({...category, has_children: true}))
  //   });
  // },[categories])

  // useEffect(() => {
  //   categories.length > 0 && categories.map((category) => {
  //       category.has_children && getSubCategories().then((res)=>{
  //           setSubCategories((prev)=>{
  //               return [...prev, {[category.id]: res}]
  //           })
  //       })
  //   });
  // },[categories])

  console.log(subCategories);
  const handleCategoryHover = async (category) => {
    if (category.has_children) {
      try {
        if (category.name === "Для чоловіків") {
          // Заглушка для демонстрації роботи
          const dummySubcategories = [
            { id: 1, name: "Футболки" },
            { id: 2, name: "Штани" },
            { id: 3, name: "Сукні" },
            { id: 4, name: "Куртки" },
            { id: 5, name: "Шапки" },
          ];
          setSubCategories(dummySubcategories);
        } else {
          setSubCategories([]);
        }
      } catch (error) {
        console.error("Помилка під час отримання підкатегорій:", error);
      }
    } else {
      setSubCategories([]);
    }
    setActiveCategory(category);
  };

  return (
    <div className={styles.modal} 
    // onClick={() => setIsCatalogOpen(false)}
    >
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Каталог</h2>
        <div className={styles.modalContainer}>
          <div className={`${styles.categoryContainer}`}>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${styles.category} ${category.id === activeCategory?.id && styles.active}`}
                onMouseEnter={() => handleCategoryHover(category)}
              >
                {category.name}
                <Angle className={styles.categoryIcon} />
              </div>
            ))}
          </div>
          {/* {subCategories.map((category) => (
            <div
              key={category.id}
              className={styles.category}
              onMouseEnter={handleCategoryHover}
            >
              {category.name}
              <Angle className={styles.categoryIcon} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Categories;





// const Categories = () => {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Для чоловіків", has_children: true },
//     { id: 2, name: "Для жінок", has_children: false },
//     { id: 3, name: "Військторг", has_children: false },
//     { id: 4, name: "Гаджети", has_children: false },
//     { id: 5, name: "Побутова техніка", has_children: false },
//     { id: 6, name: "Електроінструменти", has_children: false },
//     { id: 7, name: "Посуд", has_children: false },
//     { id: 8, name: "Табакерка", has_children: false },
//     { id: 9, name: "Робочий одяг", has_children: false },
//     { id: 10, name: "Фото-/Відеообладнання", has_children: false },
//     { id: 11, name: "Меблі для саду", has_children: false },
//     { id: 12, name: "Спорт товари", has_children: false },
//     { id: 13, name: "Медичні товари", has_children: false },
//   ]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleCategoryHover = async (category) => {
//     if (category.has_children) {
//       try {
//         if (category.name === "Для чоловіків") {
//           // Заглушка для демонстрації роботи
//           const dummySubcategories = [
//             { id: 1, name: "Футболки" },
//             { id: 2, name: "Штани" },
//             { id: 3, name: "Сукні" },
//             { id: 4, name: "Куртки" },
//             { id: 5, name: "Шапки" },
//           ];
//           setSubcategories(dummySubcategories);
//         } else {
//           setSubcategories([]);
//         }
//       } catch (error) {
//         console.error("Помилка під час отримання підкатегорій:", error);
//       }
//     } else {
//       setSubcategories([]);
//     }
//     setActiveCategory(category);
//   };


//   return (
//     <div className={styles.modal}>
//       <div className={styles.modalContent}>
//         <h2 className={styles.modalTitle}>Каталог</h2>
//         <div className={styles.modalContainer}>
//           <div className={styles.categoryContainer}>
//             {/* Головні категорії */}
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className={styles.category}
//               >
//                 {category.name}
//                 <Angle className={styles.categoryIcon} />
//               </div>
//             ))}
//           </div>
//           {subcategories.length > 0 && (
//             <div className={styles.subCategoryContainer}>
//               {/* Підкатегорії */}
//               <div className={styles.subCategoryColumn}>
//                 {subcategories.map((subcategory) => (
//                   <div key={subcategory.id} className={styles.subCategory}>
//                     {subcategory.name}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;

// const Modal = () => {
//   const [categories, setCategories] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("API_URL/categories");
//         const data = await response.json();
//         setCategories(data.categories);
//       } catch (error) {
//         console.error("Помилка під час отримання категорій:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = async (category) => {
//     if (category.has_children) {
//       try {
//         const response = await fetch(
//           `API_URL/categories/${category.id}/subcategories`
//         );
//         const data = await response.json();
//         setSubcategories(data.subcategories);
//       } catch (error) {
//         console.error("Помилка під час отримання підкатегорій:", error);
//       }
//     }
//     setActiveCategory(category);
//   };

//   return (
//     <div className={styles.modal}>
//       <div className={styles.modalContent}>
//         <h2>Модальне вікно</h2>
//         <div className={styles.modalContainer}>
//           <div className={styles.categoryContainer}>
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className={`${styles.category} ${
//                   activeCategory === category ? styles.active : ""
//                 }`}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category.name}
//               </div>
//             ))}
//           </div>
//           {subcategories.length > 0 && (
//             <div className={styles.subCategoryContainer}>
//               {subcategories.map((subcategory) => (
//                 <div key={subcategory.id} className={styles.subCategory}>
//                   {subcategory.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
