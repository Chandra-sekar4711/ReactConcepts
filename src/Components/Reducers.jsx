import { useReducer, useEffect,useState, useMemo } from "react";

const products = [
    { id: 1, name: "Laptop", price: 800, category: "electronics" },
    { id: 2, name: "Phone", price: 500, category: "electronics" },
    { id: 3, name: "Keyboard", price: 80, category: "electronics" },
    { id: 4, name: "T-Shirt", price: 25, category: "clothing" },
    { id: 5, name: "Jeans", price: 50, category: "clothing" },
    { id: 6, name: "Shoes", price: 100, category: "clothing" },
    { id: 7, name: "Coffee Maker", price: 120, category: "home" },
    { id: 8, name: "Chair", price: 200, category: "home" },
];

function reducer(state, action) {
    switch (action.type) {
        case "increment age":
            return { ...state, age: state.age + 1 };

        case "decrement age":
            return { ...state, age: state.age - 1 };

        default:
            return state;
    }
}

const Reducers = () => {
    const [category, setCategory] = useState("");
    const [submittedCategory, setSubmittedCategory] = useState("");

    const [data, dispatch] = useReducer(reducer, {
        age: 0
    });

    console.log(
    "COMPONENT RENDER",
    "category:",
    category,
    "submitted:",
    submittedCategory
);

const filteredProducts = useMemo(() => {
    console.log("🔥 MEMO CALCULATED");

    return products.filter(
        item => item.category === submittedCategory
    );
}, [submittedCategory]);

console.log(
    "RENDER:",
    "category =", category,
    "submitted =", submittedCategory
);

useEffect(() => {
    console.log("🟢 Reducers MOUNT");

    return () => {
        console.log("🔴 Reducers UNMOUNT");
    };
}, []);

    return (
        <div>
            <h2>Age: {data.age}</h2>

            <button
                onClick={() =>
                    dispatch({ type: "increment age" })
                }
            >
                Increase age
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "decrement age" })
                }
            >
                Decrease age
            </button>

        

            <hr />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home</option>
            </select>

            <button
                onClick={() =>
                    setSubmittedCategory(category)
                }
            >
                Submit
            </button>

        

            <h2>Products</h2>

            {filteredProducts.map((product) => (
                <div key={product.id}>
                    {product.name} - ${product.price}
                </div>
            ))}
        </div>
    );
};

export default Reducers;