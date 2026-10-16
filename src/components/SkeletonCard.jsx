import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden p-4 border border-[#C9A66B]/15 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full aspect-[4/5] bg-surface-elevated rounded-xl relative overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
      </div>

      {/* Brand Skeleton */}
      <div className="h-3 w-1/3 bg-surface-elevated rounded mb-2" />

      {/* Title Skeleton */}
      <div className="h-5 w-3/4 bg-surface-elevated rounded mb-3" />

      {/* Specs / Tags Skeleton */}
      <div className="flex gap-2 mb-3">
        <div className="h-4 w-12 bg-surface-elevated rounded" />
        <div className="h-4 w-16 bg-surface-elevated rounded" />
      </div>

      {/* Price & Button Skeleton */}
      <div className="pt-3 border-t border-luxury-border flex items-center justify-between">
        <div className="h-6 w-24 bg-surface-elevated rounded" />
        <div className="h-9 w-9 bg-surface-elevated rounded-full" />
      </div>
    </div>
  );
}
