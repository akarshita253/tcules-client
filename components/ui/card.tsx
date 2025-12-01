
import Image from "next/image"
import SampleImage from "@/public/image.png"
import { Button } from "./button"
export default function Card() {
  return (
    <div className="w-full relative">
      <div className="bg-white rounded-lg overflow-hidden dark:bg-gray-950">
      
        <Image src={SampleImage} alt="Product Image" width={600} height={400} className="w-full h-64 object-cover rounded-b-lg" style={{ aspectRatio: "600/400", objectFit: "cover" }}/>
        <div className="py-3">
          <h3 className="text-2xl font-semibold">Do AI Not For AI’s Sake But For Your User: Insights from Eden AI’s CTPO</h3>
          <small className="text-gray-500 dark:text-gray-400">11 Apr 24 . 12mins</small>
        </div>
      </div>
      <Button className="bg-[#C3FAD5] absolute top-4 left-4 cursor-pointer text-[#064E3B] border-2 px-3 py-2 border-[#064E3B] rounded-2xl">BLOG</Button>
    </div>
  )
}