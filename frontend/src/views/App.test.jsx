import { render, screen } from '../tests/test-utils';
import App from './App';

describe('App Component', () => {
  it('should contain explorer and content', () => {
    render(<App />);

    const explorer = screen.getByTestId("explorer");
    const content = screen.getByTestId("content");

    expect(explorer).toBeVisible();
    expect(content).toBeVisible();
  });
});
