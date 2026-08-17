# Review & Fix Plan — Latest "What We Handle" + Enquiry Form Updates

## Context

The previous turn added two features:
1. "What We Handle" cards converted to `<button>` elements that set `selectedType` state and smooth-scroll to `#enquiry`
2. A property-type pill-selector row added inside the enquiry form, driven by the same `selectedType`

A code review surfaced 6 issues — none break the build today, but two are correctness bugs and two are accessibility failures.

---

## Issues to Fix (ranked)

### 1. Unsafe TypeScript cast (correctness)
**Location:** `src/App.tsx` line ~373 — `p.title as PropertyLabel`

`propertyTypes` array and `PROPERTY_LABELS` tuple are declared independently. The cast hides drift between them.

**Fix:** Type the `propertyTypes` array explicitly:
```ts
const propertyTypes: Array<{ art: React.ReactNode; title: PropertyLabel; note: string; tile: string }> = [ … ]
```
Remove the `as PropertyLabel` cast from `onClick`.

---

### 2. `selectedType` not included in form submission (correctness)
**Location:** `handleSubmit` + form in `src/App.tsx`

`selectedType` is never read when the form submits — it will be silently dropped when a real backend is wired.

**Fix:** Add a hidden input inside the form:
```tsx
<input type="hidden" name="propertyType" value={selectedType ?? ''} />
```

---

### 3. `selectedType` not reset on submit (state leak)
**Location:** `handleSubmit` in `src/App.tsx`

After submission, old selection bleeds if the form is re-shown.

**Fix:** Add `setSelectedType(null)` inside `handleSubmit`.

---

### 4. Missing `aria-pressed` on toggle buttons (accessibility)
**Location:** Property-type card buttons (~line 370) + pill buttons in form (~line 437)

Neither set announces selected/not-selected state to screen readers.

**Fix:**
- Card buttons: `aria-pressed={selectedType === p.title}`
- Pill buttons: `aria-pressed={active}`

---

### 5. No `focus-visible` ring on buttons (accessibility)
**Location:** Both button sets

Keyboard users get no visible focus indicator (fails WCAG 2.1 SC 2.4.7).

**Fix:** Add `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest` to both button `className` strings.

---

### 6. No selected-state styling on "What We Handle" cards (UX)
**Location:** Card buttons in `src/App.tsx` ~line 360

When a user scrolls back up after clicking a card, no visual shows which type they chose.

**Fix:** Add a conditional ring overlay when `selectedType === p.title`:
```tsx
className={`… ${selectedType === p.title ? 'ring-2 ring-inset ring-forest' : ''}`}
```

---

## Files to Modify

- `src/App.tsx` — all fixes above, single file

## Verification

1. Click each "What We Handle" card → matching pill in form should be pre-selected, ring appears on clicked card
2. Click a pill in the form → it toggles; clicking the same pill again deselects it
3. Tab through the page → card buttons and pill buttons should show a clear focus ring
4. Submit the form → `selectedType` resets, success message shown
5. Run `npx tsc --noEmit` → zero errors
