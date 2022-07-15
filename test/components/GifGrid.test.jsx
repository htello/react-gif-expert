import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid/>", () => {
  const category = "One Punch";
  test("debe mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando ..."));
    expect(screen.getByText(category));
    screen.debug();
  });
  test("debe cargar items cuando se cargan las imágenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "asdf",
        title: "titulo",
        url: "https://ruta1.jpg",
      },
      {
        id: "asdfw",
        title: "titulo2",
        url: "https://ruta2.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    screen.debug();
  });
});
