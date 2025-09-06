import { AMENITIES_WITH_ID } from "@/constants/index";

type GroupedAmenity = {
    id: number;
    name: string;
    items: string[];
};

/**
 * Groups amenities into categories defined in AMENITIES_WITH_ID.
 * Accepts API response format: [{ name: string, sub_amenities: string[] }]
 * Any amenity not found in constants will be grouped under "Other".
 */
export function groupAmenities(
    raw: { name: string; sub_amenities: string[] }[] = []
): GroupedAmenity[] {
    const lookup = new Map<string, number>();

    // Map each amenity string → category id
    AMENITIES_WITH_ID.forEach((cat) =>
        cat.items.forEach((item) => lookup.set(item, cat.id))
    );

    const buckets = new Map<number | "other", string[]>();

    // Flatten API response & bucket amenities
    raw.forEach((cat) => {
        cat.sub_amenities.forEach((amenity) => {
            const catId = lookup.get(amenity) ?? "other"; // fallback
            const arr = buckets.get(catId) ?? [];
            arr.push(amenity);
            buckets.set(catId, arr);
        });
    });

    // Build grouped response from known categories
    const grouped: GroupedAmenity[] = AMENITIES_WITH_ID.filter((cat) =>
        buckets.has(cat.id)
    ).map((cat) => ({
        id: cat.id,
        name: cat.name,
        items: buckets.get(cat.id)!,
    }));

    // Add "Other" category if needed
    if (buckets.has("other")) {
        grouped.push({
            id: 999, // arbitrary id for "Other"
            name: "Other",
            items: buckets.get("other")!,
        });
    }

    return grouped;
}
