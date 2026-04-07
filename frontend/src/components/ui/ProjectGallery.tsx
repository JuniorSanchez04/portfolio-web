'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/types';

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((image) => (
        <figure key={image.src} className="space-y-2">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-800">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          {image.caption && (
            <figcaption className="text-xs text-neutral-500 text-center">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
