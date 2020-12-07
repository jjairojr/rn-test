export default function currency(value: number) {
  if(value) {
    return `R$ ${value.toFixed(2)}`.replace('.', ',');
  }
  return 'R$ 0,00';
}