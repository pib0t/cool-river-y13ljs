import "./styles.css";
// Sample JSON design tokens
const designTokens = {
  csds: {
    color: {
      primary: "#ff0000",
      secondary: "#00ff00",
      text: "#000000"
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px"
    },
    font: {
      large: "12px",
      medium: "8px",
      small: {
        std: "6",
        caps: "4"
      }
    }
  }

  // Add more design tokens as needed
};

// Function to convert design tokens to CSS styles using recursion
function convertDesignTokensToStyles(tokens, prefix = "") {
  let styles = "";

  // Iterate over each token category or value
  for (let key in tokens) {
    const value = tokens[key];

    // Check if the current key is a nested category
    if (typeof value === "object") {
      // Recursively call the function for nested categories
      const nestedStyles = convertDesignTokensToStyles(
        value,
        `${prefix}${key}-`
      );
      styles += nestedStyles;
    } else {
      // Generate CSS style based on the token name and value
      const style = `--${prefix}${key}: ${value};\n`;
      styles += style;
    }
  }

  return styles;
}

// Convert design tokens to styles
const cssStyles = convertDesignTokensToStyles(designTokens);

document.getElementById("app").innerHTML = "<pre>" + cssStyles + "</pre>";
