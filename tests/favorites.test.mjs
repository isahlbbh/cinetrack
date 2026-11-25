import assert from "node:assert/strict";
import test from "node:test";
import { readFavorites, saveFavorites, toggleFavoriteId } from "../src/services/favorites.ts";

test("preserva favoritos entre leituras e persiste a remoção", () => {
  const entries = new Map();
  const storage = {
    getItem: (key) => entries.get(key) ?? null,
    setItem: (key, value) => entries.set(key, value),
  };
  saveFavorites(storage, toggleFavoriteId(readFavorites(storage), 42));
  assert.deepEqual(readFavorites(storage), [42]);
  saveFavorites(storage, toggleFavoriteId(readFavorites(storage), 42));
  assert.deepEqual(readFavorites(storage), []);
});

test("carrega IDs válidos e aceita dados recuperáveis do navegador", () => {
  assert.deepEqual(readFavorites({ getItem: () => '[42,null,"18"]' }), [42]);
  for (const saved of [null, "{", "{}"]) {
    assert.deepEqual(readFavorites({ getItem: () => saved }), []);
  }
});
