import React from 'react';
import Question from "./Question";
import {
  FAMILY_SUBSTANCES,
  PERSONAL_SUBSTANCES,
  DISORDERS } from "./QuestionDefinitions";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'invalid',
      touched: false,
      familySubstances: FAMILY_SUBSTANCES,
      personalSubstances: PERSONAL_SUBSTANCES,
      disorders: DISORDERS
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(questionName, event) {
    let question = this.state[questionName]
    let choiceName = event.target.name
    let choice = question.find( choice => choice.name === choiceName)
    choice.value = !choice.value
    this.setState({[questionName]: question})
  }

  handleSubmit(event) {
    event.preventDefault();

    let { familySubstances, personalSubstances, disorders } = this.state

    if (
      this.isValid(familySubstances) && 
      this.isValid(personalSubstances) && 
      this.isValid(disorders)
    ) {
      this.setState({
        touched: true,
        status: 'valid'
      })
    } else {
      this.setState({
        touched: true
      })
    }
  }

  isValid(question) {
    for (let choice of question) {
      if (choice.value) {
        return true
      }
    }
    return false
  }

  render() {
    const { touched, status, familySubstances, personalSubstances, disorders } = this.state
    console.log(status)

    return (
      <div className="App">
        <header className="App-header">
          Risk Assessment
        </header>
        {/* <div className={`status ${status}`}></div> */}
        {touched && <div className={`status ${status}`}>{
          status === 'valid' ? 'Thank you!' : 'You must select at least one value for each question'}
        </div>}
        <form onSubmit={this.handleSubmit}>
          <Question
            question="Do you have a family history of substance abuse?"
            choices={familySubstances}
            onChange={this.handleChange.bind(this, 'familySubstances')}
          />
          <Question
            question="Do you have a personal history of substance abuse?"
            choices={personalSubstances}
            onChange={this.handleChange.bind(this, 'personalSubstances')}
          />
          <Question
            question="Have you been diagnosed with any of the following Psychological diseases?"
            choices={disorders}
            onChange={this.handleChange.bind(this, 'disorders')}
          />
          <p>
            <button>Next</button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
