"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    console.log(pathname.split("/"));

    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <h1>Review {reviewId} for Product {productId} Not Found</h1>
    )
}