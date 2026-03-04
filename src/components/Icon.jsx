

export default function Icon({ label, children }) {
  return (
    <a className="social" aria-label={label}>
      {children}
    </a>
  );
}