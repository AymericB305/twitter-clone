export default function (isoString: string) {
  try {
    const date = new Date(isoString);  
    return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
  } catch {
    return ''
  }
}