import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };

    this.handleRetry = this.handleRetry.bind(this);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary menangkap error:", error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.hasError &&
      prevProps.resetKey !== this.props.resetKey
    ) {
      this.setState({
        hasError: false,
        error: null,
      });
    }
  }

  handleRetry() {
    this.setState({
      hasError: false,
      error: null,
    });

    if (this.props.onRetry) {
      this.props.onRetry();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>⚠️ Terjadi Kesalahan pada UI</h2>
          <p>
            Komponen gagal ditampilkan. Silakan klik tombol di bawah untuk
            mencoba render ulang.
          </p>

          <pre>
            {this.state.error ? this.state.error.toString() : "Unknown error"}
          </pre>

          <button className="btn danger" onClick={this.handleRetry}>
            Coba Lagi
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;