export default function formatDate(isoString) {
    if (!isoString) return '';

    const date = new Date(isoString);

    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}