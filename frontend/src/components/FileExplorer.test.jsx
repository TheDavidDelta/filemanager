import { render, screen } from '../tests/test-utils';
import FileExplorer from './FileExplorer';
import { FetchingState } from "../store/files";
import { results } from "mocks/files.json";

describe('FileExplorer Component', () => {
  it('should render empty text', () => {
    render(<FileExplorer filesState={{ loading: FetchingState.NONE }} />);
    const emptyText = screen.getByText(/empty/i);
    expect(emptyText).toBeInTheDocument();
  });

  it('should render error text', () => {
    const errorMsg = "Correct render";
    render(<FileExplorer filesState={{ loading: FetchingState.ERROR, errorMsg }} />);
    const errorText = screen.getByText(/error/i);
    expect(errorText).toHaveTextContent(errorMsg);
  });

  it('should render files list', () => {
    const list = [...results];
    render(<FileExplorer filesState={{ loading: FetchingState.SUCCESS, list }} />);
    list.forEach(({ name }) => {
      const item = screen.getByText(name);
      expect(item).toBeInTheDocument();
    });
  });
});
