import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("pruebas en <GifItem>", () => {
  const title = "este es el título";
  const url =
    "https://static.wikia.nocookie.net/marvelcomicsenciclopedia/images/c/c4/La_cosa.jpg/revision/latest?cb=20120605191426";
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el url indicado y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(src);
    expect(alt).toBe(alt);
  });

  test("debe mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
