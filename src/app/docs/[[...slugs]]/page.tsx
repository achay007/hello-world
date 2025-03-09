export default async function Page({ params }: { params: Promise<{ slugs: string[] }> }) {
  const { slugs } = await params;

  if(slugs?.length === 2) {
    return <div>
        viewing docs for feature {slugs[0]} and subfeature {slugs[1]}
    </div>
  }
  else if(slugs?.length === 1) {
    return <div>
        viewing docs for feature {slugs[0]}
    </div>
  }
  else {
    return <div>
        viewing docs for root
    </div>
  }
}