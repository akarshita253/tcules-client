import { Loader } from "@/components/shared/Loader"

const loading = () => {
  return (
    <div  className="w-full h-screen flex items-center justify-center">
      <Loader/>
    </div>
  )
}

export default loading
