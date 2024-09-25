import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="h-16 p-6 border-b-2 flex items-center justify-between backdrop-blur-md">
      <h1 className="font-bold text-xl">Invoice</h1>

      <ul className="flex items-center justify-center gap-6">
        <li>
          <Button variant={"link"} asChild>
            <Link href={"/"}>Home</Link>
          </Button>
        </li>

        <li>
          <Button variant={"link"} asChild>
            <Link
              href={"https://github.com/ypratham/invoice-generator"}
              target="_blank"
            >
              Contribute
            </Link>
          </Button>
        </li>

        <li>
          <Button variant={"outline"} asChild>
            <Link href={"/"}>Sign in</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
