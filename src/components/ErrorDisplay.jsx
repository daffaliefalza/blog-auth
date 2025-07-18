const ErrorDisplay = ({ error }) => {
  return (
    <div className="error-display">
      <svg className="error-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
        />
      </svg>
      <p>{error}</p>
    </div>
  );
};

export default ErrorDisplay;
