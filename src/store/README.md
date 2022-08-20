# State Management and Default Values

## The Global Context
AppContext contains information and functions to distribute data throughout the application. Though context makes components less reusable in other circumstances -like when the expected context isn't or shouldn't be available- they prove to be very useful in making data available to sibling components while eliminating prop drilling.

Immutable, default information, such as the social network library and the mocked payload, are kept in separate files and equally added to the context. Updates to localstorage are plausibly kept inside state-changing context functions as well, for this allows quicker on-spot updates.

It is arguable that more contexts could be created as the project grows in order to make component updates faster and uncoupled. This has to be done carefully though, establishing clear scope divisions between components.

## How Overlay Works
It is not uncommon to see overlay errors in applications -like when multiple overlays are shown, adding to the opacity and making the app darker and darker in the background.
To avoid multiple overlay generation, or deactivation of overlay when another pop-up or modal is using it, overlay is rendered only once and its state is a number which means 0 for hidden and 1 or more for visible.
Modals/pop-ups using the single overlay will add 1 to the state, and remove 1 when they are done. This way, if a modal is still using the overlay, the state won't reach 0.