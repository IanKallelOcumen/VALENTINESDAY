import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { ValentinePrompt } from "./components/ValentinePrompt";
import { HomePage } from "./components/HomePage";
import { GalleryPage } from "./components/GalleryPage";
import { MemoriesPage } from "./components/MemoriesPage";
import { LoveLetterPage } from "./components/LoveLetterPage";
import { ReasonsPage } from "./components/ReasonsPage";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: ValentinePrompt },
      { path: "home", Component: HomePage },
      { path: "gallery", Component: GalleryPage },
      { path: "memories", Component: MemoriesPage },
      { path: "letter", Component: LoveLetterPage },
      { path: "reasons", Component: ReasonsPage },
      { path: "*", Component: NotFound },
    ],
  },
]);