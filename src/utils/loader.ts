export async function loadModule<T>(moduleName: string): Promise<T> {
  try {
    const module = await import(moduleName);
    return (module.default || module) as T;
  } catch (_error) {
    throw new Error(`Failed to load module: ${moduleName}`);
  }
}
