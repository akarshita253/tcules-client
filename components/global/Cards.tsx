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
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="p-0 relative h-48">
        {imageUrl?.url && <Image
          src={imageUrl?.url}
          alt={imageUrl?.alternativeText||'image'}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 640px"
          priority={false} 
        />}
      </CardHeader>
      <CardContent className="p-6 space-y-3">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{formatDate(createdAt)}</p>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
}