"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRandom,
  FaPlay,
  FaRedo,
} from "react-icons/fa";
import { kanjiData, KanjiEntry } from "@/data/kanjiData";

// --- Configuration ---
const KANJI_PART_SIZE = 80;
const KANA_PART_SIZE = 71; // All kana fit in one part

const CATEGORIES: Record<string, string[]> = {
  JLPT: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1"],
  RTK: ["5th Edition", "6th Edition"],
  KANA: ["Hiragana", "Katakana"],
};

const ALL_LEVELS = [
  "JLPT N5",
  "JLPT N4",
  "JLPT N3",
  "JLPT N2",
  "JLPT N1",
  "5th Edition",
  "6th Edition",
  "Hiragana",
  "Katakana",
];

const KANJI_DATA_KEYS = [
  "JLPT_N5",
  "JLPT_N4",
  "JLPT_N3",
  "JLPT_N2",
  "JLPT_N1",
  "RTK_5ED",
  "RTK_6ED",
  "KANA_HIRAGANA",
  "KANA_KATAKANA",
];

const FONTS: Record<string, string> = {
  default: "Default",
  mincho: "Mincho",
  gyong: "Yuji Syusyo",
  strokeOrder: "Stroke Order",
};

const MODES = {
  timer: "Timer Mode",
  review: "Review Mode",
};

