import { notFound } from "next/navigation";
export default async function ProductReview({ params }: 
    { params: Promise<{ productId: string; reviewId: string }> }) {

    const { productId, reviewId } = await params;
    if (Number(reviewId) > 89) {
        notFound();
    }



  return (
    <div>
      <p>Review {reviewId} content for product {productId}  goes here...</p>
    </div>
  );
}