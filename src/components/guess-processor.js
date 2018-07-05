import React from 'react';

import GuessForm from './guess-form';
import Response from './response';

export default class GuessProcessor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			targetNumber: Math.floor((Math.random() * 100) + 1),
			guessHistory: [],
      response: '',
		}
	}

  makeGuess(guess) {
    const difference = (guess - this.state.targetNumber);
    if (difference === 0) {
      response = 'You guessed it!'
    }
    if (difference <= 10) {
      response = 'Hot'
    }
    if (difference >= 50) {
      response = 'Cold'
    }
    else {
      response = 'Warm'
    }

    this.setResponse({
      response
    })

    this.setGuessHistory({
      guessHistory: [...this.state.guessHistory, guess]
    })

  	render() {
      const { guessHistory, response } = this.state;

      return (
        <main role='main'>
          <GuessSection onMakeGuess={guess=>this.makeGuess(guess)} response={response} />
          <StatusSection guessHistory={guessHistory} />
        </main>
      );
  	}
  }
}