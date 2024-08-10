import React, { Component } from "react";
import Options from "./Option";
import styles from "./Question.module.css";

class Question extends Component {
  render() {
    const { question, selectedOption, onOptionChange, onSubmit } = this.props;

    return (
      <div className={styles.questionPage}>
        <div className={styles.questionContainer}>
          <h3 className={styles.questionTitle}>QUESTION {question.id}</h3>
          <div className={styles.questionContent}>
            <h5 className={styles.questionText}>{question.question}</h5>
            <form onSubmit={onSubmit} className={styles.form}>
              <Options
                options={question.options}
                selectedOption={selectedOption}
                onOptionChange={onOptionChange}
              />
              <button
                type="submit"
                className={styles.submitButton}
                disabled={!selectedOption}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
