# Component logic
The "atomic" concept is a tool for those who adopt it to keep composability and reusability in mind.

It is important that atomic is a shared understanding between development and design. When well used, it works as a keeper of brand identity by preventing the excessive creation of atomic components so unique that get used only once.

# Styling
Style is composable whenever possible - for example, with MainCard pseudo-elements that change based on which social network it refers.

There are components that do not change styles, no matter the resolution. These will be marked with attribute "static" and excluded from media queries with `:not()`.

Conditional styling is usually overwritten with inline style, or dynamic class change. Of course, whenever the prop types accept style injection into custom components. They will if they should.

# Helpers

# Dark mode (TODO)
Dark mode listens for system-informed user preference, but is based ONLY on localStorage value. User preference listener only writes on localStorage if it is unset.

# Typing

# State