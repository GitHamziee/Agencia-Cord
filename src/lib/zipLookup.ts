export type ZipGeo = {
  zip: string;
  city: string;
  citySlug: string;
  stateCode: string;
  stateName: string;
  stateSlug: string;
};

function citySlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function stateSlug(stateName: string): string {
  return stateName.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export async function lookupZip(zip: string): Promise<ZipGeo | null> {
  if (!/^\d{5}$/.test(zip)) return null;

  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`, {
      next: { revalidate: 60 * 60 * 24 * 30 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      "post code": string;
      places?: Array<{
        "place name": string;
        state: string;
        "state abbreviation": string;
      }>;
    };
    const place = data.places?.[0];
    if (!place) return null;
    return {
      zip: data["post code"],
      city: place["place name"],
      citySlug: citySlug(place["place name"]),
      stateCode: place["state abbreviation"],
      stateName: place.state,
      stateSlug: stateSlug(place.state),
    };
  } catch {
    return null;
  }
}
