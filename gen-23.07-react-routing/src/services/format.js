export const formatCurrency = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

export const formatDate = (date) => new Date(date).toLocaleDateString("id-ID");
