import React, { Component } from "react";
import styles from "./Score.module.css";

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
	<div>
		<h2 className={styles.topTitle}>Thankyou for participating..!!</h2>
      <div className={styles.scorePage}>
        <div className={styles.scoreContainer}>
          <h2 className={styles.resultTitle}>RESULTS</h2>
          <h4 className={styles.scoreText}>Your Score: {score}/5</h4>
        </div>
      </div>
	</div>  
    );
  }
}

export default Score;
