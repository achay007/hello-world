export default async function ProductReview({ params }: 
    { params: Promise<{ productId: string; reviewId: string }> }) {

    const { productId, reviewId } = await params;
  return (
    <div>
      <p>Review {reviewId} content for product {productId}  goes here...</p>
    </div>
  );
}