# DIFF(design, implementation)

Design annotation: matters that would be brought to the team for discussion. A constructive, critical look interfacing art and programmable functionality

## 1. Toggle button

As per iOS/OSX, Material Design, and others, activated-state toggles should have their pins painted to the right side. UX-wise, a transition "from 0 to 1" following the reading direction makes a more natural sense.
It does change color on hover tho.

## 2. Card order

In mobile previews, the order of social media is somewhat shuffled. Instead of trying to preserve ordering of social networks, Drag and Drop functionality could be added to the Overview panel (see README from `src/components`).
Though reordering would become manual for potentially many cards, this would allow for greater flexibility e.g. when a user wants to focus on profile growth for a particular social network or interaction, they could drag up that single card.
