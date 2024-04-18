function ErrorPage() {
  return (
    <div>
      <div className="error-text">
        <h1 className="error-code">404</h1>
        <p className="error-text-item">Error Sever</p>
        <p className="error-text-item type-error-small">"Sorry. Please try again."</p>
      </div>
      <img src="src/assets/error-img.png" alt="에러 이미지" />
    </div>
  );
}

export default ErrorPage;
