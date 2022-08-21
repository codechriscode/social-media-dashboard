# Component logic

The "atomic" concept is a tool for those who adopt it to keep composability and reusability in mind.

It is important that atomic is a shared understanding between development and design. When well used, it works as a keeper of brand identity by preventing the excessive creation of atomic components so unique that get used only once.

# Drag and Drop functionality

Considering the simplest possible solution without adding dependencies, a simple HTML5 Draggable API implementation was put in place for the Scoreboard component.

A generalization that could extend the DnD functionality to the Overview panel could be extracted from the Scoreboard component to a wrapper component or a custom hook.

With the option to add a library, the Atlassian-sponsored `react-beautiful-dnd` could be a go-to solution for completeness (though it is no longer maintained!). A simpler, yet thoughtful implementation could be the `react-dnd`.

# Styling

Style is composable whenever possible - for example, with MainCard pseudo-elements that change based on which social network it refers.

Conditional styling is usually done overwriting with inline style, or dynamic class addition in the component prop chaining. Components that should accept custom styling should have that added to their prop typing.

# Helpers

Utility functions should be grouped in a Helper file or folder. They will sometimes do most of the data transforms so their testing should be good.

# Dark mode

Dark mode is based on localStorage value.
A more complete solution with more coloring options could come from a theme context/provider that wraps the application.
A system prefers-color-scheme listener could be setup as well.

# Typing

Most typing is inferred or inlined, with the strongest typing coming from the "API response" `payload.ts` guiding the information flow throughout the system. Inferred `any` is disabled to ensure type safety.

# State

State management would be better done with Context or Redux instead of the current mock imports.
