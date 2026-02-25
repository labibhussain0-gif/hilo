import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './sanity.client';

const builder = createImageUrlBuilder(client);

/**
 * Generate optimized image URLs from Sanity image references.
 * Usage: urlFor(source).width(800).height(500).url()
 */
export function urlFor(source) {
    return builder.image(source);
}
