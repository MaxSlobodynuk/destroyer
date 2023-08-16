import axios from "axios"

export const getAllCategories = async () => {
    const {data}  = await axios("https://api.escuelajs.co/api/v1/categories");
    const categories = data.map((category) => ({ ...category, has_children: true }));
    // const subCategories = []
    // categories.map( async (category) => {
    //     const res = category.has_children && await getSubCategories()
    //         subCategories.push({ [category.id]: res }); 
    //         console.log(subCategories);
    //     })
    return data;
}

export const getSubCategories = async () => {
    const { data } = await axios("https://api.escuelajs.co/api/v1/categories");
    return data;
};

export const getSubCategoryDetails = async () => {
    const { data } = await axios("https://api.escuelajs.co/api/v1/categories");
    return data;
};
