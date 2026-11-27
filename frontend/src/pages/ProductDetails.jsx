import { useState, useEffect } from "react";
import { getProductsById } from "../api/api";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchData = async () => {

            try {
                setData(null);
                setError("");
                setLoading(true);
                const dataById = await getProductsById(id);
                if (!dataById) {
                    throw new Error("Failed to get product!")
                }
                setData(dataById);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }

        }
        fetchData();

    }, [id]);


    return (
        <>
            {loading && (<h2>Loading...</h2>)}
            {error && (<h2>{error}</h2>)}
            {data && (
                <div className="products-detail">

                    <div className="products-detail-image">
                        <img src={data.img} alt={data.name} />
                    </div>

                    <div className="products-detail-info">

                        <span className="detail-category">{data.category}</span>

                        <h1>{data.name}</h1>

                        <p className="detail-description">{data.description}</p>

                        <p className="detail-rating">⭐ {data.rating} / 5</p>

                        <p className="detail-price">${data.price}</p>

                        <p className="detail-stock">
                            📦 In stock: {data.stock}
                        </p>

                        <button className="detail-cart-btn">
                            🛒 Add to Cart
                        </button>

                    </div>
                </div>

            )}

        </>



    )
}
