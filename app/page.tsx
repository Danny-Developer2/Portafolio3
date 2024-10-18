import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";


export default function Home() {
  return (
    <main>
      <div className="flex min-h[100vh] max-h[50vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <Introduction/>
       
      </div>
     
      
    </main>
  );
}
