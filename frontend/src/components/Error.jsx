const Errors = ({ errors }) => {
  return (
    <div className="errors">
      {errors.map((idx, error) => <div className="error" key={idx}>{error}</div>)}
    </div>
  );
};

export default Errors;