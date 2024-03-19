import TestWindow from "./authTest/test";

import HeaderCard from "./components/HeaderCard";
import ResultsCard from "./components/Results";
import FooterCard from "./components/FooterCard";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <HeaderCard />
      <ResultsCard />
      {/* <TestWindow /> */}
      <FooterCard />
    </main>
  );
}
