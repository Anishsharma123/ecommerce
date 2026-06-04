import "../../styles/components/sectionTitle.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;