export function readFavorites(storage: Pick<Storage, "getItem">): number[] {
  try {
    const value: unknown = JSON.parse(storage.getItem("favorites") ?? "[]");
    return Array.isArray(value)
      ? value.filter((id): id is number => Number.isSafeInteger(id) && id > 0)
      : [];
  } catch {
    return [];
  }
}

export function toggleFavoriteId(favorites: number[], id: number): number[] {
  return favorites.includes(id)
    ? favorites.filter((favoriteId) => favoriteId !== id)
    : [...favorites, id];
}

export function saveFavorites(storage: Pick<Storage, "setItem">, favorites: number[]) {
  storage.setItem("favorites", JSON.stringify(favorites));
}
