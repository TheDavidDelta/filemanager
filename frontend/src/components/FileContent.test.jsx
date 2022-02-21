import { render, screen } from '../tests/test-utils';
import FileContent from './FileContent';
import { results } from "mocks/files.json";

describe('FileContent Component', () => {
  it('should render empty', () => {
    render(<FileContent />);
    const content = screen.getByTestId("content");
    expect(content).toHaveTextContent("");
  });

  it('should render file contents', () => {
    const file = results[1];
    render(<FileContent file={file} />);
    const content = screen.getByTestId("content");
    expect(content).toHaveTextContent(atob(file.content), { normalizeWhitespace: false });
  });
});
