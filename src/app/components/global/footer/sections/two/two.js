import Link from "next/link";

// Quick Links
const quickLinks = [
   {
      text: "Home",
      url: "#",
   },
   {
      text: "About",
      url: "#",
   },
   {
      text: "Yachts",
      url: "#",
   },
   {
      text: "Destinations",
      url: "#",
   },
   {
      text: "Water Sports",
      url: "#",
   },
   {
      text: "Blog",
      url: "#",
   },
];

const FooterSectionTwo = () => {
   return (
      <div className="md:w-2/6">
         <div className="md:w-2/4 mx-auto">
            <h2 className="text-2xl font-bold text-white">Quick Links</h2>
            <ul className="flex flex-col gap-y-1 text-white mt-4">
               {quickLinks.map((item, index) => (
                  <li key={index}>
                     <Link
                        className="hover:text-primary transition-all"
                        href={item.url}>
                        {item.text}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default FooterSectionTwo;
