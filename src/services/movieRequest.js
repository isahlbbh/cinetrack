export function runMovieRequest(request, { onSuccess, onError, onFinish }) {
  let active = true;

  async function load() {
    try {
      const data = await request();
      if (active) onSuccess(data);
    } catch (error) {
      if (active) onError(error);
    } finally {
      if (active) onFinish();
    }
  }

  void load();
  return () => {
    active = false;
  };
}
