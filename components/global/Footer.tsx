import { Button } from "../ui/button";
import FooterSubstract from "../../public/Subtract.png";
import Podcast from "../../public/podcast.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#04EC50] m-3 rounded-xl pt-[120px] pb-60  relative">
        <div>
          <Image
            src={FooterSubstract}
            alt="Footer Substract"
            className="absolute bottom-0 right-0 "
          />
        </div>
        <footer className="max-w-5xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 flex flex-col gap-8">
              <h2 className="text-3xl">
                Make your product{" "}
                <span className="text-3xl italic">truly stand out</span>
              </h2>

              <Button className="bg-neutral-900 text-neutral-50">
                Connect now
              </Button>
            </div>
            <div className="col-span-2">
              <ul>
                <li className="mb-4 font-semibold">Home</li>
                <li className="mb-2 font-semibold">Case studies</li>
                <li className="mb-2 font-semibold">About us</li>
                <li className="mb-2 font-semibold">Work with us</li>
                <li className="mb-2 font-semibold">Contact us</li>
              </ul>
            </div>
            <div className="col-span-2">
              <ul>
                <li className="mb-4 font-semibold">Service</li>
                <li className="mb-2">Discover</li>
                <li className="mb-2">Design</li>
                <li className="mb-2">Code</li>
                <li className="mb-2">Optimize</li>
              </ul>
            </div>
            <div className="col-span-2">
              <ul>
                <li className="mb-4 font-semibold">Industries</li>
                <li className="mb-2">Saas</li>
                <li className="mb-2">eCommerce</li>
                <li className="mb-2">Fintech</li>
                <li className="mb-2">eLearning</li>
                <li className="mb-2">Webflow</li>
              </ul>
            </div>
            <div className="col-span-2">
              <ul>
                <li className="mb-4 font-semibold">Resources</li>
                <li className="mb-2">Blogs</li>
                <li className="mb-2">Events</li>
                <li className="mb-2">Videos</li>
                <li className="mb-2">Matter design</li>
                <li className="mb-2">System</li>
              </ul>
            </div>
          </div>
          <div className="my-12 flex justify-between items-center gap-8">
            <div>
              <p>Follow us on</p>
              <div className="flex items-center gap-2">
                <span>Twitter</span>
                <span>LinkedIn</span>
                <span>Dribbble</span>
                <span>Instagram</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2.5 flex justify-between items-center gap-8">
              <div>
                <p className="flex gap-2 items-center"><Image src={Podcast}  alt="Podcast" /><span>Beyond Interfaces</span></p>
                <small className="leading-[140%]">A deep dive into the intersection of design, strategy, and product innovation.</small>
              </div>
              <div className="font-medium text-lg">
                SUBSCRIBE
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 flex justify-between items-center pt-2">
            <small>
              614, Silver Radiance 2, Science City Road, Sola, Ahmedabad -
              380060, Gujarat
            </small>
            <div className="flex gap-4">
              <small>Privacy policy</small>
              <small>Terms of use</small>
              <small>@ Tcules 2024</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
