var React = require('react');

var Template = require('./Template');

class Stats extends React.Component {
  render() {
    var template = this.props.template;
    var templateHelpers = this.props.templateHelpers;
    var data = {
      nbHits: this.props.nbHits,
      hasNoResults: this.props.nbHits === 0,
      hasOneResult: this.props.nbHits === 1,
      hasManyResults: this.props.nbHits > 1,
      processingTimeMS: this.props.processingTimeMS,
      query: this.props.query
    };

    return (
      <Template
        data={data}
        template={template}
        templateHelpers={templateHelpers}
      />
    );
  }
}

Stats.propTypes = {
  nbHits: React.PropTypes.number,
  processingTimeMS: React.PropTypes.number,
  template: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.string
  ]).isRequired,
  templateHelpers: React.PropTypes.object,
  query: React.PropTypes.string
};

module.exports = Stats;