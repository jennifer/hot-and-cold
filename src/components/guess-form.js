import React from 'react';



export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type='number'
          min='1'
          max='100'
          ref={input => (this.input = input)}
          required
        />
        <button 
          type='submit'
          name='submit'
        >
          Guess
        </button>
      </form>
    );
  }
}
