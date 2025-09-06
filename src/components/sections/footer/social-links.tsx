import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
      <Image
        src="/icons/instagram.svg"
        alt="Instagram"
        width={24}
        height={24}
      />
      <Image src="/icons/linkedIn.svg" alt="Linkedin" width={24} height={24} />
      <Image src="/icons/x.svg" alt="X" width={24} height={24} />
    </div>
  );
}
