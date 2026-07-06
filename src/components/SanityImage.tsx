import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImageAsset } from "@/sanity/lib/data";

type SanityImageProps = {
  value: SanityImageAsset;
  width?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function SanityImage({
  value,
  width = 1200,
  className,
  priority,
  sizes,
}: SanityImageProps) {
  if (!value?.asset) return null;

  const { width: naturalWidth, height: naturalHeight } = value.asset.metadata.dimensions;
  const height = Math.round(width * (naturalHeight / naturalWidth));

  return (
    <Image
      className={className}
      src={urlFor(value).width(width).height(height).url()}
      alt={value.alt || ""}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      placeholder={value.asset.metadata.lqip ? "blur" : "empty"}
      blurDataURL={value.asset.metadata.lqip}
    />
  );
}
