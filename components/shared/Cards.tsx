import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  imageUrl: {
    url: string;
    alternativeText: string;
    width?: number;
    height?: number;
  };
  title: string;
  createdAt: string | null;
  description: string;
  altText?: string;
}

export function Cards({ imageUrl, title, createdAt, description }: CardProps) {

  return (
    <Card className="w-full sm:max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
      <CardHeader className="p-0 relative h-64">
        {imageUrl?.url && <Image
          src={imageUrl?.url}
          alt={imageUrl?.alternativeText||'image'}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 640px"
          priority={false} 
        />}
      </CardHeader>
      <CardContent className="px-6 space-y-3">
        <h3 className="text-heading-2xs leading-[120%]">{title}</h3>
        <p className="text-label-md text-neutral-600">{formatDate(createdAt)}</p>
      </CardContent>
    </Card>
  );
}