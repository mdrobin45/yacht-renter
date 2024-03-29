import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";
import Container from "../container/container";
import logoDark from "/public/images/logo-dark.svg";

const Header = () => {
   return (
      <section className="border-b hidden">
         <Container className="border">
            <div className="flex py-6 items-center justify-between">
               <div>
                  <Image width={200} height={300} src={logoDark} alt="Logo" />
               </div>
               <div className="border rounded-full p-4">
                  <nav className="flex gap-x-6 items-center">
                     <NavLink href="#">Home</NavLink>
                     <NavLink href="#">About</NavLink>
                     <NavLink href="#">Services</NavLink>
                     <NavLink href="#">Yachts</NavLink>
                  </nav>
               </div>
               <div>
                  <Button href="#">Discover Now</Button>
               </div>
            </div>
         </Container>
      </section>
   );
};

// NavLink component
const NavLink = ({ children, href }) => {
   return (
      <Link className="hover:text-primary transition-all" href={href}>
         {children}
      </Link>
   );
};

export default Header;
