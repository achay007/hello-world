import { Metadata } from "next"
export const metadata : Metadata = {
  title: 'About Us',
  description: 'This is the about page',
  // other metadata
}
export default function about() {
  return(
    <>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </>
  )
}