import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <div className="py-6">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="font-bold text-4xl">Tcules</div>
        <div className="flex gap-8 items-center">
            <ul className="flex gap-8">
                <li>Projects</li>
                <li>Services</li>
                <li>Products</li>
                <li>Industries</li>
                <li>Resources</li>
                <li>About</li>
            </ul>
            <Button>Start your project</Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
