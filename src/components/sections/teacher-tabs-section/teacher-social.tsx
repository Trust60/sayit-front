import Link from "next/link";
import {
  Linkedin,
  Youtube,
  Instagram,
  Music,
  Twitter,
  Facebook,
} from "lucide-react";

interface SocialLinks {
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  facebook?: string;
}

export default function TeacherSocial({ social }: { social: SocialLinks }) {
  const socialNetworks = [
    {
      key: "youtube" as keyof SocialLinks,
      icon: Youtube,
      label: "YouTube",
      className: "bg-red-500 hover:bg-red-600",
    },
    {
      key: "instagram" as keyof SocialLinks,
      icon: Instagram,
      label: "Instagram",
      className:
        "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
    },
    {
      key: "tiktok" as keyof SocialLinks,
      icon: Music,
      label: "TikTok",
      className: "bg-black hover:bg-gray-800",
    },
    {
      key: "linkedin" as keyof SocialLinks,
      icon: Linkedin,
      label: "LinkedIn",
      className: "border border-gray-300",
    },
    {
      key: "twitter" as keyof SocialLinks,
      icon: Twitter,
      label: "Twitter",
      className: "bg-blue-400 hover:bg-blue-500",
    },
    {
      key: "facebook" as keyof SocialLinks,
      icon: Facebook,
      label: "Facebook",
      className: "bg-blue-700 hover:bg-blue-800",
    },
  ];

  const availableNetworks = socialNetworks.filter(
    (network) => social[network.key]
  );

  if (availableNetworks.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        Соціальні мережі не вказані
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {availableNetworks.map((network) => {
        const Icon = network.icon;
        return (
          <Link
            key={network.key}
            href={social[network.key]!}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12 rounded-full flex items-center justify-center
              text-base transition-all duration-200 hover:scale-110
              shadow-lg hover:shadow-xl
              border border-gray-300 bg-card
            "
            title={network.label}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </div>
  );
}
