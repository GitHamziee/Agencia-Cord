import { nearestMsa, type MSA } from "@/lib/msas";

export type ZipResolution = {
  zip: string;
  zipCity: string;       // What Zippopotam.us calls the ZIP's city
  zipStateCode: string;  // 2-letter state from the ZIP
  zipLat: number;
  zipLng: number;
  msa: MSA | null;       // Nearest MSA, or null if too far / lookup failed
  distanceMiles: number | null;
  fellBack: boolean;     // True when no MSA within MAX_DISTANCE_MI
};

export const MAX_DISTANCE_MI = 150;

export async function resolveZip(zip: string): Promise<ZipResolution | null> {
  const clean = (zip || "").trim();
  if (!/^\d{5}$/.test(clean)) return null;

  let data: {
    "post code"?: string;
    places?: Array<{
      "place name": string;
      latitude: string;
      longitude: string;
      "state abbreviation": string;
    }>;
  } | null = null;

  try {
    const res = await fetch(`https://api.zippopotam.us/us/${clean}`, {
      next: { revalidate: 60 * 60 * 24 * 30 },
    });
    if (!res.ok) return null;
    data = await res.json();
  } catch {
    return null;
  }

  const place = data?.places?.[0];
  if (!place) return null;

  const zipLat = parseFloat(place.latitude);
  const zipLng = parseFloat(place.longitude);
  if (!isFinite(zipLat) || !isFinite(zipLng)) return null;

  const near = nearestMsa(zipLat, zipLng);
  const fellBack = !near || near.distanceMiles > MAX_DISTANCE_MI;

  return {
    zip: clean,
    zipCity: place["place name"],
    zipStateCode: place["state abbreviation"],
    zipLat,
    zipLng,
    msa: fellBack ? null : near!.msa,
    distanceMiles: near?.distanceMiles ?? null,
    fellBack,
  };
}
