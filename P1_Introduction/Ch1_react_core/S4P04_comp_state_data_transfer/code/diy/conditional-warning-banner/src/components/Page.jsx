import React from "react";

function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    let { showWarning } = this.state;
    const label = showWarning ? "Hide" : "Show";

    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{label}</button>
      </div>
    );
  }
}
