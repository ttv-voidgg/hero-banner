import Image from "next/image";
import LetterBoxes from "@/components/letterboxes"

export default function Home() {
  return (
      <div style={{ height: "100vh" }}>
        <LetterBoxes />
      </div>
  );
}
