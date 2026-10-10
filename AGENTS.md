<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the tourism homepage at `/`, composed of focused reusable React components; preserve TanStack routing to avoid duplicate home routes.
- Keep destination facts, season ranges, photo credits and official resource URLs in one browser-safe data module so search, filters, details and trip planning use the same facts.
- The trip planner produces an in-session, downloadable planning brief only, not reservations or persistent bookings; no backend is needed for this local utility.
- Magnifier geometry uses refs and animation frames with ResizeObserver; dynamic coordinates stay separate from the semantic CSS design system to avoid render churn.
