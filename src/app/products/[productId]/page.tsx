import { Metadata } from "next";
type Props = {
    params: Promise<{productId : string}>
}
export const generateMetadata = async ({params,}:Props): Promise<Metadata> =>{
    const id = (await params).productId;
    return {
        title: `Product ${id}`,
    }
}
export default async function ProductDetails({params}:
    {
        params: Promise<{productId : string}>
    }
)

{
    const productId = (await params).productId;
    return(
        <div>Product ID: {productId}</div>
    )
}