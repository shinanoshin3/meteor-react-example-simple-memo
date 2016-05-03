import React from 'react';
import MemoItem from './MemoItem';

export default class MemoList extends React.Component {
  render() {
    const { memos } = this.props;
    return (
      <div className="memo-list">
        {memos.map(memo => (
          <MemoItem key={memo._id} memo={memo} />
        ))}
      </div>
    );
  }
}

MemoList.propTypes = {
  memos: React.PropTypes.array.isRequired,
};