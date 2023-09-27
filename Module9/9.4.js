function steps(n) {
    for (let i = 1; i <= n; i++) {
      let row = '';
  
      // Generate the '#' characters
      for (let j = 1; j <= i; j++) {
        row += '#';
      }
  
      // Add spaces on the right-hand side if needed
      for (let j = i + 1; j <= n; j++) {
        row += ' ';
      }
  
      console.log(row);
    }
  }
  
  // Test cases
  steps(2);
  steps(3);
  steps(4);