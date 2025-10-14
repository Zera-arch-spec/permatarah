const taxRate = 0.1; // 10% tax
const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

function calculateTotal() {
  const ruby = 20000000 * Number(document.getElementById('ruby').value);
  const sapphire = 25000000 * Number(document.getElementById('sapphire').value);
  const emerald = 30000000 * Number(document.getElementById('emerald').value);
  const diamond = 75000000 * Number(document.getElementById('diamond').value);
  const moonstone = 450000 * Number(document.getElementById('moonstone').value);

  const subtotal = ruby + sapphire + emerald + diamond + moonstone;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  document.getElementById('result').innerHTML = `
    <h3>Subtotal: ${formatCurrency(subtotal)}</h3>
    <h3>Tax (10%): ${formatCurrency(tax)}</h3>
    <h2>Total: ${formatCurrency(total)}</h2>
    <small>*Prices include 10% sales tax.</small>
  `;
}