const addListenerToHitSearchButtonWithEnter = (): void => {
  // Get the input field
  const input = document.getElementById('input-text');
  if (input) {
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener('keyup', function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        const button = document.getElementById('search-button');

        return button && button.click();
      }
    });
  }
};

export default addListenerToHitSearchButtonWithEnter;
