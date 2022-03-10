# DIFF(design, implementation)
Design annotation: matters that would be brought to the team for discussion. A constructive, critical look interfacing art and programmable functionality

## 1. Toggle button
As per iOS/OSX, Material Design, and others, activated-state toggles should have their pins painted to the right side. UX-wise, a transition "from 0 to 1" following the reading direction makes a more natural sense.
It does change color on hover tho.

## 2. Card order
In mobile previews, the order of social media is somewhat shuffled. Code was made to preserve presentation order and visual grouping.