// --- Main Component ---
const GrindKanjiGrind = () => {
  // Data State
  const [partedKanjis, setPartedKanjis] = useState<string[][][]>(
    Array(ALL_LEVELS.length).fill([])
  );
  const [partedHints, setPartedHints] = useState<string[][][]>(
    Array(ALL_LEVELS.length).fill([])
  );

  // Selection State
  const [selectedCategory, setSelectedCategory] = useState("JLPT");
  const [selectedLevel, setSelectedLevel] = useState(CATEGORIES.JLPT[0]);
  const [selectedPart, setSelectedPart] = useState("Part 1");
  const [parts, setParts] = useState<string[]>([]);
  const [selectedFont, setSelectedFont] = useState("default");
  const [selectedMode, setSelectedMode] = useState("timer");

  // Deck & Display State
  const [currentKanjiList, setCurrentKanjiList] = useState<string[]>([]);
  const [currentHintList, setCurrentHintList] = useState<string[]>([]);
  const [currentHintPos, setCurrentHintPos] = useState(0);

  // Quiz State
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(900);
  const [score, setScore] = useState(0);
  const [quizOrder, setQuizOrder] = useState<number[]>([]);
  const [solvedPositions, setSolvedPositions] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Review Mode State
  const [buttonStates, setButtonStates] = useState<
    Record<number, "default" | "green" | "red">
  >({});

  // --- Utility Functions ---
  const partition = (list: string[], size: number): string[][] => {
    const partitioned: string[][] = [];
    for (let i = 0; i < list.length; i += size) {
      partitioned.push(list.slice(i, i + size));
    }
    return partitioned;
  };

  const calculateParts = (partedList: string[][]): string[] => {
    return Array.from({ length: partedList.length }, (_, i) => `Part ${i + 1}`);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // --- Data Fetching ---
  useEffect(() => {
    const processData = () => {
      setIsLoading(true);
      const allPartedKanjis: string[][][] = [];
      const allPartedHints: string[][][] = [];

      for (let i = 0; i < KANJI_DATA_KEYS.length; i++) {
        const key = KANJI_DATA_KEYS[i];
        try {
          const data: KanjiEntry[] = kanjiData[key as keyof typeof kanjiData];

          // Extract kanji and meanings from data structure
          const kanjis = data.map((item: KanjiEntry) => item.kanji);
          const hints = data.map((item: KanjiEntry) => item.meaning);

          // Use different part sizes for kanji vs kana
          const partSize = key.startsWith("KANA_")
            ? KANA_PART_SIZE
            : KANJI_PART_SIZE;
          allPartedKanjis.push(partition(kanjis, partSize));
          allPartedHints.push(partition(hints, partSize));
        } catch (error) {
          console.error(`Failed to process ${key}:`, error);
          allPartedKanjis.push([]);
          allPartedHints.push([]);
        }
      }
      setPartedKanjis(allPartedKanjis);
      setPartedHints(allPartedHints);
      setIsLoading(false);
    };
    processData();
  }, []);

  // --- Deck Update Logic ---
  const updateDeck = useCallback(
    (level: string, part: string) => {
      const levelIndex = ALL_LEVELS.indexOf(level);
      const partIndex = parseInt(part.replace("Part ", "")) - 1;
      if (partedKanjis[levelIndex] && partedKanjis[levelIndex][partIndex]) {
        const newParts = calculateParts(partedKanjis[levelIndex]);
        setParts(newParts);
        setCurrentKanjiList(partedKanjis[levelIndex][partIndex]);
        setCurrentHintList(partedHints[levelIndex][partIndex]);
        // In review mode, start with no selection (-1 means no kanji selected)
        setCurrentHintPos(selectedMode === "review" ? -1 : 0);
        // Reset button states when deck changes
        setButtonStates({});
      }
    },
    [partedKanjis, partedHints, selectedMode]
  );

  useEffect(() => {
    if (!isLoading) {
      updateDeck(selectedLevel, selectedPart);
    }
  }, [selectedLevel, selectedPart, isLoading, updateDeck]);

  // --- Event Handlers ---
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const newLevel = CATEGORIES[category][0];
    setSelectedLevel(newLevel);
    setSelectedPart("Part 1");
  };
  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setSelectedPart("Part 1");
  };
  const handlePartChange = (part: string) => {
    setSelectedPart(part);
  };
  const handleModeChange = (mode: string) => {
    setSelectedMode(mode);
    if (mode === "review") {
      setIsTimerRunning(false);
      setButtonStates({});
      // Reset hint position to no selection in review mode
      setCurrentHintPos(-1);
    } else {
      // In timer mode, start with first kanji selected
      setCurrentHintPos(0);
    }
  };
  const shuffleDeck = () => {
    const merged = currentKanjiList.map((kanji, i) => [
      kanji,
      currentHintList[i],
    ]);
    merged.sort(() => Math.random() - 0.5);
    setCurrentKanjiList(merged.map((item) => item[0]));
    setCurrentHintList(merged.map((item) => item[1]));
    // Reset button states when shuffling
    setButtonStates({});
  };
  const handleNavArrow = useCallback(
    (direction: number) => {
      // Disable navigation in review mode
      if (selectedMode === "review") return;

      const len = currentHintList.length;
      if (len === 0) return;
      setCurrentHintPos((prev) => {
        let newPos = (prev + direction + len) % len;
        if (isTimerRunning) {
          while (
            solvedPositions.includes(quizOrder[newPos]) &&
            solvedPositions.length < len
          ) {
            newPos = (newPos + direction + len) % len;
          }
        }
        return newPos;
      });
    },
    [
      currentHintList.length,
      isTimerRunning,
      quizOrder,
      solvedPositions,
      selectedMode,
    ]
  );

  const characterButtonClicked = (clickedKanjiIndex: number) => {
    if (selectedMode === "review") {
      // Review mode: cycle through button states and move hint to selected kanji
      setButtonStates((prev) => {
        const currentState = prev[clickedKanjiIndex] || "default";
        let newState: "default" | "green" | "red";

        if (currentState === "default") {
          newState = "green";
        } else if (currentState === "green") {
          newState = "red";
        } else {
          newState = "default";
        }

        return {
          ...prev,
          [clickedKanjiIndex]: newState,
        };
      });
      // Move hint to show the clicked kanji's meaning
      setCurrentHintPos(clickedKanjiIndex);
      return;
    }

    // Timer mode logic (existing)
    if (!isTimerRunning) {
      setCurrentHintPos(clickedKanjiIndex);
      return;
    }
    const correctKanjiIndex = quizOrder[currentHintPos];
    if (solvedPositions.includes(correctKanjiIndex)) return;
    if (correctKanjiIndex === clickedKanjiIndex) {
      setScore((prev) => prev + 1);
      const button = document.getElementById(
        `kanji-button-${clickedKanjiIndex}`
      );
      if (button) {
        button.classList.add("correct");
      }
    }
    const newSolved = [...solvedPositions, correctKanjiIndex];
    setSolvedPositions(newSolved);
    if (newSolved.length === currentHintList.length) {
      setTimeout(() => restartQuiz(), 1000);
    } else {
      handleNavArrow(1);
    }
  };
  const startQuiz = () => {
    setIsTimerRunning(true);
    const newQuizOrder = Array.from(
      { length: currentHintList.length },
      (_, i) => i
    ).sort(() => Math.random() - 0.5);
    setQuizOrder(newQuizOrder);
    setCurrentHintPos(0);
    setScore(0);
    setSolvedPositions([]);
    setTimerValue(900);
    const buttons = document.querySelectorAll(".kanji-button");
    buttons.forEach((button) => {
      button.classList.remove("correct");
    });
  };
  const restartQuiz = () => setIsTimerRunning(false);

  // Calculate review mode score
  const reviewScore = Object.values(buttonStates).filter(
    (state) => state === "green"
  ).length;

  // --- Effects ---
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isTimerRunning && timerValue > 0) {
      interval = setInterval(() => setTimerValue((prev) => prev - 1), 1000);
    } else if (timerValue === 0) {
      restartQuiz();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerValue]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handleNavArrow(-1);
      if (event.key === "ArrowRight") handleNavArrow(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNavArrow]);

  // --- Render ---
  if (isLoading) {
    return <div className="loading-container">Loading Kanji Data...</div>;
  }
  const displayHint = isTimerRunning
    ? currentHintList[quizOrder[currentHintPos]]
    : selectedMode === "review" && currentHintPos === -1
    ? "Click the kanji reveal its meaning"
    : currentHintList[currentHintPos];

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: auto;
          padding: 1rem;
          background-color: #222222;
          color: #ffffff;
          font-family: "Helvetica Neue", Arial, sans-serif;
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
        }
        .header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0rem;
          flex-shrink: 0;
        }
        .controls {
          display: flex;
          gap: 0.2rem;
          flex-wrap: wrap;
          align-items: center;
          flex-grow: 1;
        }
        .quiz-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .select-style {
          background-color: #333;
          color: white;
          border: 1px solid #555;
          padding: 0.3rem 0.3rem;
          border-radius: 5px;
          font-size: clamp(0.8rem, 2vmin, 1rem);
          cursor: pointer;
        }
        .icon-button {
          background: none;
          border: none;
          color: white;
          // font-size: clamp(1rem, 3vmin, 1.5rem);
          padding: 0.5rem;
          line-height: 1;
          border-radius: 5px;
          transition: background-color 0.2s;
        }
        .icon-button:hover:not(:disabled) {
          background-color: #444;
        }
        .timer {
          font-size: clamp(1.7rem, 2.5vmin, 1.25rem);
          font-family: "Courier New", monospace;
          font-weight: bold;
        }
        .score {
          font-size: clamp(1rem, 2vmin, 1rem);
          color: #ccc;
          min-width: 50px;
        }
        .main-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        .main-display {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 0;
          gap: 1rem;
          text-align: center;
          flex-shrink: 0;
        }
        .hint-text {
          font-size: clamp(1.2rem, 3vmin, 1.5rem);
          color: #eee;
          min-height: 3em; /* You can adjust this value */
          font-weight: 500;
          flex-grow: 1;
          display: flex; /* Added for vertical alignment */
          align-items: center; /* Vertically centers the text */
          justify-content: center; /* Horizontally centers the text */
        }
        .grid-wrapper {
          flex-grow: 1;
          min-height: 0;
        }
        .kanji-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(8, 1fr);
          gap: 0.5vmin;
          height: 100%;
        }
        .kanji-button {
          width: 100%;
          height: 100%;
          font-size: 5.5vmin;
          background-color: #2c2c2c;
          border: 1px solid #444;
          color: #ffffff;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.2s, transform 0.2s;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
        }

        .kanji-button:disabled {
          background-color: #ff0000;
          cursor: not-allowed;
          transform: none !important;
        }
        .kanji-button.active {
          background-color: #4a4a5a;
          border-color: #888;
        }
        .kanji-button.correct {
          background-color: #1d8500;
          color: white;
          opacity: 1;
        }

        /* Review mode button states */
        .kanji-button.review-green {
          background-color: #1d8500;
          color: white;
        }
        .kanji-button.review-red {
          background-color: #cc0000;
          color: white;
        }

        /* Font Family Definitions */
        .font-default .kanji-button {
          font-family: sans-serif;
        }
        .font-mincho .kanji-button {
          font-family: "Yu Mincho", "YuMincho", serif;
        }
        .font-gyong .kanji-button {
          font-family: "HKgyong", "Yu Kyokasho", cursive;
        }
        .font-strokeOrder .kanji-button {
          font-family: "KanjiStrokeOrders", sans-serif;
        }

        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 1.5rem;
          color: white;
          background-color: #222;
        }
        @media (orientation: portrait) {
          .kanji-grid {
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(10, 1fr);
          }
        }
      `}</style>

      <div className={`container font-${selectedFont}`}>
        <header className="header">
          <div className="controls">
            <select
              className="select-style"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              disabled={isTimerRunning}
            >
              {Object.keys(CATEGORIES).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="select-style"
              value={selectedLevel}
              onChange={(e) => handleLevelChange(e.target.value)}
              disabled={isTimerRunning}
            >
              {CATEGORIES[selectedCategory].map((level: string) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <select
              className="select-style"
              value={selectedPart}
              onChange={(e) => handlePartChange(e.target.value)}
              disabled={isTimerRunning}
            >
              {parts.map((part) => (
                <option key={part} value={part}>
                  {part}
                </option>
              ))}
            </select>
            {/* New Font Dropdown */}
            <select
              className="select-style"
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
            >
              {Object.entries(FONTS).map(([key, name]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
            <button
              onClick={shuffleDeck}
              className="icon-button"
              title="Shuffle Deck"
              disabled={isTimerRunning}
            >
              <FaRandom />
            </button>
          </div>
          <div className="quiz-controls">
            <select
              className="select-style"
              value={selectedMode}
              onChange={(e) => handleModeChange(e.target.value)}
            >
              {Object.entries(MODES).map(([key, name]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
            <div className="score">
              {selectedMode === "timer" && isTimerRunning
                ? `${score} / ${currentHintList.length}`
                : selectedMode === "review"
                ? `${reviewScore} / ${currentHintList.length}`
                : "- / -"}
            </div>
            {selectedMode === "timer" && (
              <div className="timer">{formatTime(timerValue)}</div>
            )}
            {selectedMode === "timer" && !isTimerRunning ? (
              <button
                onClick={startQuiz}
                className="icon-button"
                title="Start Quiz"
              >
                <FaPlay size="1.5em" />
              </button>
            ) : selectedMode === "timer" && isTimerRunning ? (
              <button
                onClick={restartQuiz}
                className="icon-button"
                title="End Quiz"
              >
                <FaRedo size="1.5em" />
              </button>
            ) : null}
          </div>
        </header>

        <main className="main-content">
          <div className="main-display">
            {selectedMode !== "review" && (
              <button
                onClick={() => handleNavArrow(-1)}
                className="icon-button"
                title="Previous Hint"
              >
                <FaArrowLeft />
              </button>
            )}
            <div className="hint-text">{displayHint || "..."}</div>
            {selectedMode !== "review" && (
              <button
                onClick={() => handleNavArrow(1)}
                className="icon-button"
                title="Next Hint"
              >
                <FaArrowRight />
              </button>
            )}
          </div>
          <div className="grid-wrapper">
            <div className="kanji-grid">
              {currentKanjiList.map((kanji, index) => (
                <button
                  key={index}
                  id={`kanji-button-${index}`}
                  className={`kanji-button ${
                    selectedMode === "timer" &&
                    !isTimerRunning &&
                    currentHintPos === index
                      ? "active"
                      : ""
                  } ${
                    selectedMode === "timer" &&
                    isTimerRunning &&
                    solvedPositions.includes(index)
                      ? "correct"
                      : ""
                  } ${
                    selectedMode === "review" && buttonStates[index] === "green"
                      ? "review-green"
                      : ""
                  } ${
                    selectedMode === "review" && buttonStates[index] === "red"
                      ? "review-red"
                      : ""
                  }`}
                  onClick={() => characterButtonClicked(index)}
                  disabled={
                    selectedMode === "timer" &&
                    isTimerRunning &&
                    solvedPositions.includes(index)
                  }
                >
                  {kanji}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GrindKanjiGrind;
