# Flash Connect App - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern collaboration platforms like Linear, Notion, and Slack, with emphasis on clean interfaces that balance functionality with visual appeal.

## Core Design Elements

### Color Palette
**Dark Mode Primary**: Rich dark backgrounds (220 15% 8%) with lighter surface colors (220 20% 14%)
**Light Mode Primary**: Clean whites and light grays (0 0% 98%, 220 10% 95%)
**Brand Colors**: Professional blue (217 91% 60%) for primary actions and highlights
**Accent Colors**: Subtle green (142 76% 36%) for success states and notifications
**Text Colors**: High contrast dark (220 15% 25%) and light (220 10% 98%) variants

### Typography
**Primary Font**: Inter via Google Fonts for exceptional readability
**Hierarchy**: 
- Headers: font-semibold (600 weight)
- Body text: font-normal (400 weight) 
- UI labels: font-medium (500 weight)
**Sizes**: Consistent scale using text-sm, text-base, text-lg, text-xl, text-2xl

### Layout System
**Spacing Units**: Primarily p-4, m-6, gap-8 with occasional p-2 for tight spacing
**Grid System**: CSS Grid for main layouts, Flexbox for component arrangement
**Containers**: max-w-7xl for main content areas, max-w-md for forms and modals

### Component Library

**Navigation**: 
- Clean sidebar with collapsible sections
- Breadcrumb navigation for deep hierarchy
- Tab navigation for content switching

**Messaging Interface**:
- Chat bubbles with subtle shadows and rounded corners
- Timestamp positioning adjacent to messages
- Typing indicators and online status badges

**Forms & Inputs**:
- Consistent input styling with focus states
- Form validation with inline error messages
- File upload areas with drag-and-drop visual feedback

**Data Displays**:
- Card-based layouts for posts and content
- Clean table styling for user management
- Minimal dividers using border colors

**Overlays**:
- Modal dialogs with backdrop blur
- Toast notifications positioned top-right
- Dropdown menus with subtle shadows

### Interactive Elements
**Buttons**: 
- Primary: Solid blue backgrounds
- Secondary: Outline styling with hover states
- Ghost: Minimal styling for secondary actions

**States**:
- Hover: Subtle color shifts and scale transforms
- Focus: Clear outline indicators for accessibility
- Loading: Skeleton states and spinners
- Empty states: Helpful illustrations and clear messaging

### Visual Hierarchy
- Clear content separation using whitespace
- Subtle shadows for depth (shadow-sm, shadow-md)
- Consistent border radius (rounded-lg, rounded-xl)
- Strategic use of color to guide attention

### Responsive Behavior
- Mobile-first approach with breakpoint considerations
- Collapsible sidebar for smaller screens
- Touch-friendly interactive elements (min 44px)
- Readable font sizes across all devices

This design system emphasizes clarity, consistency, and professional polish while maintaining the collaborative feel essential for team-based applications.