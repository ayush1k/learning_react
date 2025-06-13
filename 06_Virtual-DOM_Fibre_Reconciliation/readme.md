link to the repo https://github.com/acdlite/react-fiber-architecture



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9. In UI it is not necessary for every update to be applied immediately. 


-- the explanation from ChatGPT --

🔹 1. createRoot and DOM updates
“createRoot creates its own DOM and compares it with the browser's DOM to update only the changed parts.”

✅ Simple explanation:
React creates its own version of the page (Virtual DOM), checks what has changed, and only updates that small part in the real browser page. This makes React fast.

🔹 2. Full browser reload
“Browser removes and recreates the whole DOM on reload.”

✅ Simple explanation:
When you refresh a page manually (like pressing F5), the browser removes everything and builds it all again. That takes more time.

🔹 3. Virtual DOM and efficiency
“Virtual DOM tracks the entire page as a tree and updates only changed parts.”

✅ Simple explanation:
React watches the structure of your webpage like a tree. If a small leaf (like a button or text) changes, it updates only that leaf, not the whole tree. Much faster!

🔹 4. Delayed updates due to network
“Some updates depend on network calls.”

✅ Simple explanation:
If you click a button that fetches data from the internet, the result takes time. React waits for the response before updating the screen.

🔹 5. Dropping unnecessary updates
“We can skip updates if new data is coming immediately.”

✅ Simple explanation:
If you're getting new data soon (like from an API), it’s smarter to not update immediately. React can wait and update just once — saves time and power.

🔹 6. React Fiber algorithm
“React Fiber is the algorithm React currently uses.”

✅ Simple explanation:
Fiber is React’s smart brain. It decides how and when to update the screen in a way that feels smooth and fast — even on slow devices.

🔹 7. What is Reconciliation?
“React compares browser DOM and its own DOM using reconciliation.”

✅ Simple explanation:
Reconciliation is the process where React compares what it thinks the page should look like (Virtual DOM) with what’s actually showing in the browser. It then updates only the changes.

🔹 8. Reconciliation = Virtual DOM concept
“Reconciliation is the algorithm behind the virtual DOM.”

✅ Simple explanation:
Yes — Virtual DOM is just the idea, but Reconciliation is how React makes it work. It’s the behind-the-scenes worker.

🔹 9. Not every UI update needs to happen instantly
“In UI, not every change needs to show up immediately.”

✅ Simple explanation:
React is smart. If something changes in your app, it doesn’t always rush to show it. It may wait, finish important work, then update — for better performance.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.-----Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." -----
The key points are:
In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.----


We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed



explanation from ChatGPT

✅ What is Reconciliation?
"The algorithm React uses to diff one tree with another to determine which parts need to be changed."

🟢 React compares two versions of the UI (Virtual DOM trees) and finds what actually changed, then updates only that part in the real DOM.

✅ Reconciliation = Virtual DOM
"Reconciliation is the algorithm behind what is popularly understood as the virtual DOM."

🟢 The Virtual DOM is the concept, and Reconciliation is the logic that makes it work efficiently.

✅ Why not update everything immediately?
"In a UI, it's not necessary for every update to be applied immediately..."

🟢 Updating the screen instantly for every small change can make the app slow and laggy. It's better to group and schedule updates smartly.

✅ Not all updates are equal
"Different types of updates have different priorities..."

🟢 Some updates are urgent (like animations), some are low priority (like showing fetched data). React handles urgent tasks first.

✅ Push vs Pull
"A push-based approach... A pull-based approach..."

🟢 In the push model, you (the developer) manage when things update.
🟢 In the pull model, React decides the best time to update — making it easier and smarter.

✅ Why React Fiber?
"Fiber allows React to take advantage of scheduling..."

🟢 The Fiber algorithm helps React:

⏸ Pause work and resume it later

⏫ Prioritize important tasks (like animations)

🔁 Reuse completed work instead of doing it again

❌ Cancel work if it's no longer needed

----------------------------------------------------------------------