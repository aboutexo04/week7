
import { useState } from "react";

const steps = [
  {
    title: "Week 4 - Driving Car Game",
    description: "Welcome to today's Scratch lesson! We're going to build a fun driving game together. Get ready!",
    image: "images/title-page.png"
  },
  {
    title: "Seating Chart",
    description: "Please check your seat and make sure you're in the right place. We'll start soon!",
    image: "images/seating-chart.png"
  },
  {
    title: "Step 1: Open Scratch",
    description: "Go to the Scratch website (https://scratch.mit.edu) and click 'Create' to start a new project.",
    image: "images/step1.png"
  },
  {
    title: "Step 2: Upload Project Assets",
    description: "All sprites and backdrops are provided. Click the 'File' menu, choose 'Load from your computer', and upload the provided .sb3 file.",
    image: "images/step2.png"
  },
  {
    title: "Step 3: Understand the Car Sprite",
    description: "Look at the code blocks in the car sprite. Try to understand how the car moves using arrow keys.",
    image: "images/step3.png"
  },
  {
    title: "Step 4: Explore the Obstacle Sprite",
    description: "Click on the 'Obstacle' sprite. Observe how it interacts with the car.",
    image: "images/step4.png"
  },
  {
    title: "Step 5: Detect Collision",
    description: "Check how the car sprite uses 'if touching Obstacle' blocks to detect collisions.",
    image: "images/step5.png"
  },
  {
    title: "Step 6: Explore Backdrops",
    description: "Look at the different backdrops for each level and find the code that switches them.",
    image: "images/step6.png"
  },
  {
    title: "Step 7: Test Your Game",
    description: "Click the green flag and test your driving game. Make sure the car moves, avoids obstacles, and the backdrops switch properly.",
    image: "images/step7.png"
  }
];

export default function ScratchGameTutorial() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  return (
    <div style={styles.container}>
      <div style={styles.progressBarWrapper}>
        <div style={{ ...styles.progressBar, width: `${((stepIndex + 1) / steps.length) * 100}%` }} />
      </div>
      <div style={styles.card}>
        <h2 style={styles.title}>{step.title}</h2>
        <p style={styles.description}>{step.description}</p>
        {step.image && (
          <div style={{ marginBottom: '1.5rem' }}>
            <img
  src={`${import.meta.env.BASE_URL}${step.image}`}
  alt={step.title}
/>
          </div>
        )}
        <div style={styles.buttonRow}>
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            disabled={stepIndex === 0}
            style={{ ...styles.button, ...(stepIndex === 0 ? styles.disabledButton : {}) }}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={stepIndex === steps.length - 1}
            style={{ ...styles.button, ...(stepIndex === steps.length - 1 ? styles.disabledButton : {}) }}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarWrapper: {
    height: "10px",
    width: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1e88e5",
    transition: "width 0.3s ease"
  },
  container: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    padding: "1rem",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f0f8ff",
    borderRadius: "24px",
    border: "2px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: "1rem"
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    cursor: "pointer"
  },
  disabledButton: {
    backgroundColor: "#bbdefb",
    cursor: "not-allowed"
  }
};
