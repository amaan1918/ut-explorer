import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ImageMagnifier } from "@/components/ImageMagnifier";

afterEach(() => vi.unstubAllGlobals());
describe("ImageMagnifier", () => {
  it("recognizes images loaded before hydration and supports keyboard close", async () => {
    vi.stubGlobal("ResizeObserver", class { observe() {} disconnect() {} });
    const naturalWidth = vi.spyOn(HTMLImageElement.prototype, "naturalWidth", "get").mockReturnValue(1600);
    const complete = vi.spyOn(HTMLImageElement.prototype, "complete", "get").mockReturnValue(true);
    render(<ImageMagnifier src="/photo.jpg" alt="An Indian destination" />);
    await waitFor(() => expect(screen.queryByText("Loading destination photograph…")).not.toBeInTheDocument());
    const imageControl = screen.getByRole("button", { name: /Magnify An Indian destination/ });
    fireEvent.keyDown(imageControl, { key: "Enter" });
    expect(imageControl).toHaveAttribute("aria-pressed", "true");
    fireEvent.keyDown(imageControl, { key: "Escape" });
    expect(imageControl).toHaveAttribute("aria-pressed", "false");
    naturalWidth.mockRestore(); complete.mockRestore();
  });
});