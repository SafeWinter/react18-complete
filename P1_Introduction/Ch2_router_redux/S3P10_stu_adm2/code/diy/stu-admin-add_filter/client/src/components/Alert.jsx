export default function Alert({ type, content }) {
  return (
    // <div className="alert alert-warning alert-dismissible" role="alert">
    <div className={`alert alert-dismissible alert-${type}`} role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>提示</strong> {content}
    </div>
  );
}
