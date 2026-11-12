export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function filterProviders(providers, category, location) {
  return providers.filter((provider) => {
    const matchesCategory =
      category === "All" || provider.category === category;

    const matchesLocation =
      provider.location.toLowerCase().includes(location.toLowerCase());

    return matchesCategory && matchesLocation;
  });
}
