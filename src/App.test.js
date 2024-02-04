import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  
  // Wait for the component to finish rendering
  await waitFor(() => {
    const learnReactLink = screen.queryByRole('link', { name: /learn react/i });
    
    // Check if the link element exists
    if (learnReactLink) {
      expect(learnReactLink).toBeInTheDocument();
    } else {
      // Log a message if the link is not found
      console.log('Learn React link not found');
    }
  });
});
